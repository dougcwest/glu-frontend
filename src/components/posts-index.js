import { Link } from "react-router-dom";

const PostsIndex = (props) => {
  const renderPosts = () => {
    if (props.posts) {
      return props.posts.map(post => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      })
    } else {
      return <div>Loading...</div>
    }
  }

  return (
    <div>
      <div className="text-xs-right">
        <Link className="btn btn-primary" to="/posts/new">
          Add a Post
        </Link>
      </div>
      <h3>Posts</h3>
      <ul className="list-group">
        {renderPosts()}
      </ul>
    </div>
  )
}

export default PostsIndex;