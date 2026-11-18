import Link from 'next/link';
import { Button } from '@/components/ui/button';

const fits = [
    {
        title: 'Not another ATS',
        body: <>Wavvy handles screening. Keep your ATS for everything else.</>,
    },
    {
        title: 'Connects to your ATS',
        body: (
            <>
                Link Wavvy during onboarding.{' '}
                <span className="font-semibold text-[#9a4a12]">
                    [VALIDATE supported systems]
                </span>
            </>
        ),
    },
    {
        title: 'Guided setup',
        body: <>A short onboarding gets your first interview live, step by step.</>,
    },
];

export function HowItWorksFits() {
    return (
        <section
            aria-labelledby="fits-heading"
            className="bg-white px-5 py-20 lg:py-24"
        >
            <div className="mx-auto max-w-[1136px]">
                <h2
                    id="fits-heading"
                    className="text-balance text-center text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a] sm:text-[42px]"
                >
                    Fits around the way you already work
                </h2>
                <ul className="mt-11 grid gap-4 md:grid-cols-3">
                    {fits.map((fit) => (
                        <li
                            key={fit.title}
                            className="rounded-[18px] border border-[#e5e5df] bg-white p-6"
                        >
                            <h3 className="text-lg font-semibold text-[#1a1a1a]">
                                {fit.title}
                            </h3>
                            <p className="mt-2 text-[15px] leading-[1.6] text-[#4a4b44]">
                                {fit.body}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function HowItWorksCta() {
    return (
        <section
            aria-labelledby="how-it-works-cta-heading"
            className="bg-white px-5 pb-20 lg:pb-28"
        >
            <div className="mx-auto flex max-w-[1136px] flex-col items-center rounded-[28px] bg-[#dde8cf] px-6 py-20 text-center">
                <h2
                    id="how-it-works-cta-heading"
                    className="text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[#1a1a1a] sm:text-[60px]"
                >
                    See it with one of your roles.
                </h2>
                <p className="mt-5 max-w-[540px] text-pretty text-lg leading-[1.55] text-[#2f302b]">
                    {
                        "We'll set up an example interview for a role you're hiring for and walk through the results together."
                    }
                </p>
                <Button
                    asChild
                    className="mt-9 h-14 rounded-full bg-[#4b6a4a] px-8 text-base font-semibold text-white hover:bg-[#3d573c]"
                >
                    <Link href="/book-a-demo">Book a demo</Link>
                </Button>
            </div>
        </section>
    );
}
