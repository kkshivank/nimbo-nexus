import Image from "next/image";

import { Hero } from "@/components/hero";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Counters } from "@/components/counters";
import Link from "next/link";
import { ServicesGrid } from "@/components/ui/ServicesGrid";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Driving Digital Excellence */}
      <section className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Driving <span className="text-blue-600">Digital Excellence</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At{" "}
              <span className="font-semibold text-gray-800">
                NimboNexus
              </span>
              , we empower organizations to{" "}
              <span className="font-semibold text-gray-800">
                modernize
              </span>
              ,
              <span className="font-semibold text-gray-800">
                {" "}automate
              </span>
              , and
              <span className="font-semibold text-gray-800">
                {" "}scale
              </span>{" "}
              their operations. From{" "}
              <span className="text-blue-600 font-medium">
                cloud transformation
              </span>{" "}
              to{" "}
              <span className="text-blue-600 font-medium">
                enterprise automation
              </span>
              , we help businesses stay ahead in a digital-first world.
            </p>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm">

              <div>
                <p className="text-2xl font-bold text-blue-600">5+</p>
                <p className="text-gray-600">Years of Innovation</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-blue-600">20+</p>
                <p className="text-gray-600">Global Enterprise Clients</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-blue-600">50+</p>
                <p className="text-gray-600">Successful Projects</p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-72 md:h-[450px] rounded-2xl overflow-hidden shadow-lg">

            <Image
              src="https://digifame.in/wp-content/uploads/2024/02/internet-marketing-online-advertisement.jpg"
              alt="Driving Digital Excellence"
              fill
              priority
              className="object-cover hover:scale-105 transition duration-700"
            />

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services */}
      <section className="relative">

        <ServicesGrid />

        <div className="flex justify-center mt-[-50px] mb-6">

          <Link
            href="/services"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition"
          >
            Explore Our Services →
          </Link>

        </div>

      </section>

      {/* Counters */}
      <section className="relative">

        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-500 opacity-5"
          aria-hidden="true"
        />

        <Counters />

      </section>

      {/* Call To Action */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Let’s{" "}
          <span className="text-blue-600">
            Build Something
          </span>{" "}
          Great Together
        </h2>

        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Explore our services or get in touch — we’d love to hear from you.
        </p>

        <div className="mt-6 flex justify-center gap-4">

          <Link
            href="/services"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Services
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}
