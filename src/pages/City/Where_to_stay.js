import { Table } from "antd";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Where_to_stay_RB from "../../components/Shared/Modals/Where_to_stay_RB";

export const Where_to_stay = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "Hotel Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Room Type",
      dataIndex: "type",
    },
    {
      title: "Area",
      dataIndex: "area",
    },
    {
      title: "Location",
      dataIndex: "location",
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
      name: "Sayaji ",
      type: "Delux",
      email: "sayajiind@123.com",
      contact: "9878985467",
      area: "Vijay nagar",
      location: "Bapat square",

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
      action: (
        <div>
          <a href="#" className="action-icon">
            <i className="mdi mdi-pencil font-20 icon-color" />
          </a>
          <a href="#" className="action-icon">
            <i className="mdi mdi-delete font-20 icon-color " />
          </a>
          <a href="#" className="action-icon">
            <i className="uil uil-eye font-20 icon-color" />
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
          title={"Where to Stay"}
          title1={"City"}
          title2={"Where to Stay"}
        />
        <div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button
                    type="button"
                    class="btn btn-primary "
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#place_to_stay_modal"
                  >
                    Add Where to Stay
                  </button>
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
        <Where_to_stay_RB />
      </div>
    </>
  );
};
