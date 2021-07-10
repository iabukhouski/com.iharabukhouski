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

export default function Biography() {

  return (
    <>
      <Head>
        <title>Biography | Ihar Abukhouski</title>
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

            .main {
              grid-area: main;
            }

            .article {
              margin-bottom: 150px;
            }

            .title {
              color: white;
              font-weight: 900;
              font-size: 24px;
            }

            .paragraph {
              color: white;
              font-weight: 500;
              font-size: 18px;
              line-height: 150%;
              padding-top: 40px;
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

          <aside
            className='menuContainer'
          >
            <Menu
              value='biography'
            />
          </aside>

          <main
            className='main'
          >
            <div
              style={{
                height: `50vh`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <label
                style={
                  {
                    color: `white`,
                    fontSize: `46px`,
                    fontWeight: 900,
                  }
                }
              >
                Try Again
              </label>
            </div>
            <article
              className='article'
            >
              <h1
                className='title'
              >
                Biography
              </h1>
              <p
                className='paragraph'
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p
                className='paragraph'
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
          </main>

        </div>
      </Page>
    </>
  );
}
