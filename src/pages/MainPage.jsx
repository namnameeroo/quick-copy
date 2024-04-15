import {Link} from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>This is Quick Copy 바로가기</h1>
      <Link to={"/theme-page"}>주제 page 보러가기</Link>
    </>
  );
}
