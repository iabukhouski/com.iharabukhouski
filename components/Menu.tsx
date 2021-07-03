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

        <a
          className={value === `biography` ? styles1['menuItemActive'] : styles1['menuItem']}
          style={styles.menuItem}
          href="/biography"
        >
          Biography
        </a>


        <a
          className={value === `conversations` ? styles1['menuItemActive'] : styles1['menuItem']}
          style={styles.menuItem}
          href="/conversations"
        >
          Conversations
        </a>


        <a
          className={value === `essays` ? styles1['menuItemActive'] : styles1['menuItem']}
          style={styles.menuItem}
          href="/essays"
        >
          Essays
        </a>

      </nav>
    );
  }