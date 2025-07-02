"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import { FormField, FormStep } from "../../components/FormField";
import { ProgressIndicator } from "../../components/ProgressIndicator";
import { FormNavigation } from "../../components/FormNavigation";

const stepTitles = [
  "Datos Generales",
  "Tu realidad actual",
  "Cómo trabajas hoy",
  "Nivel técnico y operatividad",
  "Prioridad y etapa del proyecto",
  "Tipo de servicio ideal",
];

export default function FormularioPage() {
  const {
    currentStep,
    formData,
    errors,
    totalSteps,
    updateFormData,
    nextStep,
    previousStep,
    validateCurrentStep,
    resetForm,
  } = useMultiStepForm();

  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (validateCurrentStep()) {
      nextStep();
    }
  };

  const transformFormDataForSubmission = () => {
    // Define option mappings for readable labels
    const optionMappings = {
      businessAreas: {
        "gestion-clientes": "Gestión de clientes",
        contabilidad: "Contabilidad",
        "tareas-internas": "Tareas internas",
        "soporte-cliente": "Soporte al cliente",
        produccion: "Producción",
        ventas: "Ventas",
        otro: "Otro",
      },
      repetitiveTasks: {
        "enviar-correos": "Enviar correos",
        "agendar-citas": "Agendar citas",
        "generar-reportes": "Generar reportes",
        "crear-facturas": "Crear facturas",
        "asignar-tareas": "Asignar tareas",
        otro: "Otro",
      },
      automationGoal: {
        "ahorrar-tiempo": "Ahorrar tiempo",
        "reducir-errores": "Reducir errores",
        "escalar-negocio": "Escalar el negocio",
        "liberar-equipo": "Liberar al equipo para tareas estratégicas",
        "mejorar-experiencia": "Mejorar experiencia del cliente",
        otro: "Otro",
      },
      currentTools: {
        crm: "CRM (Ej: HubSpot, Zoho)",
        erp: "ERP (Ej: SAP, Odoo)",
        "hojas-calculo": "Hojas de cálculo",
        correos: "Correos electrónicos",
        "apps-mensajeria": "Apps de mensajería (Ej: WhatsApp, Slack)",
        otro: "Otro",
      },
      manualTasks: {
        si: "Sí",
        no: "No",
      },
      previousAutomation: {
        "si-funciono": "Sí, lo hemos intentado y funcionó bien",
        "si-no-funciono": "Sí, lo intentamos pero no salió como esperábamos",
        "no-interesados": "No, pero estamos interesados",
        "no-considerado": "No, y no lo habíamos considerado",
        "no-seguro": "No estoy seguro",
      },
      systemIntegrations: {
        "si-api": "Sí, permiten conexiones (API)",
        "si-webhooks": "Sí, envían datos automáticamente (Webhooks)",
        "si-ambos": "Sí, ambas cosas",
        "no-seguro": "No estoy seguro",
        no: "No, no se pueden conectar",
      },
      systemArchitecture: {
        nube: "Por internet (en la nube)",
        local: "Están instalados en computadoras/servidores propios",
        mixto: "Es una mezcla de ambos",
        "no-seguro": "No estoy seguro",
      },
      technicalTeam: {
        desarrolladores: "Sí, hay desarrolladores (programadores)",
        "equipo-ti": "Sí, tenemos equipo de sistemas/TI",
        ambos: "Sí, ambos",
        "ayuda-externa": "Solo tenemos ayuda externa",
        nadie: "No tenemos a nadie técnico",
      },
      securityConcerns: {
        importante: "Sí, es un tema importante para nosotros",
        interesa: "No especialmente, pero nos interesa hacerlo bien",
        "no-preocupa": "No, no es algo que nos preocupe mucho",
        "no-seguro": "No estoy seguro",
      },
      urgency: {
        "muy-urgente": "Muy urgente",
        pronto: "Me gustaría resolverlo pronto",
        "importante-no-urgente": "Es importante, pero no urgente",
        explorando: "Solo estoy explorando",
      },
      projectTimeline: {
        inmediatamente: "Inmediatamente",
        "1-mes": "En el próximo mes",
        "2-3-meses": "En 2-3 meses",
        "6-meses": "En 6 meses",
        explorando: "Solo estoy explorando opciones",
      },
      servicePreference: {
        "configuracion-inicial": "Solo quiero una configuración inicial",
        "soporte-continuo": "Me interesa tener soporte y ajustes continuos",
        mixto: "Quiero una mezcla de ambos",
        "no-claro": "Aún no lo tengo claro",
      },
    };

    // Transform array fields with proper handling of "otro"
    const transformArrayField = (
      fieldName: string,
      values: string[],
      otherValue: string,
    ) => {
      const mappings = optionMappings[fieldName] || {};
      const transformedValues = values.map((value) => mappings[value] || value);

      // If "otro" is selected and there's a custom value, replace "Otro" with the custom text
      if (values.includes("otro") && otherValue.trim()) {
        const otroIndex = transformedValues.findIndex((v) => v === "Otro");
        if (otroIndex !== -1) {
          transformedValues[otroIndex] = `Otro: ${otherValue}`;
        }
      }

      return transformedValues;
    };

    // Transform single value fields with "otro" handling
    const transformSingleField = (
      fieldName: string,
      value: string,
      otherValue: string,
    ) => {
      const mappings = optionMappings[fieldName] || {};
      if (value === "otro" && otherValue.trim()) {
        return `Otro: ${otherValue}`;
      }
      return mappings[value] || value;
    };

    return {
      "Nombre del negocio": formData.businessName,
      "Nombre de contacto": formData.contactName,
      "Correo electrónico": formData.contactEmail,
      "Áreas de negocio que consumen más tiempo": transformArrayField(
        "businessAreas",
        formData.businessAreas,
        formData.businessAreasOther,
      ),
      "Tareas repetitivas frecuentes": transformArrayField(
        "repetitiveTasks",
        formData.repetitiveTasks,
        formData.repetitiveTasksOther,
      ),
      "Objetivos de automatización": transformArrayField(
        "automationGoal",
        formData.automationGoal,
        formData.automationGoalOther,
      ),
      "Herramientas actuales": transformArrayField(
        "currentTools",
        formData.currentTools,
        formData.currentToolsOther,
      ),
      "¿Hay tareas manuales a automatizar?": transformSingleField(
        "manualTasks",
        formData.manualTasks,
        "",
      ),
      "Descripción de tareas manuales":
        formData.manualTasksDescription || "No aplica",
      "Experiencia previa con automatización": transformSingleField(
        "previousAutomation",
        formData.previousAutomation,
        "",
      ),
      "¿Los sistemas pueden conectarse automáticamente?": transformSingleField(
        "systemIntegrations",
        formData.systemIntegrations,
        "",
      ),
      "Arquitectura de sistemas": transformSingleField(
        "systemArchitecture",
        formData.systemArchitecture,
        "",
      ),
      "Equipo técnico disponible": transformSingleField(
        "technicalTeam",
        formData.technicalTeam,
        "",
      ),
      "Preocupaciones de seguridad": transformSingleField(
        "securityConcerns",
        formData.securityConcerns,
        "",
      ),
      "Urgencia del proyecto": transformSingleField(
        "urgency",
        formData.urgency,
        "",
      ),
      "Cuándo iniciar el proyecto": transformSingleField(
        "projectTimeline",
        formData.projectTimeline,
        "",
      ),
      "Preferencia de servicio": transformSingleField(
        "servicePreference",
        formData.servicePreference,
        "",
      ),
      "Comentarios finales":
        formData.finalComments || "Sin comentarios adicionales",
      "Fecha de envío": new Date().toISOString(),
      Fuente: "Formulario del sitio web",
    };
  };

  const handleSubmit = async () => {
    // Honeypot spam protection - if filled, it's likely a bot
    if (honeypot.trim() !== "") {
      return;
    }

    if (!validateCurrentStep()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl =
        process.env.NEXT_PUBLIC_WEBHOOK_URL ||
        "https://n8n.canaliasolutions.com/webhook/05773de6-a2c3-4780-9557-24df73b92628";

      const transformedData = transformFormDataForSubmission();

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Form data submitted successfully:", transformedData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error al enviar el formulario. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <FormStep title="Datos Generales" icon="🏢">
            <FormField
              label="Nombre de su negocio"
              name="businessName"
              value={formData.businessName}
              onChange={(value) =>
                updateFormData({ businessName: value as string })
              }
              error={errors.businessName}
              placeholder="Ej: Empresa ABC S.A."
              required
            />
            <FormField
              label="Nombre de contacto"
              name="contactName"
              value={formData.contactName}
              onChange={(value) =>
                updateFormData({ contactName: value as string })
              }
              error={errors.contactName}
              placeholder="Ej: Juan Pérez"
              required
            />
            <FormField
              label="Correo electrónico de contacto"
              name="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={(value) =>
                updateFormData({ contactEmail: value as string })
              }
              error={errors.contactEmail}
              placeholder="ejemplo@empresa.com"
              required
            />
          </FormStep>
        );

      case 1:
        return (
          <FormStep title="Tu realidad actual" icon="🔍">
            <FormField
              label="¿En qué áreas de tu negocio se invierte más tiempo o recursos actualmente?"
              name="businessAreas"
              type="checkbox"
              value={formData.businessAreas}
              onChange={(value) =>
                updateFormData({ businessAreas: value as string[] })
              }
              error={errors.businessAreas}
              required
              options={[
                { value: "gestion-clientes", label: "Gestión de clientes" },
                { value: "contabilidad", label: "Contabilidad" },
                { value: "tareas-internas", label: "Tareas internas" },
                { value: "soporte-cliente", label: "Soporte al cliente" },
                { value: "produccion", label: "Producción" },
                { value: "ventas", label: "Ventas" },
                { value: "otro", label: "Otro" },
              ]}
            />
            {formData.businessAreas.includes("otro") && (
              <FormField
                label="Otro (especifica)"
                name="businessAreasOther"
                value={formData.businessAreasOther}
                onChange={(value) =>
                  updateFormData({ businessAreasOther: value as string })
                }
                error={errors.businessAreasOther}
                placeholder="Especifica otra área..."
                required
              />
            )}

            <FormField
              label="¿Y dentro de esas áreas, qué tareas repetitivas haces con frecuencia?"
              name="repetitiveTasks"
              type="checkbox"
              value={formData.repetitiveTasks}
              onChange={(value) =>
                updateFormData({ repetitiveTasks: value as string[] })
              }
              error={errors.repetitiveTasks}
              required
              options={[
                { value: "enviar-correos", label: "Enviar correos" },
                { value: "agendar-citas", label: "Agendar citas" },
                { value: "generar-reportes", label: "Generar reportes" },
                { value: "crear-facturas", label: "Crear facturas" },
                { value: "asignar-tareas", label: "Asignar tareas" },
                { value: "otro", label: "Otro" },
              ]}
            />
            {formData.repetitiveTasks.includes("otro") && (
              <FormField
                label="Otro (especifica)"
                name="repetitiveTasksOther"
                value={formData.repetitiveTasksOther}
                onChange={(value) =>
                  updateFormData({ repetitiveTasksOther: value as string })
                }
                error={errors.repetitiveTasksOther}
                placeholder="Especifica otra tarea..."
                required
              />
            )}

            <FormField
              label="¿Qué te gustaría lograr al automatizar estos procesos?"
              name="automationGoal"
              type="checkbox"
              value={formData.automationGoal}
              onChange={(value) =>
                updateFormData({ automationGoal: value as string[] })
              }
              error={errors.automationGoal}
              required
              options={[
                { value: "ahorrar-tiempo", label: "Ahorrar tiempo" },
                { value: "reducir-errores", label: "Reducir errores" },
                { value: "escalar-negocio", label: "Escalar el negocio" },
                {
                  value: "liberar-equipo",
                  label: "Liberar al equipo para tareas estratégicas",
                },
                {
                  value: "mejorar-experiencia",
                  label: "Mejorar experiencia del cliente",
                },
                { value: "otro", label: "Otro" },
              ]}
            />
            {formData.automationGoal.includes("otro") && (
              <FormField
                label="Especifica tu objetivo"
                name="automationGoalOther"
                value={formData.automationGoalOther}
                onChange={(value) =>
                  updateFormData({ automationGoalOther: value as string })
                }
                error={errors.automationGoalOther}
                placeholder="Describe tu objetivo..."
                required
              />
            )}
          </FormStep>
        );

      case 2:
        return (
          <FormStep title="Cómo trabajas hoy" icon="⚙️">
            <FormField
              label="¿Qué herramientas usas actualmente para ejecutar estos procesos?"
              name="currentTools"
              type="checkbox"
              value={formData.currentTools}
              onChange={(value) =>
                updateFormData({ currentTools: value as string[] })
              }
              error={errors.currentTools}
              required
              options={[
                { value: "crm", label: "CRM (Ej: HubSpot, Zoho)" },
                { value: "erp", label: "ERP (Ej: SAP, Odoo)" },
                { value: "hojas-calculo", label: "Hojas de cálculo" },
                { value: "correos", label: "Correos electrónicos" },
                {
                  value: "apps-mensajeria",
                  label: "Apps de mensajería (Ej: WhatsApp, Slack)",
                },
                { value: "otro", label: "Otro" },
              ]}
            />
            {formData.currentTools.includes("otro") && (
              <FormField
                label="Otro (especifica)"
                name="currentToolsOther"
                value={formData.currentToolsOther}
                onChange={(value) =>
                  updateFormData({ currentToolsOther: value as string })
                }
                error={errors.currentToolsOther}
                placeholder="Especifica otra herramienta..."
                required
              />
            )}

            <FormField
              label="¿Hay tareas que haces manualmente y te gustaría automatizar?"
              name="manualTasks"
              type="radio"
              value={formData.manualTasks}
              onChange={(value) =>
                updateFormData({ manualTasks: value as string })
              }
              error={errors.manualTasks}
              required
              options={[
                { value: "si", label: "Sí" },
                { value: "no", label: "No" },
              ]}
            />
            {formData.manualTasks === "si" && (
              <FormField
                label="Describe brevemente"
                name="manualTasksDescription"
                type="textarea"
                value={formData.manualTasksDescription}
                onChange={(value) =>
                  updateFormData({ manualTasksDescription: value as string })
                }
                error={errors.manualTasksDescription}
                placeholder="Ej: Paso datos del formulario web a una hoja de Excel."
                required
              />
            )}

            <FormField
              label="¿Has probado antes alguna solución para automatizar tareas o procesos en tu empresa?"
              name="previousAutomation"
              type="radio"
              value={formData.previousAutomation}
              onChange={(value) =>
                updateFormData({ previousAutomation: value as string })
              }
              error={errors.previousAutomation}
              required
              options={[
                {
                  value: "si-funciono",
                  label: "Sí, lo hemos intentado y funcionó bien",
                },
                {
                  value: "si-no-funciono",
                  label: "Sí, lo intentamos pero no salió como esperábamos",
                },
                {
                  value: "no-interesados",
                  label: "No, pero estamos interesados",
                },
                {
                  value: "no-considerado",
                  label: "No, y no lo habíamos considerado",
                },
                { value: "no-seguro", label: "No estoy seguro" },
              ]}
            />
          </FormStep>
        );

      case 3:
        return (
          <FormStep title="Nivel técnico y operatividad" icon="🧠">
            <FormField
              label="¿Sabes si los programas o plataformas que usas pueden conectarse con otros sistemas para compartir datos automáticamente?"
              name="systemIntegrations"
              type="radio"
              value={formData.systemIntegrations}
              onChange={(value) =>
                updateFormData({ systemIntegrations: value as string })
              }
              error={errors.systemIntegrations}
              required
              options={[
                { value: "si-api", label: "Sí, permiten conexiones (API)" },
                {
                  value: "si-webhooks",
                  label: "Sí, envían datos automáticamente (Webhooks)",
                },
                { value: "si-ambos", label: "Sí, ambas cosas" },
                { value: "no-seguro", label: "No estoy seguro" },
                { value: "no", label: "No, no se pueden conectar" },
              ]}
            />

            <FormField
              label="¿Tus programas funcionan por internet (en la nube) o están instalados en computadoras o servidores propios?"
              name="systemArchitecture"
              type="radio"
              value={formData.systemArchitecture}
              onChange={(value) =>
                updateFormData({ systemArchitecture: value as string })
              }
              error={errors.systemArchitecture}
              required
              options={[
                { value: "nube", label: "Por internet (en la nube)" },
                {
                  value: "local",
                  label: "Están instalados en computadoras/servidores propios",
                },
                { value: "mixto", label: "Es una mezcla de ambos" },
                { value: "no-seguro", label: "No estoy seguro" },
              ]}
            />

            <FormField
              label="¿Tienes personas en tu equipo que entienden de tecnología o sistemas?"
              name="technicalTeam"
              type="radio"
              value={formData.technicalTeam}
              onChange={(value) =>
                updateFormData({ technicalTeam: value as string })
              }
              error={errors.technicalTeam}
              required
              options={[
                {
                  value: "desarrolladores",
                  label: "Sí, hay desarrolladores (programadores)",
                },
                {
                  value: "equipo-ti",
                  label: "Sí, tenemos equipo de sistemas/TI",
                },
                { value: "ambos", label: "Sí, ambos" },
                { value: "ayuda-externa", label: "Solo tenemos ayuda externa" },
                { value: "nadie", label: "No tenemos a nadie técnico" },
              ]}
            />

            <FormField
              label="¿Tienes alguna preocupación sobre temas como seguridad de datos, privacidad o cumplimiento de normas (como protección de datos)?"
              name="securityConcerns"
              type="radio"
              value={formData.securityConcerns}
              onChange={(value) =>
                updateFormData({ securityConcerns: value as string })
              }
              error={errors.securityConcerns}
              required
              options={[
                {
                  value: "importante",
                  label: "Sí, es un tema importante para nosotros",
                },
                {
                  value: "interesa",
                  label: "No especialmente, pero nos interesa hacerlo bien",
                },
                {
                  value: "no-preocupa",
                  label: "No, no es algo que nos preocupe mucho",
                },
                { value: "no-seguro", label: "No estoy seguro" },
              ]}
            />
          </FormStep>
        );

      case 4:
        return (
          <FormStep title="Prioridad y etapa del proyecto" icon="📅">
            <FormField
              label="¿Qué tan urgente es para ti resolver esto?"
              name="urgency"
              type="radio"
              value={formData.urgency}
              onChange={(value) => updateFormData({ urgency: value as string })}
              error={errors.urgency}
              required
              options={[
                { value: "muy-urgente", label: "Muy urgente" },
                { value: "pronto", label: "Me gustaría resolverlo pronto" },
                {
                  value: "importante-no-urgente",
                  label: "Es importante, pero no urgente",
                },
                { value: "explorando", label: "Solo estoy explorando" },
              ]}
            />

            <FormField
              label="¿Cuándo te gustaría iniciar este proyecto?"
              name="projectTimeline"
              type="radio"
              value={formData.projectTimeline}
              onChange={(value) =>
                updateFormData({ projectTimeline: value as string })
              }
              error={errors.projectTimeline}
              required
              options={[
                { value: "inmediatamente", label: "Inmediatamente" },
                { value: "1-mes", label: "En el próximo mes" },
                { value: "2-3-meses", label: "En 2-3 meses" },
                { value: "6-meses", label: "En 6 meses" },
                {
                  value: "explorando",
                  label: "Solo estoy explorando opciones",
                },
              ]}
            />
          </FormStep>
        );

      case 5:
        return (
          <FormStep title="Tipo de servicio ideal" icon="🤝">
            <FormField
              label="¿Prefieres que solo te dejemos todo listo, o te interesa contar con soporte y mejoras continuas?"
              name="servicePreference"
              type="radio"
              value={formData.servicePreference}
              onChange={(value) =>
                updateFormData({ servicePreference: value as string })
              }
              error={errors.servicePreference}
              required
              options={[
                {
                  value: "configuracion-inicial",
                  label: "Solo quiero una configuración inicial",
                },
                {
                  value: "soporte-continuo",
                  label: "Me interesa tener soporte y ajustes continuos",
                },
                { value: "mixto", label: "Quiero una mezcla de ambos" },
                { value: "no-claro", label: "Aún no lo tengo claro" },
              ]}
            />

            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                ✍️ Comentarios finales
              </h3>
              <FormField
                label="¿Hay algo más que te gustaría contarnos o alguna necesidad que no hayamos cubierto?"
                name="finalComments"
                type="textarea"
                value={formData.finalComments}
                onChange={(value) =>
                  updateFormData({ finalComments: value as string })
                }
                placeholder="Comparte cualquier información adicional que consideres relevante..."
                rows={4}
              />
            </div>

            {/* Honeypot field for spam protection - hidden from users */}
            <div style={{ display: "none" }}>
              <label htmlFor="website">Website (leave blank):</label>
              <input
                id="website"
                name="website"
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
          </FormStep>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              ¡Formulario enviado!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Gracias por completar nuestro formulario de descubrimiento. Te
              contactaremos en menos de 24 horas para programar tu consulta
              gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary inline-block">
                Volver al Inicio
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  resetForm();
                  setHoneypot("");
                }}
                className="btn-secondary"
              >
                Rellenar otro formulario
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12">
                <img
                  src="/logo_vectorized_icon.svg"
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
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Formulario de descubrimiento
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ayúdanos a entender mejor tu negocio y procesos actuales para
              diseñar la solución de automatización perfecta para ti.
            </p>
          </div>

          {/* Progress Indicator */}
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
            stepTitles={stepTitles}
          />

          {/* Form Content */}
          <div className="mb-8">{renderCurrentStep()}</div>

          {/* Navigation */}
          <FormNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrevious={previousStep}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            canProceed={true}
          />
        </div>
      </main>
    </div>
  );
}
