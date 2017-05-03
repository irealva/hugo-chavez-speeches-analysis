// Using d3 v.4.x 

var React = require('react')
var ReactFauxDOM = require('react-faux-dom')
var d3 = require('d3')

// var data = [
//   {
//     word: "Venezuela",
//     count: 25
//   },
//   {
//     word: "Guarampo",
//     count: 10
//   }
// ];

// var data2 = [{"word":"venezuela","count":25},{"word":"cuba","count":18},{"word":"bolivar","count":18},{"word":"proyecto","count":16},{"word":"pueblo","count":14},{"word":"america","count":12},{"word":"ejercito","count":11},{"word":"anos","count":10},{"word":"ano","count":10},{"word":"bolivariano","count":10},{"word":"hace","count":10},{"word":"decia","count":10},{"word":"ustedes","count":9},{"word":"simon","count":9},{"word":"trabajo","count":9},{"word":"aquel","count":9},{"word":"despues","count":8},{"word":"militares","count":8},{"word":"latinoamericano","count":8},{"word":"marti","count":8},{"word":"comandante","count":8},{"word":"estan","count":8},{"word":"mas","count":8},{"word":"viene","count":7},{"word":"venezolano","count":7},{"word":"carcel","count":7},{"word":"ahora","count":7},{"word":"aqui","count":7},{"word":"raiz","count":7},{"word":"presidente","count":7},{"word":"tierra","count":7},{"word":"revolucion","count":7},{"word":"tiempo","count":7},{"word":"historia","count":6},{"word":"duda","count":6},{"word":"dicho","count":6},{"word":"mismo","count":6},{"word":"ideas","count":6},{"word":"nacional","count":6},{"word":"latinoamericanos","count":6},{"word":"tres","count":6},{"word":"dije","count":6},{"word":"jose","count":6},{"word":"latina","count":6},{"word":"vamos","count":6},{"word":"politico","count":6},{"word":"haber","count":6},{"word":"revolucionario","count":6},{"word":"zamora","count":6},{"word":"tambien","count":6},{"word":"poder","count":6},{"word":"decir","count":5},{"word":"nacion","count":5},{"word":"raices","count":5},{"word":"bases","count":5},{"word":"frente","count":5},{"word":"lugar","count":5},{"word":"hoy","count":5},{"word":"dentro","count":5},{"word":"latinoamericana","count":5},{"word":"rodriguez","count":5},{"word":"vertiente","count":5},{"word":"sueno","count":5},{"word":"mango","count":5},{"word":"venezolanos","count":5},{"word":"movimiento","count":5},{"word":"momento","count":5},{"word":"nuevo","count":4},{"word":"siglo","count":4},{"word":"dia","count":4},{"word":"dijo","count":4},{"word":"siempre","count":4},{"word":"tantas","count":4},{"word":"social","count":4},{"word":"colombia","count":4},{"word":"ejemplo","count":4},{"word":"tal","count":4},{"word":"estudiantes","count":4},{"word":"andamos","count":4},{"word":"sistema","count":4},{"word":"primer","count":4},{"word":"llamaba","count":4},{"word":"gran","count":4},{"word":"queridos","count":4},{"word":"voy","count":4},{"word":"armas","count":4},{"word":"forma","count":4},{"word":"seguir","count":4},{"word":"meses","count":4},{"word":"cierto","count":4}];

var fontscale = d3.scaleLinear()
        .range([12, 60]);

var supercolor = d3.scaleLinear().range(["green", "orange"]);


class WordCloud extends React.Component {

  constructor(props) {
    super(props);
    this.get_count = this.get_count.bind(this);
  }

  get_count(d) {
        // reduce font by 50%
        var tag = "<sup class='super' style='";
        if (fontscale(d.count) >= 18) {
            tag += "font-size:50%;";
        } else {
            tag += "font-size:75%;"; // otherwise the 'sup' sets it to 'smaller';
        }
        tag += "color:" + supercolor(d.count) + ";";
        tag += "'>";
        var lastHTML = tag += d.count + "</sup>";

        // var withreact = 'dangerouslySetInnerHTML={{__html: '+ lastHTML + }}'
        // console.log(lastHTML);
        // console.log(withreact);
        // return withreact;
        return lastHTML;
    }

  drawChart() {
    let data = this.props.data;

    // let scale_variable = 'count';
    //input what you want the scale to be
    let scale_variable = this.props.scale;
    let show_variable = this.props.show;

    const div = new ReactFauxDOM.createElement('div');
    div.setAttribute('class', 'word_cloud')
    console.log(div)

    var width = 900,
        height = 400;

    var intersection = [];

    console.log(data);

    fontscale.domain(d3.extent(data, function(d) {
        return d[scale_variable];
    }));

    supercolor.domain(d3.extent(data, function(d) {
        return d[scale_variable];
    }));
    
    var color = "steelblue";

    d3.select(div)
      .selectAll("div.word")
      .data(data)
      .enter()
      .append("div")
      .attr("class", "word")
      .attr("height", 500)
      .style("font-size", function(d) {
          return fontscale(d[scale_variable]) + "px";
      })
      .style("color", color)
      // .html(function(d) {
      //     return d.word + this.get_count(d);
      // });
      .html(d => {
        let number = d[show_variable];
        if (number == undefined) {
            number = ', ';
        }
        else {
            number = ' (' + number + '),'
        }

          return d.word + number;
      });


    // let data = this.props.data

    // let margin = {top: 20, right: 20, bottom: 30, left: 40},
    //   width = this.props.width - margin.left - margin.right,
    //   height = this.props.height - margin.top - margin.bottom;
 
    // let x = d3.scaleBand()
    //   .rangeRound([0, width])
 
    // let y = d3.scaleLinear()
    //   .range([height, 0])
 
    // let xAxis = d3.axisBottom()
    //   .scale(x)
 
    // let yAxis = d3.axisLeft()
    //   .scale(y)
    //   // .tickFormat(d3.format('.0f'))
    //   // .ticks(10, "%");
     
    // //Pass it to d3.select and proceed as normal
    // let svg = d3.select(div).append("svg")
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", `translate(${margin.left},${margin.top})`);
 
    // x.domain(data.map((d) => d.year));
    // y.domain([0, d3.max(data, (d) => d.frequency)]);
 
    // // Define the div for the tooltip
    // // var tooltip_div = new ReactFauxDOM.createElement('div');
    // // // tooltip_div.className = "tooltip";
    // // div.appendChild(tooltip_div);


    // var tooltip_div = d3.select("body").append("div") 
    //     .attr("class", "tooltip")       
    //     .style("opacity", 0);

    // svg.append("g")
    //   .attr("class", "x axis")
    //   .attr("transform", `translate(0,${height})`)
    //   .call(xAxis);
 
    // svg.append("g")
    //   .attr("class", "y axis")
    //   .call(yAxis)
    //   .append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 6)
    //   .attr("dy", ".71em")
    //   .style("text-anchor", "end")
    //   .text("Frequency");
 
    // var bars = svg.selectAll(".bar")
    //   .data(data)
    //   .enter().append("rect")
    //   .attr("class", "bar")
    //   .attr("x", (d) => x(d.year))
    //   .attr("width", 20)
    //   .attr("y", (d) => y(d.frequency))
    //   .attr("height", (d) => {return height - y(d.frequency)});
 
    //DOM manipulations done, convert to React
    // console.log(div);
    return div.toReact()
  }
 
  render () {
     //check if props update works
    // console.log(this.props.color);
    // var chart = this.drawChart();
    // console.log(chart);
    return (
      
        this.drawChart()
    );
  }
}

module.exports = WordCloud;
