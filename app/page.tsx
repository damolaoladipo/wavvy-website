import Link from 'next/link';
import {
    ArrowRight,
    Calendar,
    Check,
    CircleAlert,
    Clock,
    Columns3,
    Eye,
    Phone,
    Repeat,
    SlidersVertical,
    UserCheck,
    Video,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CtaSection } from '@/components/home/cta-section';
import { FaqSection } from '@/components/home/faq-section';
import { PricingSection } from '@/components/home/pricing-section';
import { SiteFooter } from '@/components/home/site-footer';
import { SiteHeader } from '@/components/site-header';

const dashboardNav = ['Recruitments', 'Candidates', 'Clients', 'Settings'];

const stats = [
    { label: 'Active recruitments', value: '14' },
    { label: 'Candidates', value: '248' },
    { label: 'Interviews done', value: '96' },
    { label: 'Awaiting review', value: '12', accent: true },
];

const recruitments = [
    { role: 'Senior UX Designer', candidates: 32, progress: 72 },
    { role: 'Frontend Developer', candidates: 47, progress: 54 },
    { role: 'Customer Success Lead', candidates: 21, progress: 88 },
    { role: 'Sales Manager', candidates: 18, progress: 31 },
];

const principles = [
    {
        icon: UserCheck,
        title: 'Recruiters decide',
        body: 'AI prepares the insight. You choose who moves forward.',
    },
    {
        icon: Eye,
        title: 'Every score is explained',
        body: 'Strengths and concerns, linked to the answers behind them.',
    },
    {
        icon: Clock,
        title: 'Candidates pick the time',
        body: 'No scheduling. They interview when it suits them.',
    },
    {
        icon: SlidersVertical,
        title: 'Same questions, same criteria',
        body: 'Structured interviews make candidates comparable.',
    },
];

const problems = [
    {
        icon: Phone,
        title: 'Endless screening calls',
        body: 'The same first conversation, repeated for every applicant, before you know who deserves a second one.',
    },
    {
        icon: Calendar,
        title: 'Scheduling back-and-forth',
        body: 'Days lost to calendar tennis, while strong candidates move on to other offers.',
    },
    {
        icon: Columns3,
        title: 'Hard-to-compare candidates',
        body: 'Notes in different formats, from different days and different interviewers. Shortlists end up built on gut feel.',
    },
    {
        icon: Repeat,
        title: 'Repetitive admin',
        body: 'Writing up notes and summaries instead of spending time with your strongest people.',
    },
];

const withoutWavvy = [
    'Review every application manually',
    'Coordinate screening calls across calendars',
    'Ask the same questions, call after call',
    'Take notes while trying to listen',
    'Compare candidates from scattered notes',
];

const withWavvy = [
    'Create a structured AI interview for the role',
    'Invite candidates with one link',
    'Candidates interview on their own schedule',
    'Review AI insights, recordings and transcripts',
    'Compare candidates side by side in one workspace',
];

