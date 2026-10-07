import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ExploreSection from "../components/ExploreSection";
import FindJobSection from "../components/FindJobSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <ExploreSection />
        <FindJobSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;