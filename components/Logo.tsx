import Link from 'next/link';

export const Logo =
  () => {

    return (
      <>
        <style jsx>
          {
            `
              .logo {
                color: white;
                font-weight: 900;
                white-space: nowrap;
              }
              @media (min-width: 426px) {
                .logo {
                  font-size: 22px;
                }
              }
              @media (max-width: 425px) {
                .logo {
                  font-size: 14px;
                }
              }
            `
          }
        </style>
        <Link
          href="/"
        >
          <a
            className='logo'
          >
            IHAR ABUKHOUSKI
          </a>
        </Link>
      </>
    );
  }