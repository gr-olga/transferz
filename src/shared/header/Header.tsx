import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "./header.scss";

function Header() {
  const { data: userInfoResult, loading } = useQuery(userInfoQuery);

  const { name, email } =
    userInfoResult?.user_infoCollection?.edges?.[0]?.node ?? {};

  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <img src="/logo.png" className="logo" alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/journeys">Journeys</Link>
            </li>
            <li>
              <Link to="/graphiql">GraphiQL</Link>
            </li>
          </ul>
        </nav>
        <div className="user-info">{userInfoResult && <p>{`Welcome back, ${name} <${email}>`}</p>}</div>
      </header>
    </div>
  );
}

const userInfoQuery = gql`
  {
    user_infoCollection(first: 1) {
      edges {
        node {
          name
          email
        }
      }
    }
  }
`;

export default Header;
