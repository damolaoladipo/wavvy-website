import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/home/site-footer';
import { SolutionsHero, SolutionsList } from '@/components/solutions/solutions-sections';
import { HowItWorksCta } from '@/components/how-it-works/how-it-works-fits';

export const metadata: Metadata = {
    title: 'Solutions — Wavvy World',
    description:
        'AI screening interviews for in-house recruitment teams, recruitment agencies and talent acquisition teams.',
};

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <SiteHeader />
            <main>
                <SolutionsHero />
                <SolutionsList />
                <div className="border-t border-[#e5e5df] pt-20 lg:pt-28">
                    <HowItWorksCta />
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
