import type { ReactNode } from 'react';
import { Minus, Plus } from 'lucide-react';

function Validate({ children }: { children: ReactNode }) {
    return <strong className="font-semibold text-[#9a3c0e]">{children}</strong>;
}

const faqs: { question: string; answer: ReactNode }[] = [
    {
        question: 'Is there a free trial?',
        answer: (
            <>
                We start with a demo so we can set Wavvy up around one of your
                real roles.{' '}
                <Validate>[VALIDATE: trial or free plan availability.]</Validate>
            </>
        ),
    },
    {
        question: 'What counts as an AI interview?',
        answer: (
            <>
                One candidate completing one structured interview for one
                recruitment.{' '}
                <Validate>[VALIDATE: billing unit definition.]</Validate>
            </>
        ),
    },
    {
        question: 'Can I change plans later?',
        answer: (
            <>
                Yes. You can move up or down as your hiring volume changes.{' '}
                <Validate>[VALIDATE: contract terms.]</Validate>
            </>
        ),
    },
    {
        question: 'Do candidates pay anything?',
        answer: 'No. Interviews are always free for candidates, on any device with a camera and microphone.',
    },
    {
        question: 'Do you offer pricing for agencies with many clients?',
        answer: 'Yes. Growth is built for agencies and lets you manage multiple clients in one workspace. For very high volume, talk to us about Enterprise.',
    },
];

export function PricingFaq() {
    return (
        <section
            aria-labelledby="pricing-faq-heading"
            className="bg-white px-5 py-20 lg:py-24"
        >
            <div className="mx-auto flex max-w-[816px] flex-col items-center">
                <h2
                    id="pricing-faq-heading"
                    className="text-balance text-center text-[34px] font-bold leading-[1.1] tracking-[-0.035em] text-[#1a1a1a] sm:text-[42px]"
                >
                    Pricing questions
                </h2>
                <div className="mt-12 flex w-full flex-col gap-2.5">
                    {faqs.map((faq, i) => (
                        <details
                            key={faq.question}
                            name="pricing-faq"
                            open={i === 0}
                            className="group rounded-[14px] border border-[#e5e5df] bg-white"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-[17px] font-medium text-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b6a4a] [&::-webkit-details-marker]:hidden">
                                {faq.question}
                                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f5f5f0] text-[#4b6a4a]">
                                    <Plus
                                        aria-hidden="true"
                                        className="size-3.5 group-open:hidden"
                                    />
                                    <Minus
                                        aria-hidden="true"
                                        className="hidden size-3.5 group-open:block"
                                    />
                                </span>
                            </summary>
                            <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#4a4b44]">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
