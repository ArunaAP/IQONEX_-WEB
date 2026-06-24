"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "At least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  projectType: z.string().min(2, "Required"),
  message: z.string().min(10, "Tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "mt-1 w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none transition-colors duration-200 focus:border-primary placeholder:text-black/25 font-dm text-[#2a2a2a]";

const labelClass = "text-[10px] font-bold tracking-[0.15em] uppercase text-black/40";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col">
      {/* ── HERO ── */}
      <div className="relative flex min-h-[55vh] items-center overflow-hidden text-white">
        <Image
          src="/contact-hero.png"
          alt="Contact"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 md:px-10 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-geom leading-[0.95] font-black"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            LET'S BRING YOUR
            <br />
            IDEAS TO <span className="text-primary">REAL LIFE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-8"
          >
            <a
              href="mailto:theiqonex@gmail.com"
              className="font-dm hover:text-primary text-[11px] text-white/50 underline underline-offset-4 transition-colors"
            >
              theiqonex@gmail.com
            </a>
            <a
              href="tel:+94769828585"
              className="font-dm text-[11px] text-white/50 transition-colors hover:text-white"
            >
              +94 7698 28585
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <div className="bg-surface px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <div className="grid gap-16 md:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <p className="text-primary mb-3 text-[10px] tracking-[0.3em] uppercase">Contact Us</p>
              <h2
                className="font-geom mb-6 leading-[0.95] font-black text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                START YOUR
                <br />
                <span className="text-primary">PROJECT</span> TODAY
              </h2>
              <p className="font-dm max-w-sm text-sm leading-relaxed text-white/50">
                We help turn your ideas into real digital products. Tell us what you're building and
                we'll make it happen.
              </p>

              {/* Info blocks */}
              <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8">
                <div>
                  <p className="mb-1 text-[9px] tracking-[0.2em] text-white/30 uppercase">Email</p>
                  <a
                    href="mailto:theiqonex@gmail.com"
                    className="font-dm hover:text-primary text-sm text-white transition-colors"
                  >
                    theiqonex@gmail.com
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-[9px] tracking-[0.2em] text-white/30 uppercase">Phone</p>
                  <a
                    href="tel:+94769828585"
                    className="font-dm hover:text-primary text-sm text-white transition-colors"
                  >
                    +94 7698 28585
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-[9px] tracking-[0.2em] text-white/30 uppercase">
                    Location
                  </p>
                  <p className="font-dm text-sm text-white/50">Sri Lanka / Bandarawela</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-black/5 bg-[#fafaf8] p-6 md:p-8"
            >
              <p className="font-geom mb-6 text-sm font-bold tracking-[0.1em] text-black uppercase">
                Send us a message
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="bg-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-dm mb-1 text-lg font-bold text-[#2a2a2a]">Message sent!</h3>
                  <p className="font-dm text-sm text-black/40">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="hover:text-primary mt-6 text-[10px] font-bold tracking-widest text-black uppercase transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-5 md:grid-cols-2"
                >
                  <div>
                    <label className={labelClass}>Name</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Your full name"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[10px] text-black">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-primary mt-1 text-[10px]">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Phone (optional)</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+94 xxx xxx xxx"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Project Type</label>
                    <input
                      {...register("projectType")}
                      type="text"
                      placeholder="Web / Mobile / System"
                      className={inputClass}
                    />
                    {errors.projectType && (
                      <p className="text-primary mt-1 text-[10px]">{errors.projectType.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>What are you planning to build?</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your project..."
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-primary mt-1 text-[10px]">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end md:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="hover:bg-primary rounded-full bg-black px-8 py-3 text-[10px] font-bold tracking-widest text-white uppercase transition-colors hover:text-black disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Send Message →"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
