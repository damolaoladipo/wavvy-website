import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/home/site-footer';

export const metadata: Metadata = {
    title: 'Page not found — Wavvy World',
    robots: { index: false },
};

const suggestions = [
    { label: 'Product', description: 'Everything Wavvy does, in one place.', href: '/product' },
    { label: 'How it works', description: 'From setup to shortlist, step by step.', href: '/how-it-works' },
    { label: 'Solutions', description: 'For in-house teams and agencies.', href: '/solutions' },
    { label: 'Pricing', description: 'Plans for teams of every size.', href: '/pricing' },
];

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f5f5f0] font-sans text-[#1a1a1a]">
            <SiteHeader />
            <main className="flex flex-1 items-center px-5 py-20 lg:py-28">
                <div className="mx-auto flex w-full max-w-[880px] flex-col items-center text-center">
                    <p className="rounded-full bg-[#dfe7cf] px-3 py-1 text-sm font-medium text-[#4b6a4a]">
                        Error 404
                    </p>
                    <h1 className="mt-5 text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[60px]">
                        This page didn&apos;t make the shortlist.
                    </h1>
                    <p className="mt-5 max-w-[520px] text-pretty text-lg leading-[1.6] text-[#4a4b44]">
                        The page you&apos;re looking for has moved or doesn&apos;t exist. Here are a few
                        places worth a look instead.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#4b6a4a] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#3d573c]"
                        >
                            Back to homepage
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/book-a-demo"
                            className="inline-flex h-11 items-center rounded-full border border-[#d9d9d0] bg-white px-5 text-[15px] font-semibold transition-colors hover:border-[#4b6a4a]"
                        >
                            Book a demo
                        </Link>
                    </div>

                    <nav aria-label="Suggested pages" className="mt-14 w-full">
                        <ul className="grid gap-3 text-left sm:grid-cols-2">
                            {suggestions.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center justify-between gap-4 rounded-[18px] border border-[#e5e5df] bg-white p-5 transition-colors hover:border-[#4b6a4a]"
                                    >
                                        <span>
                                            <span className="block font-semibold">{item.label}</span>
                                            <span className="mt-1 block text-sm text-[#6b6c64]">
                                                {item.description}
                                            </span>
                                        </span>
                                        <ArrowRight
                                            className="size-4 shrink-0 text-[#4b6a4a] transition-transform group-hover:translate-x-0.5"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
