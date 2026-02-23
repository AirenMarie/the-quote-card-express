"use strict";

const elements = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author"),
};

async function getRandomImage() {
  const endpoint = "http://localhost:8080/api/v1/getRandomImage";
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();
    const receivedPhotoUrl = returnedData.data;

    const imgDiv = document.querySelector(".background-img");
    imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
  } catch (error) {
    console.error(error);
  }
}

getRandomImage();

/* const quotes = [
  {
    quote: "All hands! Abandon ship!",
    author: "Captain Picard",
  },
  {
    quote: "Doh!",
    author: "Homer Simpson",
  },
  {
    quote:
      "The Internet is the first thing that humanity has ever built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
    author: "Eric Schmidt",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C. S. Lewis",
  },
  {
    quote:
      "Never underestimate the power you have to take your life in a new direction.",
    author: "Germany Kent",
  },
  {
    quote:
      "If you don't like something, change it. If you can't change it, change your attitude.",
    author: "Maya Angelou",
  },
];

function loopThroughQuotes() {
  let quoteIndex = 0;
  setInterval(() => {
    if (quoteIndex < quotes.length) {
      elements.quote.textContent = quotes[quoteIndex].quote;
      elements.author.textContent = quotes[quoteIndex].author;
      quoteIndex++;
    } else {
      quoteIndex = 0;
    }
  }, 3000);
}

setTimeout(loopThroughQuotes, 3000);
 */
