import { Article } from "./article";

export function ArticleList({ posts }) {
    return (
      <main>
        <div id="article-list">
          {posts.map((post) => (
            <Article
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}
            />
          ))}
        </div>
      </main>
    );
}