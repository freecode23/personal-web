import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Single /> */}
      {/* <Home /> */}
      {/* <Write /> */}
      <Setting />
    </div >
  );
}

export default App;
