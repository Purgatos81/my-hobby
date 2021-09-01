import HeaderComp from "./components/header/Header";
import FooterComp from "./components/footer/Footer";

import "./sass/main.scss";
import image from "./media/pubg.jpg";


const App = () => {
  return (
    <body className="wrapper">
      <header>
        <HeaderComp />
      </header>
      <main>
      <img src={image} />
      </main>
      <footer>
        <FooterComp />
      </footer>
    </body>
  )
}

export default App;
