import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Electronics from "@/pages/Electronics";
import Layout from "@/pages/shared/Layout";

const App = () => {
  return (
    <section className=" min-h-screen border-2  border-red-500">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="electronics" element={<Electronics />} />
        </Route>
      </Routes>
    </section>
  );
};

export default App;
