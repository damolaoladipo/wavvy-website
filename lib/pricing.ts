export type BillingCycle = 'monthly' | 'annual';

export type PlanId = 'starter' | 'growth' | 'enterprise';

export type PlanLimits = {
    activeRecruitments: number | null;
    interviewsPerMonth: number | null;
    teamSeats: number | null;
};

export type PricingPlan = {
    id: PlanId;
    name: string;
    audience: string;
    monthlyPrice: number | null;
    limits: PlanLimits;
};

export const ANNUAL_DISCOUNT = 0.2;

export const RECRUITER_HOURLY_COST = 45;

export const HOURS_PER_WORKING_WEEK = 40;

export const pricingPlans: Record<PlanId, PricingPlan> = {
    starter: {
        id: 'starter',
        name: 'Starter',
        audience: 'For small in-house teams',
        monthlyPrice: 149,
        limits: { activeRecruitments: 3, interviewsPerMonth: 100, teamSeats: 2 },
    },
    growth: {
        id: 'growth',
        name: 'Growth',
        audience: 'For agencies and growing teams',
        monthlyPrice: 399,
        limits: { activeRecruitments: 15, interviewsPerMonth: 500, teamSeats: 10 },
    },
    enterprise: {
        id: 'enterprise',
        name: 'Enterprise',
        audience: 'For larger organisations',
        monthlyPrice: null,
        limits: { activeRecruitments: null, interviewsPerMonth: null, teamSeats: null },
    },
};

export const planOrder: PlanId[] = ['starter', 'growth', 'enterprise'];

export function priceFor(plan: PricingPlan, cycle: BillingCycle) {
    if (plan.monthlyPrice === null) return null;
    return cycle === 'annual'
        ? Math.round(plan.monthlyPrice * (1 - ANNUAL_DISCOUNT))
        : plan.monthlyPrice;
}

export function formatUsd(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value);
}

export function formatLimit(value: number | null) {
    return value === null ? 'Custom' : new Intl.NumberFormat('en-US').format(value);
}

export function recommendPlan(interviewsPerMonth: number): PricingPlan {
    const fit = planOrder.find((id) => {
        const limit = pricingPlans[id].limits.interviewsPerMonth;
        return limit === null || interviewsPerMonth <= limit;
    });
    return pricingPlans[fit ?? 'enterprise'];
}
