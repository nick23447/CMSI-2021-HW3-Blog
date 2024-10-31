import { useState } from "react"



export default function ArticleEntry({ addArticle, setWriting }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState(null)

  

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied")
    } else {
      addArticle({ title, body })
    }
  }

  function back() {
    setWriting(false)

  }
    
    
  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Body
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit" id="button1">Create</button>
        <button type="button" onClick={back} id="button2">Back</button>
      </form>
    </div>
  )
}
