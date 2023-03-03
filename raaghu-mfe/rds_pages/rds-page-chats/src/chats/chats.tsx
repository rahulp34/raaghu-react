import React from "react";

const Chats = () => {
  return (
    <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
      <div className="row p-3">
        <div className="col-lg-5 col-md-5 p-2">
          <div className="border h-100 p-3">
            <div className="d-flex">
              <div className="me-3">
                <img
                  src="./assets/profile-picture-circle.svg"
                  className="avatar avatar-md"
                ></img>
              </div>
              <div>
                <div className="fw-bold fs-6">Amit Mishra</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 p-2">
          <div className="border h-100 p-3">asdf</div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
