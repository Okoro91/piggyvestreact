import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Save from "./pages/Save";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
import Piggybank from "./pages/Save/Piggybank";
import Safelock from "./pages/Save/Safelock";
import TargetSavings from "./pages/Save/TargetSavings";
import FlexNaira from "./pages/save/FlexNaira";
import FlexDollar from "./pages/Save/FlexDollar";
import HouseMoney from "./pages/Save/HouseMoney";
import Blog from "./pages/Resources/Blog";
import Reports from "./pages/Resources/Report";
import Comics from "./pages/Resources/Comics";
import Calculator from "./pages/Resources/Calculator";
import Newsletter from "./pages/Resources/Newsletter";
import Ebook from "./pages/Resources/Ebook";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/save" element={<Save />}>
          <Route path="piggybank" element={<Piggybank />} />
          <Route path="safelock" element={<Safelock />} />
          <Route path="target-savings" element={<TargetSavings />} />
          <Route path="flexnaira" element={<FlexNaira />} />
          <Route path="house-money" element={<HouseMoney />} />
          <Route path="flexdollar" element={<FlexDollar />} />
        </Route>
        <Route path="/invest" element={<Invest />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/resources" element={<Resources />}>
          <Route path="blog" element={<Blog />} />
          <Route path="reports" element={<Reports />} />
          <Route path="comics" element={<Comics />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="ebook" element={<Ebook />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
