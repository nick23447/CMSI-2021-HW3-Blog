export default function Nav({ articles, setArticle }) {
  return (
    <nav>
      <h2>Articles</h2>
      <section>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
      </section>
    </nav>

  )
}
