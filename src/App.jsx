import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Save from "./pages/Save";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/save" element={<Save />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
