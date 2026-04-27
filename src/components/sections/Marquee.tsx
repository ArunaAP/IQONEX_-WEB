"use client";

const row1 = [
  { text: "DEVELOPMENT", bold: false },
  { text: "UI/UX", bold: false },
  { text: "BRANDING", bold: true },
  { text: "MOBILE", bold: false },
];

const row2 = [
  { text: "ECOMMERCE", bold: true, orange: false },
  { text: "DESIGNING", bold: false, orange: true },
  { text: "SEO", bold: true, orange: false },
  { text: "ERP", bold: false, orange: false },
];

export default function Marquee() {
  const doubled1 = [...row1, ...row1, ...row1, ...row1];
  const doubled2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section className="overflow-hidden bg-[#f0ede8] py-4 select-none">
        {/* Row 1 — left, light gray, mix of light/bold */}
        <div className="mb-1 w-full overflow-hidden">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marquee-left 20s linear infinite" }}
          >
            {doubled1.map((item, i) => (
              <span
                key={i}
                className="shrink-0 px-6 text-black/25"
                style={{
                  fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                  fontWeight: item.bold ? 800 : 300,
                  lineHeight: 1.1,
                  fontFamily: "var(--font-geom), sans-serif",
                }}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — right, dark + orange, all heavy */}
        <div className="w-full overflow-hidden">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marquee-right 30s linear infinite" }}
          >
            {doubled2.map((item, i) => (
              <span
                key={i}
                className={`shrink-0 px-6 ${item.orange ? "text-orange-500" : "text-[#2a2a2a]"}`}
                style={{
                  fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                  fontWeight: item.bold ? 800 : 300,
                  lineHeight: 1.1,
                  fontFamily: "var(--font-geom), sans-serif",
                }}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
