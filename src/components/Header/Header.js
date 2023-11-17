import "./Header.css";

function Header() {
  return (
    <div class="header-container">
      <div class="header-title">WHAT TO WATCH?</div>
      <div class="links-group">
        <div class="link active">
          <p>Generate Episode</p>
        </div>
        <div class="link">
          <p>Generate Show</p>
        </div>
        <div class="link">
          <p>Popular Shows</p>
        </div>
        <div class="link">
          <p>Similar Shows</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
