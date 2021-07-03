import {
  Logo,
} from './Logo';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export const Header =
  () => {

    const styles = {
      header: {
        marginBottom: `30px`,
        justifyContent: `space-between`,
        display: `flex`,
        alignItems: `center`
      },
      button: {
        background: `white`,
        borderRadius: `15px`,
        lineHeight: `30px`,
        padding: `0 13px`,
        fontSize: `12px`,
        fontWeight: 600,
        border: `none`
      }
    } as const;

    return (
      <>
        <style jsx>
          {
            `
              // @media (max-width: 10px) {
              //   .hello {
              //     font: 15px Helvetica, Arial, sans-serif;
              //     background: #eee;
              //     padding: 100px;
              //     text-align: center;
              //     transition: 100ms ease-in background;
              //   }
              //   .hello:hover {
              //     background: #ccc;
              //   }
              // }
            `
          }
        </style>
        <header
          style={styles.header}
          // className="hello"
        >
          <Logo />
          {/* <a
            style={styles.button}
            href="/contact"
          >
            Contact
          </a> */}
        </header>
      </>
    );
  }