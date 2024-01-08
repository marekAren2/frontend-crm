import { Route, Routes } from "react-router-dom";
import CustomersList from "../views/CustomersList";
import Signup from "../views/Signup";
import Print from "../views/Print";
import Example_2 from "../views/Example_2";
import App from "../App";
// import AddNav from "../components/AppNav";
import AppNav from "../components/AppNav";

const AppRoutes = () => {
  return (
    <Routes>
      // <Route path="/" element={<AppNav />} />
      {/* // component w wersji < 6.0 obecnie element! */}
      {/* // <Route path="/" component={CustomersList}/> */}
      {/* // <Route path="/custom" element={CustomersList}/> */}
      <Route path="/customers" element={<CustomersList />} />
      {/* // Używając 'component' prop */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/addClient" element={<Signup />} />
      // <Route path="/app" element={<App />} />
      // <Route path="/pr" element={<Print />} />
      // <Route path="/ex" element={<Example_2 />} />

    </Routes>
  );
};
export default AppRoutes;
