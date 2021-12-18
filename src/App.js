import React, { useEffect } from 'react'
import SignIn from './components/Signin';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Dashboard from './components/Dashboard';
import { Card } from '@mui/material';




function App() {
  return (
    // <Router>
    //   <AppBar position="static"   >
    //     <Toolbar variant="dense">

    //       <Typography variant="h6" color="inherit" component="div">
    //         Photos
    //       </Typography>

    //       <Link to="/"><Typography variant="h6" color="white" component="div">
    //         Sign In
    //       </Typography></Link>
    //       <Link to="/dashboard">
    //         <Typography variant="h6" color="white" component="div">
    //           Dashboard
    //         </Typography></Link>
    //     </Toolbar>
    //   </AppBar>
    //   <div>

    //     {/*
    //     A <Switch> looks through all its children <Route>
    //     elements and renders the first one whose path
    //     matches the current URL. Use a <Switch> any time
    //     you have multiple routes, but you want only one
    //     of them to render at a time
    //   */}
    //     <Switch>
    //       <Route exact path="/">
    //         <SignIn />
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    <Card></Card>
  );
}

export default App;
