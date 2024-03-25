import {useEffect, useState} from "react";
import "./ThemesPage.style.css";
import ThemeCard from "../components/ThemeCard";

export default function ThemesPage() {
  const [cards, setCards] = useState([]);
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
              <ThemeCard card={item} key={item.id} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
