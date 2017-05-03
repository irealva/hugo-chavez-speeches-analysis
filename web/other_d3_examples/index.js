var React = require('react')
var ReactDOM = require('react-dom')
var d3 = require('d3')
var FrequencyChart = require('./Components/FrequencyChartOne')
var FrequencyChartTwo = require('./Components/FrequencyChartTwo')
var FrequencyChartThree = require('./Components/FrequencyChartThree')

const Container = React.createClass({
  getInitialState: function () {
    return {
      width: 960, 
      height: 600,
      data: [
              {letter: "A", frequency: .08167},
              {letter: "B", frequency: .01492},
              {letter: "C", frequency: .02780},
              {letter: "D", frequency: .04253},
              {letter: "E", frequency: .12702},
              {letter: "F", frequency: .02288},
              {letter: "G", frequency: .02022},
              {letter: "H", frequency: .06094},
              {letter: "I", frequency: .06973},
              {letter: "J", frequency: .00153},
              {letter: "K", frequency: .00747},
              {letter: "L", frequency: .04025},
              {letter: "M", frequency: .02517},
              {letter: "N", frequency: .06749},
              {letter: "O", frequency: .07507},
              {letter: "P", frequency: .01929},
              {letter: "Q", frequency: .00098},
              {letter: "R", frequency: .05987},
              {letter: "S", frequency: .06333},
              {letter: "T", frequency: .09056},
              {letter: "U", frequency: .02758},
              {letter: "V", frequency: .01037},
              {letter: "W", frequency: .02465},
              {letter: "X", frequency: .00150},
              {letter: "Y", frequency: .01971},
              {letter: "Z", frequency: .00074},
            ]
    }
  },

  render () {
    return (
        <div>
          <FrequencyChartTwo
            width={this.state.width}
            height={this.state.height}
            data={this.state.data}
          />
        </div>
    )
  }
})

console.log("test");

ReactDOM.render(<Container />, document.getElementById('container'))
