import React, {Component} from 'react';
import HeaderOld from './components/HeaderOld';
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <HeaderOld/>
                        {/*<Header/>*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
