import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//components
import { UserContext } from "./context/UserContext";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./App.css";
import './config/firebaseConfig'
import firebaseConfig from "./config/firebaseConfig";


firebase.initializeApp(firebaseConfig)

function App() {
 
  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
        <Switch >
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="*" component={PageNotFound}/>
        </Switch >
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
