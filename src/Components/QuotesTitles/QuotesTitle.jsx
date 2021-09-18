import React from "react"



const QuotesTitle = ({title,author}) =>
{
    return(
<div>
            <h1 className='quoteTitle' style={{ 
              fontSize:'20px'
             }}>
            {title}
              </h1>
            <p>
          {
            author ? 'writer : ' : ''

          } 
           {author}
            </p>
</div>
    )
}

export default QuotesTitle;