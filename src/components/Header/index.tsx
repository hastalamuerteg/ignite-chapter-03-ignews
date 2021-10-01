import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/assets/logo.svg" alt="ignews" width="100" height="100" />
        <nav>
          <Link href="">
            <a>Home</a>
          </Link>
          <Link href="">
            <a>Posts</a>
          </Link>
        </nav>
      </div>
      {/* <div>
        <button>Sign in with Github</button>
      </div> */}
    </header>
  );
}
