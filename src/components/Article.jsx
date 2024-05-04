
function Article({ title, date, preview, minutes }) {
    let emojis = '🍱';
    if (minutes < 30) {
      const numCoffeeCups = Math.ceil(minutes / 5);
      emojis = '🍱'.repeat(numCoffeeCups);
    } else {
      const numCoffee = Math.ceil(minutes / 10);
      emojis = '🍱'.repeat(numCoffee);
    }
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{emojis} {minutes} min read</p>
      </article>
    );
  }

export default Article;
