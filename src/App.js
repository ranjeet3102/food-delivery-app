import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

function App() {
  let component;

  switch (window.location.pathname) {
    case '/Home':
      component = <Home />;
      break;
    case '/List':
      component = <List />;
      break;
    case '/ReviewPage':
      component = <ReviewPage />;
      break;
    case '/Login':
      component = <LoginRegister />;
      break;
    default:
      component = <Home />; 
  }

  return (
    <div>
      <Navbar />
      {component}
      <Home/>
    </div>
  );
}

export default App;
