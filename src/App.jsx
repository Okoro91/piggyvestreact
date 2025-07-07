import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import FlexDollar from "./pages/Save/FlexDollar";
import HouseMoney from "./pages/Save/HouseMoney";
import Blog from "./pages/Resources/Blog";
import Reports from "./pages/Resources/Report";
import Comics from "./pages/Resources/Comics";
import Calculator from "./pages/Resources/Calculator";
import Newsletter from "./pages/Resources/Newsletter";
import Ebook from "./pages/Resources/Ebook";
import Footer from "./components/Footer";
import Naira from "./pages/Save/Naira";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/save" element={<Save />}>
          <Route index element={<Piggybank />} />
          <Route path="safelock" element={<Safelock />} />
          <Route path="target-savings" element={<TargetSavings />} />
          <Route path="naira" element={<Naira />} />
          <Route path="house-money" element={<HouseMoney />} />
          <Route path="flexdollar" element={<FlexDollar />} />
        </Route>
        <Route path="/invest" element={<Invest />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/resources" element={<Resources />}>
          <Route index element={<Blog />} />
          <Route path="reports" element={<Reports />} />
          <Route path="comics" element={<Comics />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="ebook" element={<Ebook />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
