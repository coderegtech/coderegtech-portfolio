import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollMotion } from "@/components/ui/ScrollMotion";
import { profile, socials } from "@/data/socials";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.brand,
  jobTitle: profile.role,
  url: profile.url,
  image: `${profile.url}/images/john-reygun.webp`,
  description: profile.description,
  email: profile.email,
  sameAs: socials
    .filter((social) => social.name !== "Email")
    .map((social) => social.url),
  knowsAbout: [
    "Full-stack development",
    "Web applications",
    "Mobile applications",
    "Frontend engineering",
    "Backend development",
    "API integration",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <div id="portfolio-motion">
        <main id="main-content">
          <Hero />
          <About />
          <Expertise />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      <CustomCursor />
      <ScrollMotion />
    </>
  );
}
