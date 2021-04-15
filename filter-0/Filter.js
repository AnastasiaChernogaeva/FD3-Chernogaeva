var Filter = React.createClass({

    displayName: " Filter ",


    propTypes: {
      workMode: React.PropTypes.number.isRequired,
      rows:React.PropTypes.array.isRequired,
      freeText: React.PropTypes.string.isRequired,
      cbTextChanged: React.PropTypes.func.isRequired,
    },
  
    getInitialState: function(fat) {
        return { 
          freeText:fat,
        };
      },

    textChanged: function(EO) { 
        console.log('текст  изменён - '+EO.target.value); 
        this.props.cbTextChanged(EO.target.value);
        this.props.workMode==1;
      },

    render: function () {

        if ( this.props.workMode==0 ) {
            return React.DOM.div({className:"Filter", },
                React.DOM.input({type:'checkbox', }),
                React.DOM.input({type:'text', defaultValue:this.freeText, onChange:this.textChanged}),
                React.DOM.input({type:'button', value:"reset", onClick:this.newMode(this.props.workMode)},),
                React.DOM.div({className:"words"},this.props.rows.forEach( v=> (v+" ") )),
    
              )
            }
        else if(this.props.workMode==1){          
            return React.DOM.div( {className:"Filter", workMode:this.props.workMode,},
            React.DOM.input({type:'checkbox', defaultChecked:checked}),
            React.DOM.input({type:'text', defaultValue:this.freeText, onChange:this.textChanged,}),
            React.DOM.input({type:'button', value:"reset", onClick:this.newMode(this.props.workMode)},),
            React.DOM.div({className:"words"},this.props.rows.sort()),
            );
          }
        },
      
        newMode:function (m){
           if (m!=0){
            m=0;
           }
       },
    

        ff:  function(v,i,a){
            var word="";
            for(let k=0; k<this.props.text.length; k++){
              if(this.props.text[k]===v[n]){
                word+=v[n];
              }
              arrWords.push(word);
            }
          },
      
    

    
  
  });