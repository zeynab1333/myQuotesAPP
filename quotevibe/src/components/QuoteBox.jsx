import { useState } from 'react';

const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Don't watch the clock; do what it does. Keep going.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t come to you. You go to it.",
  "Doubt kills more dreams than failure ever will.",
];

export default function QuoteBox() {
  const [quote, setQuote] = useState(quotes[0]);

 const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  setQuote(quotes[randomIndex]);

  const colors = ["#fef3c7", "#e0f2fe", "#f3e8ff", "#d1fae5", "#ffe4e6"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};


  

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md text-center">
      <p className="text-lg font-semibold">{quote}</p>
      <button
        onClick={getRandomQuote}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer hover:shadow-lg transition duration-200 ease-in-out
"
      >
        New Quote
      </button>

      <button
  onClick={() => navigator.clipboard.writeText(quote)}
  className="ml-4 px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 cursor-pointer hover:shadow-lg transition duration-200 ease-in-out
"
>
  Copy
</button>

<a
  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(quote)}`}
  target="_blank"
  className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:shadow-lg transition duration-200 ease-in-out
"
>
  Share
</a>


    </div>
  );
}
