import Hero from "./components/Hero";
import Services from "./components/Services";
import OurServices from "./components/OurServices";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export const runtime = "edge";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <OurServices />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
