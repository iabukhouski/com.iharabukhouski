import Head from 'next/head'
import Link from 'next/link';

import {
  Logo,
} from '../components/Logo';
import {
  Menu,
} from '../components/Menu';

export default function Home() {

  return (
    <>
      <Head>
        <title>Ihar Abukhouski</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* <link rel="icon" href="/fav.png" /> */}
      </Head>
      <style jsx>
        {
          `
            .page {
              height: 100%;
              width: 100%;
              position: fixed;
              background-image: url('./photo.png');
              background-repeat: no-repeat;
            }
            .main {
              height: 100%;
              display: grid;
            }
            .logoContainer {
              grid-area: logo;
            }
            .menuContainer {
              grid-area: aside;
            }
            .contactButtonContainer {
              grid-area: contactButton;
            }
            .contactButton {
              display: inline-block;
              background: white;
              border-radius: 15px;
              line-height: 30px;
              padding: 0 13px;
              font-size: 12px;
              font-weight: 600;
            }

            // DESKTOP & TABLET
            @media (min-width: 426px) {
              .page {
                padding: 50px;
                background-size: 50%;
                background-position: center;
              }
              .main {
                grid-template-rows: auto 1fr;
                grid-template-columns: auto 1fr auto;
                grid-template-areas: 
                  'logo . contactButton'
                  'aside main main';
                  align-items: flex-start;
                  grid-gap: 50px 0;
              }
            }

            // MOBILE
            @media (max-width: 425px) {
              .page {
                padding: 20px;
                background-size: 100%;
              }
              .main {
                grid-template-rows: 55% auto 1fr;
                grid-template-columns: auto;
                grid-template-areas: 
                  'logo'
                  'aside'
                  'contactButton';
              }
              .logoContainer {
                justify-self: end;
              }
              .contactButtonContainer {
                justify-self: center;
                align-self: center;
              }
            }
          `
        }
      </style>
      <div
        className='page'
      >

        <main
          className='main'
        >
          <div
            className='logoContainer'
          >
            <Logo />
          </div>
          <div
            className='menuContainer'
          >
            <Menu />
          </div>
          <div
            className='contactButtonContainer'
          >
            <Link
              href="/contact"
            >
              <a
                className='contactButton'
              >
                Contact
              </a>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
