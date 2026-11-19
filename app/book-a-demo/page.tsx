import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/home/site-footer';
import { DemoRequest } from '@/components/book-a-demo/demo-request';

export const metadata: Metadata = {
    title: 'Book a demo — Wavvy World',
    description:
        'See Wavvy with one of your own roles. A guided walkthrough of AI first-round interviews, insights and plan recommendations.',
};

export default function BookADemoPage() {
    return (
        <div className="min-h-screen bg-[#f5f5f0] font-sans text-[#1a1a1a] lg:bg-white">
            <SiteHeader />
            <main aria-labelledby="book-demo-heading">
                <DemoRequest />
            </main>
            <SiteFooter />
        </div>
    );
}
