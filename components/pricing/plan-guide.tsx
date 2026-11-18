import Link from 'next/link';

const personas = [
    {
        title: 'I recruit for my own company',
        body: 'A few open roles at a time and a small team doing the screening.',
        cta: 'Start with Starter',
    },
    {
        title: 'I run an agency',
        body: 'Several clients, high candidate volume and shortlists due every week.',
        cta: 'Growth fits best',
    },
    {
        title: 'I lead talent acquisition',
        body: 'Many recruiters, many roles and a need for one consistent process.',
        cta: 'Talk to us about Enterprise',
    },
];

export function PlanGuide() {
    return (
        <section
            aria-labelledby="plan-guide-heading"
            className="border-y border-[#e5e5df] bg-white px-5 py-20 lg:py-24"
        >
            <div className="mx-auto flex max-w-[1136px] flex-col items-center">
                <h2
                    id="plan-guide-heading"
                    className="text-balance text-center text-[34px] font-bold leading-[1.1] tracking-[-0.035em] text-[#1a1a1a] sm:text-[42px]"
                >
                    Which plan is right for you?
                </h2>
                <ul className="mt-12 flex w-full flex-col gap-5 md:flex-row">
                    {personas.map((persona) => (
                        <li
                            key={persona.title}
                            className="flex flex-1 flex-col rounded-[18px] bg-[#f3f4ee] p-7"
                        >
                            <h3 className="text-lg font-semibold text-[#1a1a1a]">
                                {persona.title}
                            </h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-[#4a4b44]">
                                {persona.body}
                            </p>
                            <Link
                                href="#plans"
                                className="mt-4 text-sm font-semibold text-[#4b6a4a] hover:underline"
                            >
                                {persona.cta}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
