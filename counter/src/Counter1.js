
import React ,{Component} from 'react';


class Counter1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 30
    }
  }
    



    componentDidMount =  () => {
      var interval = setInterval(this.timer,500);
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId: interval});
   }
   
   componentWillUnmount =  () => {
    
      // use intervalId from the state to clear the interval
      clearInterval(this.state.interval);
   }
   
   timer = () => {
    var newCount = this.state.count - 1;
    if(newCount >= 0) { 
        this.setState({ count: newCount });
    } else {
        clearInterval(this.state.interval);
    }
 }

 stopTimer = () => {
  this.setState({ count: false });
  clearInterval(this.state.interval);
};

   
   render() {
       // You do not need to decrease the value here
       return (
         <>
          <h1>{this.state.count}</h1>
          <button onClick={this.stopTimer}>Stop</button>
         </>
       );
   }
   
  
  
}

export default Counter1;