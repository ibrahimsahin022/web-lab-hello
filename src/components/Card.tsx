import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

export type CardVariant = 'elevated' | 'flat';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    image?: string;
    imageAlt?: string;
    title?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'elevated', image, imageAlt, title, children, ...props }, ref) => {
        const variants: Record<CardVariant, string> = {
            elevated: 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-md border border-slate-100 dark:border-slate-700/50',
            flat: 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800',
        };

        return (
            <div
                ref={ref}
                className={cn('rounded-xl transition-all duration-200 overflow-hidden flex flex-col', variants[variant], className)}
                {...props}
            >
                {image && (
                    <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img src={image} alt={imageAlt || title} className="w-full h-full object-cover" />
                    </div>
                )}
                {title && <div className="p-4 pb-0"><h3 className="font-bold text-lg leading-tight">{title}</h3></div>}
                <div className="p-4 flex-1 flex flex-col pt-3">
                    {children}
                </div>
            </div>
        );
    });

Card.displayName = 'Card';
export default Card;
