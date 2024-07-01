import css from "./NewsCard.module.css";
import { formatDistanceToNow, parseISO } from "date-fns";

const NewsCard = ({ title, authors, published_at, main_image }) => {
  const parsedDate = parseISO(published_at);

  const timeAgo = formatDistanceToNow(parsedDate);
  return (
    <div className={css.wrapper}>
      <div className={css.topSection}>
        <img src={main_image} alt={`${title}'s image`} className={css.image} />
      </div>
      <div className={css.botSection}>
        <p className={css.date}>{timeAgo} ago</p>
        <h3>{title}</h3>
        <p className={css.author}>
          <span
            style={{
              fontWeight: "500",
              color: "#6D93A9",
            }}
          >
            Author:
          </span>{" "}
          {authors}
        </p>
        <p className={css.publishedDate}>
          <span
            style={{
              fontWeight: "500",
              color: "#6D93A9",
            }}
          >
            Published at:
          </span>{" "}
          {published_at}
        </p>
        <button className={css.btn}>
          <span>View more</span>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
