import { Table } from "antd";
import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { Places_to_visit_RB } from "../../components/Shared/Modals/Places_to_visit_RB";

export const Places_to_visit = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "Place Name",
      dataIndex: "name",
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend"],
    },

    {
      title: "Visiting Time",
      dataIndex: "time",
    },
    {
      title: "Category",
      dataIndex: "category",
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
      name: "Rajwada ",
      time: "9:00 am to 10:00 pm",
      category: "Historical",
      location: "Rajwada Square",
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
          title={"Place to visit"}
          title1={"City"}
          title2={"Place to visit"}
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
                    data-bs-target="#place_to_visit_modal"
                  >
                    Add Place to Visit
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
                  <div className="tab-content">
                    <div
                      className="tab-pane active show"
                      id="multi-item-preview"
                      role="tabpanel"
                    >
                      <div
                        id="selection-datatable_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <Places_to_visit_RB />
      </div>
    </>
  );
};
