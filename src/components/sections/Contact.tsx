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
  "mt-1 w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none transition-colors duration-200 focus:border-orange-500 placeholder:text-black/25 font-dm text-[#2a2a2a]";

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
      if (res.ok) { setSubmitted(true); reset(); }
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
            className="font-geom font-black leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            LET'S BRING YOUR
            <br />
            IDEAS TO <span className="text-orange-500">REAL LIFE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-8"
          >
            <a href="mailto:theiqonex@gmail.com" className="text-[11px] font-dm text-white/50 underline underline-offset-4 hover:text-orange-400 transition-colors">
              theiqonex@gmail.com
            </a>
            <a href="tel:+94769828585" className="text-[11px] font-dm text-white/50 hover:text-white transition-colors">
              +94 7698 28585
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <div className="bg-[#f0ede8]">
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
              <p className="mb-3 text-[10px] tracking-[0.3em] uppercase text-orange-500">Contact Us</p>
              <h2
                className="font-geom font-black leading-[0.95] text-[#2a2a2a] mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                START YOUR
                <br />
                <span className="text-orange-500">PROJECT</span> TODAY
              </h2>
              <p className="text-sm leading-relaxed text-black/50 font-dm max-w-sm">
                We help turn your ideas into real digital products. Tell us what you're building and we'll make it happen.
              </p>

              {/* Info blocks */}
              <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-8">
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-black/30 mb-1">Email</p>
                  <a href="mailto:theiqonex@gmail.com" className="text-sm font-dm text-[#2a2a2a] hover:text-orange-500 transition-colors">
                    theiqonex@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-black/30 mb-1">Phone</p>
                  <a href="tel:+94769828585" className="text-sm font-dm text-[#2a2a2a] hover:text-orange-500 transition-colors">
                    +94 7698 28585
                  </a>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-black/30 mb-1">Location</p>
                  <p className="text-sm font-dm text-[#2a2a2a]">Sri Lanka / Bandarawela</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-[#fafaf8] p-6 md:p-8 border border-black/5"
            >
              <p className="font-geom font-bold text-sm tracking-[0.1em] text-orange-500 mb-6 uppercase">
                Send us a message
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-dm font-bold text-lg text-[#2a2a2a] mb-1">Message sent!</h3>
                  <p className="text-sm text-black/40 font-dm">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-[10px] font-bold tracking-widest uppercase text-orange-500 hover:text-orange-600 transition-colors">
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <div>
                    <label className={labelClass}>Name</label>
                    <input {...register("name")} type="text" placeholder="Your full name" className={inputClass} />
                    {errors.name && <p className="mt-1 text-[10px] text-orange-500">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Email</label>
                    <input {...register("email")} type="email" placeholder="your@email.com" className={inputClass} />
                    {errors.email && <p className="mt-1 text-[10px] text-orange-500">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Phone (optional)</label>
                    <input {...register("phone")} type="tel" placeholder="+94 xxx xxx xxx" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>Project Type</label>
                    <input {...register("projectType")} type="text" placeholder="Web / Mobile / System" className={inputClass} />
                    {errors.projectType && <p className="mt-1 text-[10px] text-orange-500">{errors.projectType.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>What are you planning to build?</label>
                    <textarea {...register("message")} rows={4} placeholder="Describe your project..." className={`${inputClass} resize-none`} />
                    {errors.message && <p className="mt-1 text-[10px] text-orange-500">{errors.message.message}</p>}
                  </div>

                  <div className="flex justify-end md:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-full bg-orange-500 px-8 py-3 text-[10px] font-bold tracking-widest uppercase text-white transition-colors hover:bg-orange-600 disabled:opacity-50"
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