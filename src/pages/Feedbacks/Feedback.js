import { Table } from "antd";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { FeedBack_Comment_RB } from "../../components/Shared/Modals/Feedback_RB";

export const Feedback = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "FeedBack Type",
      dataIndex: "type",
    },
    {
      title: "UserName",
      dataIndex: "user_name",
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
    },
    {
      title: "FeedBack",
      dataIndex: "feedback",
    },
    {
      title: "Submitted Date",
      dataIndex: "submitted_date",
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const data = [
    {
      sno: 1,
      type: "PWD Department",
      contact: "9898098965",
      user_name: "Rohit",
      feedback: "feedback",
      submitted_date: "13/20/2022",
      attachment: (
        <a href="#" className="action-icon">
          <i
            className=" mdi mdi-file-image text-primary"
            style={{ fontSize: "25px" }}
          />
        </a>
      ),
      status: (
        <div className="badge bg-success p-1 rounded-3">
          <span>Pending</span>
        </div>
      ),
      action: (
        <div>
          <a href="#" className="action-icon">
            <i
              className=" mdi mdi-comment icon-color"
              style={{ fontSize: "20px" }}
              data-bs-toggle="modal"
              data-bs-target="#Comment_modal"
            />
          </a>
        </div>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <div>
        <CustomHeader
          title={"FeedBack/Input"}
          title1={"Nec"}
          title2={"FeedBack/Input"}
        />
<div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div className="col-3">
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control dropdown-toggle "
                      placeholder="Search..."
                      id="top-search"
                    />
                  </div>
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3 d-flex flex-column justify-content-end">
                      
                      {/* <select class="form-select" id="example-select">
                      <option selected>Filter Info</option>
                        <option>Water Information</option>
                        <option>Power Information</option>
                        <option>Garbage Information</option>
                      </select> */}
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-end">
                      
                      {/* <select class="form-select" id="example-select">
                      <option selected>Filter Type</option>
                        <option>PWD Department</option>
                        <option>Municipal Department</option>
                        <option>Health Department</option>
                      </select> */}
                    </div>

                    <div className="col-3 d-flex justify-content-end">
                    <select class="form-select" id="example-select">
                      <option selected>Filter Type</option>
                        <option>PWD Department</option>
                        <option>Municipal Department</option>
                        <option>Health Department</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div>
                  <Table
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                  />
                </div>{" "}
              </div>{" "}
            </div>
          </div>{" "}
        </div>

        <FeedBack_Comment_RB />
      </div>
    </>
  );
};
