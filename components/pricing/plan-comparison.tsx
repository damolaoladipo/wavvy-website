import { Fragment } from 'react';
import {
    type PlanLimits,
    formatLimit,
    planOrder,
    pricingPlans,
} from '@/lib/pricing';
import { cn } from '@/lib/utils';

type Cell = true | false | string;

function limitRow(key: keyof PlanLimits): [Cell, Cell, Cell] {
    const [a, b, c] = planOrder.map((id) =>
        formatLimit(pricingPlans[id].limits[key]),
    );
    return [a, b, c];
}

type Group = {
    title: string;
    rows: { feature: string; values: [Cell, Cell, Cell] }[];
};

const planNames = ['Starter', 'Growth', 'Enterprise'] as const;
const FEATURED_INDEX = 1;

const groups: Group[] = [
    {
        title: 'Screening',
        rows: [
            { feature: 'Asynchronous AI video interviews', values: [true, true, true] },
            { feature: 'Device check and practice question', values: [true, true, true] },
            { feature: 'Custom evaluation criteria and weights', values: [true, true, true] },
            { feature: 'Active recruitments', values: limitRow('activeRecruitments') },
            { feature: 'AI interviews per month', values: limitRow('interviewsPerMonth') },
        ],
    },
    {
        title: 'AI insights',
        rows: [
            { feature: 'Summaries and match scores', values: [true, true, true] },
            { feature: 'Strengths and areas of concern', values: [true, true, true] },
            { feature: 'Recordings and transcripts', values: [true, true, true] },
            { feature: 'Side-by-side candidate comparison', values: [false, true, true] },
        ],
    },
    {
        title: 'Team and clients',
        rows: [
            { feature: 'Team seats', values: limitRow('teamSeats') },
            { feature: 'Multiple clients', values: [false, true, true] },
            { feature: 'ATS connection', values: [false, '[VALIDATE]', '[VALIDATE]'] },
            { feature: 'Onboarding for your team', values: [false, false, true] },
        ],
    },
];

function CellValue({ value, featured }: { value: Cell; featured: boolean }) {
    if (value === true) {
        return (
            <>
                <span aria-hidden="true">✓</span>
                <span className="sr-only">Included</span>
            </>
        );
    }
    if (value === false) {
        return (
            <>
                <span aria-hidden="true">—</span>
                <span className="sr-only">Not included</span>
            </>
        );
    }
    return (
        <span className={featured ? 'font-medium' : 'text-[#6b6c64]'}>
            {value}
        </span>
    );
}

export function PlanComparison() {
    return (
        <section
            aria-labelledby="compare-heading"
            className="bg-white px-5 py-20 lg:py-24"
        >
            <div className="mx-auto flex max-w-[1136px] flex-col">
                <h2
                    id="compare-heading"
                    className="text-balance text-center text-[34px] font-bold leading-[1.1] tracking-[-0.035em] text-[#1a1a1a] sm:text-[42px]"
                >
                    Compare plans in detail
                </h2>

                <div className="mt-12 overflow-x-auto rounded-[18px] border border-[#e5e5df]">
                    <table className="w-full min-w-[720px] border-collapse text-left text-[15px]">
                        <caption className="sr-only">
                            Feature comparison across Starter, Growth and
                            Enterprise plans
                        </caption>
                        <thead>
                            <tr className="border-b border-[#e5e5df]">
                                <th
                                    scope="col"
                                    className="w-[42%] px-6 py-5 text-[13px] font-medium text-[#6b6c64]"
                                >
                                    Feature
                                </th>
                                {planNames.map((name, i) => (
                                    <th
                                        key={name}
                                        scope="col"
                                        className={cn(
                                            'px-6 py-5 font-semibold',
                                            i === FEATURED_INDEX
                                                ? 'border-b-2 border-[#4b6a4a] bg-[#f1f4ec] text-[#4b6a4a]'
                                                : 'text-[#1a1a1a]',
                                        )}
                                    >
                                        {name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map((group) => (
                                <Fragment key={group.title}>
                                    <tr className="border-b border-[#e5e5df] bg-[#fafaf9]">
                                        <th
                                            scope="colgroup"
                                            colSpan={4}
                                            className="px-6 pt-6 pb-3 text-xs font-medium uppercase tracking-[0.1em] text-[#6b6c64]"
                                        >
                                            {group.title}
                                        </th>
                                    </tr>
                                    {group.rows.map((row) => (
                                        <tr
                                            key={row.feature}
                                            className="border-b border-[#e5e5df] last:border-b-0 [tbody>&:last-child]:border-b-0"
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-normal text-[#1a1a1a]"
                                            >
                                                {row.feature}
                                            </th>
                                            {row.values.map((value, i) => {
                                                const featured =
                                                    i === FEATURED_INDEX;
                                                return (
                                                    <td
                                                        key={planNames[i]}
                                                        className={cn(
                                                            'px-6 py-4',
                                                            featured
                                                                ? 'bg-[#f1f4ec] text-[#4b6a4a]'
                                                                : 'text-[#1a1a1a]',
                                                        )}
                                                    >
                                                        <CellValue
                                                            value={value}
                                                            featured={featured}
                                                        />
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-[13px] text-[#6b6c64]">
                    ✓ included · — not included · [VALIDATE] items are
                    placeholders to confirm before launch.
                </p>
            </div>
        </section>
    );
}
