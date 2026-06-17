import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [date , setDate] = useState("");
  const submitForm = (e) => {
      e.preventDefault();
      console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Text: ${text}, Date: ${date}`);
  }

  return (
      <div className="p-6 max-w-sm mx-auto bg-green-400 rounded-xl shadow-md mt-10">
          <form class="space-y-4">
              <input
                  type="date"
                  onClick={(e) => setDate(e.target.value)}
                  class="w-full p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  class="w-full p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  class="w-full p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="w-full p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <br/>
              <input
                  type="text"
                  placeholder="You can write your message here"
                  onChange={(e) => setText(e.target.value)}
                  class="w-full p-15 border-6 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <button onClick = {submitForm} className="btn" type="submit" class = "w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
              >Submit
              </button>
          </form>
          <br/>
          <section className="mt-6 p-4 bg-white rounded-md border border-gray-200">
                <p className="text-gray-500 text-sm font-medium">Entered Information:</p>
                <h2 className="text-lg font-bold text-gray-800">First Name: <span
                  className="font-normal">{firstName}</span></h2>
                <h2 className="text-lg font-bold text-gray-800">Last Name: <span className="font-normal">{lastName}</span>
                </h2>
              <h2 className="text-lg font-bold text-gray-800">Email: <span className="font-normal">{email}</span></h2>
          </section>
      </div>
  );
};

export default App;