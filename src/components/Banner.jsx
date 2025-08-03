const Banner = ({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImageUrl,
  floatingImageUrl,
}) => {
  return (
    <>
      {/* Główna sekcja z tłem */}
      <section
        className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold leading-none text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            {description}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href={primaryButtonHref}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              {primaryButtonText}
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href={secondaryButtonHref}
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </section>

      {/* Obrazek "floating" nachodzący niżej */}
      <div className="relative z-10 max-w-6xl mx-auto -mt-32 shadow-xl rounded-xl overflow-hidden">
  <img
    src="SzybkiSzofer-1920-980.png"
    alt="Floating preview"
    className="w-full h-auto rounded-t-xl"
  />
  <div className="bg-slate-900 backdrop-blur-sm text-center text-sm text-gray-400 py-3 px-4">
    My flagship project - SzybkiSzofer. Dynamic public transport planner, dedicated to city of Szczecin, Poland.
  </div>
</div>

    </>
  );
};

export default Banner;
