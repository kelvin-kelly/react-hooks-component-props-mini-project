import Article from "./Article";
import blogData from "../data/blog";


function ArticleList() {
    return (
      <main>
        {blogData.posts.map(post => (
          <Article
            key={post.id} // Assign a unique key attribute to each Article
            title={post.title}
            date={post.date ? post.date : 'January 1, 1970'} // Use default value if date is not provided
            preview={post.preview}
          />
        ))}
      </main>
    );
  }
  

export default ArticleList;