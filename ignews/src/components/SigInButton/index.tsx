import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX} from "react-icons/fi";
import styles from "./styles.module.scss";

export function SigInButton() {

  const [isUserLogged, setIsso] = useState(false);

  return isUserLogged ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      Italo Maia
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
