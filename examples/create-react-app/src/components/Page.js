import React, {Component} from "react";
import {connect} from "react-redux"; // this is optional
import {withWrapper} from "create-react-server/wrapper";

export class App extends Component {

    static async getInitialProps({location: {pathname, query}, params, store}) {
        await store.dispatch(barAction()); // this is optional
        return {custom: 'custom'};
    };

    render() {
        const {foo, bar, custom, initialError} = this.props;
        if (initialError) return <pre>Initial Error: {initialError.stack}</pre>;
        return (
            <div>Foo {foo}, Bar {bar}, Custom {custom}</div>
        );
    }

}

App = connect(state => state)(App); // this is optional
export default withWrapper(App); // here we connect to WrapperProvider
