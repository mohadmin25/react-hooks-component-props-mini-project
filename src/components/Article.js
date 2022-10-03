import React from 'react'

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    console.log(minutes)
    const bonus = minutesRead(minutes);
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}.{bonus}{minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

// Bonus Feature: 'Minutes to Read'
/***
 * If the article takes less than 30 minutes to read:
For every 5 minutes (rounded up to the nearest 5), display a coffee cup emoji. For example, if the article takes 3 minutes to read, you should display "☕️ 3 min read". If the article takes 7 minute, you should display "☕️☕️ 7 min read".
If the article takes 30 minutes or longer to read:
For every 10 minutes (rounded up to the nearest 10), display a bento box emoji. For example, if the article takes 35 minutes to read, you should display "🍱🍱🍱🍱 35 min read". If the article takes 61 minutes to read, you should display "🍱🍱🍱🍱🍱🍱🍱 61 min read".
 */

function minutesRead(minutes){
    console.log(minutes)
    const time = minutes <=30 ? 5 : 10
    console.log(time)
    const emoji = minutes < 30 ? "☕️ " : "🍱";

    let emojis = ""
    for (let i = 0; i < minutes; i += time) {
      emojis += emoji;
    }
    return emojis
}

export default Article