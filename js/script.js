/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = []; // create an array to store all quotes 

/**
 * Push objects to quote array
 */
quotes.push(
    {
        quote: "If you cry because the sun has gone out of your life, your tears will prevent you from seeing the stars.",
        source: "Rabindranath Tagore"
    },
    {
        quote: "It is nothing to die; it is dreadful not to live.",
        source: "Victor Hugo",
        citation: "Les Misérables",
        year: 1862
    },
    {
        quote: "All we can know is that we know nothing. And that's the height of human wisdom.",
        source: "Leo Tolstoy",
        citation: "War and Peace",
        year: 1867
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years",
        source: "Abraham Lincoln"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        source: "Mark Twain"
    }
);

/**
 * Create a random number and use that random number to 
 * return a random quote object from the quotes array
 * 
 * @returns a random quote
 */
function getRandomQuote(){
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
    var random = Math.floor(Math.random() * quotes.length);

    // 2. Use the random number variable and bracket notation
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    var quote = quotes[random];

    // 3. Return the variable storing the random quote object
    return quote; // return the 
};


/***
 * `printQuote` function
***/
function printQuote(){
    // 1. Create a variable that calls the getRandomQuote() function
    let randomQuote = getRandomQuote();

    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    var result =  "<p class='quote'>" + randomQuote.quote + "</p>" +
                    "<p class='source'>" + randomQuote.source;

    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
    if(randomQuote.citation != null){
        result += "<span class='citation'>" + randomQuote.citation + "</span>"
    }

    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    if(randomQuote.citation != null){
        result += "<span class='year'>" + randomQuote.year + "</span>"
    }

    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    result += "</p>";


    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}
    document.getElementById('quote-box').innerHTML = result;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);