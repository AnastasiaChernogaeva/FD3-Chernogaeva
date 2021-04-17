var Filter = React.createClass({

    displayName: " Filter ",

    propTypes: {
        arr: React.PropTypes.array.isRequired,
      },
    
  
    getInitialState: function() {
        return { 
          arr:rowText,
          sortArr:false,
          filterString:'',
    
        };
      },

      compileList: function(){
        let lines=this.props.arr.slice(); // делаем плоскую копию всех слов, т.к. возможно будем сортировать массив
            if ( this.state.filterString )
               lines=lines.filter( line => line.indexOf(this.state.filterString)!=-1, );
            if ( this.state.sortArr )
               lines.sort();
        this.setState( { arr:lines } );
    },

   change: function(){
    console.log("new changes " + this.state.sortArr);
    if(this.state.sortArr==false){
      this.setState( { sortArr:true, } );
    }
    else{
      this.setState( { sortArr:false, } );
    };
    this.compileList;
   },

   newState: function(){
    console.log("new state " + this.state.filterString+ this.state.sortArr);
    this.setState( { sortArr:false, filterString:'', arr:rowText,} );
    this.compileList;
   },

   search: function(EO){
     console.log("new text"+ EO.target.value);
    this.setState( {  filterString:EO.target.value, } );
    this.compileList;
   },


    render: function(){

        return React.DOM.div( {className:'block'}, 
        React.DOM.input({className:'checkbox', type:'checkbox', onClick:this.change,},), 
        React.DOM.input( {className:'text', type:'text', defaultValue:"введите слово", onChange:this.search,}, ),
        React.DOM.input( {className:'button', type:'button', defaultValue:'reset', onClick:this.newState, }, ),
        React.DOM.div( {className:'arr'}, this.state.arr  ),
        );
      },
      
    

    
  
  });


