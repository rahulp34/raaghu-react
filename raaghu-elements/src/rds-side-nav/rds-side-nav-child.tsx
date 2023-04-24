import React, { useState, useEffect } from "react";
import RdsIcon from "../rds-icon";
import "./rds-side-nav-new.scss";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import RdsToggle from "../rds-toggle";

const RdsSideNavChild = ({
  data,
  counter,
  onClickHandler,
  callback,
  toggleTheme,
}: {
  data: any[];
  callback: (data: any) => void;
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
  counter: number;
  onClickHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const [count, setCount] = useState(counter);

  const [collapse, setcollapse] = useState(false);
  // const collapse = props.collapse;

  const onCollapse = () => {
    console.log(collapse);
    callback(!collapse);
    setcollapse(!collapse);
  };

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <ul
        className={`list-style mb-0 ps-1 sideNav ${count == 1
          ? "list-unstyled"
          : count == 2
            ? "list-unstyled fw-normal pb-1 small ms-1 "
            : count == 3 ? "ms-4" : " "
          }`}
      >
        {data &&
          data.map((item, id) => (
            <Node
              collapse={collapse}
              node={item}
              key={id}
              count={count}
              onClickHandler={onClickHandler}
            ></Node>
          ))}
      </ul>
      {/* <span> */}
        <div
          className={`sidenav-footer text-center rounded-end py-2 p-1 ${collapse ? "w-auto" : ""}`}
        >
          {/* <div className="ms-3"> */}
            {/* <div className="text-center mb-3"> */}
         <span className="collpase-button">

           <RdsIcon
                name="chevron_right_arrow"
                height="15px"
                width="15px"
                stroke={true}
                fill={false}
                onClick={onCollapse}
                colorVariant="primary"
                // isAnimate={false}
              ></RdsIcon>
       </span>
            {/* </div> */}
            { <div className="darkTheme text-center">
              <a
                className={` d-inline-flex align-items-center text-decoration-none text-uppercase`}
              >
                 
                <RdsToggle
              small={collapse} 
              iconOnUncheck={"sun"}
              iconOnCheck={"moon"}
              onClick={toggleTheme} checked={false}                ></RdsToggle>
               
              </a>
            </div> }
          {/* </div> */}
        </div>
      {/* </span> */}
    </>
  );
};

RdsSideNavChild.defaultProps = {
  counter: 0,
};

const Node = ({
  node,
  count,
  collapse,
  onClickHandler,
}: {
  node: any;
  count: number;
  collapse: boolean;
  onClickHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const [childVisibility, setChildVisibility] = useState(false);
  const hasChild = node.children ? true : false;
  const [active, setActive] = useState(null);
  const { t, i18n } = useTranslation();

  return (

    <li className="mb-2 pe-auto nav-item">

      {!hasChild && (
        <NavLink
          to={node.path}
          onClick={onClickHandler}
          className={`routingLink d-flex align-items-center list-unstyled ${count == 1 ? "text-capitalize" : ""
            } text-decoration-none`}
        >
              {count == 1 ? (
             
                  <RdsIcon
                    name={node.icon}
                    fill={false}
                    stroke={true}
                    height="20px"
                    width="20px"
                    classes="me-3"
                    // isAnimate={true}
                  ></RdsIcon>
            
              ) : count == 2 ?
               
                  <RdsIcon
                    name={node.icon}
                    fill={false}
                    stroke={true}
                    height="20px"
                    width="20px"
                    classes="me-3"
                    // isAnimate={false}
                  ></RdsIcon>
                : null}
              <div className="me-3" data-name={node.label}>
                {!collapse && <>
                  
                {t(node.label)}
                </>}
              </div>
        </NavLink>
      )}

      {hasChild && (
        <>
          {count == 1 ? (
            <>
              {collapse && (
                <>
                  <div className="btn-group dropend">
                    <a
                      type="button"
                      data-bs-toggle="dropdown"
                      // data-bs-offset="3,25"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                      id="side-dropdown2"
                      className="pe-auto list-unstyled "
                    >
                      <RdsIcon
                        name={node.icon}
                        fill={false}
                        stroke={true}
                        height="20px"
                        width="20px"
                        classes="me-3"
                        // isAnimate = {false}
                      ></RdsIcon>
                    </a>
                    <ul
                      className="dropdown-menu shadow p-3 ms-3 position-fixed overflow-visible"
                      aria-labelledby="side-dropdown2"
                    >
                      {node.children.map((item: any) => (
                        <>
                          <li className="list" id={item.id}  >
                            <NavLink className="dropdown-item " to={item.path} >
                              {item.children && item.children.length > 0 ? <>
                                <div className="btn-group dropend">
                                  <a
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    // data-bs-offset="3,25"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                    id="side-dropdown3"
                                    className="pe-auto list-unstyled "
                                  >
                                    {t(item.label)}
                                  </a>
                                  <ul
                                    className="dropdown-menu shadow p-3 ms-3 position-fixed "
                                    aria-labelledby="side-dropdown3"
                                  >
                                    {item.children.map((subItem: any) => (
                                      <>
                                        <li className="list" id={subItem.id}  >
                                          <NavLink className="dropdown-item " to={subItem.path}>
                                          <RdsIcon
                        name={subItem.icon}
                        fill={false}
                        stroke={true}
                        height="20px"
                        width="20px"
                        classes="me-3"
                        // isAnimate = {false}
                      ></RdsIcon>
                                            {t(subItem.label)}
                                          </NavLink>
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                </div>
                              </> : <>{t(item.label)}</>}
                            </NavLink>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </>
              )
              }
            </>
          ) : null}
          {count == 1 && (
            <>
              {!collapse && (
                <>
                  <a
                    aria-expanded={childVisibility}
                    className={`nav-link child d-flex align-items-center cursor-pointer ${childVisibility == true ? 'collapsed ' : ' '}`}
                    onClick={(e) => setChildVisibility((v) => !v)}>
                    <RdsIcon
                      name={node.icon}
                      fill={false}
                      stroke={true}
                      height="20px"
                      width="20px"
                      classes="me-3"
                      // isAnimate = {false}
                    ></RdsIcon>
                    <span className="text-capitalize">{t(node.label)}</span>
                  </a>
                </>
              )}
            </>
          )}

          {count == 2 ? (
            <>
              {!collapse && (
                <>
                  <div id="menuWithChildren2">
                    <a aria-expanded={childVisibility}
                      className={`nav-link child d-flex align-items-center cursor-pointer  ${childVisibility == true ? 'collapsed ' : ' '}`}
                      onClick={(e) => setChildVisibility((v) => !v)}>
                      <RdsIcon
                        name={node.icon}
                        fill={false}
                        stroke={true}
                        height="20px"
                        width="20px"
                        classes="me-3"
                        // isAnimate = {false}
                      ></RdsIcon>
                      <span className="text-capitalize">{t(node.label)}</span>
                    </a>
                  </div>
                </>
              )}
            </>
          ) : null}


          {/* <div className="">
            <RdsIcon
              name="chevron_down"
              fill={false}
              stroke={true}
              height="10px"
              width="10px"
              classes="ms-4 me-4"
            ></RdsIcon>
          </div> */}
        </>
      )}

      {hasChild && childVisibility && !collapse && (
        <div>
          <div
            className="show ms-1"
            id="menuWithChildren3"
          >
            <RdsSideNavChild
              data={node.children}
              counter={count}
              onClickHandler={onClickHandler}
              callback={function (data: any): void {
                throw new Error("Function not implemented.");
              }}
            ></RdsSideNavChild>
          </div>
        </div>
      )}
    </li>
  );
};

export default RdsSideNavChild;
