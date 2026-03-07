"use client";

import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Zap
} from "lucide-react";

import { motion } from "framer-motion";

export default function ContactPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-[#F5F7FB] min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="w-full ">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600  py-24 text-center text-white shadow-xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            We're here to help. Get in touch with us.
          </p>
        </motion.div>
      </section>

      {/* ================= GET IN TOUCH ================= */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-10 md:p-14"
        >
          <h2 className="text-4xl font-semibold text-center text-[#6C83EB] mb-12">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="space-y-8">
              <ContactItem icon={<Mail size={22} />} title="Email" desc="contact@yourwebsite.com" />
              <ContactItem icon={<MessageCircle size={22} />} title="WhatsApp" desc="+91-XXXXXXXXXX" />
              <ContactItem icon={<Zap size={22} />} title="Response Time" desc="Within 24 Hours" />
            </div>

            <div className="space-y-8">
              <ContactItem icon={<Phone size={22} />} title="Phone" desc="+91-XXXXXXXXXX" />
              <ContactItem icon={<Clock size={22} />} title="Business Hours" desc="Mon-Sat: 10 AM - 6 PM IST" />
              <ContactItem icon={<MapPin size={22} />} title="Location" desc="Hisar, Haryana, India" />
            </div>

          </div>
        </motion.div>
      </section>

     {/* ================= HOW CAN WE HELP ================= */}
<section className="py-20 px-6 bg-[#F5F7FB]">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-indigo-700 mb-16">
      How Can We Help You?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "Submit a Guest Post",
          desc: "Ready to publish your article on our platform?",
          email: "contact@yourwebsite.com",
          subject: "Guest Post Submission - [Your Topic]",
          points: [
            "Your article (Word/Google Doc)",
            "Preferred package",
            "Website URL for backlinks",
            "Author bio and photo"
          ],
          button: "View Our Packages →"
        },
        {
          title: "Questions About Packages",
          desc: "Not sure which package is right for you?",
          email: "contact@yourwebsite.com",
          subject: "Package Inquiry",
          points: [
            "Choosing the right package",
            "Understanding what's included",
            "Bulk order pricing",
            "Payment methods"
          ]
        },
        {
          title: "Content Writing Services",
          desc: "Need help writing your article?",
          email: "contact@yourwebsite.com",
          subject: "Writing Service Request",
          points: [
            "Your topic/niche",
            "Target keywords",
            "Preferred word count",
            "Deadline"
          ],
          footer: "Pricing starts at ₹1,500/article"
        },
        {
          title: "Payment & Billing",
          desc: "Questions about payments, invoices, or refunds?",
          email: "contact@yourwebsite.com",
          subject: "Payment Inquiry",
          points: [
            "Bank Transfer (NEFT/RTGS/IMPS)",
            "UPI (GPay, PhonePe, Paytm)",
            "PayPal (International)"
          ]
        },
        {
          title: "General Questions",
          desc: "Have other questions or feedback?",
          email: "contact@yourwebsite.com",
          subject: "General Inquiry",
          points: [
            "Platform related queries",
            "Collaboration inquiries",
            "Feedback & suggestions"
          ]
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-10 rounded-3xl 
                     shadow-lg hover:shadow-2xl 
                     hover:-translate-y-2 
                     transition duration-300 
                     border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">
            {item.title}
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {item.desc}
          </p>

          <div className="bg-indigo-50 p-5 rounded-xl text-base mb-6 border border-indigo-100">
            <p className="text-gray-800 mb-2">
              <span className="font-semibold text-indigo-600">Email:</span> {item.email}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold text-indigo-600">Subject:</span> {item.subject}
            </p>
          </div>

          <div className="mb-5">
            <p className="font-semibold text-gray-800 text-lg mb-3">
              Please include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {item.footer && (
            <p className="text-indigo-600 font-semibold text-lg mb-4">
              {item.footer}
            </p>
          )}

          {item.button && (
            <button className="text-indigo-700 font-semibold text-lg hover:underline">
              {item.button}
            </button>
          )}
        </motion.div>
      ))}

    </div>
  </div>
