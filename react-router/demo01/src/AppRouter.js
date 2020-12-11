import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/index'
import List from './Pages/list'
import Home from './Pages/home'

// function Index(){
//     return <h2>wendaStudy</h2>
// }

// function List(){
//     return <h2>list-page</h2>
// }

function AppRouter() {

    return (
        <Router>

            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to='/list/12345'>列表</Link>
                </li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>
    )

}
export default AppRouter;