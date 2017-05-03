var React = require('react')
var FrequencyChart = require('./FrequencyChartFour')
var global_data = require('../data/words_of_interest_year.json');
var year_labels = ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006"];

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 600,
            height: 240,
            data: this.props.ayear
        };

        // console.log("yes");
        // console.log(this.state.data);
    }

    getOneWord(years) {
        let oneWord = [];

        for (let i = 0; i < years.length; i++) {
            oneWord.push({ year: year_labels[i], frequency: years[i] });
        }

        console.log(oneWord);
        return oneWord;
        // console.log(oneWord);
    }

    render() {
        return ( < div >
            < FrequencyChart className="frequency_chart" width = { this.state.width }
            height = { this.state.height }
            // data = { this.state.data }
            data = { this.state.data }
            />  < /div >
        )
    }
}

module.exports = Container;

console.log("test");
