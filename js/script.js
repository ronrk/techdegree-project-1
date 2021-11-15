/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// my quetes resources : 'https://takelessons.com/blog/quotes-from-musicians-z15'
//the year and citation prop are made up by me; its not included in the resources

/***
declaring quests array of objecets
 ***/
const quotes = [
  {
    quote: `Life is what happens when you’re making other plans.`,
    source: `John Lennon`,
  },
  {
    quote: `If everything was perfect, you would never learn and you would never grow.`,
    source: `Beyoncé`,
    tags: "life",
  },
  {
    quote: `No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.`,
    source: `Taylor Swift`,
    tags: "social",
  },
  {
    quote: `You see, we are here, as far as I can tell, to help each other; our brothers, our sisters, our friends, our enemies. That is to help each other and not hurt each other.`,
    source: `Stevie Ray Vaughan`,
    tags: "social",
  },
  {
    quote: `Without deviation from the norm, progress is not possible.`,
    source: `Frank Zappa`,
    citation: `Rolling-stones magazine`,
  },
  {
    quote: `Do the things you believe in, in the name of love. And know that, you aren’t alone. We all have doubts and fear.`,
    source: `Carole King`,
  },
  {
    quote: `Never stop fighting no matter what anyone says. If it’s in your gut, your soul, there’s nothing, no worldly possession that should come between you and your expression.`,
    source: `Kanye West`,
    year: 2007,
  },
  { quote: `Love, love, love, that is the soul of genius.`, source: `Mozart` },
];

/***
get random quete function; declaring a random number into a variable and return by acsses random quete from the array
 ***/
function getRandomQuote() {
  //Random number variable from 0 to arr.length
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

/* 
    randomBackground function
*/

function setRandomBackground() {
  let randomRgb = `rgb(`;
  let randomColors = [];
  for (let i = 1; i <= 3; i++) {
    randomColors.push(Math.floor(Math.random() * 255));
  }
  randomRgb += `${randomColors.join(", ")})`;
  document.body.style.backgroundColor = randomRgb;
}

/***
print quete function; declare random quete by calling the getRandomQuote function and store it into a variable; 

 ***/

function printQuote() {
  let randomObj = getRandomQuote();
  let html = `
<p class ="quote">${randomObj.quote}</p>
<p class ="source">${randomObj.source}
`;
  //check if citation property exist
  if (randomObj.citation) {
    html += `<span class ="citation">${randomObj.citation}</span>`;
  }
  //check if year property exist
  if (randomObj.year) {
    html += `<span class = "year">${randomObj.year}</span>`;
  }
  //check if tags prop exist
  if (randomObj.tags) {
    html += `<span class = "tags">,${randomObj.tags}</span>`;
  }
  //Adding closing </p> to html message
  html += "</p>";
  setRandomBackground();
  return (document.getElementById("quote-box").innerHTML = html);
}
printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

//setInterval to call the printQuete function every 15 seconds

setInterval(printQuote, 1000 * 15);
