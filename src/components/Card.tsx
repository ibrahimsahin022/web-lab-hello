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
                    <div className="relative w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center overflow-hidden group">
                        <img
                            src={image}
                            alt={imageAlt || title}
                            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent mix-blend-multiply opacity-80" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-blue-600/90 text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">İncele</span>
                        </div>
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
