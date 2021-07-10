import {
  Logo,
} from './Logo';

export const Header =
  () => {

    return (
      <>
        <style jsx>
          {
            `
              .header {
                position: sticky;
                display: flex;
                top: 0;
                left: 0;
                right: 0;
                grid-area: header;
              }
              @media screen and (min-width: 768px) {
                .header {
                  padding: 50px 0;
                  background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0) 100%);
                }
              }
              @media screen and (max-width: 767px) {
                .header {
                  justify-content: flex-end;
                  padding: 20px 0;
                  background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0) 100%);
                }
              }
            `
          }
        </style>
        <header
          className='header'
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