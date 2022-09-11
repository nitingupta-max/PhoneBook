import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main/index";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import CreateContact from "./components/CreateContact";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<ContactList />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/create" exact element={<CreateContact />} />
      {/* <Route exact path="/" component={ContactList} /> */}
      <Route path="/edit/:id" exact element={<EditContact />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
