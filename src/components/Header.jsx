import styles from "./styles/Header.module.css";
function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/globe.svg" alt="Globe" />
      <h3> my travel journal.</h3>
    </header>
  );
}
export default Header;