export default function Home() {
    return (
        <div className="min-h-screen bg-[#f5f5f0] font-sans text-[#1a1a1a]">
            <SiteHeader />

            <main>
                <section className="px-4 pt-9 pb-12 sm:px-5 sm:py-16 lg:py-20">
                    <div className="mx-auto flex max-w-[1200px] flex-col gap-10 sm:gap-14 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex w-full flex-col items-start gap-5 sm:max-w-[470px] sm:gap-6">
                            <Badge className="h-[27px] gap-2 rounded-full border-0 bg-[#dce8d0] px-2 text-[13px] font-semibold text-[#4b6a4a] sm:h-[30px] sm:px-3.5">
                                <span
                                    className="size-[7px] rounded-full bg-[#4b6a4a] sm:size-2"
                                    aria-hidden="true"
                                />
                                <span>
                                    AI screening interviews
                                    <span className="hidden sm:inline">
                                        {' for recruitment teams'}
                                    </span>
                                </span>
                            </Badge>
                            <h1 className="text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-black sm:text-[56px] sm:leading-[1.09]">
                                Spend less time screening.{' '}
                                <span className="text-[#4b6a4a] sm:text-inherit">
                                    More time hiring.
                                </span>
                            </h1>
                            <p className="text-[17px] leading-[26px] text-[#4a4b44] sm:hidden">
                                Wavvy runs your first-round interviews
                                asynchronously and gives you explainable
                                insights on every candidate.
                            </p>
                            <p className="hidden text-[19px] leading-[29.5px] text-[#4a4b44] sm:block">
                                Wavvy runs your first-round interviews
                                asynchronously, then gives you structured,
                                explainable insights on every candidate — so you
                                can focus on the people worth a real
                                conversation.
                            </p>
                            <div className="flex w-full flex-col gap-2.5 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3 sm:pt-0">
                                <Button
                                    asChild
                                    className="h-[54px] w-full gap-2 rounded-full bg-[#4b6a4a] px-7 text-base font-semibold text-white hover:bg-[#3d573c] sm:w-auto"
                                >
                                    <Link href="/book-a-demo">
                                        Book a demo
                                        <ArrowRight
                                            aria-hidden="true"
                                            className="hidden size-[18px] sm:block"
                                        />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-[50px] w-full rounded-full border-[#d3d2c7] bg-white px-6 text-base font-semibold text-[#1a1a1a] hover:bg-[#fafaf9] hover:text-[#1a1a1a] sm:h-[54px] sm:w-auto"
                                >
                                    <Link href="/how-it-works">
                                        See how it works
                                    </Link>
                                </Button>
                            </div>
                            <p className="w-full text-center text-sm leading-[18.2px] text-[#71717a] sm:text-left">
                                <span className="hidden sm:inline">
                                    Walk through it with one of your own open
                                    roles.{' '}
                                </span>
                                Works alongside your ATS.
                            </p>
                        </div>

                        <div
                            className="relative w-full pb-6 sm:hidden"
                            aria-hidden="true"
                        >
                            <Card className="gap-4 rounded-2xl border-[#e5e5df] bg-white px-4 pt-4 pb-10 text-[#1a1a1a] shadow-[0_20px_50px_-24px_rgba(26,26,26,0.22)]">
                                <div className="flex items-center gap-2.5">
                                    <Avatar className="size-[38px]">
                                        <AvatarFallback className="bg-[#dce8d0] text-[13px] font-bold text-[#4b6a4a]">
                                            AK
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-[15px] font-semibold leading-5">
                                            Anna Kowalska
                                        </p>
                                        <p className="text-[13px] text-[#71717a]">
                                            Senior UX Designer
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[26px] font-bold leading-7 text-[#4b6a4a]">
                                            86
                                        </p>
                                        <p className="text-[11px] text-[#71717a]">
                                            match
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2.5">
                                    <div className="flex flex-col gap-1.5 rounded-[10px] bg-[#eef1e8] p-2.5">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#4b6a4a]">
                                            Strengths
                                        </p>
                                        <p className="text-[13px] leading-[18px]">
                                            Design systems · Q3 Research · Q1
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1.5 rounded-[10px] bg-[#fdf3c7] p-2.5">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#92400e]">
                                            To explore
                                        </p>
                                        <p className="text-[13px] leading-[18px]">
                                            Stakeholder examples · Q5
                                        </p>
                                    </div>
                                </div>
                            </Card>
                            <div className="absolute inset-x-3 bottom-0 flex h-[42px] items-center gap-2.5 rounded-[10px] bg-[#1e1f1a] px-3.5 text-[13px] text-[#e5e5df] shadow-[0_12px_30px_-12px_rgba(26,26,26,0.5)]">
                                <Video
                                    aria-hidden="true"
                                    className="size-4 text-[#8fae6f]"
                                />
                                Interview completed · transcript ready
                            </div>
                        </div>

                        <div
                            className="relative hidden w-full max-w-[610px] pb-24 sm:block lg:pb-10"
                            aria-hidden="true"
                        >
                            <Card className="text-[#1a1a1a] ml-auto flex max-w-[570px] flex-row gap-0 overflow-hidden rounded-[18px] border-[#e5e5df] bg-white py-0 shadow-[0_24px_60px_-20px_rgba(26,26,26,0.18)]">
                                <div className="hidden w-[148px] shrink-0 flex-col gap-3 border-r border-[#edede7] bg-[#fafaf9] p-3 sm:flex">
                                    <div className="mb-2 flex items-center gap-2 px-1.5 pt-2">
                                        <span className="flex size-[18px] items-center justify-center rounded-[4.5px] bg-[#8fae6f]">
                                            <img
                                                src="/images/wavvy-mark-sm.svg"
                                                alt=""
                                                className="size-[11px]"
                                            />
                                        </span>
                                        <span className="text-xs font-bold text-[#1a1a1a]">
                                            Wavvy
                                        </span>
                                    </div>
                                    <span className="rounded-lg bg-[#dce8d0] px-2.5 py-[7px] text-[11px] font-semibold text-[#4b6a4a]">
                                        Dashboard
                                    </span>
                                    {dashboardNav.map((item) => (
                                        <span
                                            key={item}
                                            className="px-2.5 text-[11px] text-[#4a4b44]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-[22px]">
                                    <div>
                                        <p className="text-[15px] font-semibold leading-[19.5px]">
                                            Welcome back, Sarah
                                        </p>
                                        <p className="text-[11px] text-[#71717a]">
                                            {
                                                "Here's where your screening stands today"
                                            }
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2.5">
                                        {stats.map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="flex h-[76px] flex-col justify-between rounded-[10px] border border-[#edede7] p-2.5"
                                            >
                                                <span className="text-[9px] leading-[11.7px] text-[#71717a]">
                                                    {stat.label}
                                                </span>
                                                <span
                                                    className={`text-lg font-bold leading-[23.4px] ${stat.accent ? 'text-[#4b6a4a]' : 'text-[#1a1a1a]'}`}
                                                >
                                                    {stat.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="overflow-hidden rounded-xl border border-[#edede7]">
                                        <div className="grid h-8 grid-cols-[1.6fr_0.6fr_1.2fr] items-center border-b border-[#edede7] bg-[#fafaf9] px-3 text-[9px] text-[#71717a]">
                                            <span>Recruitment</span>
                                            <span>Candidates</span>
                                            <span>Interviews completed</span>
                                        </div>
                                        {recruitments.map((row) => (
                                            <div
                                                key={row.role}
                                                className="grid h-9 grid-cols-[1.6fr_0.6fr_1.2fr] items-center border-b border-[#f0f0ea] px-3 text-[11px] last:border-b-0"
                                            >
                                                <span className="truncate font-semibold">
                                                    {row.role}
                                                </span>
                                                <span>{row.candidates}</span>
                                                <span className="flex items-center gap-1.5">
                                                    <Progress
                                                        value={row.progress}
                                                        className="flex-1 **:data-[slot=progress-indicator]:bg-[#8fae6f] **:data-[slot=progress-track]:h-[5px] **:data-[slot=progress-track]:bg-[#edede7]"
                                                    />
                                                    {row.progress}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>

                            <Card className="text-[#1a1a1a] absolute bottom-0 left-0 w-[300px] gap-2.5 rounded-2xl border-[#e5e5df] bg-white p-[19px] shadow-[0_20px_50px_-16px_rgba(26,26,26,0.22)]">
                                <div className="flex items-center gap-2.5">
                                    <Avatar className="size-9">
                                        <AvatarFallback className="bg-[#dce8d0] text-[13px] font-bold text-[#4b6a4a]">
                                            AK
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-[13px] font-semibold">
                                            Anna Kowalska
                                        </p>
                                        <p className="text-[11px] text-[#71717a]">
                                            Senior UX Designer
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold leading-[26px] text-[#4b6a4a]">
                                            86
                                        </p>
                                        <p className="text-[9px] text-[#71717a]">
                                            match score
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#71717a]">
                                    Strengths
                                </p>
                                <p className="flex items-center gap-1.5 text-[11px]">
                                    <Check
                                        aria-hidden="true"
                                        className="size-3.5 text-[#4b6a4a]"
                                    />
                                    Clear design-system thinking (Q3)
                                </p>
                                <p className="flex items-center gap-1.5 text-[11px]">
                                    <Check
                                        aria-hidden="true"
                                        className="size-3.5 text-[#4b6a4a]"
                                    />
                                    Structured research approach (Q1)
                                </p>
                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#92400e]">
                                    Area to explore
                                </p>
                                <p className="flex items-center gap-1.5 text-[11px]">
                                    <CircleAlert
                                        aria-hidden="true"
                                        className="size-3.5 text-[#b45309]"
                                    />
                                    Limited stakeholder examples (Q5)
                                </p>
                            </Card>

                            <Card className="text-[#1a1a1a] absolute -top-5 right-0 flex-row items-center gap-2.5 rounded-[14px] border-[#e5e5df] bg-white px-3 py-[11px] shadow-[0_16px_40px_-14px_rgba(26,26,26,0.2)] lg:-right-5">
                                <span className="flex size-[30px] items-center justify-center rounded-[9px] bg-[#dce8d0]">
                                    <Video
                                        aria-hidden="true"
                                        className="size-4 text-[#4b6a4a]"
                                    />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold">
                                        Interview completed
                                    </p>
                                    <p className="text-[10px] text-[#71717a]">
                                        Tomasz W. · 12 min ago · transcript
                                        ready
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                <section
                    id="features"
                    aria-label="Features"
                    className="scroll-mt-24 px-5 py-12"
                >
                    <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 xl:px-8">
                        <p className="text-center text-sm font-semibold text-[#71717a]">
                            Built for recruiters. Designed around better
                            decisions.
                        </p>
                        <div className="grid w-full gap-px overflow-hidden rounded-2xl border border-[#e5e5df] bg-[#e5e5df] sm:grid-cols-2 lg:grid-cols-4">
                            {principles.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex gap-3.5 bg-white p-6"
                                >
                                    <item.icon
                                        aria-hidden="true"
                                        strokeWidth={1.75}
                                        className="size-[22px] shrink-0 text-[#4b6a4a]"
                                    />
                                    <div className="flex flex-col gap-1.5">
                                        <h2 className="text-[15px] font-semibold leading-[19.5px]">
                                            {item.title}
                                        </h2>
                                        <p className="text-sm leading-[21px] text-[#71717a]">
                                            {item.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:justify-between">
                            <span className="text-xs text-[#71717a]">
                                Customer logos
                            </span>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="flex h-9 w-[120px] items-center justify-center rounded-lg border border-dashed border-[#c9c8bc] text-[11px] text-[#71717a]"
                                >
                                    [Logo]
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-y border-[#e5e5df] bg-white px-5 py-20 lg:py-[105px]">
                    <div className="mx-auto flex max-w-[1200px] flex-col gap-5 xl:px-8">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4b6a4a]">
                            The problem
                        </p>
                        <h2 className="max-w-[670px] text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[46px]">
                            {
                                "Great hiring shouldn't start with hours of screening calls."
                            }
                        </h2>
                        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {problems.map((item) => (
                                <Card
                                    key={item.title}
                                    className="gap-0 rounded-2xl border-0 bg-[#f5f5f0] p-[26px] shadow-none lg:min-h-[296px]"
                                >
                                    <span className="flex size-11 items-center justify-center rounded-xl border border-[#e5e5df] bg-white">
                                        <item.icon
                                            aria-hidden="true"
                                            strokeWidth={1.75}
                                            className="size-5 text-[#1a1a1a]"
                                        />
                                    </span>
                                    <h3 className="mt-10 text-lg font-semibold leading-[23.4px] tracking-[-0.01em] text-[#1a1a1a]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2.5 text-[15px] leading-[23.3px] text-[#4a4b44]">
                                        {item.body}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="how-it-works" className="px-5 py-20 lg:py-28">
                    <div className="mx-auto flex max-w-[1200px] flex-col gap-14 xl:px-8">
                        <h2 className="max-w-[593px] text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[46px]">
                            From repetitive screening to confident shortlists.
                        </h2>
                        <div className="grid gap-6 lg:grid-cols-2">
                            <Card className="text-[#1a1a1a] gap-6 rounded-[20px] border-[#e5e5df] bg-[#efeee7] p-9 shadow-none">
                                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#71717a]">
                                    Without Wavvy
                                </p>
                                <ol>
                                    {withoutWavvy.map((text, i) => (
                                        <li
                                            key={text}
                                            className="flex items-center gap-3.5 border-b border-[#deddd3] py-3.5 last:border-b-0"
                                        >
                                            <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full border border-[#c9c8bc] text-xs font-semibold text-[#4a4b44]">
                                                {i + 1}
                                            </span>
                                            <span className="text-base text-[#4a4b44]">
                                                {text}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </Card>
                            <Card className="text-[#1a1a1a] gap-6 rounded-[20px] border-2 border-[#4b6a4a] bg-white p-9 shadow-[0_24px_60px_-24px_rgba(75,106,74,0.35)]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex size-[22px] items-center justify-center rounded-[5.5px] bg-[#8fae6f]">
                                        <img
                                            src="/images/wavvy-mark-md.svg"
                                            alt=""
                                            className="size-[13px]"
                                        />
                                    </span>
                                    <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4b6a4a]">
                                        With Wavvy
                                    </p>
                                </div>
                                <ul>
                                    {withWavvy.map((text) => (
                                        <li
                                            key={text}
                                            className="flex items-center gap-3.5 border-b border-[#edede7] py-3.5 last:border-b-0"
                                        >
                                            <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#4b6a4a]">
                                                <Check
                                                    aria-hidden="true"
                                                    strokeWidth={3}
                                                    className="size-3.5 text-white"
                                                />
                                            </span>
                                            <span className="text-base font-medium">
                                                {text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                <PricingSection />
                <FaqSection />
                <CtaSection />
            </main>
            <SiteFooter />
            <div className="h-[72px] sm:hidden" aria-hidden="true" />
            <div className="fixed inset-x-0 bottom-0 z-40 flex h-[72px] items-center justify-between gap-3 border-t border-[#e5e5df] bg-[#f5f5f0]/95 px-4 backdrop-blur sm:hidden">
                <p className="text-[13px] text-[#4a4b44]">
                    See Wavvy with one of your roles
                </p>
                <Button
                    asChild
                    className="h-[46px] shrink-0 rounded-full bg-[#4b6a4a] px-5 text-[15px] font-semibold text-white hover:bg-[#3d573c]"
                >
                    <Link href="/book-a-demo">Book a demo</Link>
                </Button>
            </div>
        </div>
    );
}
