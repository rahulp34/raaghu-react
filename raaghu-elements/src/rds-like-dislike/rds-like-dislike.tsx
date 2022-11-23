import React, { Fragment, useState ,useEffect} from "react";

import RdsIcon from "../rds-icon/rds-icon";
import "./rds-like-dislike.scss";

export interface RdsLikeDislikeProps {
  colorVariant?: string;
  like: number;
  dislike: number;
  onClick?: (like: number, dislike: number) => void; 
  heightOfIcon?: string;
  widthOfIcon?: string;
}

const RdsLikeDislike = (props: RdsLikeDislikeProps) => {
  const [like, setLike] = useState(props.like);
  const [dislike, setDislike] = useState(props.dislike);

  const likeHandler = () => {
    setLike(like + 1);
    console.log(setLike);
  };
  const dislikeHandler = () => {
    setDislike(dislike + 1);
    console.log(setDislike);
  };

  if (props.onClick != undefined)
  useEffect(() => {
    props.onClick != undefined &&
      props.onClick(like, dislike);
  }, [like, dislike]);
  
  let bg = "bg-" + (props.colorVariant || "dark");

  return (
    <Fragment>
      <div className="d-flex justify-content-start">
        <div onClick={likeHandler}  >
         
          <RdsIcon
            name="like"
            class="likebtn"
            fill={false}
            stroke={true}
            height = {props.heightOfIcon}
            width = {props.widthOfIcon}
            colorVariant={props.colorVariant || "dark"}
          ></RdsIcon>

          <span className="ms-2 me-2 ">
            <label className="marginclassName">{like}</label>
          </span>
        </div>

        <div onClick={dislikeHandler}  >
      
            <RdsIcon
              name="dislike"
              class="dislikebtn"
              fill={false}
              stroke={true}
              height = {props.heightOfIcon}
              width = {props.widthOfIcon}
              colorVariant={props.colorVariant || "dark"}
            ></RdsIcon>
         
          <span className="ms-2">
            <label>{dislike}</label>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default RdsLikeDislike;
