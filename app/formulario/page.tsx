"use client";

import React, { useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import { FormField, FormStep } from "../../components/FormField";
import { ProgressIndicator } from "../../components/ProgressIndicator";
import { FormNavigation } from "../../components/FormNavigation";

const stepTitles = [
  "Datos Generales",
  "Descubrimiento General",
  "Análisis del Flujo de Trabajo",
  "Aspectos Técnicos e Integración",
  "Puntos de Dolor y Métricas",
  "Resultados Deseados",
  "Plazos y Presupuesto",
  "Riesgos y Preocupaciones",
  "Compatibilidad y Colaboración",
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

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (validateCurrentStep()) {
      nextStep();
    }
  };

  const handleSubmit = async () => {
    if (!recaptchaToken) {
      alert("Por favor completa el reCAPTCHA");
      return;
    }

    if (!validateCurrentStep()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log("Form data:", formData);
      console.log("reCAPTCHA token:", recaptchaToken);

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
              onChange={(value) => updateFormData({ businessName: value })}
              error={errors.businessName}
              placeholder="Ej: Empresa ABC S.A."
              required
            />
            <FormField
              label="Correo de contacto"
              name="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={(value) => updateFormData({ contactEmail: value })}
              error={errors.contactEmail}
              placeholder="ejemplo@empresa.com"
              required
            />
          </FormStep>
        );

      case 1:
        return (
          <FormStep title="Descubrimiento General" icon="🔍">
            <FormField
              label="¿Qué procesos de negocio consumen actualmente más tiempo o recursos?"
              name="timeConsumingProcesses"
              type="textarea"
              value={formData.timeConsumingProcesses}
              onChange={(value) =>
                updateFormData({ timeConsumingProcesses: value })
              }
              error={errors.timeConsumingProcesses}
              placeholder="Describe los procesos que más tiempo consumen en tu empresa..."
              required
            />
            <FormField
              label="¿Qué tareas o flujos de trabajo son repetitivos y basados en reglas?"
              name="repetitiveTasks"
              type="textarea"
              value={formData.repetitiveTasks}
              onChange={(value) => updateFormData({ repetitiveTasks: value })}
              error={errors.repetitiveTasks}
              placeholder="Enumera las tareas repetitivas que realizas frecuentemente..."
              required
            />
            <FormField
              label="¿Cuál es tu objetivo principal con la automatización?"
              name="automationGoal"
              type="select"
              value={formData.automationGoal}
              onChange={(value) => updateFormData({ automationGoal: value })}
              error={errors.automationGoal}
              required
              options={[
                { value: "ahorrar-tiempo", label: "Ahorrar tiempo" },
                { value: "reducir-errores", label: "Reducir errores" },
                {
                  value: "mejorar-escalabilidad",
                  label: "Mejorar la escalabilidad",
                },
                { value: "reducir-costos", label: "Reducir costos" },
                { value: "multiple", label: "Múltiples objetivos" },
              ]}
            />
          </FormStep>
        );

      case 2:
        return (
          <FormStep title="Análisis del Flujo de Trabajo Actual" icon="🏗️">
            <FormField
              label="¿Puedes explicarme uno de tus procesos típicos desde el inicio hasta el final?"
              name="typicalProcess"
              type="textarea"
              value={formData.typicalProcess}
              onChange={(value) => updateFormData({ typicalProcess: value })}
              placeholder="Describe paso a paso un proceso típico de tu empresa..."
            />
            <FormField
              label="¿Qué personas, roles o departamentos están involucrados en estos flujos de trabajo?"
              name="involvedRoles"
              type="textarea"
              value={formData.involvedRoles}
              onChange={(value) => updateFormData({ involvedRoles: value })}
              placeholder="Ej: Ventas, Marketing, Atención al cliente, etc."
            />
            <FormField
              label="¿Qué herramientas o plataformas utilizas actualmente para gestionar estos procesos?"
              name="currentTools"
              type="textarea"
              value={formData.currentTools}
              onChange={(value) => updateFormData({ currentTools: value })}
              placeholder="Ej: CRM, ERP, hojas de cálculo, etc."
            />
            <FormField
              label="¿Existen puntos de entrada de datos manuales o traspasos entre sistemas?"
              name="manualDataEntry"
              type="textarea"
              value={formData.manualDataEntry}
              onChange={(value) => updateFormData({ manualDataEntry: value })}
              placeholder="Describe dónde ocurren entradas manuales de datos..."
            />
            <FormField
              label="¿Cómo haces seguimiento del progreso o desempeño de estos procesos?"
              name="progressTracking"
              type="textarea"
              value={formData.progressTracking}
              onChange={(value) => updateFormData({ progressTracking: value })}
              placeholder="Describe cómo monitoreas el progreso..."
            />
          </FormStep>
        );

      case 3:
        return (
          <FormStep title="Aspectos Técnicos e Integración" icon="🛠️">
            <FormField
              label="¿Utilizas actualmente herramientas de automatización como Zapier, Make o n8n?"
              name="currentAutomationTools"
              type="radio"
              value={formData.currentAutomationTools}
              onChange={(value) =>
                updateFormData({ currentAutomationTools: value })
              }
              options={[
                { value: "si-zapier", label: "Sí, uso Zapier" },
                { value: "si-make", label: "Sí, uso Make (Integromat)" },
                { value: "si-n8n", label: "Sí, uso n8n" },
                { value: "si-otras", label: "Sí, uso otras herramientas" },
                { value: "no", label: "No, no uso ninguna" },
              ]}
            />
            <FormField
              label="¿Tus herramientas actuales permiten integraciones vía API o Webhooks?"
              name="apiIntegrations"
              type="radio"
              value={formData.apiIntegrations}
              onChange={(value) => updateFormData({ apiIntegrations: value })}
              options={[
                { value: "si-api", label: "Sí, tienen API" },
                { value: "si-webhooks", label: "Sí, soportan webhooks" },
                { value: "si-ambos", label: "Sí, ambos" },
                { value: "no-se", label: "No lo sé" },
                { value: "no", label: "No" },
              ]}
            />
            <FormField
              label="¿Tus sistemas están en la nube, son locales (on-premise), o una combinación de ambos?"
              name="systemArchitecture"
              type="radio"
              value={formData.systemArchitecture}
              onChange={(value) =>
                updateFormData({ systemArchitecture: value })
              }
              options={[
                { value: "nube", label: "Completamente en la nube" },
                { value: "local", label: "Completamente local (on-premise)" },
                { value: "hibrido", label: "Combinación híbrida" },
                { value: "no-se", label: "No estoy seguro" },
              ]}
            />
            <FormField
              label="¿Cuentas con desarrolladores internos o equipo de TI que participe en la gestión de procesos?"
              name="internalDevelopers"
              type="radio"
              value={formData.internalDevelopers}
              onChange={(value) =>
                updateFormData({ internalDevelopers: value })
              }
              options={[
                {
                  value: "si-desarrolladores",
                  label: "Sí, tenemos desarrolladores",
                },
                { value: "si-ti", label: "Sí, tenemos equipo de TI" },
                { value: "si-ambos", label: "Sí, ambos" },
                { value: "externo", label: "Solo soporte externo" },
                { value: "no", label: "No tenemos" },
              ]}
            />
          </FormStep>
        );

      case 4:
        return (
          <FormStep title="Puntos de Dolor y Métricas" icon="📊">
            <FormField
              label="¿Cuáles son los errores o cuellos de botella más frecuentes en tus procesos actuales?"
              name="commonErrors"
              type="textarea"
              value={formData.commonErrors}
              onChange={(value) => updateFormData({ commonErrors: value })}
              placeholder="Describe los principales problemas que enfrentas..."
            />
            <FormField
              label="¿Tienes métricas sobre tiempo, costos o tasas de error de estos flujos?"
              name="performanceMetrics"
              type="textarea"
              value={formData.performanceMetrics}
              onChange={(value) =>
                updateFormData({ performanceMetrics: value })
              }
              placeholder="Ej: Promedio 2 horas por proceso, 5% de errores, etc."
            />
            <FormField
              label="¿Con qué frecuencia necesitas modificar o adaptar tus flujos de trabajo?"
              name="workflowChanges"
              type="radio"
              value={formData.workflowChanges}
              onChange={(value) => updateFormData({ workflowChanges: value })}
              options={[
                { value: "diario", label: "Diariamente" },
                { value: "semanal", label: "Semanalmente" },
                { value: "mensual", label: "Mensualmente" },
                { value: "trimestral", label: "Trimestralmente" },
                { value: "rara-vez", label: "Rara vez" },
              ]}
            />
          </FormStep>
        );

      case 5:
        return (
          <FormStep title="Resultados Deseados" icon="🧩">
            <FormField
              label="¿Cómo se vería para ti una implementación de automatización exitosa?"
              name="successfulImplementation"
              type="textarea"
              value={formData.successfulImplementation}
              onChange={(value) =>
                updateFormData({ successfulImplementation: value })
              }
              placeholder="Describe tu visión de éxito..."
            />
            <FormField
              label="¿Hay tareas que te gustaría eliminar por completo de la responsabilidad de tu equipo?"
              name="tasksToEliminate"
              type="textarea"
              value={formData.tasksToEliminate}
              onChange={(value) => updateFormData({ tasksToEliminate: value })}
              placeholder="Lista las tareas que prefieres automatizar completamente..."
            />
            <FormField
              label="¿Qué tipo de informes o paneles (dashboards) serían útiles para ti?"
              name="reportsAndDashboards"
              type="textarea"
              value={formData.reportsAndDashboards}
              onChange={(value) =>
                updateFormData({ reportsAndDashboards: value })
              }
              placeholder="Describe qué información te gustaría visualizar..."
            />
          </FormStep>
        );

      case 6:
        return (
          <FormStep title="Plazos y Presupuesto" icon="📆">
            <FormField
              label="¿Cuándo te gustaría iniciar este proyecto?"
              name="projectTimeline"
              type="radio"
              value={formData.projectTimeline}
              onChange={(value) => updateFormData({ projectTimeline: value })}
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
            <FormField
              label="¿Tienes un presupuesto asignado para automatización o mejora de procesos?"
              name="assignedBudget"
              type="radio"
              value={formData.assignedBudget}
              onChange={(value) => updateFormData({ assignedBudget: value })}
              options={[
                { value: "menos-1000", label: "Menos de €1,000" },
                { value: "1000-5000", label: "€1,000 - €5,000" },
                { value: "5000-15000", label: "€5,000 - €15,000" },
                { value: "15000-50000", label: "€15,000 - €50,000" },
                { value: "mas-50000", label: "Más de €50,000" },
                {
                  value: "sin-presupuesto",
                  label: "Aún no tengo presupuesto definido",
                },
              ]}
            />
          </FormStep>
        );

      case 7:
        return (
          <FormStep title="Riesgos y Preocupaciones" icon="🚧">
            <FormField
              label="¿Has intentado automatizar procesos antes? Si es así, ¿qué funcionó y qué no?"
              name="previousAutomation"
              type="textarea"
              value={formData.previousAutomation}
              onChange={(value) =>
                updateFormData({ previousAutomation: value })
              }
              placeholder="Comparte tu experiencia previa con automatización..."
            />
            <FormField
              label="¿Existen preocupaciones sobre privacidad, seguridad o cumplimiento normativo?"
              name="securityConcerns"
              type="textarea"
              value={formData.securityConcerns}
              onChange={(value) => updateFormData({ securityConcerns: value })}
              placeholder="Ej: GDPR, HIPAA, ISO 27001, etc."
            />
          </FormStep>
        );

      case 8:
        return (
          <FormStep title="Compatibilidad y Enfoque de Colaboración" icon="🤝">
            <FormField
              label="¿Prefieres una configuración única o un servicio continuo de soporte y optimización?"
              name="servicePreference"
              type="radio"
              value={formData.servicePreference}
              onChange={(value) => updateFormData({ servicePreference: value })}
              options={[
                { value: "configuracion-unica", label: "Configuración única" },
                {
                  value: "soporte-continuo",
                  label: "Servicio continuo de soporte",
                },
                { value: "hibrido", label: "Combinación de ambos" },
                { value: "no-seguro", label: "No estoy seguro" },
              ]}
            />
            <FormField
              label="¿Con qué frecuencia te gustaría revisar el desempeño y realizar ajustes a la automatización?"
              name="reviewFrequency"
              type="radio"
              value={formData.reviewFrequency}
              onChange={(value) => updateFormData({ reviewFrequency: value })}
              options={[
                { value: "semanal", label: "Semanalmente" },
                { value: "mensual", label: "Mensualmente" },
                { value: "trimestral", label: "Trimestralmente" },
                { value: "semestral", label: "Semestralmente" },
                { value: "anual", label: "Anualmente" },
              ]}
            />
            <FormField
              label="¿Estás abierto a usar soluciones open-source o autoalojadas como n8n, o prefieres plataformas SaaS completamente gestionadas?"
              name="solutionPreference"
              type="radio"
              value={formData.solutionPreference}
              onChange={(value) =>
                updateFormData({ solutionPreference: value })
              }
              options={[
                {
                  value: "open-source",
                  label: "Prefiero open-source/autoalojadas",
                },
                { value: "saas", label: "Prefiero SaaS gestionadas" },
                {
                  value: "cualquiera",
                  label: "Estoy abierto a cualquier opción",
                },
                {
                  value: "no-seguro",
                  label: "No estoy seguro de la diferencia",
                },
              ]}
            />

            {/* reCAPTCHA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-primary mb-4">
                Verificación de seguridad
              </p>
              <ReCAPTCHA
                sitekey={
                  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                }
                onChange={setRecaptchaToken}
                onExpired={() => setRecaptchaToken(null)}
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
              ¡Formulario Enviado!
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
                  setRecaptchaToken(null);
                }}
                className="btn-secondary"
              >
                Enviar Otro Formulario
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
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Formulario de Descubrimiento
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
            canProceed={
              currentStep < totalSteps - 1 ||
              (currentStep === totalSteps - 1 && recaptchaToken !== null)
            }
          />
        </div>
      </main>
    </div>
  );
}
