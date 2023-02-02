import { Table } from "antd";
import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Civic_Infra_Comment_RB from "../../components/Shared/Modals/Civic_Infra_Comment_RB";
export const Civic_Infrastructure_Issue_Reporting = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      sorter: (a, b) => a.sno - b.sno,
      sortDirections: ["descend"],
    },
    {
      title: "Complaint No.",
      dataIndex: "complaint_number",
      sorter: (a, b) => a.complaint_number - b.complaint_number,
      sortDirections: ["descend"],
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Contact Number",
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
    complaint_number:"202",
    type:"Civic",
    name:"Aman",
    contact:"9890987898",
    description:"complaint description",
      attachment: (
        <a href="#" className="action-icon">
          <i
            className=" mdi mdi-file-image text-primary"
            style={{ fontSize: "25px" }}
          />
        </a>
      ),
      status: (
        <div className="badge bg-success p-1 rounded-3">
          <span>Pending</span>
        </div>
      ),
      action: (
        <div>
          <a href="#" className="action-icon">
            <i
              className=" mdi mdi-comment icon-color"
              style={{ fontSize: "20px" }}
              data-bs-toggle="modal"
              data-bs-target="#Comment_modal"
            />
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
          title={"Civic Infrastructure Issue Reporting"}
          title1={"NEC"}
          title2={"Civic Infrastructure Issue Reporting"}
        />
       
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
        <Civic_Infra_Comment_RB />
      </div>
    </>
  );
};
