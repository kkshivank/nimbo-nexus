


"use client";

import { FloatingParticles } from "@/components/floating-particles";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProcessSteps } from "@/components/process-steps";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Target, Eye, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 text-gray-900">
        {/* ✨ Background effects from Hero section */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-sky-200/60 to-blue-300/30 blur-[200px]" />
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:80px_80px] animate-slow-pan" />
        </div>

        {/* Subtle moving light wave */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -bottom-20 left-0 w-full h-[300px] bg-gradient-to-t from-sky-200/50 via-transparent to-transparent blur-3xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <FloatingParticles />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About NimboNexus
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving digital transformation with innovation, collaboration, and excellence.  
            We empower businesses to grow smarter and faster with cutting-edge technology.
          </p>
        </motion.div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="grid gap-8 md:grid-cols-3"
        >
          {[
            {
              title: "Mission",
              desc: "Deliver innovative, scalable, and secure IT solutions that accelerate digital transformation, unlock new opportunities, and create measurable business impact.",
              icon: <Target className="size-8 text-blue-600" />,
              img: "https://media.licdn.com/dms/image/v2/D4E12AQHgMxo-g7BYsw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1658422953944?e=2147483647&v=beta&t=Z2tA86SPCvcG9ieACH8jr4SSL47dclFPchqYJIPI4gY",
            },
            {
              title: "Vision",
              desc: "To be a globally trusted partner for enterprise-grade digital initiatives, empowering organizations to achieve operational excellence and sustainable growth.",
              icon: <Eye className="size-8 text-blue-600" />,
              img: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/9653016/447231_712259.png",
            },
            {
              title: "Values",
              desc: "Integrity, excellence, and collaboration define us. We put clients first, embrace innovation, and nurture continuous learning to deliver long-term value.",
              icon: <HeartHandshake className="size-8 text-blue-600" />,
              img: "https://p-gpb8fhd4b9fbh6fy.z01.azurefd.net/cms/e6ba6aae-63bf-4023-8c3a-862466828e71/b3e7b1c4-025d-44a9-af65-b46ef7526fac-lg.jpg",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border bg-white/90 backdrop-blur-md shadow-lg shadow-blue-100 overflow-hidden hover:shadow-xl transition group"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h2 className="font-semibold text-lg text-blue-600">{item.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs extended />

      {/* Our Process */}
      <ProcessSteps />

      {/* Call To Action */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Let’s <span className="text-blue-600">Build Something</span> Great Together
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Explore our services or get in touch — we’d love to hear from you.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => router.push("/services")}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Services
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
