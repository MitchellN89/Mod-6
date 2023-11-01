function Greeting({
  name,
  children = <p>It's nice to meet your acquaintance</p>,
}) {
  {
    return (
      <>
        <h2>Greeting!!!</h2>
        {name ? <h3>Hello {name}</h3> : <h3>Hello World</h3>}
        {children}
      </>
    );
  }
}

export default Greeting;
