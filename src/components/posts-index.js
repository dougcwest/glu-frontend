import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions";
import { useEffect } from "react";

const PostsIndex = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  const renderPosts = () => {
    if (props.posts.length > 0) {
      return props.posts.map((post) => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      })
    } else {
      return <div>No posts to show</div>
    }
  }

  return (
    <div>
      <div className="text-xs-right">
        <Link className="btn btn-primary" to="/posts/new">
          Add a Post
        </Link>
      </div>
      <br></br>
      <h3>Posts</h3>
      <ul className="list-group">
        {renderPosts()}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return { fetchPosts: bindActionCreators(fetchPosts, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);