import React from "react"

const QuotesTitle = ({title,author}) =>
{
    return(
<div>
<h1>
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