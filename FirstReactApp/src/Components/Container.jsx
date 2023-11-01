function Container({ children, tag }) {
  return (
    <div className="container">
      {children}
      {tag ? <span className="tag">{tag}</span> : <></>}
    </div>
  );
}

export default Container;
