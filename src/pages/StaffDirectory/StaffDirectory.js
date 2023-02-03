import { Table } from "antd";
import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";

import { StaffDirectory_RB } from "../../components/Shared/Modals/Staff_Directory_RB";
export const StaffDirectory = () => {
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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Office Address",
      dataIndex: "office_address",
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
      name: "Rohit Jain",
      email: "rohit123@gmail.com",
      contact: "9890890987",
      designation: "Officer",
      department: "Municipal",
      office_address: "vijay nagar",
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
          title={"Key Personnel-Staff Directory"}
          title1={"NEC"}
          title2={"Key Personnel-Staff Directory"}
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
                      <option selected>Filter Department</option>
                        <option>Municipal</option>
                        <option>Labour Dep.</option>
                        <option>Finance Dep.</option>
                      </select>
                    </div>

                    <div className="col-3 d-flex justify-content-end">
                    <button
                    type="button"
                    class="btn btn-primary w-100"
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Staff_modal"
                  >
                    Add Staff Directory
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
        <StaffDirectory_RB />
      </div>
    </>
  );
};
