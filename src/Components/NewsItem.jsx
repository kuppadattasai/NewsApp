/* eslint-disable react/prop-types */

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://images.news18.com/ibnlive/uploads/2024/07/hp-snapdragon-x-laptops-india-2024-07-52962577639c4b10235e15c03e475d0f-16x9.jpg?impolicy=website&width=1200&height=675"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
