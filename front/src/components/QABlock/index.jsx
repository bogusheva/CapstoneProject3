export default function QABlock({ id, title, text }) {
  return (
    <>
      <h3 className="article-subheading">
        {id} {title}
      </h3>
      <p className="article-text">{text}</p>
    </>
  );
}
