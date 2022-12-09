const quotes = [
    {
        quote: `"Don’t fight back that rhetoric with words but with actions"`, 
        author: 'Paty Funegra'
    },
    {
        quote: `"Don’t be the last to jump on a trend. Be the first to set it"`,
        author: 'Zoe Saldana'
    },
    {
        quote: `"The nutty thing about success is that it is an ever-changing goal"`,
        author: 'Renata Black'
    },
    {
        quote: `"When you come from people having zero expectations of who you could be, there’s a fearlessness; you can only go up from there"`,
        author: 'Jessica Alba'
    },
    {
        quote: `"You have to embrace – not fear – the challenges. Dream, be fearless, and follow through"`,
        author: 'Rea Ann Silva'
    },
    {
        quote: `"I’m making a commitment to my health and hitting the reset button"`,
        author: 'Salma Hayek'
    },
    {
        quote: `"We hope 50 years from now, the food system is totally different"`,
        author: 'Tatiana Garcia-Granados'
    },
    {
        quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall"`,
        author: 'Nelson Mandela'
    },
    {
        quote: `"The way to get started is to quit talking and begin doing"`,
        author: 'Walt Disney'
    },
    {
        quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking"`,
        author: 'Steve Jobs'
    },
    {
        quote: `"If life were predictable it would cease to be life, and be without flavor"`,
        author: 'Eleanor Roosevelt'
    },
    {
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"`,
        author: 'Oprah Winfrey'
    },
    {
        quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"`,
        author: `James Cameron`
    },
    {
        quote: `"Life is what happens when you're busy making other plans"`,
        author: `John Lennon`
    }
]

const quote = document.getElementById('quote');
const writer = document.getElementById('writer');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQuote();
});

function generateQuote() {
    const quoted = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = quoted.quote;
    writer.innerText = quoted.author;
}
