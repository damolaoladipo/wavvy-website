import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type StepSectionProps = {
    id: string;
    step?: number;
    eyebrow?: string;
    title: string;
    description: ReactNode;
    visual: ReactNode;
    children?: ReactNode;
    visualFirst?: boolean;
    tone?: 'light' | 'dark';
    className?: string;
};

export function StepSection({
    id,
    step,
    eyebrow,
    title,
    description,
    visual,
    children,
    visualFirst = false,
    tone = 'light',
    className,
}: StepSectionProps) {
    const dark = tone === 'dark';
    const headingId = `${id}-heading`;

    return (
        <section
            id={id}
            aria-labelledby={headingId}
            className={cn(
                'scroll-mt-24 px-5 py-20 lg:py-24',
                dark ? 'bg-[#1f201b] text-white' : 'bg-white',
                className,
            )}
        >
            <div className="mx-auto grid max-w-[1136px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className={cn('flex flex-col', visualFirst && 'lg:order-2')}>
                    <p
                        className={cn(
                            'text-sm font-semibold',
                            dark ? 'text-[#b5cf95]' : 'text-[#4b6a4a]',
                        )}
                    >
                        {eyebrow ?? `Step ${step}`}
                    </p>
                    <h2
                        id={headingId}
                        className={cn(
                            'mt-3 max-w-[460px] text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[42px]',
                            dark ? 'text-white' : 'text-[#1a1a1a]',
                        )}
                    >
                        {title}
                    </h2>
                    <div
                        className={cn(
                            'mt-5 max-w-[470px] text-pretty text-lg leading-[1.6]',
                            dark ? 'text-[#c9cac2]' : 'text-[#4a4b44]',
                        )}
                    >
                        {description}
                    </div>
                    {children ? <div className="mt-7">{children}</div> : null}
                </div>
                <div className={cn(visualFirst && 'lg:order-1')}>{visual}</div>
            </div>
        </section>
    );
}

export function CheckList({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <li
                    key={item}
                    className="flex items-start gap-3 text-[17px] leading-snug text-[#2f302b]"
                >
                    <Check
                        aria-hidden="true"
                        className="mt-0.5 size-[18px] shrink-0 text-[#4b6a4a]"
                        strokeWidth={2.25}
                    />
                    {item}
                </li>
            ))}
        </ul>
    );
}

export function VisualFrame({
    children,
    tone = 'green',
    className,
}: {
    children: ReactNode;
    tone?: 'green' | 'beige' | 'dark';
    className?: string;
}) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                'rounded-[28px] p-5 sm:p-9',
                tone === 'green' && 'bg-[#dde8cf]',
                tone === 'beige' && 'bg-[#f3f3ec]',
                tone === 'dark' && 'bg-[#1f201b]',
                className,
            )}
        >
            {children}
        </div>
    );
}
