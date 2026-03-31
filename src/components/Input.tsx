import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
    helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, id, label, helperText, ...props }, ref) => {
        return (
            <div className="w-full form-group">
                {label && (
                    <label
                        htmlFor={id}
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    id={id}
                    ref={ref}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : helperText ? `${id}-description` : undefined}
                    className={cn(
                        "flex h-10 w-full rounded-md border bg-white dark:bg-slate-900 px-3 py-2 text-sm transition-colors",
                        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                        "placeholder:text-slate-500 dark:placeholder:text-slate-400",
                        "focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        error
                            ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500"
                            : "border-slate-300 dark:border-slate-700",
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-danger-600 dark:text-danger-500" id={`${id}-error`} role="alert">
                        {error}
                    </p>
                )}
                {!error && helperText && (
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400" id={`${id}-description`}>
                        {helperText}
                    </p>
                )}
            </div>
        );
    });

Input.displayName = 'Input';
export default Input;
