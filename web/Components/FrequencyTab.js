/*
 *  Tab 1: Words of interest visualization 
 */

var React = require('react')
var { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } = require('material-ui/Table');
var Container = require('./Container.js');

var global_data = require('../data/words_of_interest_year.json');
var year_labels = ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006"];

// Prep the data
for (let j = 0 ; j < global_data.length; j++) {
  var temp_years = global_data[j].years;
  var temp  = [];
  for (let i = 0; i < temp_years.length; i++) {    
    temp.push({ year: year_labels[i], frequency: temp_years[i] });
  }

  global_data[j].years = temp;
}

class FrequencyTab extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Table selectable={false} style={{tableLayout: 'auto', width: '70%', margin: 'auto'}}>
        <TableBody displayRowCheckbox={false} >
            {global_data.map((word, index) => {
              return (<TableRow key={index}> + 
                <TableRowColumn style={{ width: '30%' }} className='first_column'>{word.word_of_interest}</TableRowColumn> +
                <TableRowColumn style={{ width: '70%' }}><Container ayear={word.years}/> </TableRowColumn> +
              </TableRow>
            );
          })}      
        </TableBody>
      </Table>
    );
  }
}

module.exports = FrequencyTab;