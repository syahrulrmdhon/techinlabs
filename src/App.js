import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import './App.css';
import Favicon from 'react-favicon';


const App = () => <div>
    <Favicon url="https://raw.githubusercontent.com/syahrulrmdhon/techinlabs/master/src/assets/favicon.ico"/>
    <Route path={process.env.PUBLIC_URL + '/'} exact component={HomePage}/>
</div>

export default App;
