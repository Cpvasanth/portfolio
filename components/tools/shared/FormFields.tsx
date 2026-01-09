"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

// ============================================
// Input Field
// ============================================

export interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "url" | "date";
  required?: boolean;
  error?: string;
  className?: string;
}

export function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
  className = "",
}: InputFieldProps) {
  const hasError = !!error && value.length > 0;

  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-sm font-medium text-zinc-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
          hasError
            ? "border-red-500/50 focus:border-red-500"
            : "border-white/[0.1] focus:border-emerald-500/50"
        }`}
      />
      {hasError && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

// ============================================
// Textarea Field
// ============================================

export interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  className?: string;
}

export function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  required,
  className = "",
}: TextareaFieldProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-sm font-medium text-zinc-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
      />
    </div>
  );
}

// ============================================
// Select Field
// ============================================

export interface SelectFieldProps<T extends string> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: Record<T, string>;
  className?: string;
}

export function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
  className = "",
}: SelectFieldProps<T>) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-sm font-medium text-zinc-300">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer"
      >
        {(Object.keys(options) as T[]).map((key) => (
          <option key={key} value={key} className="bg-zinc-900">
            {options[key]}
          </option>
        ))}
      </select>
    </div>
  );
}

// ============================================
// Toggle Field
// ============================================

export interface ToggleFieldProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function ToggleField({
  label,
  description,
  checked,
  onChange,
  className = "",
}: ToggleFieldProps) {
  return (
    <label className={`flex items-start gap-3 cursor-pointer ${className}`}>
      <div
        className={`w-10 h-6 rounded-full relative transition-colors flex-shrink-0 ${
          checked ? "bg-emerald-500" : "bg-white/10"
        }`}
        onClick={() => onChange(!checked)}
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full absolute top-1"
          animate={{ left: checked ? 20 : 4 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        {description && <p className="text-xs text-zinc-500">{description}</p>}
      </div>
    </label>
  );
}

// ============================================
// Checkbox Group
// ============================================

export interface CheckboxGroupProps<T extends string> {
  label: string;
  options: Record<T, { label: string; description: string }>;
  selected: T[];
  onChange: (values: T[]) => void;
  columns?: 1 | 2;
  className?: string;
}

export function CheckboxGroup<T extends string>({
  label,
  options,
  selected,
  onChange,
  columns = 1,
  className = "",
}: CheckboxGroupProps<T>) {
  const handleToggle = (value: T) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="text-sm font-medium text-zinc-300">{label}</label>
      <div
        className={`grid gap-2 ${
          columns === 2 ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {(Object.keys(options) as T[]).map((key) => (
          <label
            key={key}
            className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
              selected.includes(key)
                ? "bg-emerald-500/10 border-emerald-500/30"
                : "bg-white/[0.02] border-white/[0.08] hover:border-white/[0.15]"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(key)}
              onChange={() => handleToggle(key)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border ${
                selected.includes(key)
                  ? "bg-emerald-500 border-emerald-500"
                  : "border-white/20 bg-transparent"
              }`}
            >
              {selected.includes(key) && (
                <FaCheck className="text-white text-[10px]" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                {options[key].label}
              </p>
              {options[key].description && (
                <p className="text-xs text-zinc-500">
                  {options[key].description}
                </p>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Section Divider
// ============================================

export interface SectionDividerProps {
  title?: string;
  className?: string;
}

export function SectionDivider({ title, className = "" }: SectionDividerProps) {
  return (
    <div className={`pt-4 border-t border-white/[0.08] ${className}`}>
      {title && (
        <h4 className="text-sm font-medium text-zinc-300 mb-3">{title}</h4>
      )}
    </div>
  );
}
