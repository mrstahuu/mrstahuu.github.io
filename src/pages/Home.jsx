import Banner from '../components/Banner.jsx';
import AboutMe from '../components/home/AboutMe.jsx';
import SkillsSection from '../components/home/Skills.jsx';
import ContactSection from '../components/home/Contact.jsx';

function Home() {
  return (
    <>
      <Banner
        backgroundImageUrl="cloud-computing.jpg"
        title="Stanisław Maik"
        description="Web Applications, Web Pages, UI/UX, Databases"
        primaryButtonText="Contact"
        primaryButtonHref="#contact"
        secondaryButtonText="Learn more"
        secondaryButtonHref="#skills"
      />

      <section id="about_me">
        <AboutMe />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact" className="flex justify-center my-5">
        <ContactSection />
      </section>
    </>
  );
}

export default Home;
