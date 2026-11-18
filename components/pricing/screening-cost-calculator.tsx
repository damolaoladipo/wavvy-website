'use client';

import { useId, useState } from 'react';
import {
    HOURS_PER_WORKING_WEEK,
    RECRUITER_HOURLY_COST,
    formatUsd,
    priceFor,
    recommendPlan,
} from '@/lib/pricing';

type SliderProps = {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    suffix?: string;
    onChange: (value: number) => void;
};

function RangeSlider({
    label,
    value,
    min,
    max,
    step,
    suffix,
    onChange,
}: SliderProps) {
    const id = useId();
    const percent = ((value - min) / (max - min)) * 100;
    const display = suffix ? `${value} ${suffix}` : String(value);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
                <label
                    htmlFor={id}
                    className="text-[15px] font-medium text-[#1a1a1a]"
                >
                    {label}
                </label>
                <output
                    htmlFor={id}
                    className="text-xl font-semibold tabular-nums text-[#1a1a1a]"
                >
                    {display}
                </output>
            </div>
            <input
                id={id}
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                aria-valuetext={display}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{
                    background: `linear-gradient(to right, #4b6a4a ${percent}%, #e5e5df ${percent}%)`,
                }}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4b6a4a] [&::-moz-range-thumb]:size-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#4b6a4a] [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:size-[18px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#4b6a4a] [&::-webkit-slider-thumb]:bg-white"
            />
        </div>
    );
}

export function ScreeningCostCalculator() {
    const [candidates, setCandidates] = useState(120);
    const [minutes, setMinutes] = useState(35);

    const exactHours = (candidates * minutes) / 60;
    const hours = Math.round(exactHours);
    const weeks = (exactHours / HOURS_PER_WORKING_WEEK).toFixed(1);
    const screeningCost = Math.round(exactHours * RECRUITER_HOURLY_COST);
    const plan = recommendPlan(candidates);
    const planPrice = priceFor(plan, 'monthly');

    return (
        <section
            aria-labelledby="calculator-heading"
            className="bg-white px-5 pb-20 lg:pb-24"
        >
            <div className="mx-auto flex max-w-[1136px] flex-col gap-10 rounded-3xl border border-[#e5e5df] bg-white p-6 sm:p-10 lg:flex-row lg:items-center lg:gap-12 lg:p-12">
                <div className="flex flex-1 flex-col">
                    <h2
                        id="calculator-heading"
                        className="text-balance text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px]"
                    >
                        What first-round screening costs your team today
                    </h2>
                    <p className="mt-4 text-pretty text-base leading-[1.55] text-[#4a4b44]">
                        Move the sliders to match your process. Include
                        scheduling, the call itself and writing up notes.
                    </p>
                    <div className="mt-10 flex flex-col gap-9">
                        <RangeSlider
                            label="Candidates screened per month"
                            value={candidates}
                            min={10}
                            max={800}
                            step={10}
                            onChange={setCandidates}
                        />
                        <RangeSlider
                            label="Minutes per screening (all-in)"
                            value={minutes}
                            min={5}
                            max={90}
                            step={5}
                            suffix="min"
                            onChange={setMinutes}
                        />
                    </div>
                </div>

                <div
                    aria-live="polite"
                    className="flex flex-1 flex-col rounded-[20px] bg-[#1e1f1a] p-8 text-[#f5f5f0] sm:p-9"
                >
                    <p className="text-sm text-[#b9bab0]">
                        Recruiter time on first rounds
                    </p>
                    <p className="mt-3 flex items-baseline gap-1.5">
                        <span className="text-[64px] font-bold leading-none tracking-[-0.04em] tabular-nums">
                            {hours}
                        </span>
                        <span className="text-xl tracking-[-0.03em] text-[#b9bab0]">
                            hours / month
                        </span>
                    </p>
                    <p className="mt-5 text-pretty text-[15px] leading-[1.6] text-[#d6d7cf]">
                        {"That's roughly "}
                        <strong className="font-semibold text-[#b5d19a]">
                            {weeks} working weeks
                        </strong>{' '}
                        a month spent before anyone reaches a second
                        interview.
                    </p>
                    <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-[#3a3b35] pt-7">
                        <div className="flex flex-col gap-1">
                            <dt className="text-[13px] text-[#b9bab0]">
                                Recruiter cost today
                            </dt>
                            <dd className="text-2xl font-semibold tabular-nums tracking-[-0.02em]">
                                {formatUsd(screeningCost)}
                                <span className="text-sm font-normal text-[#b9bab0]">
                                    {' '}
                                    / month
                                </span>
                            </dd>
                        </div>
                        <div className="flex flex-col gap-1">
                            <dt className="text-[13px] text-[#b9bab0]">
                                Recommended plan
                            </dt>
                            <dd className="text-2xl font-semibold tracking-[-0.02em]">
                                {plan.name}
                                <span className="text-sm font-normal text-[#b9bab0]">
                                    {' '}
                                    {planPrice === null
                                        ? 'custom'
                                        : `${formatUsd(planPrice)} / month`}
                                </span>
                            </dd>
                        </div>
                    </dl>
                    <p className="mt-6 text-pretty text-sm leading-[1.6] text-[#d6d7cf]">
                        {planPrice !== null && screeningCost > planPrice ? (
                            <>
                                {'Based on '}
                                {formatUsd(RECRUITER_HOURLY_COST)}
                                {'/hour of recruiter time, first rounds cost about '}
                                <strong className="font-semibold text-[#b5d19a]">
                                    {formatUsd(screeningCost - planPrice)} more
                                </strong>
                                {' a month than Wavvy '}
                                {plan.name}
                                {'.'}
                            </>
                        ) : (
                            'With Wavvy, first rounds run asynchronously. Your time goes into reviewing insights and talking to shortlisted candidates.'
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
}
