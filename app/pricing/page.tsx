import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/home/site-footer';
import { PricingHero } from '@/components/pricing/pricing-hero';
import { ScreeningCostCalculator } from '@/components/pricing/screening-cost-calculator';
import { PlanCards } from '@/components/pricing/plan-cards';
import { PlanComparison } from '@/components/pricing/plan-comparison';
import { PlanGuide } from '@/components/pricing/plan-guide';
import { PricingFaq } from '@/components/pricing/pricing-faq';
import { PricingCta } from '@/components/pricing/pricing-cta';

export const metadata: Metadata = {
    title: 'Pricing — Wavvy World',
    description:
        'Simple plans for in-house teams, agencies and larger organisations. Compare Starter, Growth and Enterprise for AI screening interviews.',
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <SiteHeader />
            <main>
                <PricingHero />
                <ScreeningCostCalculator />
                <PlanCards />
                <PlanComparison />
                <PlanGuide />
                <PricingFaq />
                <PricingCta />
            </main>
            <SiteFooter />
        </div>
    );
}
