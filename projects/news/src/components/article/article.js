const Artcomp = props => {
    const { titletext, bodytext, authortext} = props;
    return (
        <article>
            <h3>{titletext}</h3>
            <p>{bodytext}</p>
            <span>Author: {authortext}</span>
        </article>
    );
  };
  
  export default Artcomp;