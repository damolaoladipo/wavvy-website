import Link from 'next/link';
import {
    ArrowRight,
    BarChart3,
    Columns3,
    FileText,
    Layers,
    ListChecks,
    Scale,
    ShieldCheck,
    UserCheck,
    Video,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CheckList, StepSection } from '@/components/how-it-works/step-layout';
import {
    AiInsightsVisual,
    CandidateInterviewVisual,
    CompareCandidatesVisual,
    CreateInterviewVisual,
    InviteCandidatesVisual,
} from '@/components/how-it-works/step-visuals';

const capabilities = [
    {
        id: 'builder',
        icon: ListChecks,
        title: 'Interview builder',
        body: 'Turn a job description into structured questions and weighted criteria you can edit.',
    },
    {
        id: 'candidate-experience',
        icon: Video,
        title: 'Candidate experience',
        body: 'Async video interviews on any device, under your company’s name.',
    },
    {
        id: 'insights',
        icon: BarChart3,
        title: 'Explainable AI insights',
        body: 'Summaries, criteria scores and a match score, each linked to the answer behind it.',
    },
    {
        id: 'compare',
        icon: Columns3,
        title: 'Side-by-side comparison',
        body: 'Line up to three candidates against the same criteria.',
    },
    {
        id: 'workspace',
        icon: Layers,
        title: 'Recruitments & clients',
        body: 'One workspace for every role, with separate client spaces for agencies.',
    },
    {
        id: 'responsible-ai',
        icon: ShieldCheck,
        title: 'Responsible by design',
        body: 'AI assists. Recruiters make every decision about who moves forward.',
    },
];

