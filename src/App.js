
import './App.css';
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider,Route
} from "react-router-dom";
import Home from './pages/Home';
import RootLayout from "./root/RootLayout"
import About from './pages/About';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  );
}

export default App;
