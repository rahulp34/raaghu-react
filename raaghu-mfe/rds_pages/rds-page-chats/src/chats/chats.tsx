import React, { useState, useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";
import {
  fetchChatsData
} from "../../../../libs/state-management/chats/chats-slice";
import { RdsButton, RdsIcon, RdsInput, RdsSearch } from "../../../rds-elements";
import { useTranslation } from "react-i18next";

const Chats = () => {
  const [conversationVisibility, setConversationVisibility] = useState(false);

  
  const chatsData = useAppSelector(
    (state) => state.persistedReducer.chats
  ) as any;

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchChatsData() as any);
  }, [dispatch]);

  const onStartConversationHandler = () => {
    setConversationVisibility(true);
  };
console.log('aaya kya data ',chatsData )
  const opponentText = [
    {
      text: "Hello Amit, How are you doing today? I'm doing great!! How are you doing Today??",
      time: "17:45",
    },
    {
      text: "Just say hello, atleast",
      time: "17:45",
    },
  ];

  const [myText, setMyText] = useState([
    {
      text: "Hello xyz, I'm doing great!!",
      time: "17:50",
    },
    {
      text: "How are you doing?? Can you please tell me? And Are you going to test this chat screen??",
      time: "17:51",
    },
  ]);

  const [enteredText, setEnteredText] = useState("");

  const onChangehandler = (e: any) => {
    setEnteredText(e.target.value);
  };

  const onClickHandler = () => {
    const tempObject = {
      text: enteredText,
      time: "18:20",
    };
    setMyText([...myText, tempObject]);
    setEnteredText("");
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      // Handle the "Enter" key press here
      const tempObject = {
        text: enteredText,
        time: "18:20",
      };
      setMyText([...myText, tempObject]);
      setEnteredText("");
    }
  };


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
            {conversationVisibility && (
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
                      <div className="fw-bold fs-6 text-muted">
                        Janet Fowler
                      </div>
                      <div className="fw-light text-muted">
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
                      <div className="fw-light text-muted">Sound goods.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!conversationVisibility && (
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
                  onClick={onStartConversationHandler}
                  size="medium"
                ></RdsButton>
              </div>
            </div>
          </div>
        )}

        {conversationVisibility && (
          <div className="col-lg-8 col-md-8 d-flex flex-column pt-5 ps-2 pe-2 pb-1 justify-content-between">
            <div>
              {/* opponent text */}
              <div className="mb-4">
                <div className="d-flex">
                  <div>
                    <img
                      src="./assets/profile-picture-circle.svg"
                      className="avatar avatar-sm rounded rounded-circle mt-2"
                    ></img>
                  </div>
                  <div className="d-flex flex-column">
                    {opponentText.map((item) => (
                      <div
                        className="p-3 mb-2"
                        style={{
                          backgroundColor: "#E4ECFF",
                          marginLeft: "20px",
                          borderRadius: "20px 20px 20px 0",
                          maxWidth: "534px",
                          width: "fit-content",
                        }}
                      >
                        <div>{item.text}</div>
                        <div
                          className="mt-1"
                          style={{ color: "#BEBEBE", fontSize: "13px" }}
                        >
                          {item.time}
                        </div>
                      </div>
                    ))}
                    {/* <div
                      className="p-3 mb-2"
                      style={{
                        backgroundColor: "#E4ECFF",
                        marginLeft: "20px",
                        borderRadius: "20px 20px 20px 0",
                        maxWidth: "534px",
                        width: "fit-content",
                      }}
                    >
                      <div>Just say hello, atleast</div>
                      <div
                        className="mt-1"
                        style={{ color: "#BEBEBE", fontSize: "13px" }}
                      >
                        17:45
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* My Text */}

              <div className="mb-4">
                <div className="d-flex justify-content-end">
                  <div>
                    {myText.map((item) => (
                      <div className="d-flex justify-content-end">
                        <div
                          className="p-3 mb-2"
                          style={{
                            background:
                              "transparent linear-gradient(259deg, #7E2EEF 0%, #2A75BC 100%) 0% 0% no-repeat padding-box",
                            borderRadius: "20px 20px 0 20px",
                            maxWidth: "534px",
                            marginRight: "20px",
                            width: "fit-content",
                          }}
                        >
                          <div className="text-white">{item.text}</div>
                          <div
                            className="mt-1"
                            style={{
                              color: "#BEBEBE",
                              fontSize: "13px",
                              textAlign: "right",
                            }}
                          >
                            {item.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ position: "relative" }}>
                    <img
                      src="./assets/profile-picture-circle.svg"
                      className="avatar avatar-sm rounded rounded-circle mt-2"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="p-3 d-flex justify-content-between"
                style={{ backgroundColor: "#F7F7F7" }}
              >
                <RdsInput
                  size="small"
                  placeholder="Type your message"
                  required={false}
                  customClasses="w-100 me-3"
                  value={enteredText}
                  onChange={onChangehandler}
                  onKeyDown={handleKeyDown}
                ></RdsInput>
                <button
                  className="bg-primary btn-sm rounded rounded-circle border-0 "
                  onClick={onClickHandler}
                >
                  <RdsIcon
                    name="symmetry_horizontal"
                    height="15px"
                    width="15px"
                    fill={false}
                    stroke={true}
                    colorVariant="light"
                    classes="d-flex align-items-center"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;
