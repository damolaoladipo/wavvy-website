import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navLinks = [
    { label: 'Product', href: '/' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Solutions', href: '#' },
    { label: 'Pricing', href: '/pricing' },
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#e5e5df] bg-[#f5f5f0]/92 backdrop-blur">
            <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 xl:px-0">
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
                    <span className="text-lg font-bold tracking-tight text-black">
                        Wavvy World
                    </span>
                </Link>
                <nav
                    aria-label="Primary"
                    className="hidden items-center gap-8 md:flex"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[15px] font-medium leading-[19.5px] hover:text-[#4b6a4a]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-5">
                    <Link
                        href="#"
                        className="hidden text-[15px] font-medium sm:inline"
                    >
                        Log in
                    </Link>
                    <Button
                        asChild
                        className="h-11 rounded-full bg-[#4b6a4a] px-5 text-[15px] font-semibold text-white hover:bg-[#3d573c]"
                    >
                        <Link href="#">Book a demo</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
