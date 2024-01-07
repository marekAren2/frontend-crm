import { Route, Routes } from "react-router-dom";
import CustomersList from "../views/CustomersList";
import Signup from "../views/Signup";
import Print from "../views/Print";
import Example_2 from "../views/Example_2";
import App from "../App";

const AppRoutes = () => {

  return( 
    <Routes>
        {/* // component w wersji < 6.0 obecnie element! */}
        {/* <Route path="/" component={CustomersList}/> */}
        {/* <Route path="/custom" element={CustomersList}/> */}
        {/* <Route path="/customersList" component={CustomersList}/> */}
        {/* // Używając 'component' prop */}
        

        <Route path="/" element={Signup}/>
        {/* <Route path="/" element={App }/> */}
        {/* <Route path="/pr" element={Print}/> */}
        {/* <Route path="/" element={Example_2}/> */}
    </Routes>
  )
};
export default AppRoutes ;