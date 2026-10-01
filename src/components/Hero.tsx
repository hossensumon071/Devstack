

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center"
    >
      <div className="text-center lg:text-left ">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Build Your Ideal <br />
          <span className="text-brand inline-block pb-1">
            Development Stack
          </span>
        </h1>
        <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx auto lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex gap-3 justify-center lg:justify-start">
          <a 
          href="#tech"
          className="flex-1 sm:flex-none bg-brand text-white text-sm font-medium px-6 py-3 rounded-md text-center hover:opacity-90 transition"
          >
            Explore Technologies
          </a>
          <a
          href="#footer"
          className="flex-1 sm:flex-none border-gray-200 text-gray-700 text-sm px-8 py-3 rounded-md text-center hover:bg-gray-50 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
        src="/HeroImage.png"
        alt="Isometric illustration of a layered development stack"
        className="w-64 sm:w-80 lg:w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default Hero;
