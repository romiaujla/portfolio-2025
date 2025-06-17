import { Typewriter } from "../components/Typewriter";
import { PortfolioMenu } from "./PortfolioMenu";

export const Header = () => {
  const headerContent = (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold">
        Raman <span className="text-primary">Aujla</span>
      </h1>

      <h2 className="text-sm lg:text-base font-semibold my-4">
        Sr. Software Engineer
        <br />
        <span className="text-primary" aria-live="polite">
          (<Typewriter words={["Full Stack", "Front End", "Back End"]} />)
        </span>
      </h2>

      <p className="text-sm">
        A software engineer with a passion for building scalable and efficient
        web applications.
      </p>
    </>
  );

  return (
    <div className="">
      <header className="lg:hidden text-left pt-10 px-10">
        {headerContent}
      </header>
      <header className="hidden lg:block fixed top-10 h-screen w-1/3 pt-10 px-10 text-left">
        {headerContent}

        <PortfolioMenu />
      </header>
    </div>
  );
};
