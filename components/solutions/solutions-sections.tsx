import Link from 'next/link';
import { Building2, Briefcase, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CheckList } from '@/components/how-it-works/step-layout';
import { cn } from '@/lib/utils';

const solutions = [
    {
        id: 'in-house',
        label: 'In-house teams',
        icon: Building2,
        title: 'Screen more candidates without adding headcount',
        description:
            'Run structured first interviews for every open role, so your recruiters spend their time on shortlisted candidates instead of repeat phone screens.',
        points: [
            'One consistent interview per role, scored against your criteria',
            'Hiring managers see the same evidence you do',
            'Candidates interview when it suits them, under your brand',
        ],
        plan: 'Starter',
    },
    {
        id: 'agencies',
        label: 'Recruitment agencies',
        icon: Briefcase,
        title: 'Keep every client\u2019s pipeline moving',
        description:
            'Manage several clients in one workspace and send a shortlist backed by clear evidence, faster than a round of phone calls.',
        points: [
            'Separate recruitments and branding for each client',
            'Side-by-side comparison to explain your shortlist',
            'Shared seats for your whole desk',
        ],
        plan: 'Growth',
    },
    {
        id: 'talent-acquisition',
        label: 'Talent acquisition',
        icon: Users,
        title: 'Consistent first rounds across the whole organisation',
        description:
            'Give every team the same structured first round, connected to the systems you already use and set up to your own security terms.',
        points: [
            'ATS connection [VALIDATE supported systems]',
            'Onboarding for your recruiters',
            'Custom data and security terms [VALIDATE]',
        ],
        plan: 'Enterprise',
    },
];

export function SolutionsHero() {
    return (
        <section aria-labelledby="solutions-heading" className="bg-white px-5 pb-16 pt-20 lg:pt-28">
            <div className="mx-auto flex max-w-[1136px] flex-col items-center text-center">
                <p className="text-sm font-medium uppercase tracking-[0.08em] text-[#4b6a4a]">
                    Solutions
                </p>
                <h1
                    id="solutions-heading"
                    className="mt-4 max-w-[820px] text-balance text-[44px] font-bold leading-[1.04] tracking-[-0.035em] text-[#1a1a1a] sm:text-[64px]"
                >
                    Built for the way your team hires.
                </h1>
                <p className="mt-5 max-w-[560px] text-pretty text-lg leading-[1.55] text-[#4a4b44]">
                    Whether you hire for your own company or for clients, Wavvy runs the first round
                    so you can focus on the people worth talking to.
                </p>
                <nav aria-label="Solutions" className="mt-9 flex flex-wrap justify-center gap-2">
                    {solutions.map((solution) => (
                        <Link
                            key={solution.id}
                            href={`#${solution.id}`}
                            className="rounded-full border border-[#e5e5df] bg-white px-4 py-2 text-[15px] font-medium text-[#1a1a1a] transition-colors hover:border-[#4b6a4a] hover:text-[#4b6a4a]"
                        >
                            {solution.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </section>
    );
}

export function SolutionsList() {
    return (
        <div>
            {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const headingId = `${solution.id}-heading`;
                return (
                    <section
                        key={solution.id}
                        id={solution.id}
                        aria-labelledby={headingId}
                        className={cn(
                            'scroll-mt-24 border-t border-[#e5e5df] px-5 py-20 lg:py-24',
                            index % 2 === 1 ? 'bg-[#f5f5f0]' : 'bg-white',
                        )}
                    >
                        <div className="mx-auto grid max-w-[1136px] gap-10 lg:grid-cols-2 lg:gap-16">
                            <div className="flex flex-col">
                                <span className="flex size-11 items-center justify-center rounded-xl bg-[#dde8cf] text-[#4b6a4a]">
                                    <Icon className="size-5" aria-hidden="true" />
                                </span>
                                <p className="mt-5 text-sm font-semibold text-[#4b6a4a]">
                                    {solution.label}
                                </p>
                                <h2
                                    id={headingId}
                                    className="mt-3 max-w-[480px] text-balance text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#1a1a1a] sm:text-[42px]"
                                >
                                    {solution.title}
                                </h2>
                                <p className="mt-5 max-w-[480px] text-pretty text-lg leading-[1.6] text-[#4a4b44]">
                                    {solution.description}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center gap-8 rounded-[24px] border border-[#e5e5df] bg-white p-7 sm:p-9">
                                <CheckList items={solution.points} />
                                <div className="flex flex-col gap-4 border-t border-[#e5e5df] pt-6 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-[15px] text-[#4a4b44]">
                                        Recommended plan:{' '}
                                        <Link
                                            href="/pricing#plans"
                                            className="font-semibold text-[#1a1a1a] underline underline-offset-2 hover:text-[#4b6a4a]"
                                        >
                                            {solution.plan}
                                        </Link>
                                    </p>
                                    <Button
                                        asChild
                                        className="h-11 rounded-full bg-[#4b6a4a] px-5 text-[15px] font-semibold text-white hover:bg-[#3d573c]"
                                    >
                                        <Link href="/book-a-demo">Book a demo</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
