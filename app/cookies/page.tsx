import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/shared/placeholder-page';

export const metadata: Metadata = {
    title: 'Cookie policy — Wavvy World',
    description: 'How Wavvy World uses cookies and similar technologies.',
};

export default function CookiesPage() {
    return (
        <PlaceholderPage
            eyebrow="Legal"
            title="Cookie policy"
            intro="How we use cookies and similar technologies on this website."
            sections={['What cookies are', 'Cookies we use', 'Managing your preferences']}
        />
    );
}
