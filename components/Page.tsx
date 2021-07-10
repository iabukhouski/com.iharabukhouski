export const Page =
  (
    {
      children,
    }: { children: any }
  ) => {

    return (
      <>
        <style jsx>
          {
            `
              .page {
                width: 100%;
                height: 100%;
                
              }
              @media (min-width: 426px) {
                .page {
                  padding: 0 50px;
                }
              }
              @media (max-width: 425px) {
                .page {
                  padding: 0 20px;
                  margin-bottom: 150px;
                }
              }
            `
          }
        </style>
        <div
          className='page'
        >
          {children}
        </div>
      </>
    );
  }