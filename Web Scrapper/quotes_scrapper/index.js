// const Qurl = "https://www.goodreads.com/quotes/tag/bad-times";
// const Iurl = "https://www.keepinspiring.me/quotes-about-feelings/";
const axios = require("axios").default;
const cheerio = require("cheerio");

// const getQuotes = async () => {
//   const response = await axios.get(Qurl);
//   const $ = cheerio.load(response.data);
//   const quoteText = $(".quoteText");
//   quoteText.each(function () {
//     const [quote, author] = $(this).text().split("―");
//     axios.post("http://localhost:3000/quotes", { quote: $(this).text() });
//   });
// };

// getQuotes();

// const getIQuotes = async () => {
//   const response = await axios.get(Iurl);
//   const $ = cheerio.load(response.data);
//   const quoteText = $(".author-quotes");
//   quoteText.each(function () {
//     axios.post("http://localhost:3000/quotes/", { quote: $(this).text() });
//   });
// };

// getIQuotes();
