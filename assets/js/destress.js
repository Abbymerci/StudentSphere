
const quotes = [
    "In the midst of movement and chaos, keep stillness inside of you. - Deepak Chopra",
    "The greatest weapon against stress is our ability to choose one thought over another. - William James",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein"
  ];
  
  const generateQuoteBtn = document.getElementById("generate-quote-btn");
  const quoteContainer = document.getElementById("quote-container");
  
  generateQuoteBtn.addEventListener("click", () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomQuoteIndex];
    quoteContainer.textContent = randomQuote;
  });
  