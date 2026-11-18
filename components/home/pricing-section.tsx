import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Plan = {
    name: string;
    audience: string;
    price: string;
    period?: string;
    features: string[];
    badge?: string;
};

const plans: Plan[] = [
    {
        name: 'Starter',
        audience: 'For small in-house teams',
        price: '[PRICE]',
        period: '/ month',
        features: [
            '[LIMIT] active recruitments',
            '[LIMIT] AI interviews per month',
            'AI insights, recordings and transcripts',
        ],
    },
    {
        name: 'Growth',
        audience: 'For agencies and growing teams',
        price: '[PRICE]',
        period: '/ month',
        badge: 'Built for agencies',
        features: [
            'Everything in Starter',
            'Multiple clients in one workspace',
            'Candidate comparison',
            '[LIMIT] team seats',
        ],
    },
    {
        name: 'Enterprise',
        audience: 'For larger organisations',
        price: 'Custom',
        features: [
            'Everything in Growth',
            'ATS connection [VALIDATE]',
            'Onboarding for your team',
            'Custom data terms [VALIDATE]',
        ],
    },
];

export function PricingSection() {
    return (
        <section
            id="pricing"
            aria-labelledby="pricing-heading"
            className="border-y border-[#e5e5df] bg-white px-5 py-20 lg:py-28"
        >
            <div className="mx-auto flex max-w-[1136px] flex-col items-center">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4b6a4a]">
                    Pricing
                </p>
                <h2
                    id="pricing-heading"
                    className="mt-4 text-balance text-center text-[36px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[46px]"
                >
                    Flexible screening for teams of every size.
                </h2>

                <ul className="mt-14 grid w-full gap-5 md:grid-cols-3">
                    {plans.map((plan) => {
                        const featured = Boolean(plan.badge);
                        return (
                            <li
                                key={plan.name}
                                className={cn(
                                    'relative flex flex-col rounded-[20px] p-8',
                                    featured
                                        ? 'border-2 border-[#4b6a4a] bg-white'
                                        : 'border border-[#e5e5df] bg-[#fafaf9]',
                                )}
                            >
                                {plan.badge && (
                                    <span className="absolute -top-3 left-8 rounded-full bg-[#4b6a4a] px-3 py-1 text-xs font-medium text-white">
                                        {plan.badge}
                                    </span>
                                )}
                                <h3 className="text-lg font-semibold text-[#1a1a1a]">
                                    {plan.name}
                                </h3>
                                <p className="mt-1 text-sm text-[#71717a]">
                                    {plan.audience}
                                </p>
                                <p className="mt-8 flex items-baseline gap-1">
                                    <span className="text-[40px] font-semibold leading-none tracking-[-0.02em] text-[#1a1a1a]">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-sm text-[#71717a]">
                                            {plan.period}
                                        </span>
                                    )}
                                </p>
                                <ul className="mt-8 flex flex-col gap-3">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="text-[15px] text-[#4a4b44]"
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                    <Button
                        asChild
                        className="h-[52px] rounded-full bg-[#4b6a4a] px-7 text-base font-semibold text-white hover:bg-[#3d573c]"
                    >
                        <Link href="#">Book a demo</Link>
                    </Button>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-[15px] font-medium text-[#4b6a4a] underline underline-offset-4 hover:text-[#3d573c]"
                    >
                        View full pricing
                        <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
