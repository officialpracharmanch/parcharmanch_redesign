"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-[#F5F7FB] min-h-screen overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full">
        <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-20 text-center text-white shadow-xl">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            One Platform. Every Story.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Trusted Information Across Real Estate, Health, Politics, Fashion & More.
          </motion.p>

        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-[#6C83EB] mb-5">
              Why This Platform Was Created
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In today’s world, finding trustworthy information shouldn’t feel like a scavenger hunt.
              I experienced the frustration of jumping between multiple websites, verifying sources,
              and questioning credibility.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That’s when I decided to build one reliable destination where readers
              can access quality information across multiple domains — all in one place.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[340px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="Research"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-4xl font-semibold text-[#6C83EB] mb-12"
    >
      What We Offer
    </motion.h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Real Estate",
          desc: "Market trends, investment insights & property updates.",
          icon: "Building"
        },
        {
          title: "Health",
          desc: "Evidence-based wellness information & healthcare news.",
          icon: "HeartPulse"
        },
        {
          title: "Fashion & Lifestyle",
          desc: "Latest style trends & cultural features.",
          icon: "Shirt"
        },
        {
          title: "Political Coverage",
          desc: "Balanced reporting on local & global politics.",
          icon: "Landmark"
        },
        {
          title: "Latest News",
          desc: "From Hisar to international headlines.",
          icon: "Newspaper"
        },
        {
          title: "Speciality Topics",
          desc: "Unique insights for curious minds.",
          icon: "Lightbulb"
        },
      ].map((item, index) => {

        const Icons = {
          Building: require("lucide-react").Building2,
          HeartPulse: require("lucide-react").HeartPulse,
          Shirt: require("lucide-react").Shirt,
          Landmark: require("lucide-react").Landmark,
          Newspaper: require("lucide-react").Newspaper,
          Lightbulb: require("lucide-react").Lightbulb
        };

        const IconComponent = Icons[item.icon];

        return (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300 border border-gray-100"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            bg-indigo-100 text-indigo-600 rounded-2xl shadow-md">
              <IconComponent size={32} />
            </div>

            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        );
      })}

    </div>
  </div>
</section>

      {/* ================= COMMITMENT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[340px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              alt="Commitment"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl font-semibold text-[#6C83EB] mb-5">
              My Commitment To You
            </h2>

            <ul className="space-y-3 text-lg text-gray-700">
              <li>✔ Accuracy First – Cross-checked & verified sources</li>
              <li>✔ Transparency – Clear distinction between news & opinion</li>
              <li>✔ Timeliness – Updated & relevant information</li>
              <li>✔ Continuous Learning – Constant research & improvement</li>
            </ul>

            <p className="mt-5 text-lg text-gray-700">
              This is a one-person operation built with passion and dedication
              from Hisar, Haryana.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-14 text-center text-white shadow-inner">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-4"
        >
          Join The Journey
        </motion.h2>

        <p className="text-xl max-w-3xl mx-auto opacity-90 mb-6">
          Bookmark this site as your trusted information hub.
          Have a story tip, feedback, or suggestion? I’d love to hear from you.
        </p>

        <button className="bg-white text-indigo-600 px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
}