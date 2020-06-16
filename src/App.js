import React from 'react';
import NavBar from './components/navbar/navbar';
import CandidateEditor from './components/candidate-editor/candidate-editor';
import QuestionsEditor from './components/questions-editor/questions-editor';
import {Switch,Route} from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Switch>
                <Route exact path='/candidates' render={() => <CandidateEditor/>}/>
                <Route path='/questions' render={() => <QuestionsEditor/>}/>
            </Switch>
        </div>
    );
}

export default App;
