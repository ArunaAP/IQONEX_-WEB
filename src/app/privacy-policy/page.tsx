import Link from "next/link";
import NextPages from "@/components/sections/Nextpages";

export const metadata = {
  title: "Privacy Policy — IQONEX",
  description: "How IQONEX collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="flex flex-col">
        {/* HERO */}
        <div className="bg-background px-6 pt-32 pb-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <p className="text-muted mb-4 text-[10px] tracking-[0.3em] uppercase">(LEGAL)</p>
            <h1
              className="font-geom text-foreground leading-[0.92] font-black"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              PRIVACY
              <br />
              <span style={{ color: "var(--color-primary)" }}>POLICY</span>
            </h1>
            <p className="font-dm text-muted mt-6 text-sm">Last updated: June 2026</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-surface px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="font-dm text-muted flex flex-col gap-12 text-sm leading-relaxed">
              {/* Intro */}
              <div>
                <p>
                  IQONEX ("we", "us", or "our") is a creative software company based in Bandarawela,
                  Sri Lanka. This Privacy Policy explains how we collect, use, and protect
                  information when you visit our website or contact us.
                </p>
              </div>

              {/* Section */}
              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  1. Information We Collect
                </h2>
                <p className="mb-4">We collect the following types of information:</p>

                <div className="flex flex-col gap-4">
                  <div className="border-border rounded-xl border p-5">
                    <p className="text-muted mb-1 text-[10px] tracking-[0.2em] uppercase">
                      Contact Form
                    </p>
                    <p className="text-foreground">
                      When you fill out our contact form, we collect your name, email address, and
                      the message you send. This information is used solely to respond to your
                      enquiry.
                    </p>
                  </div>
                  <div className="border-border rounded-xl border p-5">
                    <p className="text-muted mb-1 text-[10px] tracking-[0.2em] uppercase">
                      Analytics
                    </p>
                    <p className="text-foreground">
                      We use Google Analytics to understand how visitors interact with our website.
                      This includes pages visited, time on site, device type, and general location
                      (country/city level). No personally identifiable information is collected
                      through analytics.
                    </p>
                  </div>
                  <div className="border-border rounded-xl border p-5">
                    <p className="text-muted mb-1 text-[10px] tracking-[0.2em] uppercase">
                      Cookies
                    </p>
                    <p className="text-foreground">
                      Our website uses cookies to improve your browsing experience and to enable
                      analytics. Cookies are small text files stored on your device. You can control
                      or disable cookies through your browser settings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  2. How We Use Your Information
                </h2>
                <ul className="flex flex-col gap-3">
                  {[
                    "To respond to enquiries submitted through our contact form",
                    "To understand website traffic and improve our content",
                    "To monitor and analyse usage patterns for performance improvements",
                    "To ensure the security and proper functioning of our website",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">3. Cookies</h2>
                <p className="mb-4">We use the following types of cookies:</p>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      type: "Essential",
                      desc: "Required for the website to function correctly. Cannot be disabled.",
                    },
                    {
                      type: "Analytics",
                      desc: "Google Analytics cookies that help us understand how visitors use our site. These are anonymised.",
                    },
                    {
                      type: "Preferences",
                      desc: "Cookies that remember your settings and preferences for a better experience.",
                    },
                  ].map((c, i) => (
                    <div key={i} className="border-border flex gap-4 rounded-xl border p-5">
                      <span
                        className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      />
                      <div>
                        <p className="text-muted mb-1 text-[10px] tracking-[0.2em] uppercase">
                          {c.type}
                        </p>
                        <p className="text-foreground">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  You can opt out of Google Analytics by installing the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary underline transition-colors"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  4. Data Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share anonymised, aggregated data with service providers (such as Google
                  Analytics) strictly to operate and improve our website. These providers are bound
                  by their own privacy policies.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  5. Data Retention
                </h2>
                <p>
                  Contact form submissions are retained only as long as necessary to respond to your
                  enquiry. Analytics data is retained according to Google Analytics' default
                  retention settings (26 months) and is anonymised.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  6. Your Rights
                </h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Request access to the personal data we hold about you",
                    "Request correction or deletion of your personal data",
                    "Withdraw consent for analytics and cookies at any time",
                    "Lodge a complaint with a data protection authority",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or how we handle your data,
                  please contact us at{" "}
                  <a
                    href="mailto:theiqonex@gmail.com"
                    className="hover:text-primary transition-colors"
                    style={{ color: "var(--color-primary)" }}
                  >
                    theiqonex@gmail.com
                  </a>
                  .
                </p>
              </div>

              {/* Footer note */}
              <div className="border-border bg-background rounded-xl border p-6">
                <p className="text-muted text-[11px]">
                  This policy may be updated from time to time. We recommend checking this page
                  periodically. Continued use of our website after changes constitutes acceptance of
                  the updated policy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <NextPages />
      </section>
    </>
  );
}
