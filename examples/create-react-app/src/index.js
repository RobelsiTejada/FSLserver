import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import createApp from "./app";

const Root = () => (
    <BrowserRouter>
        {createApp({
            state: window.__INITIAL_STATE__, // you can skip this if you don't use Redux
            props: window.__INITIAL__PROPS__
        })}
    </BrowserRouter>
);

render((<Root/>), document.getElementById('root'));
