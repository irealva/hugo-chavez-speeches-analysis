var React = require('react')
var {Tabs, Tab} = require('material-ui/Tabs');
var Slider = require('material-ui/Slider').default;
var FrequencyTab = require('./FrequencyTab.js');
var MostCommonTab = require('./MostCommonTab.js');
var TFIDF = require('./TFIDF.js');
var BigramsTab = require('./BigramsTab.js');


// var { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } = require('material-ui/Table');
// var Container = require('./Container.js');

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
};

// var global_data = require('../data/words_of_interest_year.json');
// var year_labels = ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006"];

// Prep the data
// for (let j = 0 ; j < global_data.length; j++) {
//   var temp_years = global_data[j].years;
//   var temp  = [];
//   for (let i = 0; i < temp_years.length; i++) {    
//     temp.push({ year: year_labels[i], frequency: temp_years[i] });
//   }

//   global_data[j].years = temp;
// }

class MenuTabs extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
     return (
      <Tabs className="root_tabs" inkBarStyle={{marginBottom: "20px"}}  tabItemContainerStyle={{ width: '100%'}}  >
        <Tab label="Selected Words" >
          <p style={{ width: '40%' }}>This section shows a list of selected words and their frequency of appeareance in speeches from 1999-2006.</p>
          <div className="below_tab">
            <FrequencyTab />
          </div>
        </Tab>
        <Tab label="Most Used Words" >
          <p style={{ width: '40%' }}>This section shows word cloud of the most frequence words in speeches from 1999-2006.</p>
          <MostCommonTab />
        </Tab>
        <Tab label="Unique Words" >
          <p style={{ width: '40%' }}>This section shows the results of a term frequency - inverse document frequency analysis. It shows the most unique words present in the collective speeches of any given year.</p>
          <TFIDF />
        </Tab>
        <Tab label="Bigrams" >
          <p style={{ width: '40%' }}>This section shows a list of bigrams, or sets of words that are likely to appear adjacent to each other in speeches from 1999-2006.</p>
          <BigramsTab />
        </Tab>
      </Tabs>
      );
  }
}

module.exports = MenuTabs;