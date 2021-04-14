var FilterText = React.createClass({

    displayName: 'FilterText',
  
    propTypes: {
      text: React.PropTypes.string,
      textWords: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
      workMode: React.PropTypes.number.isRequired
    },
  
    render: function() {
  
      if ( this.props.workMode==0 ) {
        return React.DOM.div(null,
            React.DOM.input({type:'checkbox'}),
            React.DOM.input({type:'text'},this.props.text),
            React.DOM.input({type:'button', value:"reset"}),
            React.DOM.div({className:words},this.props.textWords),

          )
        }
    else if(this.props.workMode==1){
      var arrWords=[];
        return React.DOM.div( null,
        React.DOM.input({type:'checkbox', dafaultChecked:checked}),
        React.DOM.input({type:'text'},this.props.text),
        React.DOM.input({type:'button', value:"reset"}),
        React.DOM.div({className:words},this.props.text?this.props.textWords.map(ff):null),
        );
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