import React from "react";
import { RdsButton, RdsIcon, RdsSearch } from "raaghu-react-elements";
import { useTranslation } from "react-i18next";


const Chats = () => {
  const { t } = useTranslation();


  return (
    <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
      <div className="row p-3">
        <div className="col-lg-4 col-md-4" style={{ height: "630px" }}>
          <div className="border h-100 pt-4 ps-3 pe-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="me-3">
                  <div style={{ position: "relative" }}>
                    <img
                      src="./assets/profile-picture-circle.svg"
                      className="avatar avatar-lg rounded rounded-circle"
                    ></img>
                    <span
                      style={{ position: "absolute", top: "23px", right: "0" }}
                    >
                      <span className="text-success fs-4">●</span>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="fw-bold fs-6 text-muted">Amit Trivedi</div>
                  <div
                    className="fw-light text-muted"
                    style={{ fontSize: "10px" }}
                  >
                    Senior Frontend Developer
                  </div>
                  <div
                    className="fw-light text-primary"
                    style={{ fontSize: "10px" }}
                  >
                    Online
                  </div>
                </div>
              </div>
              <div className="text-muted fw-bold">
                <RdsIcon
                  name="gear"
                  height="15px"
                  width="15px"
                  fill={false}
                  stroke={true}
                />
              </div>
            </div>
            <div className="mt-4">
              <RdsSearch
                placeholder="Search"
                size={"small"}
                // value={value}
                // onChange={onIconSearchHandler}
                iconside="right"
              ></RdsSearch>
            </div>
            <div className="mt-5 pt-3">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex">
                  <div className="me-3">
                    <div style={{ position: "relative" }}>
                      <img
                        src="./assets/profile-picture-circle.svg"
                        className="avatar avatar-md rounded rounded-circle"
                      ></img>
                      <span
                        style={{
                          position: "absolute",
                          top: "23px",
                          right: "0",
                        }}
                      >
                        {/* <span className="text-success fs-4">●</span> */}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold fs-6 text-muted">Janet Fowler</div>
                    <div
                      className="fw-light text-muted"
                    >
                      I'm going to San Francisco...
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="me-3">
                    <div style={{ position: "relative" }}>
                      <img
                        src="./assets/profile-picture-circle.svg"
                        className="avatar avatar-md rounded rounded-circle"
                      ></img>
                      <span
                        style={{
                          position: "absolute",
                          top: "23px",
                          right: "0",
                        }}
                      >
                        {/* <span className="text-success fs-4">●</span> */}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold fs-6 text-muted">Jason Boyd</div>
                    <div
                      className="fw-light text-muted"
                    >
                      Sound goods.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 d-flex align-items-center justify-content-center flex-column">
          <div className="d-flex align-items-center justify-content-center flex-column pb-5">
            <div className="text-muted mb-3">
              <RdsIcon
                name="question_chat"
                height="50px"
                width="50px"
                fill={false}
                stroke={true}
              />
            </div>
            <div className="fs-5 fw-bold">No message yet.</div>
            <div className="text-muted fs-6 mt-4 fw-bold">
              No messages in your inbox, yet! Start the conversation!
            </div>
            <div className="mt-5">
              <RdsButton
                type={"button"}
                label="Start conversation"
                colorVariant="primary"
                size="medium"
              ></RdsButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
