import { Switch } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes><Route exact path='/home' component={Home} /></Routes>
        <Routes><Route exact path='/contact' component={Contact} /></Routes>
        <Routes><Route exact path='/about' component={About} /></Routes>
        <Routes><Route exact path='/' component={Home} /></Routes>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
