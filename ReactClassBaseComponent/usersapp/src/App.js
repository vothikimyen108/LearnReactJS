import UserFinder from "./components/UserFinder";
import UsersContext from "./context/UserContext";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
function App() {
  return (
    <UsersContext.Provider value={{ users: DUMMY_USERS }}>
      <UserFinder></UserFinder>
    </UsersContext.Provider>
  );
}

export default App;
