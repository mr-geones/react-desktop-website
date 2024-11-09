import "./css/styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='wrapper'>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
