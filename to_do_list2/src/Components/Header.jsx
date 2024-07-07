import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>오늘은 ☀️</h3>
      {/* 4. 오늘 날짜 가져오기 */}
      <h1 className="Header">{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
