import ThemeToggle from "../components/theme/theme-toggle";

const Home = () => {
  return (
    <main>
      <section className="flex min-h-dvh flex-col items-center justify-center space-y-5">
        <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Next.js + Tailwind CSS Template
        </h1>

        <ThemeToggle />
      </section>
    </main>
  );
};

export default Home;
