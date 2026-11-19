import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/home/site-footer';
import {
    ProductCapabilities,
    ProductFeatures,
    ProductHero,
    ProductResponsibleAi,
} from '@/components/product/product-sections';
import {
    HowItWorksCta,
    HowItWorksFits,
} from '@/components/how-it-works/how-it-works-fits';

export const metadata: Metadata = {
    title: 'Product — Wavvy World',
    description:
        'Interview builder, async candidate interviews, explainable AI insights and side-by-side comparison in one recruitment workspace.',
};

export default function ProductPage() {
    return (
        <div className="min-h-screen scroll-smooth bg-white font-sans text-[#1a1a1a]">
            <SiteHeader />
            <main>
                <ProductHero />
                <ProductCapabilities />
                <ProductFeatures />
                <ProductResponsibleAi />
                <HowItWorksFits />
                <HowItWorksCta />
            </main>
            <SiteFooter />
        </div>
    );
}
