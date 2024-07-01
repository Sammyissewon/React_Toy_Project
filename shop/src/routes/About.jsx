import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet />
    </div>
  );
}

export default About;
