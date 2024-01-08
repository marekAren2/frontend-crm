import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import axios from 'axios';
import { useState } from 'react';
import CustomersList from './CustomersList';
// import {log} from './logger';
// import log from '../logger';
import Example_2 from './Example_2';
import Print from './Print';



const Signup = (props) => {
  const [name, setName] = useState("");
  const [nip, setNip] = useState("");
  const [address, setAddress] = useState({ city: "", street: "" });

  const [errors, setErrors] = useState([]);

  const handleChangeName = (e) => {
    // setName({ name: e.target.value })
    setName(e.target.value);

    console.log(
      "🚀 ~ file: Signup.js:21 ~ handleChangeName ~ e.target:",
      e.target
    );
    // console.log(e.target.value);
    console.log(
      "🚀 ~ file: Signup.js:21 ~ handleChangeName ~ setName(e.target.value);:",
      e.target.value
    );
  };

  const handleChangeNip = (e) => {
    // setName({ name: e.target.value })
    setNip(e.target.value);
  };

  console.log("name,nip", name, nip);

  const handleButtonCancel = () => {
    console.log("klik");
    // return
    // ( <div></div>
    // )
  };

  const validationForm = (e) => {
    e.preventDefault();
    console.log("in validationForm()");
    const newFirm = {
      name: name,
      nip: nip,
    };

    saveFirm(newFirm);
  };

  const saveFirm = (firmObj) => {
    // console.log('eventObj',eventObj);
    // axios request zrobimy v26 1:33
    axios
      .post("http://127.0.0.1:3005/clients", firmObj)
      // , {mode: 'cors'})
      .then((res) => {
        // jeśli sukces zamieniamy console.log na funkcje przekazana przez props

        console.log("res", res.data);
      })
      .catch((err) => {
        /// obsługa błędów za pomocą funkcji anonimowej (err to parameter funkcji)
        console.warn("obsługa błędu frontend", err);
      });
  };
  // do testu pozniej zastap handleButtonCancel
  const openList = () => {
    // <Customers />
    console.log("klikniete");
      return (
        <div>
          {/* <CustomersList customers={props.customers} /> */}
          {/* <Example_2 customers={props.customers} /> */}
          {/* Dodaj console.log, aby sprawdzić, czy funkcja openList została wywołana */}
          {console.log("openList called")}
          {/* Użyj komponentu CustomersList i przekazuj mu customers jako props */}
          {<Print />}
        </div>
      );
  };

  return (
    <form action="#" onSubmit={validationForm}>
      {/* <form action="#" onSubmit={saveFirm}> */}
      <div className="space-y-12 w-1/2">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Customers Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firmName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {/* {openList()} */}
                {/* Firm name * */}
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChangeName}
                  type="text"
                  name="firmName"
                  id="firmName"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="firmNip"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Firm NIP *
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChangeNip}
                  type="text"
                  name="firmNip"
                  id="firmNip"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Poland</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={openList}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Signup;
