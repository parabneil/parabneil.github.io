import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/Scrollup/ScrollUp";
import { headerMenus } from "./utils/headerMenus";

function App() {
  return (
    <>
      <Header />
      <main>
        {headerMenus.map((menu) => (
          <section id={menu.id.replace("#", "")}>{menu.component}</section>
        ))}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
