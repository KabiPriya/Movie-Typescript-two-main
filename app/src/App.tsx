import "@picocss/pico";
import { Suspense, lazy, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { IMovie } from "./type";
import "./App.css";
import LoadingIcon from "./components/Loading/LoadingIcon";

const Add = lazy(() => import("./pages/Add"));
const Edit = lazy(() => import("./pages/Edit"));

function App() {
  const [movie, setMovie] = useState<IMovie>({
    id: 0,
    title: "",
    year: 0,
  });
  return (
    <Suspense fallback={<LoadingIcon />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleEdit={(m) => setMovie(m)} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit movie={movie} />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
