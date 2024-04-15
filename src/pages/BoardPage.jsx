import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import "./BoardPage.style.css";
import {CiShoppingTag} from "react-icons/ci";
import {CommonLocalStorage} from "../utils/localStorage";

export default function BoardPage() {
  const {boardId} = useParams();
  const boardDataKey = `board-${boardId}`;
  const [boardData, setBoardData] = useState([]);
  const userInput = useRef("");
  useEffect(() => {
    // getData
    if (!boardData || boardData.length === 0) {
      try {
        const loadedData = CommonLocalStorage().get({key: boardDataKey});
        setBoardData(loadedData);

        console.log("local data loaded success");
      } catch (error) {
        setBoardData([
          {
            id: 1,
            label: "주소",
            content: "서울시 구로구 어쩌구 19길 144, ",
          },
        ]);
      }
    }
  }, []);

  return (
    <>
      <header className="page-header">
        <div>QUICK COPY</div>
      </header>
      <div className="board-container">
        <div className="board-item-area">
          <button
            onClick={() => {
              CommonLocalStorage().set({key: boardDataKey, value: boardData});
            }}
          >
            local test set
          </button>
          <button
            onClick={() => {
              let x = CommonLocalStorage().get({key: boardDataKey});
              alert(x);
            }}
          >
            local test set
          </button>
          {boardData?.length !== 0 &&
            boardData.map((board, boardKey) => (
              <div
                className="board-item-row"
                onClick={(event) => {
                  window.navigator.clipboard.writeText(board.content);
                  event.currentTarget.style.color = "rgb(91, 53, 94)";
                }}
                title="클릭하면 내용이 복사됩니다."
                key={board.id ?? boardKey}
              >
                <div className="label-data">
                  <i id="label-icon">
                    <CiShoppingTag />
                  </i>
                  {board.label}
                </div>
                <div className="content-data">{board.content}</div>
              </div>
            ))}
        </div>

        <div id="memo-container">
          <input id="memo-input" type="text" ref={userInput} />
          <button
            id="memo-add-button"
            onClick={() => {
              const inputText = userInput.current.value;
              if (inputText.length === 0) return;

              setBoardData((prev) => [
                ...prev,
                {
                  id: prev.length + 1,
                  label: "test",
                  content: inputText,
                },
              ]);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
