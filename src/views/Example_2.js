import "./Example.css";
// import {log} from './logger';
import log from '../logger';

const stats = [
  {
  id: 1,
  name: 'Transactions every 24 hours',
  value: '44 million',
},
{
  id: 2,
  name: 'Assets under holding',
  value: '99.9%',
},
{
  id: 3,
  name: 'Creators on the platform',
  value: '8,000+',
},
]
const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    nip: 6791151213,
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    nip: 6791151207,
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    nip: 6000000004,
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    // nip: 6000000004,
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    nip: '6791151212',
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    nip: 6791151214,
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];
// export default function Example_2() {
// odbieram props customers

export default function Example_2(props) {
  // let customers = props.customers
  function mergeData(customers, people) {
    // Sprawdzamy, czy customers jest tablicą
    if (!Array.isArray(customers)) {
      console.error("Error: props.customers is not an array");
      return [];
    }

    console.log("props.customers is an array");

    // // Tworzymy kopię tablicy customers, aby uniknąć modyfikowania oryginalnej tablicy
    // const mergedData = JSON.parse(JSON.stringify(customers));
    // ❗ Tworzymy kopię tablicy customers za pomocą map
    const mergedData = customers.map((customer) => ({ ...customer }));

    // Iterujemy przez obie tablice i łączymy dane na podstawie pola "nip"
    for (const person of people) {
      const matchingCustomer = mergedData.find(
        // (customer) => customer.nip === person.nip
        (customer) => customer.nip == person.nip
      );

      // Jeżeli istnieje pasujący klient, łączymy dane
      if (matchingCustomer) {
        matchingCustomer.personData = {
          name: person.name,
          email: person.email,
          role: person.role,
          imageUrl: person.imageUrl,
          lastSeen: person.lastSeen,
          lastSeenDateTime: person.lastSeenDateTime,
        };
      }
    }

    return mergedData;
  }

  const handleButtonDelete = () => {
    console.log('klik');
      return( <div></div>
      )
    };
  // Przykład użycia funkcji
  const mergedDataArray = mergeData(props.customers, people);
  console.log("mergedDataArray", mergedDataArray);

  // const YourListComponent = ({ names, customers }) => {
  /*  const YourListComponent = ( people, customers ) => {
    // Automatyczne dodawanie pól klientów na podstawie numeru NIP
    const clients = people
      // .map(({ name, ...fields }) => {
        .map(({ nip, ...fields }) => {
          console.log('nip clients: ',nip);
        // const customer = customers[name];
        // const customer = props.customers[name];
        const customer = props.customers[nip];

        return customer
          ? { name, nip: customer.nip, ...customer, ...fields }
          : null;
      })
      .filter(Boolean);

    console.log(clients); // Wyświetlanie listy klientów w konsoli

    // Zwracanie listy klientów (lub inny komponent w przypadku renderowania na stronie)
    return clients;
  }; */
  // blad
  // getCustomers();

  //wywoluje funkcje jak sie uda to wyciag jej deklaracje :
  // YourListComponent({ people, customers });
  // YourListComponent({ people, props.customers });
  // YourListComponent( people, props.customers );

  // mergeData(props.customers,people);
  return (
    <div className="containerBody">
      <ul role="list" className="divide-y divide-gray-100 py-2">
        {mergedDataArray.map((person) => (
          // <React.Fragment>
          // ten kod ustawia py-5 dla kazdego elementu z Array.length to 8 pozycji <li> w devtools
          // <li key={person.nip} className="flex justify-between gap-x-6 py-5">
            <li key={person.nip} className="flex justify-between gap-x-6 py-2">
            {person.personData ? (
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={person.personData.imageUrl}
                  alt=""
                />

                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.personData.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {person.personData.email}
                  </p>
                </div>
              </div>
            ) : (
              "-"
            )}
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.name} alt="" /> */}
              {/* <div className="containerFirm ml-5 flex items-center gap-x-4"></div> */}
              {/* <div className="containerFirm ml-5 gap-x-4"> */}
              <div className="containerFirm flex">
                <div className="min-w-0 ">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  {/* <div className="containerAddress flex items-center ml-0 mb-0 border"> */}
                  <div className="containerAddress ml-0 mb-0">
                    <p
                      className="mt-1 truncate text-xs leading-5 text-gray-500"
                      ml-
                    >
                      {person.address?.city + " ul. " + person.address?.street}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.nip}
                    </p>
                  </div>
                </div>
                {/* <button className="Delete flex items-center">Delete</button> */}
                <button 
                onClick={handleButtonDelete} className="Delete ml-10 btn btn-outline-danger">Delete</button>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              {person.personData && (
                // <>
                <p className="text-sm leading-6 text-gray-900">
                  {person.personData.role}
                </p>
              )}
              {person.personData && person.personData.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.personData.lastSeenDateTime}>
                    {person.personData.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
              {/* </> */}
            </div>
          </li>

          // </React.Fragment>
        ))}
      </ul>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
