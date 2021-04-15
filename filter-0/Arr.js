var Arr = React.createClass({

    displayName: " Arr ",


    propTypes: {
      workMode: React.PropTypes.number.isRequired,
      rows:React.PropTypes.array.isRequired,
      cbTextChanged: React.PropTypes.func,
      arrWords:React.PropTypes.array,
    },
  

    render: function () {

        if ( this.props.workMode==0 ) {
            return  React.DOM.div({className:"words"},this.props.rows.forEach( v=> (v+" ") ))
    
        }
        else if(this.props.workMode==1){
           return React.DOM.div({className:"words"},this.props.rows.sort())
        }
        else if(this.props.workMode==2){
            return React.DOM.div({className:"words"},this.props.rows.forEach(ff))
        }
    },
      
        

       ff:  function(v,a=this.props.cbTextChanged){
        var word="";
        for(let k=0; k<a.length; k++){
          if(this.props.text[k]===v[n]){
            word+=v[n];
          }
          arrWords.push(word);
        }
        return arrWords;
      },
  
  });