import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { DemoRequest } from '@/components/book-a-demo/demo-request';

export const metadata: Metadata = {
    title: 'Book a demo — Wavvy World',
    description:
        'See Wavvy with one of your own roles. A guided walkthrough of AI first-round interviews, insights and plan recommendations.',
};

export default function BookADemoPage() {
    return (
        <div className="min-h-screen bg-[#f5f5f0] font-sans text-[#1a1a1a] lg:bg-white">
            <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8 xl:px-0">
                <Link
                    href="/"
                    className="flex items-center gap-2.5"
                    aria-label="Wavvy World home"
                >
                    <span className="flex size-[26px] items-center justify-center rounded-[7px] bg-[#8fae6f] lg:size-7">
                        <img src="/images/wavvy-mark.svg" alt="" className="size-4" />
                    </span>
                    <span className="text-lg font-bold tracking-tight">Wavvy World</span>
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[15px] font-medium hover:text-[#4b6a4a]"
                >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    Back
                </Link>
            </header>
            <main aria-labelledby="book-demo-heading">
                <DemoRequest />
            </main>
        </div>
    );
}
