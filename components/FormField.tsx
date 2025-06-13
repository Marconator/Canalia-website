import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea" | "select" | "radio";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
}

export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
  options = [],
  rows = 4,
}: FormFieldProps) {
  const baseInputClasses = `
    w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent
    transition-all duration-200 ${error ? "border-red-500" : "border-gray-300"}
  `;

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            className={`${baseInputClasses} resize-vertical min-h-[100px]`}
            required={required}
          />
        );

      case "select":
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
            required={required}
          >
            <option value="">Selecciona una opción</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "radio":
        return (
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-4 h-4 text-secondary focus:ring-secondary"
                  required={required}
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        );

      default:
        return (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={baseInputClasses}
            required={required}
          />
        );
    }
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-primary mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderInput()}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

interface FormStepProps {
  title: string;
  description?: string;
  icon?: string;
  children: React.ReactNode;
}

export function FormStep({
  title,
  description,
  icon,
  children,
}: FormStepProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          {icon && <span className="text-2xl">{icon}</span>}
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
        </div>
        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
