import { MoveLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center p-8">
        <h1 className="text-4xl mb-4">Whoopsie-daisy!</h1>
        <p className="text-base mb-4">
          No no no... you definitely took a wrong turn at Albuquerque.
        </p>
        <p className="text-base mb-8">
          This page is missing everything: design, projects, experience... Let's
          get you back to the good stuff!
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 text-lg bg-[#222] text-white rounded-lg no-underline transition-colors duration-200 hover:bg-[#444]"
        >
          <MoveLeft className="w-4 h-4 mr-2 inline-block" />
          Back
        </a>
      </div>
    </div>
  );
};
