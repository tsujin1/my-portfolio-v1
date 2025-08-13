import Header from './components/Header';
import IntroSection from './components/IntroSection';
import SkillsAndTechnologies from './components/SkillsAndTechnologies';
import Experience from './components/Experience';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <SkillsAndTechnologies />
        <Experience />
      </main>
    </>
  );
};

export default MainPage;
