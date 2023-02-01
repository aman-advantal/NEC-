import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Saniatation_Comment_RB from "../../components/Shared/Modals/Saniatation_Comment_RB";
export const Saniatation_Issue = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Saniatation Issue"}
          title1={"NEC"}
          title2={"Saniatation Issue"}
        />
        <div className="row ">
          <div className="col-lg-12">
         
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div style={{ display: "flex", justifyContent: "end" }}>
                
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
                  <table
                    id="basic-datatable"
                    className="table dt-responsive nowrap w-100 "
                  >
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th> Name</th>
                        <th>Contact No.</th>
                        <th>Enter Details</th>
                     <th>Attachment</th>
                        <td>Status</td>
                        <th>Action</th>
                      
                        
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Overflowing of Garabage Bins  </td>
                        <td>Ankrita</td>
                        <td>9989768364</td>
                        <td>Description</td>
                      
                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className="uil-image text-primary"
                              style={{ fontSize: "25px" }}
                           
                            />
                          </a>
                        </td>

                        <td>
                          {" "}
                          <div className="badge bg-success p-1">
                            <span >Pending</span>
                          </div>
                        
                        </td>

                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-comment"
                              style={{ fontSize: "20px" }}
                              data-bs-toggle="modal"
                              data-bs-target="#Comment_modal"
                            />
                          </a>
                        </td>
                        
                        
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
            </div>
            {/* end card*/}
          </div>{" "}
          {/* end col*/}
        </div>
      
        <Saniatation_Comment_RB/>
      </div>
    </>
  );
};
