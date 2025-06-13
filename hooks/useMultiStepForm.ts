import { useState } from "react";

export interface FormData {
  // Datos Generales
  businessName: string;
  contactEmail: string;

  // Descubrimiento General
  timeConsumingProcesses: string;
  repetitiveTasks: string;
  automationGoal: string;

  // Análisis del Flujo de Trabajo Actual
  typicalProcess: string;
  involvedRoles: string;
  currentTools: string;
  manualDataEntry: string;
  progressTracking: string;

  // Aspectos Técnicos e Integración
  currentAutomationTools: string;
  apiIntegrations: string;
  systemArchitecture: string;
  internalDevelopers: string;

  // Puntos de Dolor y Métricas
  commonErrors: string;
  performanceMetrics: string;
  workflowChanges: string;

  // Resultados Deseados
  successfulImplementation: string;
  tasksToEliminate: string;
  reportsAndDashboards: string;

  // Plazos y Presupuesto
  projectTimeline: string;
  assignedBudget: string;

  // Riesgos y Preocupaciones
  previousAutomation: string;
  securityConcerns: string;

  // Compatibilidad y Enfoque de Colaboración
  servicePreference: string;
  reviewFrequency: string;
  solutionPreference: string;
}

const initialFormData: FormData = {
  businessName: "",
  contactEmail: "",
  timeConsumingProcesses: "",
  repetitiveTasks: "",
  automationGoal: "",
  typicalProcess: "",
  involvedRoles: "",
  currentTools: "",
  manualDataEntry: "",
  progressTracking: "",
  currentAutomationTools: "",
  apiIntegrations: "",
  systemArchitecture: "",
  internalDevelopers: "",
  commonErrors: "",
  performanceMetrics: "",
  workflowChanges: "",
  successfulImplementation: "",
  tasksToEliminate: "",
  reportsAndDashboards: "",
  projectTimeline: "",
  assignedBudget: "",
  previousAutomation: "",
  securityConcerns: "",
  servicePreference: "",
  reviewFrequency: "",
  solutionPreference: "",
};

export function useMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 9;

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };

  const validateCurrentStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    switch (currentStep) {
      case 0: // Datos Generales
        if (!formData.businessName.trim()) {
          newErrors.businessName = "El nombre del negocio es requerido";
        }
        if (!formData.contactEmail.trim()) {
          newErrors.contactEmail = "El correo de contacto es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
          newErrors.contactEmail = "El correo no tiene un formato válido";
        }
        break;
      case 1: // Descubrimiento General
        if (!formData.timeConsumingProcesses.trim()) {
          newErrors.timeConsumingProcesses = "Este campo es requerido";
        }
        if (!formData.repetitiveTasks.trim()) {
          newErrors.repetitiveTasks = "Este campo es requerido";
        }
        if (!formData.automationGoal.trim()) {
          newErrors.automationGoal = "Este campo es requerido";
        }
        break;
      // Add more validation cases as needed
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setErrors({});
  };

  return {
    currentStep,
    formData,
    errors,
    totalSteps,
    updateFormData,
    nextStep,
    previousStep,
    goToStep,
    validateCurrentStep,
    resetForm,
  };
}
