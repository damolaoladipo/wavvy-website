import Link from 'next/link';

export const stepLinks = [
    { id: 'create', label: '1 · Create' },
    { id: 'invite', label: '2 · Invite' },
    { id: 'interview', label: '3 · Candidates interview' },
    { id: 'insights', label: '4 · AI insights' },
    { id: 'compare', label: '5 · Compare' },
    { id: 'decide', label: '6 · Decide' },
];

export function HowItWorksHero() {
    return (
        <section
            aria-labelledby="how-it-works-heading"
            className="bg-white px-5 pt-20 pb-12 lg:pt-24"
        >
            <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4b6a4a]">
                    How it works
                </p>
                <h1
                    id="how-it-works-heading"
                    className="mt-4 text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.035em] text-[#1a1a1a] sm:text-[68px]"
                >
                    Structured first interviews, from setup to shortlist.
                </h1>
                <p className="mt-6 max-w-[560px] text-pretty text-lg leading-[1.6] text-[#4a4b44] sm:text-[19px]">
                    A closer look at every step — what you set up, what
                    candidates experience and how you review the results.
                </p>
                <nav aria-label="Steps" className="mt-9">
                    <ul className="flex flex-wrap justify-center gap-2">
                        {stepLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={`#${link.id}`}
                                    className="inline-flex h-10 items-center rounded-full border border-[#e5e5df] bg-white px-4 text-sm font-medium text-[#1a1a1a] transition-colors hover:border-[#4b6a4a] hover:bg-[#f3f3ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b6a4a]"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
}
