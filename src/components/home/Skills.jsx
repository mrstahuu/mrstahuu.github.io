import React from 'react';

const languages = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Semantic markup language used to build the structure of web pages.',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Style sheet language used for designing and responsive layouts.',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Dynamic language enabling interactivity and browser-based logic.',
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    description: 'Back-end scripting language for building server-side applications.',
  },
  {
  name: 'MySQL',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  description: 'Popular open-source relational database management system.',
},
{
  name: 'PostgreSQL',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  description: 'Advanced open-source object-relational database system.',
},
{
  name: 'MongoDB',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  description: 'NoSQL document-oriented database designed for scalability and flexibility.',
},
{
  name: 'Neo4j',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
  description: 'Graph database management system optimized for connected data.',
},

  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Modern JavaScript library for building user interfaces.',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'JavaScript runtime for backend development.',
  },
];

const wordpressOptions = [
  {
    name: 'WordPress',
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    ],
    description: 'Flexible content management system suitable for all kinds of websites.',
  },
  {
    name: 'WordPress + Elementor',
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      '/Elementor-Logo-Full-White.png',
    ],
    description: 'Drag-and-drop page builder for visually designing WordPress sites.',
  },
  {
    name: 'WordPress + Gutenberg',
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      'gutenberg.png',
    ],
    description: 'Native WordPress block editor for creating custom content layouts.',
  },
];

const customApp = {
  name: 'Dedicated Web App',
  icon: 'https://cdn-icons-png.flaticon.com/512/535/535239.png', // przykładowa ikona aplikacji webowej
  description: 'Custom-built web application tailored to your unique business needs and functionality.',
};


const Card = ({ name, icon, description }) => (
  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <img src={icon} alt={name} className="w-10 h-10 mb-4" />
    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
    <p className="mb-3 text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

const MultiIconCard = ({ name, icons, description }) => (
  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="flex space-x-3 mb-4">
      {icons.map((iconUrl, i) => (
        <img key={i} src={iconUrl} alt="" className="h-8" />
      ))}
    </div>
    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

const SkillsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Programming Languages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {languages.map(lang => (
            <Card key={lang.name} {...lang} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">WordPress Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wordpressOptions.map(option => (
            <MultiIconCard key={option.name} {...option} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Custom Web Development</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <Card {...customApp} />
        </div>
        
      </section>
    </div>
  );
};

export default SkillsSection;
