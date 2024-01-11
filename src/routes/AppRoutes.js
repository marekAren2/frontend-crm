import { Route, Routes } from "react-router-dom";
import CustomersList from "../views/CustomersList";
import Signup from "../views/Signup";
import Print from "../views/Print";
import Example_2 from "../views/Example_2";
import App from "../App";
// import AddNav from "../components/AppNav";
import AppNav from "../components/AppNav";
import AppNav2 from "../components/AppNav2";

const AppRoutes = () => {
  return (
    <div>
      <AppNav />
      <AppNav2/>
      <Routes>
        <Route path="/" element={<h2>strona glowna z AppRoutes przypisana do '/' </h2> } />
        {/* <Route path="/" element={<div> <AppNav/> <Print /> </div>}/> */}
        {/* // component w wersji < 6.0 obecnie element! */}
        {/* // <Route path="/" component={CustomersList}/> */}
        {/* // <Route path="/custom" element={CustomersList}/> */}
        <Route path="/customers" element={<CustomersList />} />
        {/* // Używając 'component' prop */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/addClient" element={<Signup />} />
        // <Route path="/app" element={<App />} />
        <Route path="/pr" element={<Print />} />
        <Route path="/ex" element={<Example_2 />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
