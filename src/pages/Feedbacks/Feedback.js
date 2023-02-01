import { CustomHeader } from "../../components/Shared/common/CustomHeader";

export const Feedback = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"FeedBack/Input"}
          title1={"Nec"}
          title2={"FeedBack/Input"}
        />
        {/* <div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div style={{ display: "flex", justifyContent: "end" }}>
                
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div>
                  <table
                    id="basic-datatable"
                    className="table dt-responsive nowrap w-100 "
                  >
                    <thead>
                      <tr>
                        <th>FeedBack Type</th>
                        <th>User Name</th>
                        <th>Contact No.</th>
                        <th>FeedBack</th>
                        <th>Submitted Date</th>
                        <th>Attachment</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>PWD Department</td>
                        <td>Ankrita</td>
                        <td>456789033</td>
                        <td>sdfghjk</td>
                        <td>2-4-2023</td>
                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-file-image text-primary"
                              style={{ fontSize: "25px" }}
                            />
                          </a>
                        </td>

                        <td>
                          {" "}
                          <div className="badge bg-success p-1 rounded-3">
                            <span>Pending</span>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-comment"
                              style={{ fontSize: "20px" }}
                              data-bs-toggle="modal"
                              data-bs-target="#Comment_modal"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
            </div>
            {/* end card*/}
          </div>{" "}
          {/* end col*/}
        </div>
        {/* <FeedBack_Comment_RB/> */}
      </div>
    </>
  );
};
