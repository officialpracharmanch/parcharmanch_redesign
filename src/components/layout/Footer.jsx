import Link from "next/link"
import { Github, Twitter, Linkedin, Rss, Mail, CheckCircle2, PenTool, Heart, Building2, Shirt, Sparkles, Newspaper, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Blogs", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Career", href: "#" },
  { name: "Contact Us", href: "#" },
]

const niches = [
  { name: "Health", icon: Heart, color: "text-red-500" },
  { name: "Real Estate", icon: Building2, color: "text-purple-500" },
  { name: "Fashion", icon: Shirt, color: "text-pink-500" },
  { name: "Lifestyle", icon: Sparkles, color: "text-orange-500" },
  { name: "News", icon: Newspaper, color: "text-blue-600" },
  { name: "Blogging", icon: BookOpen, color: "text-green-600" },
]

const socialLinks = [
  { name: "Facebook", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Rss, href: "#" },
]

const benefits = [
  "Get published",
  "Reach a wider audience",
  "Build your authority",
]

export function Footer() {
  return (
    <footer className="bg-blue-600 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Main Footer Card */}
        <div className=" bg-white p-8 lg:p-12 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-6 ">
            {/* Left - Brand */}
            <div className="lg:col-span-2 ">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Newspaper className="h-7 w-7 text-white" />
                </div>
                <span className="text-2xl font-bold text-blue-600">ParcharManch</span>
              </div>
              <p className="mb-5 text-base leading-relaxed text-slate-600">
                We're here for you. Because building something that lasts requires more than just speed, focus on moving forward with clear sense of purpose.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-2 mb-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:scale-110 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 text-blue-600">
                <Mail className="h-6 w-6" />
                <span className="font-medium text-base">official.parchar.manch@gmail.com</span>
              </div>
            </div>

            {/* Middle Left - Quick Links */}
            <div className="">
              <h3 className="mb-4 text-base font-bold text-blue-600 uppercase tracking-wide">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-slate-600 transition-colors hover:text-blue-600 hover:font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Right - Our Niches */}
            <div className="">
              <h3 className="mb-4 text-base font-bold text-blue-600 uppercase tracking-wide">
                Our Niches
              </h3>
              <ul className="flex flex-col gap-2.5">
                {niches.map((niche) => {
                  const IconComponent = niche.icon
                  return (
                    <li key={niche.name} className="flex items-center gap-2">
                      <IconComponent className={`h-6 w-6 flex-shrink-0 ${niche.color}`} />
                      <Link
                        href="#"
                        className="text-base text-slate-600 transition-colors hover:text-blue-600 hover:font-medium"
                      >
                        {niche.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right - Write With Us CTA */}
            <div className=" lg:col-span-2 rounded-xl bg-blue-50 p-2 border border-blue-300">
              <div className="flex items-center gap-2 mb-4">
                <PenTool className="h-6 w-6 text-blue-600" />
                <h3 className="text-base font-bold text-blue-600">Write With Us</h3>
              </div>
              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Share your ideas, stories, and expertise with our growing audience.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                Whether you're a writer, blogger, brand, or industry expert — we welcome high-quality guest contributions across our niches.
              </p>
              
              {/* Benefits */}
              <ul className="mb-5 space-y-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link href="#" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Post With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center">
          <p className="text-base text-blue-50">
            Copyright © 2026 ParcharManch | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
