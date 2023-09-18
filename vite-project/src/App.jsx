import "./assets/style/style.css";
import Router from "./router/index";
import Layout from "./layout/index";

function App() {
  return (
    <div className="App font-sans">
      <Layout>
        <>
          <Router />
        </>
      </Layout>
    </div>
  );
}

export default App;
