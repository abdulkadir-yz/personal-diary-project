import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

    const [entries, setEntries] = useState(() => {
        const saved = localStorage.getItem("localData");
        const parsed = saved ? JSON.parse(saved) : [];
        parsed?.reverse();
        return parsed.filter((entry) => entry.email !== null);
    });
  const submitForm = (e) => {
      e.preventDefault();

      const newEntry = {
      id : Date.now(),
      firstName : firstName,
      lastName : lastName,
      email : email,
      text : text,
      };
      const updateEntry = [...entries , newEntry];
      updateEntry?.reverse()
      setEntries(updateEntry);
      localStorage.setItem("localData" , JSON.stringify(updateEntry));
  }

  return (
      <div className="p-6 max-w-sm mx-auto bg-green-400 rounded-xl shadow-md mt-10">
          <form onSubmit={submitForm} className="space-y-4">
              <input
                  value={firstName}
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <input
                  value={lastName}
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <input
                  value={email}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <br/>
              <input
                  value={text}
                  type="text"
                  placeholder="You can write your message here"
                  onChange={(e) => setText(e.target.value)}
                  className="w-full p-15 border-6 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 bg-white"
              />
              <br/>
              <button type="submit" className = "btn w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
              >Submit
              </button>
          </form>
          <br/>
          <section className="mt-8 max-w-sm mx-auto grid gap-4">
              <h2 className="text-xl font-bold text-gray-800">Saved Messages</h2>

              {entries.map((entry) => (
                  <div key={entry.id} className="p-4 bg-white rounded-md shadow border border-gray-200">
                      <p className="text-xl font-bold text-gray-800">{new Date(entry.id).toLocaleString("de-DE")}</p>
                      <p className="font-bold">{entry.firstName} {entry.lastName}</p>
                      <p className="text-sm text-gray-500">{entry.email}</p>
                      <p className="mt-2">{entry.text}</p>
                  </div>
              ))}
          </section>
      </div>
  );
};

export default App;