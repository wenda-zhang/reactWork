import React from 'react';
import { Route, Link } from 'react-router-dom'
import Reactpage from './video/ReactPage'
import Flutterpage from './video/Flutter'
import Vuepage from './video/Vue'

function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React教程</Link></li>
                    <li><Link to="/video/flutterpage">flutter教程</Link></li>
                    <li><Link to="/video/vuepage">vue教程</Link></li>
                </ul>
            </div>

            <div className="vedioContent">
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactpage" component={Reactpage} />
                <Route path="/video/flutterpage" component={Flutterpage} />
                <Route path="/video/vuepage" component={Vuepage} />

            </div>
        </div>
    )
}

export default Video;