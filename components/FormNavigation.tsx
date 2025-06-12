interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit?: () => void;
  isSubmitting?: boolean;
  canProceed?: boolean;
}

export function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
  isSubmitting = false,
  canProceed = true,
}: FormNavigationProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex justify-between items-center pt-8 border-t border-gray-200">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstStep}
        className={`
          px-6 py-3 rounded-lg font-semibold transition-all duration-200
          ${
            isFirstStep
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
        `}
      >
        ← Anterior
      </button>

      <div className="flex space-x-3">
        {isLastStep ? (
          <button
            type="button"
            onClick={onSubmit}
            disabled={!canProceed || isSubmitting}
            className={`
              px-8 py-3 rounded-lg font-semibold transition-all duration-200
              ${
                canProceed && !isSubmitting
                  ? "btn-primary"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }
            `}
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Enviando...</span>
              </span>
            ) : (
              "Enviar Formulario"
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={!canProceed}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-200
              ${
                canProceed
                  ? "btn-primary"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }
            `}
          >
            Siguiente →
          </button>
        )}
      </div>
    </div>
  );
}
