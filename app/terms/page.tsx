import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/shared/placeholder-page';

export const metadata: Metadata = {
    title: 'Terms of service — Wavvy World',
    description: 'The terms that apply when you use Wavvy World.',
};

export default function TermsPage() {
    return (
        <PlaceholderPage
            eyebrow="Legal"
            title="Terms of service"
            intro="The terms that apply when you and your team use Wavvy World."
            sections={[
                'Using Wavvy',
                'Accounts and seats',
                'Plans, billing and cancellation',
                'Acceptable use',
                'Liability',
                'Changes to these terms',
            ]}
        />
    );
}
