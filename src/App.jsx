import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./component/MyNavBar";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import AllTheBooks from "./component/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNavBar brandName="EpiBooks" />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
