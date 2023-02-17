import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Expertise from "./components/Expertise/Expertise";
import css from './styles/App.module.scss'
import Works from "./components/Works/Works";
import Portfolio from "./components/Protfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
const App = () => {
 return <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Works />
      <Portfolio />
      <People />
      <Footer />
    </div>
};

export default App;
