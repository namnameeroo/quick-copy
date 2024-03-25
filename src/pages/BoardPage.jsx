import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./BoardPage.style.css";
import {CiShoppingTag} from "react-icons/ci";

export default function BoardPage() {
  const {boardId} = useParams();
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    // getData
    // get by boardId
    setBoardData([
      {
        label: "주소",
        content: "서울시 구로구 어쩌구 19길 144, ",
      },
    ]);
  }, []);

  return (
    <>
      <header className="page-header">
        <div>QUICK COPY</div>
      </header>
      <div className="board-container">
        <div className="board-item-area">
          {boardData[0] && (
            <div
              className="board-item-row"
              onClick={(event) => {
                window.navigator.clipboard.writeText(boardData[0].content);
                event.currentTarget.style.color = "rgb(91, 53, 94)";
              }}
              title="클릭하면 내용이 복사됩니다."
            >
              <div className="label-data">
                <i id="label-icon">
                  <CiShoppingTag />
                </i>
                {boardData[0].label}
              </div>
              <div className="content-data">{boardData[0].content}</div>
            </div>
          )}
        </div>
        <div id="memo-container">
          <input id="memo-input" type="text" />
        </div>
      </div>
    </>
  );
}
