'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
    { label: 'Product', href: '/product' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
];

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };
        const mobileQuery = window.matchMedia('(min-width: 768px)');
        const onResize = () => {
            if (mobileQuery.matches) setOpen(false);
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);
        mobileQuery.addEventListener('change', onResize);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
            mobileQuery.removeEventListener('change', onResize);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-[#e5e5df] bg-[#f5f5f0]/95 backdrop-blur">
                <div className="relative z-10 mx-auto flex h-[65px] max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-5 md:h-[72px] xl:px-0">
                    <Link
                        href="/"
                        onClick={close}
                        className="flex items-center gap-2.5"
                        aria-label="Wavvy World home"
                    >
                        <span className="flex size-[26px] items-center justify-center rounded-[6.5px] bg-[#8fae6f] md:size-7 md:rounded-[7px]">
                            <img
                                src="/images/wavvy-mark.svg"
                                alt=""
                                className="size-4"
                            />
                        </span>
                        <span className="text-lg font-bold tracking-tight text-black">
                            Wavvy
                            <span className="hidden sm:inline"> World</span>
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
                                aria-current={
                                    pathname === link.href ? 'page' : undefined
                                }
                                className="text-[15px] font-medium leading-[19.5px] hover:text-[#4b6a4a] aria-[current=page]:text-[#4b6a4a]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2 md:gap-5">
                        <Link
                            href="/book-a-demo"
                            className="hidden text-[15px] font-medium hover:text-[#4b6a4a] md:inline"
                        >
                            Log in
                        </Link>
                        <Button
                            asChild
                            className="h-11 rounded-full bg-[#4b6a4a] px-4 text-[15px] font-semibold text-white hover:bg-[#3d573c] md:px-5"
                        >
                            <Link href="/book-a-demo" onClick={close}>
                                Book a demo
                            </Link>
                        </Button>
                        <button
                            type="button"
                            onClick={() => setOpen((value) => !value)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            className="flex size-11 items-center justify-center rounded-xl border border-[#d3d2c7] bg-white text-[#1a1a1a] transition-colors hover:bg-[#fafaf9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b6a4a] md:hidden"
                        >
                            {open ? (
                                <X aria-hidden="true" className="size-5" />
                            ) : (
                                <Menu aria-hidden="true" className="size-5" />
                            )}
                        </button>
                    </div>
                </div>

                {open && (
                    <>
                        <nav
                            id="mobile-menu"
                            aria-label="Mobile"
                            className="absolute inset-x-0 top-full border-b border-[#e5e5df] bg-white px-4 pt-3 pb-5 shadow-[0_24px_48px_-24px_rgba(26,26,26,0.25)] md:hidden"
                        >
                            <ul className="flex flex-col">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={close}
                                            aria-current={
                                                pathname === link.href
                                                    ? 'page'
                                                    : undefined
                                            }
                                            className="flex h-[52px] items-center text-[17px] font-semibold text-[#1a1a1a] aria-[current=page]:text-[#4b6a4a]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        href="/book-a-demo"
                                        onClick={close}
                                        className="flex h-[52px] items-center text-[17px] font-medium text-[#4a4b44]"
                                    >
                                        Log in
                                    </Link>
                                </li>
                            </ul>
                            <Button
                                asChild
                                className="mt-3 h-[52px] w-full rounded-full bg-[#4b6a4a] text-base font-semibold text-white hover:bg-[#3d573c]"
                            >
                                <Link href="/book-a-demo" onClick={close}>
                                    Book a demo
                                </Link>
                            </Button>
                        </nav>
                    </>
                )}
            </header>
            {open && (
                <div
                    aria-hidden="true"
                    onClick={close}
                    className="fixed inset-0 z-40 bg-[#1a1a1a]/25 md:hidden"
                />
            )}
        </>
    );
}
