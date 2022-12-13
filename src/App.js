import './App.css';
import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Singlepage from "./pages/Singlepage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='blog/:id' element={<Singlepage/>}/>
        <Route path='blog/:id/:edit' element={<EditPost/>}/>
        <Route path='blog/new' element={<CreatePost/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
