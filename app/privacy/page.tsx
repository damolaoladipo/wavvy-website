import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/shared/placeholder-page';

export const metadata: Metadata = {
    title: 'Privacy policy — Wavvy World',
    description: 'How Wavvy World collects, uses and protects personal data.',
};

export default function PrivacyPage() {
    return (
        <PlaceholderPage
            eyebrow="Legal"
            title="Privacy policy"
            intro="How we collect, use and protect personal data, including the details you share when you request a demo."
            sections={[
                'Who we are',
                'Data we collect',
                'How we use your data',
                'Candidate interview data',
                'Data retention',
                'Your rights',
                'Contact',
            ]}
        />
    );
}
