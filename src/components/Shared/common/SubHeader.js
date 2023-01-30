export const SubHeader = ({ title }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <form className="d-flex"></form>
              </div>
              <h4 className="page-title">{title}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
