import { Table } from "antd";
import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { City_event_RB } from "../../components/Shared/Modals/City_event_RB";

export const City_event = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "Event name",
      dataIndex: "name",
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend"],
    },

    {
      title: "Event Date",
      dataIndex: "date",
    },
    {
      title: "Event Place",
      dataIndex: "place",
    },
    {
      title: "Category",
      dataIndex: "category",
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
      name: "Mega Trade Fare",
      category: "Social",
      location: "Vijay Nagar square",
      place: " Hotel Sayaji scheme 54",
      date: "10/12/2022",

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
          title={"City Event"}
          title1={"City"}
          title2={"City Event"}
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
                      <option selected>Filter Event</option>
                        <option>Live Concert</option>
                        <option>Workshops</option>
                        <option>Conferences</option>
                        
                       
                      </select> */}
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-end">
                      
                      <select class="form-select" id="example-select">
                      <option selected>Filter Categories</option>
                        <option>Live Concert</option>
                        <option>Workshops</option>
                        <option>Conferences</option>
                      </select>
                    </div>

                    <div className="col-3 d-flex justify-content-end">
                    <button
                    type="button"
                    class="btn btn-primary w-100"
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#city_event_modal"
                  >
                    Add City Event
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <City_event_RB />
      </div>
    </>
  );
};
