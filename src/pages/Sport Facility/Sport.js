import { Table } from "antd";
import { Link } from "react-router-dom";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { Ground_RB } from "../../components/Shared/Modals/Ground_RB";
import { ROUTES } from "../../route/constant";

export const GroundDetail = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "Ground Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },

    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Sport Available",
      dataIndex: "sport_available",
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
      name: "Holkar",

      address: "Zangeer wala Square",
      sport_available: "football,cricket",

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
          <Link
            to={ROUTES.EVENT}
            className="action-icon"
            style={{ fontSize: "20px", marginLeft: "5px" }}
          >
            <i className="uil uil-eye icon-color" />
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
          title={"Sport Facility"}
          title1={"Nec"}
          title2={"Ground Details"}
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
                      <option selected>Filter Facilities</option>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                      </select>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-end">
                      
                      <select class="form-select" id="example-select">
                      <option selected>Filter Sports</option>
                        <option>Cricket</option>
                        <option>Badminton</option>
                        <option>Hockey</option>
                      </select>
                    </div>

                    <div className="col-3 d-flex justify-content-end">
                    <button
                    type="button"
                    class="btn btn-primary w-100"
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Ground_modal"
                  >
                    Add Sports
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
        <Ground_RB />
      </div>
    </>
  );
};
