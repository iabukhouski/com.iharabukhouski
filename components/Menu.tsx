import Link from 'next/link';

import styles1 from '../styles/Home.module.css'

type MenuProps = {
  value?:
  | `biography`
  | `conversations`
  | `essays`;
};

export const Menu =
  (
    {
      value,
    }: MenuProps,
  ) => {

    const styles = {
      menu: {
        display: `flex`,
        flexDirection: `column`,
      },
      menuItem: {

        fontSize: `14px`,
        lineHeight: `40px`,
        fontWeight: 600,
        width: `10px`
      },
    } as const;

    return (
      <nav
        style={styles.menu}
      >

        <div
          className={value === `biography` ? styles1['menuItemActive'] : styles1['menuItem']}
          style={styles.menuItem}
        >
          <Link
            href="/biography"
          >
            Biography
          </Link>
        </div>


        <div
          className={value === `conversations` ? styles1['menuItemActive'] : styles1['menuItem']}
          style={styles.menuItem}
        >
          <Link
            href="/conversations"
          >
            Conversations
          </Link>
        </div>

        <div
            className={value === `essays` ? styles1['menuItemActive'] : styles1['menuItem']}
            style={styles.menuItem}
        >
          <Link
            href="/essays"
          >
            Essays
          </Link>
        </div>

      </nav>
    );
  }