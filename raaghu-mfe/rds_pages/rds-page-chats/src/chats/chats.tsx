import React, { useState, useEffect, useRef } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";
import {
  fetchChatsData,
  fetchChatContactsData
} from "../../../../libs/state-management/chats/chats-slice";
import { RdsButton, RdsIcon, RdsInput, RdsSearch } from "../../../rds-elements";
import { useTranslation } from "react-i18next";
import "./chats.css"


const Chats = () => {
  const [conversationVisibility, setConversationVisibility] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const chatsData = useAppSelector(
    (state) => state.persistedReducer.chats
  ) as any;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChatContactsData(false) as any);
  }, [dispatch]);

  const onStartConversationHandler = () => {
    dispatch(fetchChatContactsData(true) as any);
    setConversationVisibility(true);
  };

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

  useEffect(() => {
    // Scroll to the bottom of the container
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [opponentText]);

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
    <div className="container-fluid m-0 p-0">
      <div className="row p-3">
        <div className="col-lg-4 col-md-4 chat-cust-height">
          <div className="border h-100 pt-4 ps-3 pe-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="me-3">
                  <div className="position-relative">
                    <img
                      src="./assets/profile-picture-circle.svg"
                      className="avatar avatar-lg rounded rounded-circle"
                    ></img>
                    <span className="end-0 position-absolute top-50">
                      <span className="text-success fs-4">●</span>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="fw-bold fs-6 text-muted">Amit Trivedi</div>
                  <div
                    className="fw-light text-muted fs-custom">
                    Senior Frontend Developer
                  </div>
                  <div
                    className="fw-light text-primary fs-custom">
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
                      <div className="position-relative">
                        <img
                          src="./assets/profile-picture-circle.svg"
                          className="avatar avatar-md rounded rounded-circle"
                        ></img>
                        <span className="end-0 position-absolute top-50">
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
                      <div className="position-relative">
                        <img
                          src="./assets/profile-picture-circle.svg"
                          className="avatar avatar-md rounded rounded-circle"
                        ></img>
                        <span className="end-0 position-absolute top-50">
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
                  showLoadingSpinner={true}
                  size="medium"
                ></RdsButton>
              </div>
            </div>
          </div>
        )}

        {conversationVisibility && (
          <div className="col-lg-8 col-md-8 d-flex flex-column pt-5 ps-2 pe-2 pb-1 justify-content-between">
            <div ref={containerRef} className="h-100 overflow-scroll p-3">
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
                        className="p-3 mb-2 opp-chat-bg">
                        <div>{item.text}</div>
                        <div
                          className="mt-1 fs-6 time-text-color">
                          {item.time}
                        </div>
                      </div>
                    ))}
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
                          className="p-3 mb-2 my-chat-bg">
                          <div className="text-white text-wrap">{item.text}</div>
                          <div
                            className="mt-1 fs-6 text-end time-text-color">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="position-relative">
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
                className="p-3 d-flex justify-content-between">
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
