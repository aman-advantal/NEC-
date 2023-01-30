export const CustomHeader = ({ title, title1, title2 }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <div className="d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="#">{title1}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{title2}</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <h4 className="page-title">{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
