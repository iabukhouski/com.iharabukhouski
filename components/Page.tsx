export const Page =
  (
    {
      children,
    }
  ) => {

    return (
      <>
        <style jsx>
          {
            `
              @media (max-width: 1000px) {
                .page {
                  padding: 50px;
                }
              }
              @media (max-width: 500px) {
                .page {
                  padding: 15px;
                }
              }
            `
          }
        </style>
        <div className="page">
          {children}
        </div>
      </>
    );
  }