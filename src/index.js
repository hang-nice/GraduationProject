import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
// import App from "./App.jsx";
import { RouteConfig } from './route';
import { Router, Route } from 'react-router-dom';

ReactDOM.render(
    /* <Provider store={Store}> */

    <Router history={createBrowserHistory()}>
        <Suspense fallback={<div>Loading...</div>}>
            {RouteConfig.map(item => (
                <Route exact key={item.path} path={item.path} component={item.component} />
            ))}
        </Suspense>
    </Router>,
    /* </Provider>, */
    document.getElementById('root')
);
