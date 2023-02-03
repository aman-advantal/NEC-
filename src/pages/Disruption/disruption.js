import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import React from "react";
import { Table } from "antd";
import { Disruption_RB } from "../../components/Shared/Modals/Disruption_RB";
export const Disruption = () => {
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
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Date",
      dataIndex: "date",
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
      title: "Road Diversion",
      category: "Traffic",
      date: "12/12/2022",
      description: "Diversion Description",
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
          title={"Disruption"}
          title1={"Nec"}
          title2={"Disruption"}
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
                    <div className="col-3 d-flex flex-column justify-content-end"></div>
                    <div className="col-3 d-flex flex-column justify-content-end">
                      {/* <select class="form-select" id="example-select">
                        <option selected>Filter Categories</option>
                        <option>Construction Industry</option>
                        <option>Electric Industry</option>
                        <option>Telecommunication Industry</option>
                        <option>Service Industry</option>
                      </select> */}
                    </div>

                    <div className="col-3 d-flex justify-content-end">
                      <button
                        type="button"
                        class="btn btn-primary w-100"
                        style={{ border: "none" }}
                        data-bs-toggle="modal"
                        data-bs-target="#Disruption_modal"
                      >
                        Add Disruption
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
        <Disruption_RB />
      </div>
    </>
  );
};
