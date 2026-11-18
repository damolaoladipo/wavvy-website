import { LandingPageData } from "@/_data/landing-page";
import { siteConfig } from "@/_data/site-config";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  const socialLinks = LandingPageData.footer.socialLinks;

  return (
    <footer className="mx-auto px-0 md:px-12 w-full relative bg-[#0a0a0a]">
      <div className="px-6 py-12 border-t border-neutral-800 mt-36">
        <div className="flex mt-6 flex-col md:flex-row md:flex-wrap lg:flex-row lg:justify-between gap-10 lg:gap-24">
          <div className="space-y-4">
            <div className="flex items-center text-white">
              <Logo />
            </div>
            <p className="text-sm whitespace-pre-line text-neutral-400 leading-relaxed max-w-sm">
              {LandingPageData.footer.description}
            </p>
            {socialLinks.length > 0 ? (
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-24">
            <div className="space-y-4">
              <h3 className="text-white font-semibold">
                {LandingPageData.footer.items.group}
              </h3>
              <ul className="space-y-3">
                {LandingPageData.footer.items.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">
                {LandingPageData.footer.items2.group}
              </h3>
              <ul className="space-y-3">
                {LandingPageData.footer.items2.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex">
          <span className="text-[6.2rem] md:text-[12rem] lg:text-[18.5rem] font-bold select-none leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-green-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
            {siteConfig.name}.
          </span>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row mt-10 md:mt32 border-t border-neutral-800 pt-8">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} {LandingPageData.footer.ownedBy}.{" "}
            {LandingPageData.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
