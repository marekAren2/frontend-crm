import { Link } from "react-router-dom";
import  './AppNav.css';

const AppNav = () => {

  return (
    <div>
      {/* <h2>nav</h2> */}
      <div className="navMenu">

        <ul>
            <li><Link to="/">Home</Link> </li>
            
            <li><Link to="/addClient">Dodaj klienta</Link></li>
            <li><Link to="/customers">Lista klientów</Link></li>
            <li><Link to="/ex">lista Example_2 bezposrednio test </Link></li>
            <li></li>
        </ul>
        
        
        
        
      </div>
    </div>
  );
};
export default AppNav ;