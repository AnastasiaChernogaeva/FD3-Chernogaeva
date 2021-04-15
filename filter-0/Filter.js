var Filter = React.createClass({

    displayName: " Filter ",


    propTypes: {
      workMode: React.PropTypes.number.isRequired,
      rows:React.PropTypes.array.isRequired,
      freeText: React.PropTypes.string.isRequired,
      cbTextChanged: React.PropTypes.func.isRequired,
    },
  
    getInitialState: function() {
        return { 
          freeText:"введите",
        };
      },

    textChanged: function(EO) { 
        console.log('текст  изменён - '+EO.target.value); 
        this.props.cbTextChanged(EO.target.value);
        this.props.workMode==1;
      },

      fun:function(fText) { 
        console.log('VotesBlock: текст свободного ответа изменён - '+fText); 
        this.setState( {freeText:fText} );
      },
            
      newMode:function (m){
        if (m!=0){
         m=0;
        }
    },


    render: function () {
    var blockText=React.createElement(Arr, {rows:this.props.rows,  workMode:this.props.workMode,
      })


        return React.DOM.div( {className:"Filter"}, 
        React.createElement(Inputs, {workMode:this.props.workMode, freeText:this.fun,} ),
        React.DOM.div( {className:'Arr'}, blockText),
      )
    },
      
    

    
  
  });