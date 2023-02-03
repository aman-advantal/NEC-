import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import React from "react";
import Edu_RB from "../../components/Shared/Modals/Institutionanal_RB";
import { Table } from "antd";
export const Educational_Instituion = () => {
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
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "Description",
      dataIndex: "description",
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
      type: "Private",
      name: "Svvv",
      contact: "9898780989",
      address: "Sawar Road",

      description: "Top Private Engineering college",
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
          title={"Educational Institutions"}
          title1={"NEC"}
          title2={"Educational Institution"}
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
                      <option selected>Filter Name</option>
                        <option>Shri G.S. Institute</option>
                        <option>Indore Institute of Science</option>
                        <option>Prestige Public School</option>
                        <option>G-Kids International School</option>
                        <option>Birla Open Minds International School</option>    
                        
                       
                      </select>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-end">
                      
                      <select class="form-select" id="example-select">
                      <option selected>Filter Type</option>
                        <option>School</option>
                        <option>Collage</option>
                        <option>Kids School</option>
                        <option>Learning Center</option>
                      </select>
                    </div>

                    <div className="col-3 d-flex justify-content-end">
                    <button
                    type="button"
                    class="btn btn-primary w-100"
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#edu_of_city_modal"
                  >
                    Add Education
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button
                    type="button"
                    class="btn btn-primary "
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#edu_of_city_modal"
                  >
                    Add Educational Institution
                  </button>
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
        <Edu_RB />
      </div>
    </>
  );
};
