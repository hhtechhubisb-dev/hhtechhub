import Title from "../components/Title";
import TechCategorySelector from "../components/TechCategorySelector.jsx";

function Technologies() {
  return (
    <section
      id="technologies"
      className="w-full px-4 md:px-10 lg:px-20 text-black scroll-mt-40"
    >
      <div className="text-center max-w-3xl mx-auto">
        <Title
          title="Our Technologies and Platforms"
          des="Cutting-edge tools powering your digital solutions"
          align="center"
          barAlignment="self-center"
          titleClassName="text-3xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text"
        />
      </div>

      <div className="mt-6">
        <TechCategorySelector />
      </div>
    </section>
  );
}

export default Technologies;
