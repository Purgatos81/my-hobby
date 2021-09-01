import HeaderComp from "./components/header/Header";
import FooterComp from "./components/footer/Footer";

import "./sass/main.scss";
import image from "./media/pubg.jpg";
import { TextCollection } from "./utils/Texts";


const App = () => {
  return (
    <body className="wrapper">
      <header>
        <HeaderComp />
      </header>
      <main>
      <img src={image} />
      <p>{TextCollection.text1}</p>
      <p>{TextCollection.text2}</p>
      <p>{TextCollection.text3}</p>
      </main>
      <footer>
        <FooterComp />
      </footer>
    </body>
  )
}

export default App;