</section>
      {/* ================= CONTACT FORM ================= */}
<section className="max-w-4xl mx-auto px-6 py-16">

  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-4xl font-bold text-center 
               bg-gradient-to-r from-indigo-600 to-purple-600 
               bg-clip-text text-transparent mb-12"
  >
    Contact Form
  </motion.h2>

  <motion.form
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-white p-10 rounded-3xl 
               shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] 
               space-y-7 border border-gray-100"
  >

    <InputField label="Name" placeholder="Your full name" />
    <InputField label="Email" placeholder="your@email.com" />
    <InputField label="Subject" placeholder="What is this regarding?" />

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Message *
      </label>
      <textarea
        rows="5"
        placeholder="Tell us how we can help you..."
        className="w-full border border-gray-300 
                   rounded-xl px-4 py-3 
                   text-gray-800 placeholder-gray-400
                   focus:ring-2 focus:ring-indigo-500 
                   focus:border-indigo-500 
                   transition duration-300 outline-none"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-gradient-to-r 
                 from-indigo-600 to-purple-600 
                 text-white py-3 rounded-xl 
                 text-lg font-semibold 
                 shadow-lg hover:shadow-2xl 
                 hover:scale-[1.02] 
                 transition duration-300"
    >
      Submit Message
    </button>

  </motion.form>
</section>

{/* ================= QUICK LINKS SECTION ================= */}
<section className="px-6 pb-20 bg-[#F5F7FB]">
  <div className="max-w-6xl mx-auto">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-xl p-10 md:p-14"
    >
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
        Quick Links
      </h2>

      {/* Links Grid */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-5 text-[20px] ">
            For Guest Posters
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-indigo-600 transition cursor-pointer">
              View Our Packages
            </li>
            <li className="hover:text-indigo-600 transition cursor-pointer">
              Submission Guidelines
            </li>
            <li className="hover:text-indigo-600 transition cursor-pointer">
              Bulk Discounts
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-5 text-[20px]">
            About Us
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-indigo-600 transition cursor-pointer">
              Our Story
            </li>
            <li className="hover:text-indigo-600 transition cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-indigo-600 transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

      </div>
    </motion.div>

  </div>
</section>

{/* ================= FOLLOW US SECTION ================= */}
<section className="px-6 pb-20 bg-[#F5F7FB]">
  <div className="max-w-6xl mx-auto">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center"
    >
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-4">
        Follow Us
      </h2>

      {/* Sub Text */}
      <p className="text-gray-500 text-lg mb-10">
        Stay updated with our latest content
      </p>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-6">

        <button className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 font-medium text-gray-700">
          📘 Facebook
        </button>

        <button className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 font-medium text-gray-700">
          📸 Instagram
        </button>

        <button className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 font-medium text-gray-700">
          🐦 Twitter
        </button>

        <button className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 font-medium text-gray-700">
          💼 LinkedIn
        </button>

      </div>

    </motion.div>

  </div>
</section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-12 text-center text-white shadow-inner]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          We Look Forward to Hearing From You!
        </h2>
        <p className="text-lg ">contact@yourwebsite.com</p>
      </section>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function ContactItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-5 group">

      <div className="w-14 h-14 flex items-center justify-center
                      bg-indigo-100 text-indigo-600
                      rounded-xl shadow-md
                      group-hover:shadow-xl transition duration-300">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400 font-semibold mb-1">
          {title}
        </p>
        <p className="text-lg font-semibold text-[#2D3748]">
          {desc}
        </p>
      </div>

    </div>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} *
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 
                   rounded-xl px-4 py-3 
                   text-gray-800 placeholder-gray-400
                   focus:ring-2 focus:ring-indigo-500 
                   focus:border-indigo-500 
                   transition duration-300 outline-none"
      />
    </div>
  );
}