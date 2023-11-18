import { Link } from "react-router-dom";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Transferz Front-end assignment. Good luck!</h1>
      <p>
        <Link to="https://github.com/transferz/fe-test/blob/main/INSTRUCTIONS.md">
          Read the instructions here
        </Link>
      </p>
    </div>
  );
}
