"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "../auth/AuthModal"

const categories = [
  {
    name: "HEALTH",
    subcategories: ["Medical News", "Fitness & Wellness", "Nutrition", "Specialized Health","Lifestyle Diseases"],
  },
  {
    name: "REAL ESTATE",
    subcategories: ["Property News", "Buying & Selling", "Investment", "Home & Living"],
  },
  {
    name: "FASHION & LIFESTYLE",
    subcategories: ["Fashion", "Beauty", "Lifestyle", "Travel"],
  },
  {
    name: "NEWS (Core Media Section)",
    subcategories: ["National", "International", "Business", "Technology","Entertainment","Breaking News"],
  },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-accent shadow-md">
      {/* Top Bar */}
      <div className="border-b border-primary-foreground/10">
        {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-6">
          <div className="flex items-center gap-4">
            <span className="text-xs text-primary-foreground/60">
              Trending: in 2026
            </span>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <Link href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">About</Link>
            <Link href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact</Link>
            <Link href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">Write for Us</Link>
          </div>
        </div> */}
      </div>

      {/* Main Nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-tight text-accent px-4 py-1 rounded-md bg-primary-foreground">
            PARCHAR <span className="text-chart-4"> MANCH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative"
              onMouseEnter={() => setOpenDropdown(category.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-accent-foreground transition-colors hover:text-primary-foreground">
                {category.name}
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
              {openDropdown === category.name && (
                <div className="absolute left-0 top-full pt-1">
                  <div className="min-w-[200px] rounded border border-border bg-card p-1.5 shadow-xl">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block rounded px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-secondary"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <Button onClick={() => setAuthModalOpen(true)} variant="ghost" size="sm" className="text-accent-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Log In
            </Button>
          </div>
          <button
            className="rounded p-2 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {categories.map((category) => (
              <div key={category.name}>
                <button
                  className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 rounded"
                  onClick={() =>
                    setOpenDropdown(openDropdown === category.name ? null : category.name)
                  }
                >
                  {category.name}
                  <ChevronDown
                    className={`h-4 w-4 text-primary-foreground/60 transition-transform ${
                      openDropdown === category.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === category.name && (
                  <div className="ml-3 flex flex-col gap-0.5 py-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`#${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="rounded px-3 py-2 text-sm text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-primary-foreground/10 pt-3">
              <Button variant="ghost" size="sm" className="w-full justify-center text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Log In
              </Button>
            </div>
          </div>
        </div>
      )}

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </header>
  )
}
