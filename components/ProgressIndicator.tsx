interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  stepTitles,
}: ProgressIndicatorProps) {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-secondary h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-500">
          Paso {currentStep + 1} de {totalSteps}
        </span>
        <span className="text-sm font-medium text-secondary">
          {Math.round(progressPercentage)}% Completado
        </span>
      </div>

      {/* Current Step Title */}
      <h3 className="text-lg font-semibold text-primary">
        {stepTitles[currentStep]}
      </h3>
    </div>
  );
}
