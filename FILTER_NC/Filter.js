var Filter = React.createClass({

    displayName: " Filter ",

    propTypes: {
        arr: React.PropTypes.array.isRequired,
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
               lines=lines.filter( line => line.indexOf(this.state.filterString)!=-1, line+" " );
            if ( this.state.sort )
               lines.sort();
        this.setState( { arr:lines } );
    },

   change: function(){
    console.log("new changes " + this.state.sort);
    if(this.state.sort==false){
      this.setState( { sort:true } );
    }
    else{
      this.setState( { sort:false } );
    }
    this.compileList;
   },

   newState: function(){
    console.log("new state " + this.state.filterString+ this.state.sort);
    this.setState( { sort:false, filterString:'', arr:rowText,} );
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


