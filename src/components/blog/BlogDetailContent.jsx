'use client'

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function BlogDetailContent({ post }) {

  const single = post?.blog;

  return (
    <article className="max-w-6xl mx-auto px-4 space-y-10">

      {/* HERO SECTION */}
      <div className="w-full flex justify-center py-6">

        <div className="relative w-full md:h-[380px] md:flex">

          {/* IMAGE */}
          <div className="w-full md:w-[70%] h-[260px] md:h-[380px] flex items-center justify-center bg-black md:rounded-tl-lg md:rounded-bl-lg overflow-hidden">

            <Image
              src={single?.HeroImg?.url}
              alt={single?.HeroAltText || "Blog Image"}
              width={1200}
              height={800}
              priority
              className="w-full h-full object-fit"
            />

          </div>


          {/* RIGHT BEIGE BLOCK */}
          <div className="hidden md:block md:w-[30%] bg-[#caa58f] rounded-r-lg"></div>


          {/* TITLE CARD */}
          <div
            className="
            relative
            md:absolute md:right-[40px] md:top-1/2 md:-translate-y-1/2
            bg-white md:bg-[#1b1c1e]
            p-6
            w-full md:max-w-[340px]
            border-r-4 border-b-4 border-red-500
            shadow-xl
            "
          >

            <div className="mb-2">
              <Link href={`/${single?.Category?.toLowerCase().replace(/\s+/g, "-")}`}>
                <Badge variant="secondary">{single?.Category}</Badge>
              </Link>
            </div>

            <h1 className="text-lg md:text-xl font-semibold leading-snug text-[#0f172a] md:text-white">
              {single?.Title}
            </h1>

          </div>

        </div>

      </div>



      {/* BLOG CONTENT */}
      <div className="space-y-6">

        {single.Content?.map((section) => (

          <div key={section?._id}>

            <div
              dangerouslySetInnerHTML={{ __html: section?.content }}
              className="text-gray-800 leading-relaxed ql-editor quill-content"
            />

            {section?.img?.url && (

              <div className="w-full my-6 ">

  <Image
    src={section.img.url}
    alt={section?.img?.altText || "Blog Image"}
    width={900}
    height={600}
    sizes="(max-width: 768px) 100vw, 700px"
    className="max-w-175 w-full h-auto rounded-lg object-contain"
  />

</div>

            )}

          </div>

        ))}



        {/* FAQs */}
        {single?.FAQs?.length > 0 && (

          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              FAQs
            </h2>

            {single.FAQs.map((faq, i) => (

              <details
                key={i}
                className="border-b border-gray-200 py-3 cursor-pointer group"
              >

                <summary className="font-semibold text-gray-800">
                  {faq.Q}
                </summary>

                <p className="mt-2 text-gray-600">
                  {faq.A}
                </p>

              </details>

            ))}

          </div>

        )}

      </div>

    </article>
  )
}