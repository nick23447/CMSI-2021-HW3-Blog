export default function Article({ article, setWriting, setArticle}) {
  
  function back() {
    setWriting(false);
    if (setArticle) setArticle(null);
  }

  return (
    <article>
      {!article ? (
        <div>
          <h1><b>Welcome to the Blog</b></h1>
          <p>Choose any article from the left panel or add your own. Cozy up and get writing!</p>
          <div class="grid-container">
          <img src="https://i.pinimg.com/736x/31/e5/1b/31e51bb24ad4f5b58e09fc30c46360e2.jpg"  alt="Desk cluttered with books, a computer, lamp, candle, etc." title="Photo from Pinterest: https://pin.it/4I7PtiJI6" id="image1"/>
          <img src="https://i.pinimg.com/736x/0c/cb/d8/0ccbd811808ee79ad5958a4d23cb5a5b.jpg" alt="Desk in front of window cluttered with books, pens, notes, lamp" title="Photo from Pinterest: https://www.pinterest.com/pin/683632418470772628/" id="image2" />
          <img src ="https://i.pinimg.com/736x/1f/8d/d1/1f8dd1dd2c0416f86a30c343261be0ac.jpg" alt="Desk with book, notes, coffee, computer" title="Photo from Pinterest: https://www.pinterest.com/pin/683632418470772635/" id="image3" />
          <img src ="https://i.pinimg.com/474x/1e/fd/30/1efd30bde1dabc9808bc357e8d300d29.jpg" alt="Desk covered with books and a computer in front of window" title="Photo from Pinterest: https://www.pinterest.com/pin/15340454976442241/" id="image4" />
          <img src ="https://i.pinimg.com/474x/4b/c7/4f/4bc74fd59738a908f7b803924ed02029.jpg" alt="Desk with books, computer, headphones, mug" title="Photo from Pinterest: https://www.pinterest.com/pin/15340454976442241/" id="image5" />
          <img src ="https://i.pinimg.com/564x/49/5a/cf/495acf9b84c3fdced7395af40f6a19a8.jpg" alt="Desk with books, computer, light, mug" title="Photo from Pinterest: https://www.pinterest.com/pin/2674081022885025/" id="image6" />
          <img src ="https://i.pinimg.com/564x/5f/7f/9e/5f7f9ec58fc43d37a098b0a8b239b47b.jpg" alt="blurry subway window with people inside" title="Photo from Pinterest: https://www.pinterest.com/pin/70437489000692/" id="image7" />
          </div>
        </div>
      ) : (
        <section>
          <button type="button" onClick={back}>Back</button>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}

