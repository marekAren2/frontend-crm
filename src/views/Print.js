import CustomersList from "./CustomersList";

const Print = () => {
  console.log("printuje z Print");
  console.log("nie renderuje z funkcji, ale nie jest przyczyna bledu");
  return;
  <div>
    <h2>napis print</h2>
    {  console.log("printuje z Print z <div")}
    {/* // test czy uruchomi */}
    {<CustomersList/>}
  </div>;
};
export default Print;
