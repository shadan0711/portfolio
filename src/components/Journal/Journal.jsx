import "./Journal.css";

function Journal() {
  return (
    <section className="journal" id="journal">
      <div className="container">
        <p className="section-tag">JOURNAL</p>

        <h2>Learning Never Stops.</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span>2026</span>
            <h3>Mastering React & DSA</h3>
          </div>

          <div className="timeline-item">
            <span>2025</span>
            <h3>Started Full Stack Development</h3>
          </div>

          <div className="timeline-item">
            <span>2024</span>
            <h3>Started Programming with C++</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journal;