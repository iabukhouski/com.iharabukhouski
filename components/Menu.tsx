import Link from 'next/link';

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

    return (
      <>
        <style jsx>
          {
            `
              .menu {
                display: flex;
                flex-direction: column;
              }

              .menuItem,
              .menuItemActive {
                color: white;
                
                position: relative;
              }

              .menuItem:active,
              .menuItemActive:active {
                color: #cccccc;
              }

              .menuItemActive:before {
                content: '●';
                position: absolute;
                left: -15px;
              }

              @media (min-width: 426px) {
                .menuItem,
                .menuItemActive {
                  font-size: 14px;
                  font-weight: 600;
                  line-height: 40px;
                }
              }
              @media (max-width: 425px) {
                .menuItem,
                .menuItemActive {
                  font-size: 24px;
                  font-weight: 900;
                  line-height: 50px;
                }
              }
            `
          }
        </style>

        <nav
          className='menu'
        >

          <Link
            href="/biography"
          >
            <a
              className={value === `biography` ? `menuItemActive` : `menuItem`}
            >
              Biography
            </a>
          </Link>

          <Link
            href="/conversations"
          >
            <a
              className={value === `conversations` ? `menuItemActive` : `menuItem`}
            >
              Conversations
            </a>
          </Link>

          <Link
            href="/essays"
          >
            <a
              className={value === `essays` ? `menuItemActive` : `menuItem`}
            >
              Essays
            </a>
          </Link>

          <Link
            href="https://google.com"
          >
            <a
              className='menuItem'
            >
              Iki
            </a>
          </Link>

        </nav>
      </>
    );
  }