import React from "react";
import QuotesTitle from "../QuotesTitles/QuotesTitle";
import "./Quotes.style.css"

class Quotes extends React.Component {

constructor(props)
{
    super(props);
    this.state={
        title:'For Show Quote click on Next',
        author:''
    }
}

    handleQuote  = () =>
    {
       const RandomQuote=this.props.QUOTE_DATA[Math.floor(Math.random() * this.props.QUOTE_DATA.length  )]
        const RandomTitle=RandomQuote.text
        const RandomAuthor=RandomQuote.author
        
       this.setState({title : RandomTitle , author: RandomAuthor})
    }
    render() { 
        const {title,author} = this.state

        return <div className='quote'>
         <h6 className='text text-danger'>
      Quote 🤓🤓
    </h6>
         <QuotesTitle title={title} author={author}/>
            <button onClick={this.handleQuote} className='btn btn-block btn-outline-success'>
            Next 😎🧐🧐
            </button>
           
        </div>;
    }
}
 
export default Quotes;