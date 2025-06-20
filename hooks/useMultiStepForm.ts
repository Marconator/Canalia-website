import { useState } from "react";

export interface FormData {
  // Datos Generales
  businessName: string;
  contactName: string;
  contactEmail: string;

  // Tu realidad actual
  businessAreas: string[];
  businessAreasOther: string;
  repetitiveTasks: string[];
  repetitiveTasksOther: string;
  automationGoal: string;
  automationGoalOther: string;

  // Cómo trabajas hoy
  currentTools: string[];
  currentToolsOther: string;
  manualTasks: string;
  manualTasksDescription: string;
  previousAutomation: string;

  // Nivel técnico y operatividad
  systemIntegrations: string;
  systemArchitecture: string;
  technicalTeam: string;
  securityConcerns: string;

  // Prioridad y etapa del proyecto
  urgency: string;
  projectTimeline: string;

  // Tipo de servicio ideal
  servicePreference: string;

  // Comentarios finales (opcional)
  finalComments: string;
}

const initialFormData: FormData = {
  businessName: "",
  contactName: "",
  contactEmail: "",
  businessAreas: [],
  businessAreasOther: "",
  repetitiveTasks: [],
  repetitiveTasksOther: "",
  automationGoal: "",
  automationGoalOther: "",
  currentTools: [],
  currentToolsOther: "",
  manualTasks: "",
  manualTasksDescription: "",
  previousAutomation: "",
  systemIntegrations: "",
  systemArchitecture: "",
  technicalTeam: "",
  securityConcerns: "",
  urgency: "",
  projectTimeline: "",
  servicePreference: "",
  finalComments: "",
};

export function useMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 6;

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
        if (!formData.contactName.trim()) {
          newErrors.contactName = "El nombre de contacto es requerido";
        }
        if (!formData.contactEmail.trim()) {
          newErrors.contactEmail = "El correo de contacto es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
          newErrors.contactEmail = "El correo no tiene un formato válido";
        }
        break;

      case 1: // Tu realidad actual
        if (!formData.businessAreas.length) {
          newErrors.businessAreas = "Selecciona al menos una área";
        }
        if (
          formData.businessAreas.includes("otro") &&
          !formData.businessAreasOther.trim()
        ) {
          newErrors.businessAreasOther = "Especifica el área";
        }
        if (!formData.repetitiveTasks.length) {
          newErrors.repetitiveTasks = "Selecciona al menos una tarea";
        }
        if (
          formData.repetitiveTasks.includes("otro") &&
          !formData.repetitiveTasksOther.trim()
        ) {
          newErrors.repetitiveTasksOther = "Especifica la tarea";
        }
        if (!formData.automationGoal.trim()) {
          newErrors.automationGoal = "Selecciona un objetivo";
        }
        if (
          formData.automationGoal === "otro" &&
          !formData.automationGoalOther.trim()
        ) {
          newErrors.automationGoalOther = "Especifica tu objetivo";
        }
        break;

      case 2: // Cómo trabajas hoy
        if (
          !formData.currentTools.length &&
          !formData.currentToolsOther.trim()
        ) {
          newErrors.currentTools =
            "Selecciona al menos una herramienta o especifica otra";
        }
        if (!formData.manualTasks.trim()) {
          newErrors.manualTasks = "Este campo es requerido";
        }
        if (
          formData.manualTasks === "si" &&
          !formData.manualTasksDescription.trim()
        ) {
          newErrors.manualTasksDescription =
            "Describe brevemente las tareas manuales";
        }
        if (!formData.previousAutomation.trim()) {
          newErrors.previousAutomation = "Este campo es requerido";
        }
        break;

      case 3: // Nivel técnico y operatividad
        if (!formData.systemIntegrations.trim()) {
          newErrors.systemIntegrations = "Este campo es requerido";
        }
        if (!formData.systemArchitecture.trim()) {
          newErrors.systemArchitecture = "Este campo es requerido";
        }
        if (!formData.technicalTeam.trim()) {
          newErrors.technicalTeam = "Este campo es requerido";
        }
        if (!formData.securityConcerns.trim()) {
          newErrors.securityConcerns = "Este campo es requerido";
        }
        break;

      case 4: // Prioridad y etapa del proyecto
        if (!formData.urgency.trim()) {
          newErrors.urgency = "Este campo es requerido";
        }
        if (!formData.projectTimeline.trim()) {
          newErrors.projectTimeline = "Este campo es requerido";
        }
        break;

      case 5: // Tipo de servicio ideal
        if (!formData.servicePreference.trim()) {
          newErrors.servicePreference = "Este campo es requerido";
        }
        // finalComments is optional, no validation needed
        break;
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
