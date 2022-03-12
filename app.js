const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => showQuote(data));
}

const showQuote = (data) => {
    const quote = document.getElementById('quote');
    console.log(data)
    const p = document.createElement('p');
    p.innerText = data.quote;
    quote.appendChild(p);
}