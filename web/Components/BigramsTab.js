var React = require('react')
var { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } = require('material-ui/Table');
var Container = require('./Container.js');
var WordCloud = require('./WordCloud.js')

all_data = [
  {
    "year": 1999,
    "words": [ {"word":"fuerzas armadas ","count":1373},{"word":"asamblea constituyente ","count":861},{"word":"ustedes saben ","count":840},{"word":"pueblo venezolano ","count":765},{"word":"100 dias ","count":747},{"word":"todas partes ","count":692},{"word":"hombres mujeres ","count":631},{"word":"derechos humanos ","count":592},{"word":"cipriano castro ","count":510},{"word":"ultimos anos ","count":506},{"word":"4 febrero ","count":471},{"word":"hago llamado ","count":470},{"word":"america latina ","count":462},{"word":"hugo chavez ","count":445},{"word":"ser humano ","count":434},{"word":"corte suprema ","count":415},{"word":"medios comunicacion ","count":402},{"word":"simon bolivar ","count":402},{"word":"adecos copeyanos ","count":388},{"word":"25 julio ","count":374},{"word":"nueva constitucion ","count":372},{"word":"ley habilitante ","count":372},{"word":"fijense ustedes ","count":364},{"word":"hong kong ","count":361},{"word":"debe ser ","count":321},{"word":"punto vista ","count":317},{"word":"republica bolivariana ","count":312},{"word":"gracias dios ","count":310},{"word":"comunidad andina ","count":306},{"word":"interno bruto ","count":305}
    ]
  },
  {
    "year": 2000,
    "words": [{"word":"america latina ","count":1041},{"word":"ustedes saben ","count":941},{"word":"hombres mujeres ","count":825},{"word":"todas partes ","count":791},{"word":"pueblo venezolano ","count":701},{"word":"4 febrero ","count":692},{"word":"fuerza armada ","count":691},{"word":"nueva constitucion ","count":564},{"word":"mundo entero ","count":543},{"word":"simon bolivar ","count":477},{"word":"ser humano ","count":459},{"word":"latina caribe ","count":445},{"word":"cada dia ","count":439},{"word":"asamblea nacional ","count":408},{"word":"comision legislativa ","count":406},{"word":"28 mayo ","count":388},{"word":"ano pasado ","count":386},{"word":"deuda externa ","count":382},{"word":"vamos hacer ","count":369},{"word":"hago llamado ","count":366},{"word":"siglo xxi ","count":365},{"word":"medios comunicacion ","count":361},{"word":"naciones unidas ","count":347},{"word":"materia prima ","count":331},{"word":"gracias dios ","count":327},{"word":"ezequiel zamora ","count":323},{"word":"valio pena ","count":308},{"word":"punto vista ","count":298},{"word":"ultimos anos ","count":292},{"word":"santa marta ","count":291}]
  },
  {
    "year": 2001,
    "words": [{"word":"america latina ","count":1153},{"word":"naciones unidas ","count":1034},{"word":"medios comunicacion ","count":960},{"word":"debe ser ","count":677},{"word":"siglo xxi ","count":659},{"word":"ustedes saben ","count":657},{"word":"todas partes ","count":633},{"word":"simon rodriguez ","count":629},{"word":"asamblea nacional ","count":627},{"word":"millones bolivares ","count":583},{"word":"santa ines ","count":570},{"word":"pueblo venezolano ","count":553},{"word":"fuerza armada ","count":531},{"word":"cada dia ","count":525},{"word":"millones dolares ","count":525},{"word":"hombres mujeres ","count":514},{"word":"pues bien ","count":500},{"word":"dos anos ","count":489},{"word":"v republica ","count":485},{"word":"seres humanos ","count":468},{"word":"ano 2000 ","count":437},{"word":"movimiento v ","count":431},{"word":"ley tierras ","count":412},{"word":"comunidad andina ","count":411},{"word":"ciencia tecnologia ","count":406},{"word":"4 febrero ","count":405},{"word":"mundo entero ","count":404},{"word":"primer ministro ","count":391},{"word":"hugo chavez ","count":387},{"word":"ezequiel zamora ","count":372}]
  },
  {
    "year": 2002,
    "words": [{"word":"pueblo venezolano ","count":1249},{"word":"medios comunicacion ","count":1107},{"word":"millones bolivares ","count":1033},{"word":"fuerza armada ","count":932},{"word":"america latina ","count":900},{"word":"clase media ","count":788},{"word":"hago llamado ","count":764},{"word":"asamblea nacional ","count":759},{"word":"naciones unidas ","count":689},{"word":"pues bien ","count":635},{"word":"mil millones ","count":625},{"word":"banco central ","count":564},{"word":"millones dolares ","count":532},{"word":"simon bolivar ","count":506},{"word":"cada dia ","count":441},{"word":"11 abril ","count":429},{"word":"tribunal supremo ","count":399},{"word":"ustedes saben ","count":397},{"word":"billones bolivares ","count":393},{"word":"primera vez ","count":377},{"word":"debe ser ","count":375},{"word":"todas partes ","count":358},{"word":"ano 2001 ","count":358},{"word":"escuelas bolivarianas ","count":342},{"word":"deuda externa ","count":341},{"word":"ano 2002 ","count":339},{"word":"partidos politicos ","count":334},{"word":"primer lugar ","count":329},{"word":"diputados diputadas ","count":325},{"word":"grupo 77 ","count":319}]
  },
  {
    "year": 2003,
    "words": [{"word":"pueblo venezolano ","count":1278},{"word":"fuerza armada ","count":1027},{"word":"mision robinson ","count":959},{"word":"america latina ","count":840},{"word":"simon rodriguez ","count":748},{"word":"banco central ","count":706},{"word":"clase media ","count":700},{"word":"debe ser ","count":666},{"word":"pequena mediana ","count":662},{"word":"cada dia ","count":650},{"word":"simon bolivar ","count":614},{"word":"4 febrero ","count":612},{"word":"asamblea nacional ","count":590},{"word":"medios comunicacion ","count":574},{"word":"mediana industria ","count":570},{"word":"hombres mujeres ","count":563},{"word":"pues bien ","count":546},{"word":"naciones unidas ","count":520},{"word":"tribunal supremo ","count":516},{"word":"petroleos venezuela ","count":500},{"word":"referendum revocatorio ","count":469},{"word":"reservas internacionales ","count":467},{"word":"barrio adentro ","count":464},{"word":"ustedes saben ","count":463},{"word":"jinetes apocalipsis ","count":450},{"word":"mision sucre ","count":447},{"word":"fondo monetario ","count":427},{"word":"ezequiel zamora ","count":420},{"word":"educacion superior ","count":418},{"word":"clases medias ","count":409}]
  },
  {
    "year": 2004,
    "words": [{"word":"america latina ","count":2381},{"word":"santa ines ","count":1797},{"word":"4 febrero ","count":1247},{"word":"pueblo venezolano ","count":1212},{"word":"15 agosto ","count":1032},{"word":"fuerza armada ","count":981},{"word":"barrio adentro ","count":956},{"word":"consejo nacional ","count":838},{"word":"simon bolivar ","count":797},{"word":"cipriano castro ","count":757},{"word":"primer lugar ","count":731},{"word":"hombres mujeres ","count":720},{"word":"vuelvan caras ","count":687},{"word":"clase media ","count":670},{"word":"abreu lima ","count":656},{"word":"nacional electoral ","count":643},{"word":"simon rodriguez ","count":596},{"word":"medios comunicacion ","count":590},{"word":"pedro perez ","count":589},{"word":"millones dolares ","count":575},{"word":"derechos humanos ","count":572},{"word":"perez delgado ","count":572},{"word":"danilo anderson ","count":567},{"word":"revolucion bolivariana ","count":565},{"word":"ustedes saben ","count":562},{"word":"cada dia ","count":556},{"word":"todas partes ","count":529},{"word":"reservas internacionales ","count":526},{"word":"ezequiel zamora ","count":469},{"word":"banco central ","count":465}]
  },
  {
    "year": 2005,
    "words": [{"word":"america latina ","count":1942},{"word":"pueblo venezolano ","count":1295},{"word":"simon bolivar ","count":1157},{"word":"fidel castro ","count":1014},{"word":"mister danger ","count":974},{"word":"200 anos ","count":917},{"word":"barrio adentro ","count":871},{"word":"cada dia ","count":867},{"word":"monte sacro ","count":819},{"word":"fuerza armada ","count":771},{"word":"ustedes saben ","count":723},{"word":"mar plata ","count":706},{"word":"millones dolares ","count":678},{"word":"buenos aires ","count":641},{"word":"4 febrero ","count":552},{"word":"imperialismo norteamericano ","count":552},{"word":"hombres mujeres ","count":537},{"word":"asamblea nacional ","count":536},{"word":"vuelvan caras ","count":520},{"word":"siglo xx ","count":495},{"word":"simon rodriguez ","count":492},{"word":"che guevara ","count":488},{"word":"seis anos ","count":488},{"word":"siglo xxi ","count":482},{"word":"medios comunicacion ","count":474},{"word":"naciones unidas ","count":470},{"word":"senor presidente ","count":469},{"word":"san martin ","count":458},{"word":"debe ser ","count":435},{"word":"mil millones ","count":432}]
  },
  {
    "year": 2006,
    "words": [{"word":"america latina ","count":2141},{"word":"ustedes saben ","count":1309},{"word":"fuerza armada ","count":1156},{"word":"simon bolivar ","count":1123},{"word":"cada dia ","count":1007},{"word":"3 diciembre ","count":990},{"word":"siglo xxi ","count":929},{"word":"evo morales ","count":865},{"word":"barrio adentro ","count":803},{"word":"imperio norteamericano ","count":789},{"word":"fidel castro ","count":776},{"word":"4 febrero ","count":759},{"word":"simon rodriguez ","count":751},{"word":"pueblo venezolano ","count":730},{"word":"vuelvan caras ","count":712},{"word":"200 anos ","count":691},{"word":"millones dolares ","count":688},{"word":"siete anos ","count":680},{"word":"naciones unidas ","count":639},{"word":"consejos comunales ","count":583},{"word":"negra hipolita ","count":554},{"word":"salario minimo ","count":551},{"word":"ocho anos ","count":513},{"word":"debe ser ","count":508},{"word":"siglo xx ","count":502},{"word":"revolucion bolivariana ","count":466},{"word":"mil millones ","count":464},{"word":"muchas veces ","count":463},{"word":"todas partes ","count":460},{"word":"especie humana ","count":432}]
  }
];


class BigramsTab extends React.Component {

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
              <TableRowColumn style={{ width: '70%', height: '100%' }}><WordCloud data = { year.words } scale="count" show=""/> </TableRowColumn> +
              </TableRow>
              );
          })}      
      </TableBody>
    </Table>
      );
  }
}

module.exports = BigramsTab;

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