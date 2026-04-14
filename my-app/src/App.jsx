import Header from "./components/Header";
import PersonList from "./components/PersonList";
import AddForm from "./components/AddForm";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost/football_api/api.php";

function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("dark");

  // Fetch data on load
  const loadData = async () => {
    try {
      const response = await axios.get(API_URL);
      if (Array.isArray(response.data)) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const removePerson = async (id) => {
    try {
      await axios.delete(API_URL, { data: { id: id } });
      loadData(); // Re-fetch from server to be in sync
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const addPerson = async (person) => {
    try {
      await axios.post(API_URL, person);
      loadData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div className={theme}>
      <div className="App">
        <Header title="⚽ ระบบจัดการนักศึกษาชมรมฟุตบอล" theme={theme} setTheme={setTheme} />
        <main>
          <Dashboard data={data} />
          <AddForm addPerson={addPerson} />
          <PersonList data={data} removePerson={removePerson} />
        </main>
      </div>
    </div>
  )
}

export default App;