export function ProductHero() {
    return (
        <section
            aria-labelledby="product-heading"
            className="bg-[#f5f5f0] px-5 pt-20 pb-16 lg:pt-24 lg:pb-20"
        >
            <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4b6a4a]">
                    Product
                </p>
                <h1
                    id="product-heading"
                    className="mt-4 text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.035em] text-[#1a1a1a] sm:text-[48px] md:text-[56px] lg:text-[68px]"
                >
                    One workspace for every first-round interview.
                </h1>
                <p className="mt-6 max-w-[600px] text-pretty text-lg leading-[1.6] text-[#4a4b44] sm:text-[19px]">
                    Build structured interviews, let candidates answer on their
                    own schedule, and review explainable insights side by side —
                    all before you pick up the phone.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                    <Button
                        asChild
                        className="h-12 rounded-full bg-[#4b6a4a] px-6 text-[15px] font-semibold text-white hover:bg-[#3d573c]"
                    >
                        <Link href="/book-a-demo">
                            Book a demo
                            <ArrowRight aria-hidden="true" className="size-4" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="h-12 rounded-full border-[#d6d6cf] bg-white px-6 text-[15px] font-semibold text-[#1a1a1a] hover:bg-[#f3f3ec]"
                    >
                        <Link href="/how-it-works">See how it works</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export function ProductCapabilities() {
    return (
        <section
            id="features"
            aria-labelledby="capabilities-heading"
            className="scroll-mt-24 bg-[#f5f5f0] px-5 pb-20 lg:pb-24"
        >
            <div className="mx-auto max-w-[1136px]">
                <h2 id="capabilities-heading" className="sr-only">
                    Capabilities
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {capabilities.map(({ id, icon: Icon, title, body }) => (
                        <li key={id}>
                            <Link
                                href={`#${id}`}
                                className="group flex h-full flex-col rounded-[18px] border border-[#e5e5df] bg-white p-6 transition-colors hover:border-[#4b6a4a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b6a4a]"
                            >
                                <span className="flex size-10 items-center justify-center rounded-[10px] bg-[#dde8cf] text-[#4b6a4a]">
                                    <Icon aria-hidden="true" className="size-5" />
                                </span>
                                <h3 className="mt-5 text-lg font-semibold text-[#1a1a1a]">
                                    {title}
                                </h3>
                                <p className="mt-2 text-[15px] leading-[1.6] text-[#4a4b44]">
                                    {body}
                                </p>
                                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#4b6a4a]">
                                    Learn more
                                    <ArrowRight
                                        aria-hidden="true"
                                        className="size-4 transition-transform group-hover:translate-x-0.5"
                                    />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function ProductFeatures() {
    return (
        <div className="divide-y divide-[#e5e5df] border-t border-[#e5e5df]">
            <StepSection
                id="builder"
                eyebrow="Interview builder"
                title="Structured interviews, built from the role"
                description="Paste in the job details and Wavvy drafts role-specific questions and evaluation criteria. You stay in control of every word before it goes live."
                visual={<CreateInterviewVisual />}
            >
                <CheckList
                    items={[
                        'Questions generated from your job description',
                        'Weighted criteria so what matters most counts most',
                        'Answer time and thinking time per question',
                        'Same questions for every candidate in a recruitment',
                    ]}
                />
            </StepSection>

            <StepSection
                id="candidate-experience"
                eyebrow="Candidate experience"
                title="An interview candidates can take on their terms"
                description="No account, no scheduling. Candidates open a link and complete a calm, guided interview whenever it suits them."
                visual={<CandidateInterviewVisual />}
                visualFirst
            >
                <CheckList
                    items={[
                        'Works on desktop and mobile with a camera and microphone',
                        'Device check and an ungraded practice question first',
                        'Reconnect and carry on if the connection drops',
                        'Shown under your company or client’s name',
                    ]}
                />
            </StepSection>

            <StepSection
                id="insights"
                eyebrow="Explainable AI insights"
                title="Every score comes with its reasons"
                description="Each completed interview returns a written summary, a score per criterion and an overall match score — with the recording and transcript one click away."
                visual={<AiInsightsVisual />}
            >
                <CheckList
                    items={[
                        'Strengths and areas to explore for each candidate',
                        'Scores linked to the exact answer they came from',
                        'Full recordings and searchable transcripts',
                    ]}
                />
            </StepSection>

            <StepSection
                id="compare"
                eyebrow="Side-by-side comparison"
                title="Shortlists you can explain"
                description="Pick up to three candidates and compare them criterion by criterion. Differences are easy to spot and easy to share with a hiring manager."
                visual={<CompareCandidatesVisual />}
                visualFirst
            />

            <StepSection
                id="workspace"
                eyebrow="Recruitments & clients"
                title="Every role in one place"
                description="Run all your open recruitments from one dashboard. Agencies get separate client spaces, so each client’s roles, candidates and branding stay apart."
                visual={<InviteCandidatesVisual />}
            >
                <CheckList
                    items={[
                        'One shareable link per recruitment',
                        'Invited, in progress and completed at a glance',
                        'Shared team seats and notes',
                    ]}
                />
            </StepSection>
        </div>
    );
}

const principles = [
    {
        icon: UserCheck,
        title: 'Recruiters decide',
        body: 'Wavvy never advances or rejects a candidate on its own. A person makes every decision.',
    },
    {
        icon: FileText,
        title: 'Explainable, not a black box',
        body: 'Every score points back to the answer and criteria behind it, so you can check the reasoning.',
    },
    {
        icon: Scale,
        title: 'Consistent criteria',
        body: 'Every candidate in a recruitment gets the same questions, scored against the same criteria.',
    },
    {
        icon: ShieldCheck,
        title: 'Candidate data handled with care',
        body: 'You control retention, and candidates can ask to access or delete their data.',
        href: '/privacy',
    },
];

export function ProductResponsibleAi() {
    return (
        <section
            id="responsible-ai"
            aria-labelledby="responsible-ai-heading"
            className="scroll-mt-24 bg-[#1f201b] px-5 py-20 text-white lg:py-24"
        >
            <div className="mx-auto max-w-[1136px]">
                <p className="text-sm font-semibold text-[#b5cf95]">
                    Responsible by design
                </p>
                <h2
                    id="responsible-ai-heading"
                    className="mt-3 max-w-[620px] text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[42px]"
                >
                    AI assists. Recruiters decide.
                </h2>
                <p className="mt-5 max-w-[560px] text-pretty text-lg leading-[1.6] text-[#c9cac2]">
                    Wavvy is built to support human judgement in hiring, not to
                    replace it.
                </p>
                <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {principles.map(({ icon: Icon, title, body, href }) => (
                        <li
                            key={title}
                            className="flex flex-col rounded-[18px] border border-white/10 bg-white/[0.04] p-6"
                        >
                            <Icon
                                aria-hidden="true"
                                className="size-5 text-[#b5cf95]"
                            />
                            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                            <p className="mt-2 text-[15px] leading-[1.6] text-[#c9cac2]">
                                {body}
                            </p>
                            {href ? (
                                <Link
                                    href={href}
                                    className="mt-4 text-sm font-semibold text-[#b5cf95] underline underline-offset-4 hover:text-white"
                                >
                                    Read our privacy policy
                                </Link>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
