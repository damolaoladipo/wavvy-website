import { Check, Eye, SlidersVertical, Video } from 'lucide-react';

const benefits = [
    {
        icon: Video,
        title: 'Experience an AI interview as a candidate',
        description: 'From the invitation link to the practice question.',
        short: 'Try an AI interview as a candidate',
    },
    {
        icon: Eye,
        title: 'See how insights and scores are explained',
        description: 'Strengths, concerns and the evidence behind them.',
        short: 'See how scores and insights are explained',
    },
    {
        icon: SlidersVertical,
        title: 'Get a setup and plan recommendation',
        description: 'Based on your roles, team and screening volume.',
        short: 'Get a plan recommendation for your volume',
    },
];

export function DemoIntro() {
    return (
        <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#4b6a4a]">
                Book a demo
            </p>
            <h1
                id="book-demo-heading"
                className="mt-3 text-balance text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[44px] lg:text-[56px] lg:leading-[1.05]"
            >
                See Wavvy with one of your own roles.
            </h1>
            <p className="mt-5 hidden max-w-[470px] text-lg leading-[1.6] text-[#4a4a45] lg:block">
                A guided walkthrough with our team, shaped around how you hire
                today. Bring a role you&apos;re screening for.
            </p>

            <ul className="mt-5 flex flex-col gap-2.5 lg:hidden">
                {benefits.map((benefit) => (
                    <li
                        key={benefit.short}
                        className="flex items-center gap-3 text-[15px] text-[#3a3a36]"
                    >
                        <Check
                            className="size-[18px] shrink-0 text-[#4b6a4a]"
                            aria-hidden="true"
                        />
                        {benefit.short}
                    </li>
                ))}
            </ul>

            <div className="mt-12 hidden lg:block">
                <h2 className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#6b6b65]">
                    In the demo, you&apos;ll
                </h2>
                <ul className="mt-4 flex flex-col gap-5">
                    {benefits.map((benefit) => (
                        <li key={benefit.title} className="flex gap-3.5">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dce8d0]">
                                <benefit.icon
                                    className="size-[18px] text-[#4b6a4a]"
                                    strokeWidth={1.6}
                                    aria-hidden="true"
                                />
                            </span>
                            <div>
                                <p className="text-[16px] font-medium leading-6">
                                    {benefit.title}
                                </p>
                                <p className="text-sm leading-5 text-[#6b6b65]">
                                    {benefit.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <figure
                className="mt-12 hidden rounded-[24px] bg-[#dce8d0] p-6 lg:block"
                aria-label="Example candidate summary"
            >
                <div className="rounded-[14px] bg-white p-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center gap-3">
                        <span
                            className="flex size-[34px] items-center justify-center rounded-full bg-[#dce8d0] text-[13px] font-semibold text-[#4b6a4a]"
                            aria-hidden="true"
                        >
                            MN
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium">Marta Nowak</p>
                            <p className="truncate text-[11px] text-[#6b6b65]">
                                Senior UX Designer · interview complete
                            </p>
                        </div>
                        <span className="rounded-full bg-[#dce8d0] px-2.5 py-1 text-xs font-semibold text-[#3d573c]">
                            86 match
                        </span>
                    </div>
                    <dl className="mt-3 grid grid-cols-2 gap-4">
                        <div>
                            <dt className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#4b6a4a]">
                                Strengths
                            </dt>
                            <dd className="mt-0.5 text-xs">
                                Design systems · Research
                            </dd>
                        </div>
                        <div>
                            <dt className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#9a3e0b]">
                                Area of concern
                            </dt>
                            <dd className="mt-0.5 text-xs">
                                Stakeholder influence
                            </dd>
                        </div>
                    </dl>
                </div>
            </figure>
        </div>
    );
}
