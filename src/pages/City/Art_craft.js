import { Table } from "antd";
import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Art_craft_RB from "../../components/Shared/Modals/Art_craft_RB";

export const Art_craft = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.length - b.title.length,
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
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Description",
      dataIndex: "description",
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
      title: "jarden Art & Craft",
      contact: "9878985467",
      location: "Vijay Nagar square",
      address: "scheme 54",
      description: "art & craft description",

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
          title={"Art and Craft"}
          title1={"City"}
          title2={" Art and Craft"}
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
                <div className="col-lg-9">
              <div className="row g-0 align-items-center">
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button
                    type="button"
                    class="btn btn-primary "
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Art_of_city_modal"
                  >
                    Add Art and Craft
                  </button>
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
                  <div
                    id="basic-datatable_wrapper"
                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                  >
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
          <Art_craft_RB />
        </div>
      </div>
    </>
  );
};
