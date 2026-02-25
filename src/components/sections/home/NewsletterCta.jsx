"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NewsletterCta() {
  const [email, setEmail] = useState("")

  return (
    <section 
      className="relative bg-cover bg-center "
      style={{
        backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22><defs><linearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:%231a1a2e;stop-opacity:1%22 /><stop offset=%2250%25%22 style=%22stop-color:%232d3561%22 /><stop offset=%22100%25%22 style=%22stop-color:%23161628%22 /></linearGradient></defs><rect width=%221200%22 height=%22400%22 fill=%22url(%23grad)%22/><circle cx=%22200%22 cy=%22100%22 r=%22150%22 fill=%22%2300d4ff%22 opacity=%220.1%22/><circle cx=%221000%22 cy=%22300%22 r=%22200%22 fill=%22%2300d4ff%22 opacity=%220.05%22/><path d=%22M0,200 Q300,100 600,200 T1200,200%22 stroke=%22%2300d4ff%22 stroke-width=%222%22 fill=%22none%22 opacity=%220.1%22/></svg>')"
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/95" /> */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-14 text-center lg:px-6 lg:py-20">
        <span className="mb-3 text-xs font-bold text-accent uppercase tracking-widest">
          Stay Updated
        </span>
        <h2 className="mb-3 max-w-lg font-serif text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
          Get the best articles delivered to your inbox
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-primary-foreground/60">
          Join 25,000+ readers. No spam, unsubscribe anytime.
          Fresh content on tech, business, and lifestyle every week.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md gap-2"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">Subscribe</span>
          </Button>
        </form>
      </div>
    </section>
  )
}
