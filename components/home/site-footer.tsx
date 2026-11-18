import Link from 'next/link';

const columns = [
    {
        title: 'Product',
        links: [
            { label: 'Features', href: '#' },
            { label: 'How it works', href: '/how-it-works' },
            { label: 'Pricing', href: '/pricing' },
        ],
    },
    {
        title: 'Solutions',
        links: [
            { label: 'In-house teams', href: '#' },
            { label: 'Recruitment agencies', href: '#' },
            { label: 'Talent acquisition', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#' },
            { label: 'Contact', href: '#' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy policy', href: '#' },
            { label: 'Terms of service', href: '#' },
            { label: 'Cookie policy', href: '#' },
        ],
    },
    {
        title: 'Account',
        links: [{ label: 'Log in', href: '#' }],
    },
];

export function SiteFooter() {
    return (
        <footer className="bg-[#1e1f1a] px-5 pb-12 pt-[72px] text-white">
            <div className="mx-auto max-w-[1136px]">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    <div className="max-w-[280px]">
                        <Link
                            href="/"
                            className="flex items-center gap-2.5"
                            aria-label="Wavvy World home"
                        >
                            <span className="flex size-7 items-center justify-center rounded-[7px] bg-[#8fae6f]">
                                <img
                                    src="/images/wavvy-mark.svg"
                                    alt=""
                                    className="size-4"
                                />
                            </span>
                            <span className="text-lg font-bold tracking-tight">
                                Wavvy World
                            </span>
                        </Link>
                        <p className="mt-6 text-[15px] leading-[1.5] text-[#c9c9c0]">
                            AI screening interviews for recruitment teams. AI
                            assists. Recruiters decide.
                        </p>
                    </div>

                    <nav
                        aria-label="Footer"
                        className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:w-[786px] lg:grid-cols-5"
                    >
                        {columns.map((column) => (
                            <div key={column.title}>
                                <h2 className="text-sm font-semibold">
                                    {column.title}
                                </h2>
                                <ul className="mt-4 flex flex-col gap-2.5">
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[15px] text-[#c9c9c0] transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="mt-14 border-t border-white/10 pt-8">
                    <p className="text-sm text-[#a1a198]">
                        {'\u00A9'} {new Date().getFullYear()} Wavvy World
                    </p>
                </div>
            </div>
        </footer>
    );
}
