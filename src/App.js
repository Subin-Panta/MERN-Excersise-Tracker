import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import EditExercise from "./components/EditExercise"
import ExerciseList from "./components/ExerciseList"
import CreateExercise from "./components/CreateExercise"
import CreateUser from "./components/CreateUser"
import Error from "./components/Error"
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ExerciseList}/>
        <Route exact path="/edit/:id" component={EditExercise}/>
        <Route exact path="/create" component={CreateExercise}/>
        <Route exact path="/user" component={CreateUser}/>
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
