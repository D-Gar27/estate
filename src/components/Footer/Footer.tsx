import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact">
          <h4>Click or Call We do it all</h4>
          <p className="phone">
            Call <a href="tel:+95970005000">+95970005000</a> for your real
            estate chat
          </p>
          <a href="mailto:customer@estatemm.com">customer@estatemm.com</a>
        </div>
        <p className="estate">2022 ESTATE Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
