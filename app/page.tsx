import { Hero } from "@/components/hero";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServicesHorizontal } from "@/components/services-horizontal";
import { Counters } from "@/components/counters";
import Link from "next/link";
import { ServicesGrid } from "@/components/ui/ServicesGrid";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Driving Digital Excellence (Redesigned Impact Section) */}
<section className="relative mx-auto max-w-6xl px-4 py-12">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
        Driving <span className="text-blue-600">Digital Excellence</span>
      </h2>
      <p className="mt-4 text-gray-600 leading-relaxed">
        At <span className="font-semibold text-gray-800">Rextro IT</span>, we 
        empower organizations to <span className="font-semibold text-gray-800">modernize</span>, 
        <span className="font-semibold text-gray-800"> automate</span>, and 
        <span className="font-semibold text-gray-800"> scale</span> their operations.  
        From <span className="text-blue-600 font-medium">cloud transformation</span> 
        to <span className="text-blue-600 font-medium">enterprise automation</span>, 
        we help businesses stay ahead in a digital-first world.
      </p>

      {/* Quick Impact Stats */}
      <div className="mt-6 flex flex-wrap gap-6 text-sm">
        <div>
          <p className="text-2xl font-bold text-blue-600">10+</p>
          <p className="text-gray-600">Years of Innovation</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-600">50+</p>
          <p className="text-gray-600">Global Enterprise Clients</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-600">100+</p>
          <p className="text-gray-600">Successful Projects</p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative w-full h-72 md:h-auto rounded-2xl overflow-hidden shadow-lg">
      <img
        src="https://digifame.in/wp-content/uploads/2024/02/internet-marketing-online-advertisement.jpg"
        alt="Driving Digital Excellence"
        className="object-cover w-full h-full hover:scale-105 transition duration-700"
      />
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Our Services */}
      <section className="relative">
        <ServicesGrid />
        <div className="flex justify-center mt-[-50px] mb-6">
          <Link
            href="/services"
            className="px-6 py-3  bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition"
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

      {/* Projects Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our <span className="text-blue-600">Projects</span>
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          A glimpse of the impactful solutions we’ve delivered across
          industries.
        </p>

        {/* Project Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col">
            <img
              src="https://img.freepik.com/premium-photo/programmer-coding-software-development-working-project-it_1423-2974.jpg"
              alt="Project Alpha"
              className="rounded-xl mb-4 h-40 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Project Alpha
            </h3>
            <p className="mt-2 text-gray-600">
              A digital transformation initiative for a leading retail company
              that boosted efficiency by 40%.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col">
            <img
              src="https://i.insider.com/601441dd6dfbe10018e00c25?width=700"
              alt="Project Beta"
              className="rounded-xl mb-4 h-40 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Project Beta
            </h3>
            <p className="mt-2 text-gray-600">
              Cloud migration for a global finance firm ensuring scalability,
              security, and compliance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col">
            <img
              src="https://www.computersciencedegreehub.com/wp-content/uploads/2020/06/Is-Computer-Coding-Useful-for-the-Average-Person-1024x683.jpg"
              alt="Project Gamma"
              className="rounded-xl mb-4 h-40 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Project Gamma
            </h3>
            <p className="mt-2 text-gray-600">
              AI-driven stakeholder engagement platform deployed across multiple
              government agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Let’s <span className="text-blue-600">Build Something</span> Great
          Together
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
