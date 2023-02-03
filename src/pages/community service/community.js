import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import React from "react";
import Community_RB from "../../components/Shared/Modals/Community_RB";
import { Link } from "react-router-dom";
import { ROUTES } from "../../route/constant";
import { Table } from "antd";

export const Community = () => {
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
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Address",
      dataIndex: "address",
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
      type: "Event",
      name: "Mega Trade Fare",
      contact: "9809898909",
      date: "12/03/2022",
      address: "Nehru Nagar",
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
          <Link
            to={ROUTES.VOLUNTEER_DETAIL}
            className="action-icon "
            style={{ fontSize: "20px", marginLeft: "5px" }}
          >
            <i className=" mdi mdi-account-group icon-color" />
          </Link>
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
          title={"Community Service"}
          title1={"NEC"}
          title2={"Community service"}
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
                      
                      <select class="form-select" id="example-select">
                      <option selected>Filter Location</option>
                        <option>Vijay Nagar</option>
                        <option>Palasia</option>
                        <option>Bhawarkua</option>
                        <option>Rajendra nagar</option>
                        
                       
                      </select>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-end">
                      
                      <select class="form-select" id="example-select">
                      <option selected>Filter Name</option>
                        <option>Volunteering</option>
                        <option>Blood Donate</option>
                      </select>
                    </div>

                    <div className="col-3 d-flex justify-content-end">
                    <button
                    type="button"
                    class="btn btn-primary w-100"
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#community_of_city_modal"
                  >
                    Add Community
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
        <Community_RB />
      </div>
    </>
  );
};
