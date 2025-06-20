import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12">
                <img
                  src="/logo_vectorized_no_text.svg"
                  alt="Canalia Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Canalia</h1>
                <p className="text-sm text-secondary">Automatiza la rutina</p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-primary hover:text-secondary transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-8">
              Política de Privacidad
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  1. Información General
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Recopilación de Información
                </h2>
                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Adipiscing elit sed do eiusmod tempor</li>
                  <li>Incididunt ut labore et dolore magna</li>
                  <li>Aliqua ut enim ad minim veniam</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. Uso de la Información
                </h2>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam.
                </p>
                <p>
                  Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Protección de Datos
                </h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi.
                </p>
                <p>
                  Id est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expedita distinctio. Nam libero tempore, cum soluta
                  nobis est eligendi optio cumque nihil impedit quo minus id
                  quod maxime placeat facere possimus.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Derechos del Usuario
                </h2>
                <p>
                  Omnis voluptas assumenda est, omnis dolor repellendus.
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Derechos que incluyen:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Acceso a la información personal</li>
                    <li>Rectificación de datos incorrectos</li>
                    <li>Eliminación de datos personales</li>
                    <li>Limitación del procesamiento</li>
                    <li>Portabilidad de datos</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Cookies y Tecnologías Similares
                </h2>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  7. Contacto
                </h2>
                <p>
                  Si tienes alguna pregunta sobre esta Política de Privacidad,
                  puedes contactarnos en:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> contacto@canaliasolutions.com
                  </p>
                  <p>
                    <strong>Última actualización:</strong> Enero 2024
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" className="btn-primary inline-block">
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
