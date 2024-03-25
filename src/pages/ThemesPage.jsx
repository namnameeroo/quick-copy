import {useEffect, useState} from "react";
import "./ThemesPage.style.css";
import ThemeCard from "../components/ThemeCard";
import {useNavigate} from "react-router-dom";

export default function ThemesPage() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const handleThemeCardClick = (boardId) => {
    console.log("clicked");

    console.info({boardid: boardId});

    // navigate(`/board`, {boardId});
    navigate(`/board/${boardId}`);
  };
  useEffect(() => {
    if (cards && cards.length === 0) {
      setCards([
        {
          id: 0,
          title: "인적사항",
          description: "주소나 이런거..",
        },
        {
          id: 1, //
          title: "자격증 정보", //
          description: "정보처리기사 발급처",
        },
      ]);
    }
  }, []);

  return (
    <main>
      <div className="card-container">
        {cards?.length !== 0 && (
          <>
            {cards.map((item) => (
              <ThemeCard
                card={item}
                key={item.id}
                onClick={() => handleThemeCardClick(item.id)}
              />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
