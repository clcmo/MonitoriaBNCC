export default function Section({ id, title, description, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}