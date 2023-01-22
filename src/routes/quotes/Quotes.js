function Quotes() {
    const quotes = []

    return (
        <div>
          {quotes.map((oneResult, i) => {
            return <li key={i}>
              <p>{oneResult.quote}</p>
              <p>{oneResult.author}</p>
            </li>
          })}
        </div>
      );
}

export default Quotes;