import "./App.css";
import { AppRouter } from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/Layout/footer";
import ViewportProvider from "./context/viewport";
function App() {
  return (
    <>
      <ViewportProvider>
        <Router>
          <div className="wrapper">
            <AppRouter />
            <Footer />
          </div>
        </Router>
      </ViewportProvider>
    </>
  );
}

export default App;
