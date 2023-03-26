export function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function showRating(rating) {
  let starArray = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starArray.push(<span key={i} className="icon-star-full"></span>);
    } else {
      starArray.push(<span key={i} className="icon-star-empty"></span>);
    }
  }
  return starArray;
}

export function getAverageRating(data) {
  const ratingArray = [];
  data.map((item) => ratingArray.push(item.attributes.rating));
  const rating = Math.round(
    ratingArray.reduce((a, b) => a + b) / ratingArray.length
  );

  return showRating(rating);
}

export function getRandomOrderCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
