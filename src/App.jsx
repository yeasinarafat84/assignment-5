import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Fetch the technology data from the JSON file on mount.
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Couldn't load technologies. Please refresh."))
      .finally(() => setLoading(false));
  }, []);

  // A Set of ids in the stack makes duplicate-checking and lookups O(1).
  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack]);

  const handleAdd = (tech) => {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Stack cleared.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Explore the <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)] sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <TechGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
            <StackPanel stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>

      <Footer />

      <ToastContainer
        position="bottom-right"
        theme="light"
        autoClose={2500}
        newestOnTop
      />
    </div>
  );
}
