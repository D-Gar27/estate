import { Link } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <section className="pagenotfound">
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link className="b2h" to={'/'}>
        back to home page
      </Link>
    </section>
  );
};

export default PageNotFound;
