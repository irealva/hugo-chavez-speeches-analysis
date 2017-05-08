/*
 *  Entry point for the app. Main component that gets rendered first
 */

var React = require('react')

var AppBar = require('material-ui/AppBar').default;
var MenuTabs = require('./MenuTabs.js');

class AppMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Dictators Talk Too Much</h1>
                    <h2>A textual analysis of 14 years of Hugo Chavez's Rule</h2>
                    <p style={{width: '70%'}}>The following tabs contain various textual analyses of the yearly speeches of Hugo Chavez, former president of Venezuela from 1999 to 2013. Each tab contains specific details and explanations.</p>
                </div>
                <div className="myMenu">
                    <MenuTabs />
                </div>
                <div style={{ width: '100%' }}></div>
            </div>
        )
    }
}

module.exports = AppMain;
