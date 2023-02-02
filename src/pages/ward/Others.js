import { Table } from "antd";
import { useState } from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Others_RB from "../../components/Shared/Modals/Others_RB";

export const Others = () => {
  const [Announcemento, setAnnouncemento] = useState();
  const handleClickRB = () => {
    setAnnouncemento(0);
  };
  const handleClick = () => {
    setAnnouncemento(1);
  };
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "Type",
      dataIndex: "type",
    },

    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Contact Person",
      dataIndex: "contact_person",
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
    },
    {
      title: "Announcement",
      dataIndex: "announcement",
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
      type: "Garbage Collector",
      name: "Abhay Singh",
      contact_person: "Aman",
      timing: "9 am - 11 am",
      announcement: (
        <a href="#" className="action-icon">
          {" "}
          <i
            className="mdi mdi-bullhorn-variant text-primary"
            style={{ border: "none" }}
            data-bs-toggle="modal"
            data-bs-target="#others_modal"
            onClick={handleClick}
          />
        </a>
      ),
      contact: "9897898769",
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
        <CustomHeader title={"Others"} title1={"NEC"} title2={"Others"} />
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
                    data-bs-target="#others_modal"
                    onClick={handleClickRB}
                  >
                    Add Others
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
                  {" "}
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
        <Others_RB Announcemento={Announcemento} />
      </div>
    </>
  );
};
