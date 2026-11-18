import { Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VisualFrame } from './step-layout';

const cardClass =
    'rounded-[18px] border border-[#e5e5df] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-6';

export function CreateInterviewVisual() {
    const wizard = [
        { label: 'Job information', state: 'done' },
        { label: 'Criteria', state: 'done' },
        { label: 'Interview', state: 'current' },
        { label: 'Publish', state: 'todo' },
    ] as const;
    const questions = [
        { id: 'Q1', text: 'Walk us through how you plan a research study.', time: '3 min' },
        { id: 'Q2', text: 'Tell us about a design decision you had to defend.', time: '3 min' },
        { id: 'Q3', text: 'How have you built or scaled a design system?', time: '4 min', editing: true },
        { id: 'Q4', text: 'Describe a time you simplified a complex flow.', time: '3 min' },
    ];

    return (
        <VisualFrame tone="green">
            <div className={cardClass}>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs">
                    {wizard.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-2">
                            {item.state === 'done' ? (
                                <span className="flex size-5 items-center justify-center rounded-full bg-[#4b6a4a] text-white">
                                    <Check className="size-3" strokeWidth={3} />
                                </span>
                            ) : (
                                <span
                                    className={cn(
                                        'flex size-5 items-center justify-center rounded-full border text-[10px] font-semibold',
                                        item.state === 'current'
                                            ? 'border-[#1a1a1a] text-[#1a1a1a]'
                                            : 'border-[#b8b9b1] text-[#7a7b73]',
                                    )}
                                >
                                    {index + 1}
                                </span>
                            )}
                            <span
                                className={cn(
                                    'font-medium',
                                    item.state === 'done' && 'text-[#4b6a4a]',
                                    item.state === 'current' && 'text-[#1a1a1a]',
                                    item.state === 'todo' && 'text-[#7a7b73]',
                                )}
                            >
                                {item.label}
                            </span>
                            {index < wizard.length - 1 ? (
                                <span className="hidden h-px w-2 bg-[#c8c9c1] sm:block" />
                            ) : null}
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-base font-semibold text-[#1a1a1a]">
                    Interview questions
                </p>
                <p className="mt-0.5 text-xs text-[#7a7b73]">
                    Senior UX Designer · 5 questions · about 15 minutes
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                    {questions.map((q) => (
                        <li
                            key={q.id}
                            className={cn(
                                'flex items-center gap-3 rounded-xl border px-3.5 py-3 text-[13px]',
                                q.editing
                                    ? 'border-2 border-[#8fae6f] bg-[#f1f5ea]'
                                    : 'border-[#e5e5df]',
                            )}
                        >
                            <span className="font-semibold text-[#4b6a4a]">{q.id}</span>
                            <span className="min-w-0 flex-1 truncate text-[#2f302b]">
                                {q.text}
                            </span>
                            <span className="hidden text-[#7a7b73] sm:inline">{q.time}</span>
                            <span className="font-medium text-[#4b6a4a]">
                                {q.editing ? 'Editing' : 'Edit'}
                            </span>
                        </li>
                    ))}
                    <li className="rounded-xl border border-dashed border-[#c8c9c1] px-3.5 py-3 text-[13px] text-[#4b6a4a]">
                        + Add question
                    </li>
                </ul>
            </div>
        </VisualFrame>
    );
}

export function InviteCandidatesVisual() {
    const stats = [
        { value: 12, label: 'Invited', className: 'bg-[#eeeee7] text-[#1a1a1a]' },
        { value: 5, label: 'In progress', className: 'bg-[#fdf1c7] text-[#9a4a12]' },
        { value: 15, label: 'Completed', className: 'bg-[#dde8cf] text-[#4b6a4a]' },
    ];

    return (
        <VisualFrame tone="beige">
            <div className={cardClass}>
                <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-[#1a1a1a]">
                        Invite candidates
                    </p>
                    <span className="rounded-full bg-[#eeeee7] px-3 py-1 text-xs font-medium text-[#2f302b]">
                        Client: Northwind
                    </span>
                </div>
                <p className="mt-5 text-[13px] font-medium text-[#4a4b44]">Share a link</p>
                <div className="mt-2 flex gap-2">
                    <div className="flex h-10 min-w-0 flex-1 items-center truncate rounded-xl border border-[#e5e5df] px-3 text-[13px] text-[#4a4b44]">
                        wavvy.world/i/senior-ux-designer
                    </div>
                    <span className="flex h-10 items-center rounded-full bg-[#4b6a4a] px-4 text-[13px] font-semibold text-white">
                        Copy
                    </span>
                </div>
                <p className="mt-5 text-[13px] font-medium text-[#4a4b44]">
                    Or invite by email
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 rounded-xl border border-[#e5e5df] p-2 text-xs">
                    <span className="rounded-full bg-[#eeeee7] px-3 py-1.5 text-[#2f302b]">
                        marta.nowak@mail.com
                    </span>
                    <span className="rounded-full bg-[#eeeee7] px-3 py-1.5 text-[#2f302b]">
                        jakub.lis@mail.com
                    </span>
                    <span className="px-1 text-[#9a9b93]">Add more…</span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className={cn('rounded-xl py-4 text-center', s.className)}
                        >
                            <p className="text-xl font-bold">{s.value}</p>
                            <p className="mt-0.5 text-xs">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </VisualFrame>
    );
}

export function CandidateInterviewVisual() {
    return (
        <VisualFrame tone="dark">
            <div className="rounded-[18px] bg-white p-5">
                <div className="flex items-center justify-between gap-3 text-[13px]">
                    <p className="font-medium text-[#1a1a1a]">
                        Northwind · Senior UX Designer
                    </p>
                    <p className="shrink-0 text-[#7a7b73]">Question 3 of 5</p>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#7a7b73]">
                            Current question
                        </p>
                        <p className="mt-1.5 text-[15px] font-semibold leading-snug text-[#1a1a1a]">
                            How have you built or scaled a design system?
                        </p>
                        <p className="mt-4 rounded-xl bg-[#f3f3ec] p-3.5 text-xs leading-relaxed text-[#4a4b44]">
                            Tip: use a specific example — the situation, what
                            you did and the result.
                        </p>
                    </div>
                    <div className="relative flex min-h-[170px] items-center justify-center rounded-xl bg-[#2f302a]">
                        <span className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-[#b23a2a] px-2.5 py-1 text-[11px] font-medium text-white">
                            <span className="size-1.5 animate-pulse rounded-full bg-white" />
                            Recording
                        </span>
                        <span className="flex size-14 items-center justify-center rounded-full bg-[#4a4b44] text-base font-medium text-white">
                            MN
                        </span>
                    </div>
                </div>
                <div className="mt-5 flex items-center gap-4">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#eeeee7]">
                        <div className="h-full w-[45%] rounded-full bg-[#8fae6f]" />
                    </div>
                    <span className="text-xs font-medium tabular-nums text-[#1a1a1a]">
                        01:48 / 04:00
                    </span>
                    <span className="hidden rounded-full bg-[#4b6a4a] px-4 py-2 text-xs font-semibold text-white sm:inline">
                        Submit answer
                    </span>
                </div>
            </div>
        </VisualFrame>
    );
}

export function AiInsightsVisual() {
    const criteria = [
        { label: 'Design systems', score: 92, rating: 'Strong' },
        { label: 'User research', score: 88, rating: 'Strong' },
        { label: 'Communication', score: 80, rating: 'Good' },
        { label: 'Stakeholder management', score: 64, rating: 'Partial' },
    ];

    return (
        <VisualFrame tone="beige">
            <div className={cardClass}>
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-base font-semibold text-[#1a1a1a]">Marta Nowak</p>
                        <p className="mt-0.5 text-xs text-[#7a7b73]">
                            Senior UX Designer · completed today
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-[32px] font-bold leading-none text-[#4b6a4a]">86</p>
                        <p className="mt-1 text-[11px] text-[#7a7b73]">Match score</p>
                    </div>
                </div>
                <div className="mt-5 rounded-xl bg-[#f1f5ea] p-4">
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-[#4b6a4a]">
                        <Sparkles className="size-3.5" />
                        Summary
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#2f302b]">
                        Clear, structured answers. Led a design system rollout
                        across three product teams. Less detail on handling
                        disagreement with stakeholders.
                    </p>
                </div>
                <ul className="mt-5 flex flex-col gap-3.5">
                    {criteria.map((c) => (
                        <li key={c.label}>
                            <div className="flex items-center justify-between text-[13px]">
                                <span className="text-[#2f302b]">{c.label}</span>
                                <span
                                    className={cn(
                                        'font-semibold',
                                        c.rating === 'Strong' && 'text-[#4b6a4a]',
                                        c.rating === 'Good' && 'text-[#1a1a1a]',
                                        c.rating === 'Partial' && 'text-[#9a4a12]',
                                    )}
                                >
                                    {c.rating}
                                </span>
                            </div>
                            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#eeeee7]">
                                <div
                                    className={cn(
                                        'h-full rounded-full',
                                        c.rating === 'Partial' ? 'bg-[#d9a56b]' : 'bg-[#8fae6f]',
                                    )}
                                    style={{ width: `${c.score}%` }}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="mt-5 border-t border-[#eeeee7] pt-4 text-xs text-[#7a7b73]">
                    Every score links to the answer it came from.
                </p>
            </div>
        </VisualFrame>
    );
}

type Rating = 'Strong' | 'Good' | 'Partial';

const comparison: {
    name: string;
    score: number;
    top?: boolean;
    ratings: [string, Rating][];
}[] = [
    {
        name: 'Marta N.',
        score: 86,
        top: true,
        ratings: [
            ['Systems', 'Strong'],
            ['Research', 'Strong'],
            ['Comms', 'Good'],
            ['Stakeholders', 'Partial'],
        ],
    },
    {
        name: 'Jakub L.',
        score: 74,
        ratings: [
            ['Systems', 'Good'],
            ['Research', 'Strong'],
            ['Comms', 'Partial'],
            ['Stakeholders', 'Good'],
        ],
    },
    {
        name: 'Ewa Z.',
        score: 61,
        ratings: [
            ['Systems', 'Partial'],
            ['Research', 'Good'],
            ['Comms', 'Good'],
            ['Stakeholders', 'Partial'],
        ],
    },
];

const ratingColor: Record<Rating, string> = {
    Strong: 'text-[#4b6a4a]',
    Good: 'text-[#1a1a1a]',
    Partial: 'text-[#9a4a12]',
};

export function CompareCandidatesVisual() {
    return (
        <VisualFrame tone="green">
            <div className="grid gap-3 sm:grid-cols-3">
                {comparison.map((c) => (
                    <div
                        key={c.name}
                        className={cn(
                            'rounded-[14px] bg-white p-4',
                            c.top && 'outline-2 outline-[#4b6a4a]',
                        )}
                    >
                        <p className="text-[13px] font-medium text-[#1a1a1a]">{c.name}</p>
                        <p
                            className={cn(
                                'mt-2 text-[30px] font-bold leading-none',
                                c.top ? 'text-[#4b6a4a]' : 'text-[#1a1a1a]',
                            )}
                        >
                            {c.score}
                        </p>
                        <dl className="mt-4 flex flex-col gap-1.5 text-[11px]">
                            {c.ratings.map(([label, rating]) => (
                                <div key={label} className="flex justify-between gap-2">
                                    <dt className="text-[#4a4b44]">{label}</dt>
                                    <dd className={cn('font-semibold', ratingColor[rating])}>
                                        {rating}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>
        </VisualFrame>
    );
}

export function DecideVisual() {
    const rows = [
        {
            name: 'Marta Nowak · 86',
            status: 'Reviewed by you · note added',
            action: 'Move to next stage',
            primary: true,
        },
        { name: 'Jakub Lis · 74', status: 'Awaiting your review', action: 'Review' },
        { name: 'Ewa Zielińska · 61', status: 'Reviewed by you', action: 'Not a fit · feedback sent' },
    ];

    return (
        <ul aria-hidden="true" className="flex flex-col gap-3">
            {rows.map((row) => (
                <li
                    key={row.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#2f302a] px-5 py-4"
                >
                    <div className="min-w-0">
                        <p className="truncate text-[15px] font-medium text-white">{row.name}</p>
                        <p className="mt-0.5 truncate text-xs text-[#a9aaa2]">{row.status}</p>
                    </div>
                    <span
                        className={cn(
                            'shrink-0 rounded-full px-4 py-2 text-[13px] font-medium',
                            row.primary
                                ? 'bg-[#93b073] text-[#1a1a1a]'
                                : 'border border-white/30 text-white',
                        )}
                    >
                        {row.action}
                    </span>
                </li>
            ))}
        </ul>
    );
}
