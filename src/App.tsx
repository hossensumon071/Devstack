import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // JSON fetch
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${removed.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack");
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center lg:text-left">
          Explore the <span className="text-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-gray-500 text-center lg:text-left">
          Pick one technology per category to build your ideal stack.
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-24 gap-3">
            <span className="loading loading-spinner loading-lg text-pink-500"></span>
            <p className="text-gray-500">Loading technologies...</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {/* Cards: 3 columns on desktop */}
            <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            {/* Sidebar */}
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;