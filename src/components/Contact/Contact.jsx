import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="section-tag">CONTACT</p>

        <h2>Let's Build Something Together.</h2>

        <p className="contact-text">
          Have an opportunity or just want to say hello?
        </p>

        <a href="mailto:your@email.com" className="contact-btn">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Contact;