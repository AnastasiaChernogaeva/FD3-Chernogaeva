var Filter = React.createClass({

    displayName: " Filter ",

    getDefaultProps: function () {
        return {
          arr: rowText,
        };
    },
    
  
    getInitialState: function() {
        return { 
          arr:rowText,
          sort:false,
          filterString:'',
        };
      },

    compileList: function(){
        let lines=this.props.arr.slice(); // делаем плоскую копию всех слов, т.к. возможно будем сортировать массив
            if ( this.state.filterString )
               lines=lines.filter( line => line.indexOf(this.state.filterString)!=-1 );
            if ( this.state.sort )
               lines.sort();
        this.setState( { arr:lines } );
    },

   change: function(){
       this.state.sort=true;
   },


    render: function(){

        return React.DOM.div( {className:'block'}, 
        React.DOM.input({className:'checkbox', type:'checkbox', onClick:this.change,},), 
        React.DOM.input( {className:'text', type:'text', }, ),
        React.DOM.input( {className:'button', type:'button', placeholder:'Reset', }, ),
        React.DOM.div( {className:'arr'}, this.state.arr  ),
        );
      },
      
    

    
  
  });


