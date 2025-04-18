import  Article from "./Article";

function ArticleList({ posts }) {
    return (
      <main id="article-list">
          {posts.map((post) => (
            <Article
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}
            />
          ))}
      </main>
    );
}

export default ArticleList