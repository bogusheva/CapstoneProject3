import { useParams, Link } from "react-router-dom";

export default function BlogThemeContainer({ blogContent }) {
  const { blogTheme } = useParams();
  const theme = blogContent.find((item) => item.id === blogTheme);
  return (
    <div className="block-container">
      {theme.articles.map((article, index) => (
        <Link key={index} to={`/blog/${blogTheme}/${article.id}`}>
          <div className="article-card">
            <div className="img-holder">
              <img src={article.image} alt={article.title} />
            </div>
            <h3>{article.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
