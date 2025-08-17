import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Login from "./components/auth/Login";
import Details from "./components/Main/Details";
import Basket from "./components/admin/Basket";
import Categories from "./components/Main/Categories";
import Layout from "./Layouts/Layout";
import Favorites from "./components/admin/Favorites";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route index element={<Main />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="categories/:id" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
