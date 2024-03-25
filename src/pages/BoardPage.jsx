import {useParams} from "react-router-dom";

export default function BoardPage() {
  const {boardId} = useParams();

  return (
    <>
      <header className="page-header">
        <h1>just copy and paste</h1>
      </header>
      <div className="card-container">
        <div>This is Board</div>
        {boardId && <div>{boardId}</div>}
      </div>
    </>
  );
}
