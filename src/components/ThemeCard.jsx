export default function ThemeCard({card}) {
  return (
    <>
      <article className="card">
        <div className="card-title">{card.title}</div>
        <div className="card-description">{card.description}</div>
      </article>
    </>
  );
}
