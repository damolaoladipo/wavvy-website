import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, type LegalSection } from '@/components/shared/legal-page';

export const metadata: Metadata = {
    title: 'Privacy policy — Wavvy World',
    description:
        'How Wavvy World collects, uses and protects personal data for website visitors, customers and candidates who take AI screening interviews.',
};

const sections: LegalSection[] = [
    {
        id: 'who-we-are',
        title: 'Who we are and our role',
        content: (
            <>
                <p>
                    Wavvy World is operated by <strong>[VALIDATE: legal entity name]</strong>, a company
                    registered in [VALIDATE: country] under company number [VALIDATE], with its registered
                    office at [VALIDATE: address] (&quot;Wavvy&quot;, &quot;we&quot;, &quot;us&quot;).
                </p>
                <p>We handle personal data in two different roles:</p>
                <ul>
                    <li>
                        <strong>As a controller</strong> for people who visit our website, request a demo,
                        or use Wavvy on behalf of a customer. We decide how and why that data is used.
                    </li>
                    <li>
                        <strong>As a processor</strong> for candidates who take a screening interview. The
                        hiring company or recruitment agency that invited the candidate (our customer) is the
                        controller. We process candidate data only on that customer&apos;s documented
                        instructions, under a data processing agreement.
                    </li>
                </ul>
                <p>
                    If you are a candidate and want to access, correct or delete your interview data, the
                    quickest route is to contact the organisation that invited you. If you contact us, we
                    will pass your request to them and help them respond.
                </p>
            </>
        ),
    },
    {
        id: 'data-we-collect',
        title: 'Personal data we collect',
        content: (
            <>
                <h3>Website visitors and demo requests</h3>
                <ul>
                    <li>
                        Details you submit through the demo form: full name, work email, company name,
                        company type, and anything you write in the message field.
                    </li>
                    <li>Emails and call notes when you correspond with us.</li>
                    <li>
                        Aggregated, cookieless usage data, such as pages viewed, referrer, country, browser
                        and device type. See our <Link href="/cookies">cookie policy</Link>.
                    </li>
                </ul>
                <h3>Customer users</h3>
                <ul>
                    <li>Account details: name, work email, role, team and login credentials.</li>
                    <li>Billing details: company name, billing address, VAT number and payment status.</li>
                    <li>Product usage and audit logs, such as roles created and interviews reviewed.</li>
                </ul>
                <h3>Candidates (processed on behalf of our customers)</h3>
                <ul>
                    <li>Name, contact details and the role you applied for.</li>
                    <li>CV or application details, if your employer chooses to share them.</li>
                    <li>Interview responses, including audio, video or text, and their transcripts.</li>
                    <li>
                        Structured scores, summaries and evidence generated against the employer&apos;s
                        published criteria.
                    </li>
                    <li>Technical data needed to run the interview, such as device type and session logs.</li>
                </ul>
                <p>
                    We do not ask candidates for special category data, such as health, ethnicity or
                    religion. If you choose to disclose it in an answer, it is treated as part of your
                    interview record and is not used for scoring.
                </p>
            </>
        ),
    },
    {
        id: 'how-we-use-data',
        title: 'How we use data and our legal bases',
        content: (
            <>
                <p>Where we act as a controller, we rely on the following legal bases under UK and EU GDPR:</p>
                <ul>
                    <li>
                        <strong>Responding to demo requests and enquiries:</strong> our legitimate interest
                        in replying to people who ask about Wavvy.
                    </li>
                    <li>
                        <strong>Providing the service to customers:</strong> performance of our contract with
                        your organisation.
                    </li>
                    <li>
                        <strong>Billing, tax and accounting:</strong> compliance with legal obligations.
                    </li>
                    <li>
                        <strong>Security, fraud prevention and service improvement:</strong> our legitimate
                        interest in keeping Wavvy reliable and safe.
                    </li>
                    <li>
                        <strong>Product updates and marketing emails:</strong> legitimate interest for
                        business contacts, or consent where the law requires it. You can unsubscribe at any
                        time.
                    </li>
                </ul>
                <p>
                    Where we act as a processor, we use candidate data only to run, score and report on
                    interviews for the customer who invited the candidate, and to keep the service secure.
                </p>
            </>
        ),
    },
    {
        id: 'ai-and-automated-decisions',
        title: 'AI interviews and automated decisions',
        content: (
            <>
                <p>
                    Wavvy uses AI to run structured first-round interviews and to summarise answers against
                    criteria the employer sets. <strong>AI assists, recruiters decide.</strong>
                </p>
                <ul>
                    <li>
                        Wavvy does not make hiring decisions. Every shortlist, rejection or offer is made by
                        a person at the hiring organisation, and they can see the evidence behind each
                        score.
                    </li>
                    <li>
                        We do not make decisions based solely on automated processing that produce legal or
                        similarly significant effects, within the meaning of Article 22 GDPR.
                    </li>
                    <li>
                        We do not use facial analysis, emotion recognition or biometric identification to
                        assess candidates.
                    </li>
                    <li>
                        Candidates can ask the hiring organisation for reasonable adjustments, an
                        alternative format, or a human review of their interview.
                    </li>
                    <li>
                        We regularly test scoring for adverse impact across groups and document the results
                        for customers who need them for audits. [VALIDATE: testing cadence and methodology]
                    </li>
                    <li>
                        Customer and candidate data is not used to train AI models shared with other
                        customers. [VALIDATE: confirm with AI sub-processor terms]
                    </li>
                </ul>
                <p>
                    Customers are responsible for telling candidates that AI is used in their process and,
                    where local law requires it, for getting consent. Examples include the Illinois
                    Artificial Intelligence Video Interview Act and New York City Local Law 144. We provide
                    template notices to help.
                </p>
            </>
        ),
    },
    {
        id: 'sharing',
        title: 'How we share data',
        content: (
            <>
                <p>We do not sell personal data, and we do not share it for cross-context behavioural advertising.</p>
                <p>We share personal data only with:</p>
                <ul>
                    <li>
                        <strong>Sub-processors</strong> that help us run Wavvy, such as cloud hosting, AI
                        model providers, transcription, email delivery and customer support tools. Each is
                        bound by a written contract with data protection terms. Our current list is
                        available at [VALIDATE: sub-processor list URL], and customers are notified before
                        new sub-processors are added.
                    </li>
                    <li>
                        <strong>The hiring organisation</strong> that invited a candidate, which receives
                        that candidate&apos;s interview record.
                    </li>
                    <li>
                        <strong>Professional advisers and authorities</strong> where required by law, or to
                        protect our rights.
                    </li>
                    <li>
                        <strong>A buyer or successor</strong> if Wavvy is involved in a merger or acquisition.
                        Your data would remain subject to this policy.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: 'international-transfers',
        title: 'International transfers',
        content: (
            <p>
                Data is hosted in [VALIDATE: primary hosting region]. If personal data is transferred
                outside the UK or European Economic Area, we use appropriate safeguards. These include
                adequacy decisions, the EU Standard Contractual Clauses, the UK International Data Transfer
                Addendum, or the EU–US and UK–US Data Privacy Framework where the recipient is certified.
            </p>
        ),
    },
    {
        id: 'retention',
        title: 'How long we keep data',
        content: (
            <>
                <ul>
                    <li>
                        <strong>Demo requests and enquiries:</strong> up to 24 months after our last
                        contact, unless you become a customer.
                    </li>
                    <li>
                        <strong>Customer account data:</strong> for the length of the contract, then deleted
                        within 90 days, except records we must keep for tax or legal reasons (usually 6
                        years).
                    </li>
                    <li>
                        <strong>Candidate interview data:</strong> for the retention period the customer
                        sets. The default is [VALIDATE: e.g. 12 months] after the role closes. When a
                        customer&apos;s contract ends, it is deleted within 30 days.
                    </li>
                    <li>
                        <strong>Backups:</strong> overwritten on a rolling cycle of up to 35 days.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: 'security',
        title: 'Security',
        content: (
            <p>
                We protect data with encryption in transit (TLS 1.2+) and at rest, role-based access
                controls, single sign-on and multi-factor authentication for staff, audit logging, and
                regular third-party penetration testing. Access to candidate recordings is limited to
                authorised customer users and a small number of Wavvy staff who need it to provide support.
                [VALIDATE: certifications held, e.g. SOC 2 Type II or ISO 27001] If a personal data breach
                affects you or your organisation, we will notify the right people without undue delay, as
                the law requires.
            </p>
        ),
    },
    {
        id: 'your-rights',
        title: 'Your rights',
        content: (
            <>
                <p>Depending on where you live, you may have the right to:</p>
                <ul>
                    <li>access the personal data we hold about you and get a copy;</li>
                    <li>correct inaccurate data or complete incomplete data;</li>
                    <li>have your data deleted;</li>
                    <li>restrict or object to certain processing, including direct marketing;</li>
                    <li>receive your data in a portable format;</li>
                    <li>
                        not be subject to a decision based solely on automated processing, and to get human
                        review;
                    </li>
                    <li>withdraw consent at any time, where we rely on consent.</li>
                </ul>
                <p>
                    California residents also have the right to know, delete and correct personal
                    information, and to opt out of its sale or sharing. We do not sell or share it. We will
                    not discriminate against you for exercising any of these rights.
                </p>
                <p>
                    To make a request, email <a href="mailto:privacy@wavvy.world">privacy@wavvy.world</a>{' '}
                    [VALIDATE: address]. We respond within one month. You also have the right to complain to
                    your local data protection authority. In the UK, that is the Information
                    Commissioner&apos;s Office (ico.org.uk).
                </p>
            </>
        ),
    },
    {
        id: 'children',
        title: 'Children',
        content: (
            <p>
                Wavvy is designed for professional recruitment. It is not intended for anyone under 16, and
                we do not knowingly collect their data. If a customer uses Wavvy for roles open to younger
                applicants, the customer is responsible for meeting the relevant legal requirements.
            </p>
        ),
    },
    {
        id: 'changes',
        title: 'Changes to this policy',
        content: (
            <p>
                We may update this policy as our service or the law changes. We will change the &quot;Last
                updated&quot; date above and, for material changes, notify customers by email or in the
                product before the changes take effect.
            </p>
        ),
    },
    {
        id: 'contact',
        title: 'Contact us',
        content: (
            <p>
                Questions about this policy or how we handle data can go to{' '}
                <a href="mailto:privacy@wavvy.world">privacy@wavvy.world</a> [VALIDATE], or by post to
                [VALIDATE: registered address]. Our data protection lead is [VALIDATE: name or DPO contact].
                Customers who need a data processing agreement can{' '}
                <Link href="/book-a-demo">get in touch</Link>.
            </p>
        ),
    },
];

export default function PrivacyPage() {
    return (
        <LegalPage
            title="Privacy policy"
            lastUpdated="19 November 2026"
            intro={
                <p>
                    This policy explains what personal data Wavvy World collects, why we collect it, and the
                    choices you have. It covers website visitors, our customers&apos; users, and candidates
                    who take a Wavvy screening interview.
                </p>
            }
            sections={sections}
        />
    );
}
