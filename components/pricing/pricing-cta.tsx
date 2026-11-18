import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function PricingCta() {
    return (
        <section
            aria-labelledby="pricing-cta-heading"
            className="bg-white px-5 pb-20 lg:pb-28"
        >
            <div className="mx-auto flex max-w-[1136px] flex-col items-center rounded-[28px] bg-[#dde8cf] px-6 py-20 text-center">
                <h2
                    id="pricing-cta-heading"
                    className="text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[#1a1a1a] sm:text-[60px]"
                >
                    Not sure which plan fits?
                </h2>
                <p className="mt-5 max-w-[540px] text-pretty text-lg leading-[1.55] text-[#2f302b]">
                    {
                        "Book a demo and we'll recommend a plan based on your roles and screening volume."
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
