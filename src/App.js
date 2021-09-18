import React from "react"
import Quotes from "./Components/Quotes/Quotes"
import DATA from "./DATA"
import "./App.css"

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      QUOTE_DATA:DATA
    }
  
  }
  


  render() { 
    return <div className='App'>
   
      <Quotes QUOTE_DATA={this.state.QUOTE_DATA} />
      <p className='text  text-white'>
                App by : Pooria Asiabi 😉
            </p>
    </div>;
  }
}
 
export default App;