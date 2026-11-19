import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, type LegalSection } from '@/components/shared/legal-page';

export const metadata: Metadata = {
    title: 'Cookie policy — Wavvy World',
    description:
        'How Wavvy World uses cookies and similar technologies. Our website uses privacy-friendly, cookieless analytics.',
};

const technologies = [
    {
        name: 'Vercel Web Analytics',
        provider: 'Vercel Inc.',
        category: 'Analytics (cookieless)',
        purpose:
            'Counts page views and shows which pages are useful. It uses no cookies and builds no profile of you. Visits are grouped using a hash that resets every day.',
        duration: 'No cookie stored. Hash discarded after 24 hours.',
    },
    {
        name: 'Session cookie [VALIDATE: cookie name]',
        provider: 'Wavvy World',
        category: 'Strictly necessary',
        purpose:
            'Keeps customer users signed in to the Wavvy app and protects against cross-site request forgery. It is only set after you log in.',
        duration: 'Session, or up to 30 days if you choose “remember me”.',
    },
    {
        name: 'Interview session [VALIDATE]',
        provider: 'Wavvy World',
        category: 'Strictly necessary',
        purpose:
            'Lets a candidate resume an interview if their connection drops, and stores camera and microphone preferences.',
        duration: 'Until the interview is submitted, or 7 days.',
    },
];

const sections: LegalSection[] = [
    {
        id: 'what-are-cookies',
        title: 'What cookies are',
        content: (
            <p>
                Cookies are small text files that a website stores on your device. Similar technologies
                include local storage and pixels. They help a site remember you between pages or visits, or
                help its owner understand how the site is used. In this policy, &quot;cookies&quot; covers
                all of these technologies.
            </p>
        ),
    },
    {
        id: 'our-approach',
        title: 'Our approach',
        content: (
            <>
                <p>We keep cookies to a minimum:</p>
                <ul>
                    <li>
                        <strong>Our marketing website does not set cookies.</strong> We measure traffic with
                        cookieless analytics that does not identify or track you across other sites.
                    </li>
                    <li>
                        We do not use advertising, retargeting or social media tracking cookies, and we do
                        not sell data collected through cookies.
                    </li>
                    <li>
                        The Wavvy app and candidate interviews use only strictly necessary cookies. They are
                        needed to sign you in, keep sessions secure, and run interviews reliably.
                    </li>
                </ul>
                <p>
                    Strictly necessary cookies are exempt from consent under the UK Privacy and Electronic
                    Communications Regulations (PECR) and the EU ePrivacy Directive. For that reason, we do
                    not show a cookie banner. If we ever add optional cookies, we will ask for your consent
                    before setting them.
                </p>
            </>
        ),
    },
    {
        id: 'what-we-use',
        title: 'Technologies we use',
        content: (
            <>
                <div className="mt-4 overflow-x-auto rounded-[14px] border border-[#e5e5df]">
                    <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                        <caption className="sr-only">Cookies and similar technologies used by Wavvy World</caption>
                        <thead className="bg-[#f6f6f1] text-[#1a1a1a]">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-semibold">Name</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Category</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Purpose</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {technologies.map((item) => (
                                <tr key={item.name} className="border-t border-[#e5e5df] align-top">
                                    <th scope="row" className="px-4 py-3 font-medium text-[#1a1a1a]">
                                        {item.name}
                                        <span className="mt-0.5 block text-xs font-normal text-[#6b6c64]">
                                            {item.provider}
                                        </span>
                                    </th>
                                    <td className="px-4 py-3">{item.category}</td>
                                    <td className="px-4 py-3">{item.purpose}</td>
                                    <td className="px-4 py-3">{item.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p>
                    We review this list whenever we add or remove a technology. The current list always
                    matches what our website and app actually use.
                </p>
            </>
        ),
    },
    {
        id: 'managing-cookies',
        title: 'Managing cookies',
        content: (
            <>
                <p>
                    Most browsers let you view, block and delete cookies in their settings. If you block
                    strictly necessary cookies, you will not be able to sign in to the Wavvy app, and
                    interviews may not resume after an interruption.
                </p>
                <p>Guidance for common browsers:</p>
                <ul>
                    <li>
                        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">
                            Google Chrome
                        </a>
                    </li>
                    <li>
                        <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noreferrer">
                            Apple Safari
                        </a>
                    </li>
                    <li>
                        <a href="https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noreferrer">
                            Mozilla Firefox
                        </a>
                    </li>
                    <li>
                        <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">
                            Microsoft Edge
                        </a>
                    </li>
                </ul>
                <p>
                    We honour Global Privacy Control (GPC) and Do Not Track signals. Because we do not use
                    tracking cookies, these signals do not change how the site works.
                </p>
            </>
        ),
    },
    {
        id: 'changes',
        title: 'Changes to this policy',
        content: (
            <p>
                If we change the technologies we use, we will update this page and the &quot;Last
                updated&quot; date. We will ask for consent before setting any non-essential cookie.
            </p>
        ),
    },
    {
        id: 'contact',
        title: 'Contact',
        content: (
            <p>
                Questions about cookies can go to <a href="mailto:privacy@wavvy.world">privacy@wavvy.world</a>{' '}
                [VALIDATE]. For more on how we handle personal data, see our{' '}
                <Link href="/privacy">privacy policy</Link>.
            </p>
        ),
    },
];

export default function CookiesPage() {
    return (
        <LegalPage
            title="Cookie policy"
            lastUpdated="19 November 2026"
            intro={
                <p>
                    This policy explains which cookies and similar technologies Wavvy World uses, and why.
                    In short: our website uses no cookies, and our app uses only the ones it needs to work.
                </p>
            }
            sections={sections}
        />
    );
}
