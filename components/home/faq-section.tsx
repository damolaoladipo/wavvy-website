import { Minus, Plus } from 'lucide-react';

const faqs = [
    {
        question: 'What is an AI interview?',
        answer: 'A structured interview candidates complete on video, in their own time. Each candidate answers the same role-specific questions; Wavvy transcribes the answers and analyses them against the evaluation criteria you set.',
    },
    {
        question: 'Does Wavvy replace recruiters?',
        answer: 'No. Wavvy prepares the insight, but recruiters decide who moves forward. Every score is explained and linked to the answers behind it.',
    },
    {
        question: 'Do candidates need to create an account?',
        answer: 'No. Candidates receive a single link and can start their interview straight away.',
    },
    {
        question: 'Can candidates complete interviews at any time?',
        answer: 'Yes. There is no scheduling. Candidates interview whenever it suits them, from any device with a camera.',
    },
    {
        question: 'How does Wavvy evaluate candidates?',
        answer: 'Every candidate answers the same questions and is assessed against the same criteria you define for the role, so results are consistent and comparable.',
    },
    {
        question: 'Can recruiters review interview recordings?',
        answer: 'Yes. Every interview includes the full recording and transcript alongside the AI insights.',
    },
    {
        question: 'Is Wavvy an ATS?',
        answer: 'No. Wavvy handles first-round screening interviews and works alongside the tools your team already uses.',
    },
    {
        question: 'Can recruitment agencies use Wavvy for multiple clients?',
        answer: 'Yes. Agencies can manage recruitments for multiple clients in one workspace.',
    },
    {
        question: 'How is candidate data handled?',
        answer: 'Candidate data is used only to run and review interviews for your recruitments. Contact us for details on storage and data terms.',
    },
    {
        question: 'How can I get started?',
        answer: 'Book a demo and we will walk you through setting up your first AI interview.',
    },
];

export function FaqSection() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="px-5 py-20 lg:py-28"
        >
            <div className="mx-auto flex max-w-[816px] flex-col items-center">
                <h2
                    id="faq-heading"
                    className="text-balance text-center text-[36px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[46px]"
                >
                    Questions recruiters ask us
                </h2>
                <div className="mt-12 flex w-full flex-col gap-2.5">
                    {faqs.map((faq, i) => (
                        <details
                            key={faq.question}
                            name="faq"
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
