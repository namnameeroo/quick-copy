export default function ThemeCard({card, onClick}) {
  return (
    <>
      <article className="card" onClick={onClick}>
        <div className="card-title">{card.title}</div>
        <div className="card-description">{card.description}</div>
      </article>
    </>
  );
}
