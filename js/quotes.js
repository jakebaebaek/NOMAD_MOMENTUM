const quotes = [
  {
    quote : "i got new job that's awesome",
    author : "jakebaebaek",
  }, 
  {
    quote : "oh really? then we should hang together",
    author : "luke",
  },
  {
    quote : "I knew you can get a job",
    author : "yebbin",
  },
  {
    quote : "oh what do you do?",
    author : "hayoung",
  },
  {
    quote : "idk yet. but it must be fun!",
    author : "jakebaebae",
  },
  {
    quote : "you have to good-looking, not only the face, but also attitude.",
    author : "mama&papa",
  }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
