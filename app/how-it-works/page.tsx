import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/home/site-footer';
import { HowItWorksHero } from '@/components/how-it-works/how-it-works-hero';
import { HowItWorksSteps } from '@/components/how-it-works/how-it-works-steps';
import {
    HowItWorksCta,
    HowItWorksFits,
} from '@/components/how-it-works/how-it-works-fits';

export const metadata: Metadata = {
    title: 'How it works — Wavvy World',
    description:
        'Structured first interviews from setup to shortlist: create an interview, invite candidates with one link, review AI insights and decide who moves forward.',
};

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen scroll-smooth bg-white font-sans text-[#1a1a1a]">
            <SiteHeader />
            <main>
                <HowItWorksHero />
                <HowItWorksSteps />
                <HowItWorksFits />
                <HowItWorksCta />
            </main>
            <SiteFooter />
        </div>
    );
}
