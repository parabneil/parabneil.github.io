import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { headerMenus } from "./utils/headerMenus";

function App() {

  return (
    <>
      <Header />
      <main>
        {headerMenus.map((menu) => (
          <section key={menu.id.replace("#", "")} id={menu.id.replace("#", "")}>{menu.component}</section>
        ))}
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
