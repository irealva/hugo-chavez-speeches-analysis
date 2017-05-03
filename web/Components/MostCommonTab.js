var React = require('react')
var { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } = require('material-ui/Table');
var Container = require('./Container.js');
var WordCloud = require('./WordCloud.js')

all_data = [
  {
    "year": 1999,
    "words":[{"word":"venezuela","count":864},{"word":"aqui","count":791},{"word":"pueblo","count":762},{"word":"ustedes","count":647},{"word":"anos","count":519},{"word":"vamos","count":507},{"word":"asi","count":460},{"word":"ser","count":430},{"word":"pais","count":422},{"word":"bolivar","count":418},{"word":"ahora","count":407},{"word":"hoy","count":398},{"word":"nacional","count":383},{"word":"mundo","count":365},{"word":"hacer","count":321},{"word":"constituyente","count":313},{"word":"hace","count":303},{"word":"ano","count":297},{"word":"alla","count":285},{"word":"va","count":283},{"word":"republica","count":277},{"word":"decia","count":264},{"word":"proyecto","count":260},{"word":"creo","count":259},{"word":"gobierno","count":258},{"word":"dias","count":247},{"word":"mismo","count":247},{"word":"presidente","count":238},{"word":"bueno","count":238},{"word":"proceso","count":236}]
  },
  {
    "year": 2000,
    "words": [{"word":"aqui","count":791},{"word":"venezuela","count":741},{"word":"pueblo","count":702},{"word":"vamos","count":659},{"word":"ustedes","count":645},{"word":"ano","count":600},{"word":"anos","count":557},{"word":"ahora","count":513},{"word":"mundo","count":488},{"word":"asi","count":474},{"word":"solo","count":369},{"word":"ser","count":362},{"word":"pais","count":358},{"word":"gobierno","count":354},{"word":"ahi","count":346},{"word":"hace","count":342},{"word":"hacer","count":341},{"word":"alla","count":326},{"word":"va","count":326},{"word":"hoy","count":324},{"word":"bolivar","count":310},{"word":"proceso","count":303},{"word":"nacional","count":295},{"word":"alli","count":289},{"word":"bueno","count":288},{"word":"decia","count":285},{"word":"ejemplo","count":278},{"word":"creo","count":268},{"word":"dia","count":261},{"word":"pueblos","count":253}]
  },
  {
    "year": 2001,
    "words": [{"word":"venezuela","count":1014},{"word":"aqui","count":1008},{"word":"pueblo","count":711},{"word":"ahora","count":628},{"word":"alla","count":617},{"word":"mundo","count":608},{"word":"anos","count":603},{"word":"bueno","count":589},{"word":"vamos","count":581},{"word":"ustedes","count":521},{"word":"ano","count":484},{"word":"pues","count":479},{"word":"bolivar","count":461},{"word":"pais","count":457},{"word":"ahi","count":442},{"word":"entonces","count":442},{"word":"asi","count":439},{"word":"hace","count":418},{"word":"alli","count":404},{"word":"nacional","count":404},{"word":"hoy","count":387},{"word":"ser","count":374},{"word":"presidente","count":362},{"word":"solo","count":357},{"word":"creo","count":351},{"word":"va","count":346},{"word":"bien","count":342},{"word":"gobierno","count":340},{"word":"revolucion","count":337},{"word":"desarrollo","count":336}]
  },
  {
    "year": 2002,
    "words": [{"word":"aqui","count":951},{"word":"venezuela","count":944},{"word":"pueblo","count":772},{"word":"mundo","count":562},{"word":"ano","count":540},{"word":"pais","count":468},{"word":"alla","count":453},{"word":"ustedes","count":450},{"word":"hoy","count":429},{"word":"anos","count":418},{"word":"ahora","count":408},{"word":"nacional","count":401},{"word":"asi","count":391},{"word":"gobierno","count":389},{"word":"vamos","count":386},{"word":"pues","count":356},{"word":"ahi","count":334},{"word":"bueno","count":323},{"word":"ser","count":312},{"word":"solo","count":309},{"word":"dia","count":297},{"word":"revolucion","count":282},{"word":"hace","count":278},{"word":"alli","count":270},{"word":"millones","count":266},{"word":"entonces","count":264},{"word":"venezolanos","count":251},{"word":"bien","count":251},{"word":"venezolano","count":244},{"word":"constitucion","count":240}]
  },
  {
    "year": 2003,
    "words": [{"word":"venezuela","count":1089},{"word":"aqui","count":996},{"word":"pueblo","count":950},{"word":"bolivar","count":645},{"word":"ahora","count":627},{"word":"bueno","count":616},{"word":"alla","count":607},{"word":"anos","count":529},{"word":"ustedes","count":508},{"word":"hoy","count":505},{"word":"ano","count":486},{"word":"solo","count":454},{"word":"pais","count":452},{"word":"vamos","count":452},{"word":"asi","count":444},{"word":"pues","count":424},{"word":"gobierno","count":414},{"word":"nacional","count":413},{"word":"ser","count":399},{"word":"mundo","count":398},{"word":"dia","count":364},{"word":"ahi","count":363},{"word":"entonces","count":353},{"word":"bien","count":340},{"word":"hace","count":317},{"word":"va","count":316},{"word":"alli","count":314},{"word":"pueblos","count":300},{"word":"ejemplo","count":291},{"word":"presidente","count":284}]
  },
  {
    "year": 2004,
    "words": [{"word":"aqui","count":1318},{"word":"venezuela","count":1057},{"word":"pueblo","count":1036},{"word":"alla","count":788},{"word":"anos","count":674},{"word":"ustedes","count":656},{"word":"ahora","count":610},{"word":"bolivar","count":582},{"word":"hoy","count":581},{"word":"asi","count":522},{"word":"nacional","count":473},{"word":"mundo","count":460},{"word":"solo","count":455},{"word":"bueno","count":451},{"word":"vamos","count":444},{"word":"dia","count":438},{"word":"gobierno","count":428},{"word":"hace","count":381},{"word":"ahi","count":380},{"word":"batalla","count":376},{"word":"pueblos","count":376},{"word":"ser","count":368},{"word":"alli","count":356},{"word":"ano","count":351},{"word":"america","count":339},{"word":"revolucion","count":338},{"word":"pais","count":331},{"word":"presidente","count":330},{"word":"va","count":318},{"word":"hacer","count":307}]
  },
  {
    "year": 2005,
    "words": [{"word":"aqui","count":1252},{"word":"anos","count":1019},{"word":"pueblo","count":1017},{"word":"venezuela","count":970},{"word":"bolivar","count":675},{"word":"alla","count":674},{"word":"mundo","count":637},{"word":"pueblos","count":549},{"word":"ahora","count":549},{"word":"ustedes","count":548},{"word":"bueno","count":526},{"word":"hace","count":497},{"word":"asi","count":473},{"word":"solo","count":466},{"word":"hoy","count":460},{"word":"gobierno","count":454},{"word":"presidente","count":417},{"word":"dia","count":416},{"word":"ahi","count":412},{"word":"ano","count":406},{"word":"america","count":396},{"word":"vamos","count":394},{"word":"ser","count":376},{"word":"entonces","count":373},{"word":"aquel","count":362},{"word":"revolucion","count":338},{"word":"unidos","count":330},{"word":"gran","count":328},{"word":"mil","count":322},{"word":"decia","count":321}]
  },
  {
    "year": 2006,
    "words": [{"word":"aqui","count":1351},{"word":"venezuela","count":987},{"word":"anos","count":951},{"word":"pueblo","count":929},{"word":"ustedes","count":887},{"word":"alla","count":874},{"word":"bolivar","count":780},{"word":"ahora","count":674},{"word":"bueno","count":606},{"word":"vamos","count":604},{"word":"mundo","count":557},{"word":"hoy","count":553},{"word":"ser","count":533},{"word":"dia","count":532},{"word":"ahi","count":510},{"word":"hace","count":473},{"word":"va","count":461},{"word":"gran","count":443},{"word":"solo","count":442},{"word":"revolucion","count":423},{"word":"america","count":417},{"word":"asi","count":410},{"word":"nueva","count":392},{"word":"pais","count":373},{"word":"pueblos","count":372},{"word":"ano","count":371},{"word":"nacional","count":370},{"word":"presidente","count":367},{"word":"siempre","count":360},{"word":"entonces","count":358}]
  }
];


class MostCommonTab extends React.Component {

  constructor(props) {
    super(props);
  }

    render () {
     return (
        <Table selectable={false} style={{tableLayout: 'auto', width: '70%', margin: 'auto'}}>
      <TableBody displayRowCheckbox={false} >
          {all_data.map((year, index) => {
            // console.log(word);
            // console.log(index);

            return (<TableRow key={index}> + 
              <TableRowColumn style={{ width: '30%', height: '100%' }} className="first_column">{year.year }</TableRowColumn> +
              <TableRowColumn style={{ width: '70%', height: '100%' }}><WordCloud data = { year.words } scale="count" show="count"/> </TableRowColumn> +
              </TableRow>
              );
          })}      
      </TableBody>
    </Table>
      );
  }
}

module.exports = MostCommonTab;

// render() {
//         return ( < div >
//           <p>Test</p>
//             <WordCloud data = { this.props.data }/> 
//           </div>
//         )
//     }

// render() {
//         return ( < div >
//             < FrequencyChart width = { this.state.width }
//             height = { this.state.height }
//             // data = { this.state.data }
//             data = { this.state.data }
//             />  < /div >
//         )
//     }