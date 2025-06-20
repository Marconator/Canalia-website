# Stage 1: clone source and install dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Install git
RUN apk add --no-cache git

# Clone the repository (replace with your own)
ARG GIT_REPO=https://github.com/Marconator/Canalia-website.git
ARG GIT_BRANCH=main

RUN git clone --depth 1 --branch $GIT_BRANCH $GIT_REPO .

# Install dependencies
RUN npm ci

# Stage 2: build the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app .

RUN npm run build

# Stage 3: final image for serving
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
