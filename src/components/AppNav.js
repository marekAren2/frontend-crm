import { Link } from "react-router-dom";
import  './AppNav.css';

const AppNav = () => {

  return (
    <div>
      {/* <h2>nav</h2> */}
      <div className="navMenu">

        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/customers">Klienci</Link></li>
            <li><Link to="/addClient">Dodaj Klienta</Link></li>
            <li></li>
        </ul>
        
        
        
        
      </div>
    </div>
  );
};
export default AppNav ;