import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">WHAT TO WATCH?</div>
      <div className="links-group">
        <div className="link active">
          <p>Generate Episode</p>
        </div>
        <div className="link">
          <p>Generate Show</p>
        </div>
        <div className="link">
          <p>Popular Shows</p>
        </div>
        <div className="link">
          <p>Similar Shows</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
