import { Table } from "antd";
import { Link } from "react-router-dom";
import { CustomHeader } from "../../../components/Shared/common/CustomHeader";

export const Volunteer = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const data = [
    {
      sno: 1,
      name: "Aman",
      contact: "9809898909",
      date: "12/03/2022",
      address: "Nehru Nagar",
      date: "12/02/2022",
      attachment: (
        <a href="#" className="action-icon">
          <i
            className=" mdi mdi-file-pdf-box text-primary "
            style={{ fontSize: "25px" }}
          />
        </a>
      ),
      status: (
        <div>
          <input
            type="checkbox"
            id="switch01"
            defaultChecked="true"
            data-switch="success"
          />
          <label
            htmlFor="switch01"
            data-on-label="Active"
            data-off-label="In-active"
            className="mb-0 d-block"
            style={{ width: "70px" }}
          />
        </div>
      ),
      // action: (
      //   <div>
      //     <a href="#" className="action-icon">
      //       <i className="mdi mdi-pencil font-20 icon-color" />
      //     </a>
      //     <a href="#" className="action-icon">
      //       <i className="mdi mdi-delete font-20 icon-color " />
      //     </a>
      //     <a href="#" className="action-icon">
      //       <i className="uil uil-eye font-20 icon-color" />
      //     </a>
      //     <Link
      //       to={ROUTES.VOLUNTEER_DETAIL}
      //       className="action-icon "
      //       style={{ fontSize: "20px", marginLeft: "5px" }}
      //     >
      //       <i className=" mdi mdi-account-group icon-color" />
      //     </Link>
      //   </div>
      // ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <div>
        <CustomHeader
          title={"Volunteer Details"}
          title1={"Community Service"}
          title2={"Volunteer Details"}
        />
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
      </div>
    </>
  );
};
