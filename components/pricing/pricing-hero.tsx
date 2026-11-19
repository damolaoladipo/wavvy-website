import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function PricingHero() {
    return (
        <section
            aria-labelledby="pricing-hero-heading"
            className="bg-white px-5 pt-20 pb-16 lg:pt-24"
        >
            <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4b6a4a]">
                    Pricing
                </p>
                <h1
                    id="pricing-hero-heading"
                    className="mt-4 text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.035em] text-[#1a1a1a] sm:text-[68px]"
                >
                    Pricing that grows with your screening volume.
                </h1>
                <p className="mt-6 max-w-[600px] text-pretty text-lg leading-[1.6] text-[#4a4b44] sm:text-[19px]">
                    Simple plans for in-house teams, agencies and larger
                    organisations. Every demo includes a plan recommendation
                    for your hiring volume.
                </p>
                <Button
                    asChild
                    className="mt-9 h-[54px] rounded-full bg-[#4b6a4a] px-7 text-base font-semibold text-white hover:bg-[#3d573c]"
                >
                    <Link href="/book-a-demo">Book a demo</Link>
                </Button>
            </div>
        </section>
    );
}
