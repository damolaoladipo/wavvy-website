'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    requestDemo,
    type DemoField,
    type DemoRequestState,
} from '@/app/book-a-demo/actions';
import { DemoIntro } from './demo-intro';

const initialState: DemoRequestState = {
    status: 'idle',
    values: { fullName: '', email: '', company: '', companyType: '', notes: '' },
};

const companyTypes = [
    { value: 'in-house', short: 'In-house', long: 'In-house recruitment team', summary: 'in-house team' },
    { value: 'agency', short: 'Agency', long: 'Recruitment agency', summary: 'agency' },
    { value: 'other', short: 'Other', long: 'Other', summary: 'team' },
] as const;

const fieldOrder: DemoField[] = ['fullName', 'email', 'company', 'companyType'];

const inputBase =
    'block h-[52px] w-full rounded-[12px] border bg-white px-4 text-base text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9a9a92] focus-visible:border-[#4b6a4a] focus-visible:ring-[3px] focus-visible:ring-[#4b6a4a]/20';

function inputState(invalid: boolean) {
    return invalid
        ? 'border-[#b42318] bg-[#fff5f4] focus-visible:border-[#b42318] focus-visible:ring-[#b42318]/15'
        : 'border-[#d3d2c7]';
}

export function DemoRequest() {
    const [state, formAction, pending] = useActionState(requestDemo, initialState);
    const [editing, setEditing] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const successRef = useRef<HTMLHeadingElement>(null);

    const showSuccess = state.status === 'success' && !editing;
    const errors = state.status === 'error' ? state.errors : {};
    const values = state.values;

    useEffect(() => {
        if (state.status === 'error') {
            const firstInvalid = fieldOrder.find((field) => errors[field]);
            if (firstInvalid) {
                formRef.current
                    ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
                    ?.focus();
            }
        }
        if (state.status === 'success') {
            setEditing(false);
            successRef.current?.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    const describedBy = (field: DemoField) =>
        errors[field] ? `${field}-error` : undefined;

    return (
        <div className="mx-auto grid max-w-[1200px] gap-6 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_546px] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16 xl:px-0">
            <div className={cn(showSuccess && 'hidden lg:block')}>
                <DemoIntro />
            </div>

            <div className="rounded-[20px] border border-[#e5e5df] bg-white p-5 sm:p-8 lg:self-start lg:rounded-[28px] lg:p-10 lg:shadow-[0_24px_60px_-20px_rgba(26,26,26,0.18)]">
                {showSuccess ? (
                    <DemoSuccess
                        headingRef={successRef}
                        values={values}
                        onEdit={() => setEditing(true)}
                    />
                ) : (
                    <form
                        ref={formRef}
                        action={formAction}
                        noValidate
                        aria-labelledby="request-demo-heading"
                    >
                        <h2
                            id="request-demo-heading"
                            className="hidden text-[24px] font-semibold tracking-[-0.01em] lg:block"
                        >
                            Request your demo
                        </h2>
                        <p className="text-[13px] text-[#6b6b65] lg:mt-1.5">
                            All fields are required unless marked optional.
                        </p>

                        {state.status === 'error' && (
                            <p
                                role="alert"
                                className="mt-4 rounded-[12px] bg-[#fee2e2] px-4 py-3 text-[15px] text-[#b42318]"
                            >
                                Please fix the highlighted fields.
                            </p>
                        )}

                        <div className="mt-5 flex flex-col gap-5">
                            <TextField
                                id="fullName"
                                label="Full name"
                                autoComplete="name"
                                placeholder="Sarah Kowalczyk"
                                defaultValue={values.fullName}
                                error={errors.fullName}
                                describedBy={describedBy('fullName')}
                            />
                            <TextField
                                id="email"
                                label="Work email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                placeholder="sarah@company.com"
                                defaultValue={values.email}
                                error={errors.email}
                                describedBy={describedBy('email')}
                            />
                            <TextField
                                id="company"
                                label="Company name"
                                autoComplete="organization"
                                placeholder="Northwind Recruitment"
                                defaultValue={values.company}
                                error={errors.company}
                                describedBy={describedBy('company')}
                            />

                            <fieldset aria-describedby={describedBy('companyType')}>
                                <legend className="text-[15px] font-medium">
                                    Company type
                                </legend>
                                <div className="mt-2.5 grid gap-2 sm:grid-cols-3">
                                    {companyTypes.map((type) => (
                                        <label key={type.value} className="relative block">
                                            <input
                                                type="radio"
                                                name="companyType"
                                                value={type.value}
                                                defaultChecked={values.companyType === type.value}
                                                aria-invalid={errors.companyType ? true : undefined}
                                                className="peer sr-only"
                                            />
                                            <span
                                                className={cn(
                                                    'flex h-12 cursor-pointer items-center rounded-[12px] border bg-white px-4 text-base font-medium transition-colors hover:border-[#4b6a4a] sm:justify-center sm:px-2',
                                                    'peer-checked:border-[#4b6a4a] peer-checked:bg-[#eef4e8] peer-checked:text-[#2f472e] peer-checked:ring-1 peer-checked:ring-[#4b6a4a]',
                                                    'peer-focus-visible:ring-[3px] peer-focus-visible:ring-[#4b6a4a]/25',
                                                    errors.companyType
                                                        ? 'border-[#b42318]'
                                                        : 'border-[#d3d2c7]',
                                                )}
                                            >
                                                <span className="sm:hidden">{type.long}</span>
                                                <span className="hidden sm:inline">{type.short}</span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                <FieldError id="companyType-error" message={errors.companyType} />
                            </fieldset>

                            <div>
                                <label htmlFor="notes" className="text-[15px] font-medium">
                                    What would you like to see?{' '}
                                    <span className="font-normal text-[#6b6b65]">(optional)</span>
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows={3}
                                    maxLength={1000}
                                    defaultValue={values.notes}
                                    placeholder="e.g. We screen ~150 candidates a month for 3 clients"
                                    className={cn(
                                        inputBase,
                                        inputState(false),
                                        'mt-2 h-auto min-h-[90px] resize-y py-3',
                                    )}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={pending}
                            className="mt-7 flex h-14 w-full items-center justify-center rounded-full bg-[#4b6a4a] text-lg font-semibold text-white transition-colors hover:bg-[#3d573c] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#4b6a4a]/35 focus-visible:ring-offset-2 disabled:opacity-70"
                        >
                            {pending ? 'Sending…' : 'Book a demo'}
                        </button>
                        <p className="mt-3 text-center text-[13px] text-[#6b6b65]">
                            No commitment. We only use your details to arrange the demo.{' '}
                            <Link href="#" className="underline underline-offset-2 hover:text-[#4b6a4a]">
                                Privacy policy
                            </Link>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}

function TextField({
    id,
    label,
    error,
    describedBy,
    ...inputProps
}: {
    id: DemoField;
    label: string;
    error?: string;
    describedBy?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div>
            <label htmlFor={id} className="text-[15px] font-medium">
                {label}
            </label>
            <input
                id={id}
                name={id}
                type="text"
                required
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy}
                className={cn(inputBase, inputState(Boolean(error)), 'mt-2')}
                {...inputProps}
            />
            <FieldError id={`${id}-error`} message={error} />
        </div>
    );
}

function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) return null;
    return (
        <p id={id} className="mt-1.5 text-sm text-[#b42318]">
            {message}
        </p>
    );
}

function DemoSuccess({
    headingRef,
    values,
    onEdit,
}: {
    headingRef: React.RefObject<HTMLHeadingElement | null>;
    values: DemoRequestState['values'];
    onEdit: () => void;
}) {
    const firstName = values.fullName.split(/\s+/)[0];
    const typeSummary =
        companyTypes.find((type) => type.value === values.companyType)?.summary ?? 'team';

    const steps = [
        {
            title: 'We review your request',
            detail: `So the demo matches ${values.company} and your ${typeSummary}.`,
        },
        {
            title: 'We email you to agree a time',
            detail: (
                <>
                    Look out for a message at {values.email}.{' '}
                    <span className="font-medium text-[#9a3e0b]">[VALIDATE response time]</span>
                </>
            ),
        },
        {
            title: 'We walk you through Wavvy',
            detail: 'Using one of your roles, with time for your questions.',
        },
    ];

    return (
        <div aria-live="polite">
            <span className="flex size-[52px] items-center justify-center rounded-full bg-[#dce8d0] lg:size-14">
                <Check className="size-6 text-[#4b6a4a]" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <h2
                ref={headingRef}
                tabIndex={-1}
                className="mt-6 text-balance text-[26px] font-semibold leading-[1.2] tracking-[-0.01em] outline-none lg:text-[30px]"
            >
                Thanks, {firstName}. Your request is in.
            </h2>
            <p className="mt-3 hidden text-base text-[#4a4a45] sm:block">
                Here&apos;s what happens next:
            </p>
            <ol className="mt-5 flex flex-col gap-5">
                {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-3">
                        <span
                            className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#4b6a4a] text-xs font-semibold text-white lg:size-7"
                            aria-hidden="true"
                        >
                            {index + 1}
                        </span>
                        <div className="pt-0.5">
                            <p className="text-base font-medium leading-5">{step.title}</p>
                            <p className="mt-1 text-sm leading-5 text-[#6b6b65]">{step.detail}</p>
                        </div>
                    </li>
                ))}
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                    href="/how-it-works"
                    className="flex h-12 items-center justify-center rounded-full bg-[#4b6a4a] px-6 text-base font-semibold text-white transition-colors hover:bg-[#3d573c]"
                >
                    Explore how it works
                </Link>
                <button
                    type="button"
                    onClick={onEdit}
                    className="flex h-12 items-center justify-center rounded-full border border-[#d3d2c7] bg-white px-6 text-base font-medium transition-colors hover:border-[#4b6a4a]"
                >
                    Edit my details
                </button>
            </div>
        </div>
    );
}
