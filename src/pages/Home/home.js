import { SubHeader } from "../../components/Shared/common/SubHeader";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const Home = () => {
  return (
    <>
      <SubHeader title={"Dashboard/Overview & Statics "} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className=" d-flex  flex-column justify-content-center align-items-center">
                      <h4 style={{ color: `red`, fontWeight: "700" }}>20</h4>

                      <h4>Registered Users</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className=" d-flex  flex-column justify-content-center align-items-center">
                      <h4 style={{ color: `red`, fontWeight: "700" }}>30</h4>

                      <h4>Logged In Users</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div>
                      <ul className="nav nav-tabs nav-bordered mb-3">
                        <li className="nav-item">
                          <a
                            href="#home-b1"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link"
                          >
                            <i className="mdi mdi-home-variant d-md-none d-block" />
                            <span
                              className="d-none d-md-block "
                              style={{ color: `var(--primary)` }}
                            >
                              Complaints Overview
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#profile-b1"
                            data-bs-toggle="tab"
                            aria-expanded="true"
                            className="nav-link active"
                          >
                            <i className="mdi mdi-account-circle d-md-none d-block" />
                            <span
                              className="d-none d-md-block"
                              style={{ color: `var(--primary)` }}
                            >
                              About City Places
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane" id="home-b1">
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      20
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Sanitaion Issue
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      3
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Civic
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      12
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Enforcememnt
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      17
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Garbage
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      8
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Municipal
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      11
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Water Supply
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane show active" id="profile-b1">
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      20
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Where To Eat
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      10
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Where To Stay
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      10
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Place To Visit
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      17
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Historical
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      9
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Heritage
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="card widget-flat">
                                <div
                                  className="card-body"
                                  style={{ background: `var(--primary)` }}
                                >
                                  <div className=" d-flex  flex-column justify-content-center align-items-center">
                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      11
                                    </h4>

                                    <h4
                                      style={{
                                        color: `var(--white)`,
                                        fontWeight: "700",
                                      }}
                                    >
                                      Religious
                                    </h4>
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
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="col-sm-12">
              <div className="card widget-flat">
                <div className="card-body">
                  <h3 style={{ color: `var(--primary)` }}>Citizen Service</h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PieChart width={400} height={400}>
                      <Pie
                        data={data}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
