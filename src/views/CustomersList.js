import axios from "axios";
import { useEffect, useState } from "react";
import Example_2 from "./Example_2";
import Form from "./Signup";
// import {log} from './logger';
import log from '../logger';
import Signup from "./Signup";

// const Customers = () => {
// nie mialem props odbieranego, ale bledow nie bylo 
const CustomersList = (props) => {
  const [customers, setCustomers] = useState({});
  console.log("Poczatek komponentu customers", customers);
  // console.log('komunikat z log');


  // pamietaj o porcie i zrob config
  // axios.get('http://127.0.0.1/clients')

  function getCustomers() {
    axios
      .get("http://127.0.0.1:3005/clients")
      .then((result) => {
        //taki console.log automatyczny z polem no change robi problem
        // console.log("🚀 ~ file: CustomerList.js:7 ~ .then ~ result:", result)
        console.log("axios f.getCustomers() w .then, result.data:", result.data);
        // console.log("🚀 ~ file: CustomersList.js:7 ~ .then ~ result:", result);
        // jeśli sukces
        // x getCustomers()

        // setCustomers(result) ;
        // tylko tablice z danymi nie obiekt potrzebuje
        setCustomers(result.data);
        // ^ ustawiam customers na result setterem zeby przekazac props do Example
        // console.log("po ustawieniu: customers w getCustomers()", customers);
        // console.log('aktualizacje stanu w React są asynchroniczne. Kiedy wywołujesz setCustomers(result.data), React nie aktualizuje stanu customers od razu. Dlatego, gdy logujesz customers bezpośrednio po wywołaniu getCustomers(), może on nadal pokazywać poprzedni stan,Aby zalogować zaktualizowany stan, możesz użyć hooka useEffect z customers jako zależnością:');
        

        /*     {result.map((client) => {
                    console.log('client',client) 
                    
                })} */
      })
      .catch((err) => {
        /// obsługa błędów za pomocą funkcji anonimowej (err to parameter funkcji)
        console.warn('error_axios:',err);
      });
  }
  // useEffect do uruchomienia getCustomers po zamontowaniu komponentu

  useEffect(() => {
    getCustomers();
    // tu sie funkcja wykonuje zeby sie wyswietliła!!!
    // console.log("w useEffect[pusta - 1 raz po mount] wyswietlam getCustomers: ", getCustomers());
    console.log("w useEffect/po getCustomers() [pusta - 1 raz po mount] wyswietlam customers: ", customers);
  }, []);
  // ^ pusta tablica zależności oznacza, że useEffect będzie uruchomiony tylko raz po zamontowaniu

  useEffect(() => {
    console.log(
      "use Effect[customers] wyswietlam customers:w getCustomers() w useEffect() ",
      customers
    );
  }, [customers]);

  return (
    <div className="container">
      <h1>CustomerList component</h1>
      <Example_2 customers={customers} getCustomers={getCustomers} />
      {/* <Signup customers={customers} getCustomers={getCustomers} /> */}
    </div>
  );
};

// tu dziala? tu jest nie zdefiniowana!
// console.log('wyswietlam getCustomers: ', getCustomers());
export default CustomersList;
// tu tez.to gdzie ja moge uruchomic?
// console.log('wyswietlam getCustomers: ', getCustomers());
