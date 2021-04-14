var Filter = React.createClass({

    displayName: " Filter ",


    propTypes: {
      workMode: React.PropTypes.number.isRequired,
      rows:React.PropTypes.array.isRequired,
    },
  
    render: function () {

        if ( this.props.workMode==0 ) {
            return React.DOM.div({className:"Filter", workMode:this.props.workMode,},
                React.DOM.input({type:'checkbox'}),
                React.DOM.input({type:'text', defaultValue:"", onchange:search(defaultValue, this.props.rows)}),
                React.DOM.input({type:'button', value:"reset", onclick:newMode(this.props.workMode)},),
                React.DOM.div({className:words},this.props.rows),
    
              )
            }
        else if(this.props.workMode==1){          
            return React.DOM.div( {className:"Filter", workMode:this.props.workMode,},
            React.DOM.input({type:'checkbox', dafaultChecked:checked}),
            React.DOM.input({type:'text', defaultValue:"", onchange:search(defaultValue, this.props.rows),}),
            React.DOM.input({type:'button', value:"reset", onclick:newMode(this.props.workMode)},),
            React.DOM.div({className:words},this.props.rows.sort()),
            );
          }

        function search(val, ourArr){
            var arrWords=[];
            for(let i=0; i<val.length; i++ ){
                for(let j=0; j<ourArr.length; j++){
                    var newWord=ourArr[j];
                    if(val[i]===newWord[k]){

                    }
                }
            }

        }
      
       function newMode(m){
           if (m!=0){
            m=0;
           }
       }
    

          function ff(v,i,a){
            var word="";
            for(let k=0; k<this.props.text.length; k++){
              if(this.props.text[k]===v[n]){
                word+=v[n];
              }
              arrWords.push(word);
            }
          }
      
    

    },
  
  });