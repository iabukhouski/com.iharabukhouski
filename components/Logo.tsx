import Link from 'next/link';

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
      <div
        style={styles.logo}
      >
        <Link

          href="/"
        >
          IHAR ABUKHOUSKI
        </Link>
      </div>
    );
  }