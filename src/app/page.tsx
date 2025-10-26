import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}
