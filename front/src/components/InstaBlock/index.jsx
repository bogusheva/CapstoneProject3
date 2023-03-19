export default function InstaBlock(props) {
  return (
    <div className="insta-block-item">
      <img src={props.url} alt="insta-post" />
      <div className="insta-block-hover">
        <a
          href="https://www.instagram.com/tea.soul.store/"
          className="icon-holder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="instagram.svg"
            alt="insta-icon"
            className="instagram-icon"
          />
        </a>
      </div>
    </div>
  );
}
