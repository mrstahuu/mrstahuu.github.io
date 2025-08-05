export default function ProjectCards() {
  const projects = [
    {
      title: "SzybkiSzofer",
      description: "Dynamic public transport planner",
      link: "https://szybkiszofer.maventplan.pl",
      link_label: "See project SzybkiSzofer",
      image: "../SzybkiSzofer-1920-980.png",
      features: [
        "HTML, PHP, JS with multiple frameworks",
        "Bootstrap v5",
        "Responsive design",
        "Integration with multiple APIs",
        "PWA Installable",
        "Dashboard",
      ],
    },
    {
      title: "SuffraHub",
      description: "System allowing anonymous voting using codes. No logging in, stats provided.",
            link: "https://github.com/SuffraHub/",
            link_label: "See repository SuffraHub on GitHub",
      image: "../SuffraHub.png",
      features: [
        "React, Bootstrap, Express",
        "Scattered backends",
        "Tenants (Companies)",
        "Admin dashboard",
      ],
    },
    {
      title: "Losy Przeszłości",
      description: "Genealogy tree generator",
            link: "https://genealogy.maventplan.pl",
            link_label: "See project Losy Przeszłości",
      image: "LosyPrzeszlosci.png",
      features: [
        "HTML, PHP, JS with frameworks",
        "Bootstrap",
        "User authentication with permissions",
        "Admin dashboard",
      ],
    },
  ];

  return (
    <div className="w-full mx-5 my-10 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-white py-12 px-4 sm:px-6 lg:px-8 space-y-12 sm:mx-30">

      {projects.map((project, idx) => {
        const isEven = idx % 2 === 1;
        return (
          <div
            key={project.title}
            className={`flex flex-col lg:flex-row ${
              isEven ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="lg:w-7/12 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Features */}
            <div className="lg:w-5/12 w-full">
              <h2 className="text-2xl font-bold">{project.title}<br /><span className="text-gray-600">{project.description}</span></h2>
              <div className="my-3"><a className="text-indigo-500 mb-4 underline underline-offset-8" href={project.link}>{project.link_label}</a></div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {project.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
