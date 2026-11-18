'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    ANNUAL_DISCOUNT,
    type BillingCycle,
    type PlanId,
    formatLimit,
    formatUsd,
    planOrder,
    priceFor,
    pricingPlans,
} from '@/lib/pricing';
import { cn } from '@/lib/utils';

const { starter, growth } = pricingPlans;

const planDetails: Record<
    PlanId,
    { includesLabel: string; features: string[]; badge?: string }
> = {
    starter: {
        includesLabel: 'Includes',
        features: [
            `${formatLimit(starter.limits.activeRecruitments)} active recruitments`,
            `${formatLimit(starter.limits.interviewsPerMonth)} AI interviews per month`,
            'AI summaries and match scores',
            'Recordings and transcripts',
        ],
    },
    growth: {
        includesLabel: 'Everything in Starter, plus',
        badge: 'Built for agencies',
        features: [
            'Multiple clients in one workspace',
            'Side-by-side candidate comparison',
            `${formatLimit(growth.limits.teamSeats)} team seats`,
            `${formatLimit(growth.limits.interviewsPerMonth)} AI interviews per month`,
        ],
    },
    enterprise: {
        includesLabel: 'Everything in Growth, plus',
        features: [
            'ATS connection [VALIDATE]',
            'Onboarding for your recruiters',
            'Custom data and security terms [VALIDATE]',
            'Dedicated point of contact [VALIDATE]',
        ],
    },
};

const steps = [
    {
        title: 'Pick a plan for your volume',
        body: 'Plans differ by recruitments, interviews and seats. An interview counts once a candidate submits it.',
    },
    {
        title: 'Candidates never pay',
        body: 'Interviews are free for candidates, on any device with a camera and microphone.',
    },
    {
        title: 'Change plans as you grow',
        body: 'Move up or down when your hiring volume changes. Changes apply from your next billing cycle.',
    },
];

const cycles: { id: BillingCycle; label: string }[] = [
    { id: 'monthly', label: 'Monthly' },
    { id: 'annual', label: 'Annually' },
];

function BillingToggle({
    value,
    onChange,
}: {
    value: BillingCycle;
    onChange: (cycle: BillingCycle) => void;
}) {
    return (
        <div
            role="radiogroup"
            aria-label="Billing cycle"
            className="mt-8 inline-flex items-center gap-1 rounded-full border border-[#e5e5df] bg-[#f3f4ee] p-1"
        >
            {cycles.map((cycle) => {
                const active = cycle.id === value;
                return (
                    <button
                        key={cycle.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => onChange(cycle.id)}
                        className={cn(
                            'flex h-9 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b6a4a]',
                            active
                                ? 'bg-white text-[#1a1a1a] shadow-sm'
                                : 'text-[#6b6c64] hover:text-[#1a1a1a]',
                        )}
                    >
                        {cycle.label}
                        {cycle.id === 'annual' ? (
                            <span className="rounded-full bg-[#dde8cf] px-2 py-0.5 text-[11px] font-semibold text-[#3d573c]">
                                Save {Math.round(ANNUAL_DISCOUNT * 100)}%
                            </span>
                        ) : null}
                    </button>
                );
            })}
        </div>
    );
}

export function PlanCards() {
    const [cycle, setCycle] = useState<BillingCycle>('monthly');

    return (
        <section
            id="plans"
            aria-labelledby="plans-heading"
            className="border-y border-[#e5e5df] bg-white px-5 py-20 lg:py-24"
        >
            <div className="mx-auto flex max-w-[1136px] flex-col items-center">
                <h2
                    id="plans-heading"
                    className="text-balance text-center text-[36px] font-bold leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] sm:text-[48px]"
                >
                    Choose the plan that fits your team
                </h2>
                <p className="mt-4 text-center text-base text-[#6b6c64]">
                    Prices in USD, excluding tax. Switch to annual billing to
                    save {Math.round(ANNUAL_DISCOUNT * 100)}%.
                </p>
                <BillingToggle value={cycle} onChange={setCycle} />

                <ul className="mt-14 flex w-full flex-col gap-5 lg:flex-row">
                    {planOrder.map((id) => {
                        const plan = pricingPlans[id];
                        const details = planDetails[id];
                        const featured = Boolean(details.badge);
                        const price = priceFor(plan, cycle);
                        const note =
                            price === null
                                ? 'Tailored to your volume and requirements'
                                : cycle === 'annual'
                                  ? `Billed annually at ${formatUsd(price * 12)}`
                                  : 'Billed monthly, cancel anytime';

                        return (
                            <li
                                key={id}
                                className={cn(
                                    'relative flex flex-1 flex-col rounded-[20px] border p-8',
                                    featured
                                        ? 'border-2 border-[#4b6a4a] bg-white shadow-[0_24px_48px_-20px_rgba(75,106,74,0.35)]'
                                        : 'border-[#e5e5df] bg-[#fafaf9]',
                                )}
                            >
                                {details.badge ? (
                                    <span className="absolute -top-3 left-8 rounded-full bg-[#4b6a4a] px-3 py-1 text-xs font-semibold text-white">
                                        {details.badge}
                                    </span>
                                ) : null}
                                <h3 className="text-[21px] font-semibold text-[#1a1a1a]">
                                    {plan.name}
                                </h3>
                                <p className="mt-1 text-sm text-[#6b6c64]">
                                    {plan.audience}
                                </p>
                                <p
                                    aria-live="polite"
                                    className="mt-8 flex items-baseline gap-1"
                                >
                                    <span className="text-[48px] font-semibold leading-none tracking-[-0.03em] tabular-nums text-[#1a1a1a]">
                                        {price === null ? 'Custom' : formatUsd(price)}
                                    </span>
                                    {price !== null ? (
                                        <span className="text-sm text-[#6b6c64]">
                                            /month
                                        </span>
                                    ) : null}
                                </p>
                                <p className="mt-4 text-[13px] text-[#6b6c64]">
                                    {note}
                                </p>
                                <Button
                                    asChild
                                    variant={featured ? 'default' : 'outline'}
                                    className={cn(
                                        'mt-7 h-12 rounded-full text-[15px] font-semibold',
                                        featured
                                            ? 'bg-[#4b6a4a] text-white hover:bg-[#3d573c]'
                                            : 'border-[#1a1a1a] bg-white text-[#1a1a1a] hover:bg-[#f5f5f0] hover:text-[#1a1a1a]',
                                    )}
                                >
                                    <Link href="/book-a-demo">Book a demo</Link>
                                </Button>
                                <hr className="my-8 border-[#e5e5df]" />
                                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6b6c64]">
                                    {details.includesLabel}
                                </p>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {details.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex gap-3 text-[15px] leading-snug text-[#1a1a1a]"
                                        >
                                            <Check
                                                aria-hidden="true"
                                                className="mt-0.5 size-4 shrink-0 text-[#4b6a4a]"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>

                <h3 className="mt-20 text-center text-2xl font-semibold tracking-[-0.02em] text-[#1a1a1a]">
                    How pricing works
                </h3>
                <ol className="mt-8 flex w-full flex-col gap-4 md:flex-row">
                    {steps.map((step, i) => (
                        <li
                            key={step.title}
                            className="flex flex-1 flex-col rounded-[18px] bg-[#f3f4ee] p-6"
                        >
                            <span className="text-xs font-semibold tabular-nums text-[#4b6a4a]">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="mt-4 text-lg font-semibold text-[#1a1a1a]">
                                {step.title}
                            </span>
                            <span className="mt-2 text-sm leading-relaxed text-[#4a4b44]">
                                {step.body}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
