export const Logo =
  () => {

    const styles = {
      logo: {
        color: `white`,
        fontSize: `22px`,
        fontWeight: 900,
        whiteSpace: `nowrap`,
      },
    } as const;

    return (
      <a
        style={styles.logo}
        href="/"
      >
        IHAR ABUKHOUSKI
      </a>
    );
  }