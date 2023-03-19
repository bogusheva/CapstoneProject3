import { Link, useParams } from "react-router-dom";
import { blogContent } from "../../data/articles";

export default function Article() {
  const { blogTheme, articleId } = useParams();
  const theme = blogContent.find((item) => item.id === blogTheme);
  const article = theme.articles.find((item) => item.id === Number(articleId));

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <div className="article-holder">
        <div className="img-holder">
          <img src={article.image} alt={article.title} />
        </div>
        <div className="article-text">
          {article.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <Link className="button" to={`/blog/${blogTheme}`}>
        back
      </Link>
    </div>
  );
}
