var Filter = React.createClass({

    displayName: " Filter ",


    propTypes: {
      workMode: React.PropTypes.number.isRequired,
      answers:React.PropTypes.arrayOf(string).isRequired
    },
  
    render: function () {

      var answersCode=React.createElement(VotesAnswer, {text:this.props.answers.textWords, workMode:this.props.workMode,
        }
      );

      return React.createElement(Filter, null, answersCode);
    },
  
  })