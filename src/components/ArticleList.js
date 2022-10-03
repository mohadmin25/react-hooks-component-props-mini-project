import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const articale = posts.map((details) =>( // it doesnt work if i use {} instead of the ()
        <Article
        key={details.id}
        title ={details.title}
        date={details.date}
        preview={details.preview}
        minutes = {details.minutes}
        />
    ))
  return (
   <main>{articale}</main>
  )
}



export default ArticleList

