import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/home/site-footer';

type PlaceholderPageProps = {
    eyebrow: string;
    title: string;
    intro: string;
    sections: string[];
};

export function PlaceholderPage({ eyebrow, title, intro, sections }: PlaceholderPageProps) {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <SiteHeader />
            <main className="px-5 py-20 lg:py-28">
                <article className="mx-auto max-w-[720px]">
                    <p className="text-sm font-medium uppercase tracking-[0.08em] text-[#4b6a4a]">
                        {eyebrow}
                    </p>
                    <h1 className="mt-4 text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[56px]">
                        {title}
                    </h1>
                    <p className="mt-5 text-pretty text-lg leading-[1.6] text-[#4a4b44]">{intro}</p>

                    <div
                        role="note"
                        className="mt-10 rounded-[18px] border border-[#f1d9b8] bg-[#fdf6ec] p-5 text-[15px] leading-[1.6] text-[#7a3d10]"
                    >
                        <span className="font-semibold">[VALIDATE]</span> Placeholder content. Replace this
                        page with the final, reviewed copy before launch.
                    </div>

                    <ol className="mt-10 flex flex-col gap-8">
                        {sections.map((section, index) => (
                            <li key={section} className="border-t border-[#e5e5df] pt-6">
                                <h2 className="text-xl font-semibold">
                                    {index + 1}. {section}
                                </h2>
                                <p className="mt-2 text-[15px] leading-[1.6] text-[#6b6c64]">
                                    Content to be provided.
                                </p>
                            </li>
                        ))}
                    </ol>

                    <p className="mt-12 text-[15px] text-[#4a4b44]">
                        Questions in the meantime?{' '}
                        <Link
                            href="/book-a-demo"
                            className="font-semibold underline underline-offset-2 hover:text-[#4b6a4a]"
                        >
                            Get in touch
                        </Link>
                    </p>
                </article>
            </main>
            <SiteFooter />
        </div>
    );
}
