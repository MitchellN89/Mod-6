function SingleCat({ name, id, latinName, imgUrl, onDelete }) {
  return (
    <li className="card-cat">
      <img style={{ maxWidth: "300px" }} src={imgUrl} alt={name} />
      <p>
        <span className="bold">Name:</span> {name}
      </p>
      <p className="italic">
        <span className="bold">Latin Name:</span> {latinName}
      </p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default SingleCat;
