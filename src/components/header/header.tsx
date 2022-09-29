import { FC } from "react";
import { Button } from "../buttom/button";
import { Logo } from "../logo/logo";
import styles from "./header.module.scss";
export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.rightSideWrapper}>
        <Button>Вход</Button>
        <span className={styles.divider}>/</span>
        <Button>Регистрация</Button>
        <input type="search" placeholder="Поиск" />
        <Button>ok</Button>
      </div>
    </header>
  );
};
