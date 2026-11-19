import type { ReactNode } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/home/site-footer';

export type LegalSection = {
    id: string;
    title: string;
    content: ReactNode;
};

type LegalPageProps = {
    title: string;
    intro: ReactNode;
    lastUpdated: string;
    sections: LegalSection[];
};

const legalLinks = [
    { href: '/privacy', label: 'Privacy policy' },
    { href: '/terms', label: 'Terms of service' },
    { href: '/cookies', label: 'Cookie policy' },
];

const proseClasses =
    'text-[15px] leading-[1.7] text-[#4a4b44] [&_a]:font-medium [&_a]:text-[#1a1a1a] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#4b6a4a] [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#1a1a1a] [&_li]:mt-1.5 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-3 [&_strong]:font-semibold [&_strong]:text-[#1a1a1a] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5';

export function LegalPage({ title, intro, lastUpdated, sections }: LegalPageProps) {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <SiteHeader />
            <main className="px-5 py-16 lg:py-24">
                <div className="mx-auto max-w-[1080px]">
                    <header className="max-w-[720px]">
                        <nav aria-label="Legal documents" className="flex flex-wrap gap-2">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-full border border-[#e5e5df] px-3.5 py-1.5 text-[13px] font-medium text-[#4a4b44] transition-colors hover:border-[#4b6a4a] hover:text-[#1a1a1a] aria-[current=page]:border-[#4b6a4a] aria-[current=page]:bg-[#eef3e8] aria-[current=page]:text-[#1a1a1a]"
                                    aria-current={link.label === title ? 'page' : undefined}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <h1 className="mt-8 text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[56px]">
                            {title}
                        </h1>
                        <p className="mt-4 text-sm text-[#6b6c64]">Last updated: {lastUpdated}</p>
                        <div className="mt-5 text-pretty text-lg leading-[1.6] text-[#4a4b44]">{intro}</div>
                    </header>

                    <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:gap-16">
                        <nav
                            aria-label="On this page"
                            className="lg:sticky lg:top-24 lg:w-[240px] lg:shrink-0 lg:self-start"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6b6c64]">
                                On this page
                            </p>
                            <ol className="mt-3 flex flex-col gap-2 border-l border-[#e5e5df] pl-4 text-sm">
                                {sections.map((section, index) => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            className="text-[#4a4b44] transition-colors hover:text-[#4b6a4a]"
                                        >
                                            {index + 1}. {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        <article className="min-w-0 max-w-[720px] flex-1">
                            {sections.map((section, index) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    aria-labelledby={`${section.id}-heading`}
                                    className="scroll-mt-24 border-t border-[#e5e5df] py-8 first:border-t-0 first:pt-0"
                                >
                                    <h2
                                        id={`${section.id}-heading`}
                                        className="text-[22px] font-semibold tracking-[-0.01em]"
                                    >
                                        {index + 1}. {section.title}
                                    </h2>
                                    <div className={proseClasses}>{section.content}</div>
                                </section>
                            ))}
                        </article>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
