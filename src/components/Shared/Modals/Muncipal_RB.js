import React, { useState } from "react";
import Jodit from "../Include/jodit";

const Muncipal_RB = () => {
    const [date, setDate] = useState();

    console.log("Date", date);

    return (
        <>
            <div
                id="muncipal_modal"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div
                            className="modal-header"
                            style={{
                                background: `var(--primaryDark)`,
                                color: `var(--white)`,
                            }}
                        >
                            <h4 className="modal-title" id="fullWidthModalLabel">
                                Add Municipal Officer
                            </h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Grade
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="festivaltitle"
                                            required
                                            placeholder="Enter grade"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="festivaltitle"
                                            required
                                            placeholder="Enter name"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Contact No.
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="festivaltitle"
                                            required
                                            placeholder="Enter contact"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="example-select" className="form-label">
                                            Ward
                                        </label>
                                        <select className="form-select" id="example-select">
                                            <option>Select</option>
                                            <option>Ward 76</option>
                                            <option>Ward 67</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                           

                            {/* <div className="mb-3">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button
                                                className="accordion-button collapsed bg-light"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                Announcement
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingOne"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="title" className="form-label">
                                                                Title Of Announcement
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                id="title"
                                                                required
                                                                placeholder="Enter title"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="username" className="form-label">
                                                                Date
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                type="date"
                                                                id="date"
                                                                required
                                                                onChange={(e) => setDate(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 mb-3">
                                                        <label htmlFor="example-textarea" className="form-label">
                                                            Details
                                                        </label>
                                                        <Jodit />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> */}


                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                style={{ border: "none" }}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
        </>
    );
};

export default Muncipal_RB;
