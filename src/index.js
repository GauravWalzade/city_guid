import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import { InfoProvider } from "./components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <InfoProvider>
    <Router>
      <App />
    </Router>
  </InfoProvider>
);
