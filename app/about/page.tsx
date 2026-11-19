import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/shared/placeholder-page';

export const metadata: Metadata = {
    title: 'About — Wavvy World',
    description: 'About Wavvy World, AI screening interviews for recruitment teams.',
};

export default function AboutPage() {
    return (
        <PlaceholderPage
            eyebrow="About"
            title="AI assists. Recruiters decide."
            intro="Wavvy World runs structured first interviews so recruitment teams can spend their time on the candidates worth talking to."
            sections={['Our story', 'What we believe', 'The team']}
        />
    );
}
