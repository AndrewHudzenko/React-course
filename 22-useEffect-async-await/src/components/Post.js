import './Post.css'

function Post({ userId, id, title, body }) {
  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <h4>{body}</h4>
      <h3>{userId}</h3>
    </div>
  )
}

export default Post
