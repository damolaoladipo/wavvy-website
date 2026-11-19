import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
    return (
        <section aria-labelledby="cta-heading" className="px-5 pb-20 lg:pb-28">
            <div className="mx-auto flex max-w-[1136px] flex-col items-center rounded-[28px] bg-[#dde8cf] px-6 py-20 text-center lg:py-24">
                <h2
                    id="cta-heading"
                    className="max-w-[760px] text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[#1a1a1a] sm:text-[64px]"
                >
                    Ready to spend less time screening?
                </h2>
                <p className="mt-6 max-w-[540px] text-pretty text-lg leading-[1.55] text-[#2f302b]">
                    See how Wavvy helps your team streamline first-round
                    interviews and focus on the right candidates.
                </p>
                <Button
                    asChild
                    className="mt-10 h-14 rounded-full bg-[#4b6a4a] px-8 text-base font-semibold text-white hover:bg-[#3d573c]"
                >
                    <Link href="/book-a-demo">
                        Book a demo
                        <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
