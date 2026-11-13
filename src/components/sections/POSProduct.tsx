import Image from "next/image";
import Link from "next/link";

const temporaryReleases = [
  {
    number: "02",
    status: "Coming soon",
    title: "Next software release",
    description: "A new IQONEX software product will be announced here.",
  },
  {
    number: "03",
    status: "In development",
    title: "Product reveal pending",
    description: "This space is reserved for our next product launch.",
  },
];

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function PlaceholderGraphic({ number }: { number: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:h-28 sm:w-28"
    >
      <div className="absolute inset-3 rounded-xl border border-dashed border-white/10" />
      <div className="absolute h-px w-20 rotate-45 bg-white/10" />
      <div className="absolute h-px w-20 -rotate-45 bg-white/10" />
      <span className="font-geom relative text-2xl font-black text-white/25">{number}</span>
    </div>
  );
}

export default function POSProduct() {
  return (
    <section
      id="product"
      aria-labelledby="product-releases-title"
      className="relative overflow-hidden bg-[#090909] px-6 py-20 md:px-10 md:py-24 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="bg-primary/[0.07] pointer-events-none absolute top-12 right-[-12rem] h-80 w-80 rounded-full blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <p className="text-[10px] tracking-[0.25em] text-white/45 uppercase">(Our products)</p>
          <p className="flex items-center gap-2 text-[9px] tracking-[0.18em] text-white/35 uppercase">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            New software releases
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-primary mb-4 text-[10px] font-semibold tracking-[0.2em] uppercase">
              Built by IQONEX
            </p>
            <h2
              id="product-releases-title"
              className="font-geom max-w-3xl leading-[0.92] font-black tracking-[-0.03em] text-white uppercase"
              style={{ fontSize: "clamp(2.8rem, 5.8vw, 5.8rem)" }}
            >
              Software made for
              <span className="text-primary"> real work.</span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="font-dm max-w-lg text-sm leading-6 text-white/50 md:text-base">
              Explore our latest release and see what we are building next.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.45fr_0.55fr]">
          <article className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#121212]">
            <div className="grid min-h-full lg:grid-cols-[0.86fr_1.14fr]">
              <div className="flex flex-col p-6 md:p-8 lg:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.18em] text-white/35 uppercase">
                    Product / 01
                  </span>
                  <span className="border-primary/25 bg-primary/[0.08] text-primary rounded-full border px-3 py-1 text-[8px] font-semibold tracking-[0.16em] uppercase">
                    Latest release
                  </span>
                </div>

                <div className="mt-12 lg:mt-auto">
                  <div className="bg-primary mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-black">
                    <span className="font-geom text-lg font-black tracking-[-0.06em]">IQ</span>
                  </div>
                  <h3 className="font-geom text-4xl leading-none font-black tracking-tight text-white uppercase md:text-5xl">
                    IQONEX POS
                  </h3>
                  <p className="font-dm mt-4 max-w-md text-sm leading-6 text-white/50">
                    A desktop point-of-sale system for sales, products, inventory, purchases,
                    customers, and business reporting.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Sales", "Inventory", "Reports"].map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] tracking-[0.14em] text-white/45 uppercase"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact?subject=IQONEX%20POS%20Demo"
                    className="group bg-primary focus-visible:outline-primary mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-3 rounded-full px-5 text-[9px] font-bold tracking-[0.16em] text-black uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    Request a demo
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-64 overflow-hidden border-t border-white/10 bg-[#181818] md:min-h-80 lg:min-h-[30rem] lg:border-t-0 lg:border-l">
                <div className="absolute top-4 right-4 left-4 z-10 flex items-center justify-between rounded-full border border-white/10 bg-black/45 px-4 py-2 backdrop-blur-md">
                  <span className="text-[8px] tracking-[0.18em] text-white/50 uppercase">
                    IQONEX POS / Dashboard
                  </span>
                  <span className="flex items-center gap-2 text-[8px] tracking-[0.14em] text-white/40 uppercase">
                    <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                    Available
                  </span>
                </div>

                <Image
                  src="/images/iqonex-pos-dashboard.png"
                  alt="IQONEX POS dashboard showing sales, inventory, purchasing, and reporting tools"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.015]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                />
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {temporaryReleases.map((product) => (
              <article
                key={product.number}
                className="flex min-h-56 items-center gap-5 rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.018] p-5 transition-colors hover:bg-white/[0.03] md:p-6"
              >
                <PlaceholderGraphic number={product.number} />
                <div>
                  <p className="text-primary/70 text-[8px] font-semibold tracking-[0.17em] uppercase">
                    {product.status}
                  </p>
                  <h3 className="font-geom mt-2 text-xl leading-tight font-bold text-white/70 uppercase md:text-2xl">
                    {product.title}
                  </h3>
                  <p className="font-dm mt-3 text-xs leading-5 text-white/35">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
