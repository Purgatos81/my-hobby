import Header from "./components/header/Header";
import Artcomp from "./components/article/article";

const App = () => {
  return (
      <>
        <Header />
        <Artcomp 
          titletext ="How to react"
          bodytext ="Long text here"
          authortext ="John HC"
        />
      </>
  );
}

export default App;
