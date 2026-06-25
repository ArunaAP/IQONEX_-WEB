import Link from "next/link";
import NextPages from "@/components/sections/Nextpages";

export const metadata = {
  title: "Terms & Conditions — IQONEX",
  description: "Terms and conditions for using the IQONEX website and services.",
};

export default function TermsAndConditions() {
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
              TERMS &
              <br />
              <span style={{ color: "var(--color-primary)" }}>CONDITIONS</span>
            </h1>
            <p className="font-dm text-muted mt-6 text-sm">Last updated: June 2026</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-surface px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="font-dm text-muted flex flex-col gap-12 text-sm leading-relaxed">
              <div>
                <p>
                  By accessing or using the IQONEX website (iqonex.com), you agree to be bound by
                  these Terms & Conditions. Please read them carefully before using our site or
                  engaging our services.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  1. Use of Website
                </h2>
                <ul className="flex flex-col gap-3">
                  {[
                    "This website is for informational purposes about IQONEX's services.",
                    "You agree not to misuse this website or use it for any unlawful purpose.",
                    "You must not attempt to gain unauthorised access to any part of this website.",
                    "We reserve the right to restrict or terminate access to this website at any time.",
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
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  2. Intellectual Property
                </h2>
                <p className="mb-4">
                  All content on this website — including text, graphics, logos, images, and code —
                  is the property of IQONEX and is protected by applicable copyright and
                  intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, or use any content from this website without
                  prior written permission from IQONEX.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  3. Services & Engagements
                </h2>
                <p className="mb-4">
                  Engaging IQONEX for services is governed by a separate project agreement or
                  contract signed between both parties. These Terms & Conditions apply to website
                  use only and do not constitute a service agreement.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      title: "Proposals",
                      desc: "All proposals and quotes are valid for 30 days from the date of issue.",
                    },
                    {
                      title: "Payments",
                      desc: "Payment terms are specified in individual project agreements.",
                    },
                    {
                      title: "Revisions",
                      desc: "The number of revisions included in a project is defined in the project scope.",
                    },
                    {
                      title: "Timelines",
                      desc: "Project timelines are estimates and may vary based on client feedback cycles.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-border rounded-xl border p-5">
                      <p className="text-muted mb-1 text-[10px] tracking-[0.2em] uppercase">
                        {item.title}
                      </p>
                      <p className="text-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  4. Disclaimer of Warranties
                </h2>
                <p>
                  This website is provided "as is" without any warranties of any kind, express or
                  implied. IQONEX does not warrant that the website will be uninterrupted,
                  error-free, or free of viruses or other harmful components. We reserve the right
                  to modify or discontinue the website at any time without notice.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  5. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, IQONEX shall not be liable for any
                  indirect, incidental, or consequential damages arising from your use of this
                  website or our services. Our total liability in any matter arising from these
                  terms shall not exceed the amount paid by you for the relevant service.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  6. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. These links are provided
                  for your convenience only. IQONEX has no control over the content of those sites
                  and accepts no responsibility for them or for any loss or damage that may arise
                  from your use of them.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  7. Governing Law
                </h2>
                <p>
                  These Terms & Conditions are governed by the laws of Sri Lanka. Any disputes
                  arising from these terms shall be subject to the exclusive jurisdiction of the
                  courts of Sri Lanka.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">
                  8. Changes to These Terms
                </h2>
                <p>
                  We reserve the right to update these Terms & Conditions at any time. Changes will
                  be posted on this page with an updated date. Continued use of the website after
                  changes constitutes your acceptance of the new terms.
                </p>
              </div>

              <div className="border-border border-t pt-8">
                <h2 className="font-geom text-foreground mb-4 text-xl font-black">9. Contact</h2>
                <p>
                  For any questions regarding these terms, please contact us at{" "}
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

              {/* Cross link */}
              <div className="border-border bg-background rounded-xl border p-6">
                <p className="text-muted mb-3 text-[11px]">
                  For information on how we handle your personal data, please read our
                </p>
                <Link
                  href="/privacy-policy"
                  className="text-[10px] font-bold tracking-[0.15em] uppercase transition-colors hover:opacity-80"
                  style={{ color: "var(--color-primary)" }}
                >
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <NextPages />
      </section>
    </>
  );
}
