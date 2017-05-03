var React = require('react')
var ReactDOM = require('react-dom')

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var {MuiThemeProvider} = require ('material-ui/styles');
var darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme');
var getMuiTheme = require('material-ui/styles/getMuiTheme').default;

var AppMain = require('./Components/AppMain.js');

const muiTheme = getMuiTheme({
  fontFamily: 'Lato, sans-serif',
  palette: {
  	primary1Color: '#3d85c6'
  }
});

console.log(darkBaseTheme);

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>    
    <AppMain />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('container'));