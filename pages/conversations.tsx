import Head from 'next/head'

import {
  Page,
} from '../components/Page';
import {
  Header,
} from '../components/Header';
import {
  Menu,
} from '../components/Menu';

export default function Conversations() {

  return (
    <>
      <Head>
        <title>Conversations | Ihar Abukhouski</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>
        {
          `
            .layout {
              display: grid;
            }

            .menuContainer {
              grid-area: aside;
            }

            // DESKTOP & TABLET
            @media screen and (min-width: 768px) {
              .layout {
                grid-template-rows: auto 1fr;
                grid-template-columns: auto 50% auto;
                grid-template-areas: 
                  'header header'
                  'aside main';
                align-items: flex-start;
                grid-gap: 0 50px;
              }
            }

            // MOBILE
            @media screen and (max-width: 767px) {
              .layout {
                grid-template-rows: auto 1fr;
                grid-template-columns: auto;
                grid-template-areas: 
                  'header'
                  'main';
              }
              .menuContainer {
                display: none;
              }
            }
          `
        }
      </style>

      <Page>
        <div
          className='layout'
        >
          <Header />

          <div
            className='menuContainer'
          >
            <Menu
              value="conversations"
            />
          </div>

        </div>

      </Page>
    </>
  );
}
