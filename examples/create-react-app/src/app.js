import React from "react";
import {Route, IndexRoute} from "react-router";
import NotFound from './NotFound';
import Page from './Page';
import IndexPage from './IndexPage';

export default ({state, props, req, res}) => {

    if (!state && !!req) { // this means function is called on server
        state = {
            'foo': req.url + ':' + Date.now()
        };
    }

    return (
        <Provider store={createStore(state)}>
            <WrapperProvider initialProps={props}>
                <Switch>
                    <Route exact path="/" component={IndexPage}/>
                    <Route path="/page" component={Page}/>
                    <Route component={NotFound}/>
                </Switch>
            </WrapperProvider>
        </Provider>
    );

};
