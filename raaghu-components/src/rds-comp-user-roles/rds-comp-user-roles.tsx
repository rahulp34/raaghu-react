import React, { FC, useEffect, useState } from "react";
import { RdsButton, RdsCheckbox, RdsLabel } from "../rds-elements";

interface RdsCompUserRolesProps {
  usersRole: any;
  changedData?: any
}

const RdsCompUserRoles = (props: RdsCompUserRolesProps) => {
  const [roleData, setRoleData] = useState<any>([]);
  //const [tempRoleData, settempRoleData] = useState<any>([]);

  useEffect(() => {

    setRoleData(props.usersRole);
  }, [props.usersRole]);

  // useEffect(() => {
  //   
  //   settempRoleData(roleData);
  // }, [roleData]);

  function isRoleChecked(index: number, value: boolean) {

    const updatedRoleData = [...roleData];
    updatedRoleData[index] = { ...updatedRoleData[index], isChecked: value };
    props.changedData(updatedRoleData)
    setRoleData(updatedRoleData);
    // setRoleData({...roleData ,isChecked: value })
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {roleData.map((e: any, index: number) => (
            <div className="mt-3">
              <RdsCheckbox
                key={e.name}
                label={e.name}
                onChange={(event) => {
                  isRoleChecked(index, event.target.checked);
                }}
                checked={e.isChecked}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="footer-buttons justify-content-end bottom-0 pt-0">
          <RdsButton
            class="me-2"
            label="CANCEL"
            type="button"
            databsdismiss="offcanvas"
            isOutline={true}
            colorVariant="primary"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="SAVE"
            type="button"
            isOutline={false}
            colorVariant="primary"
            onClick={saveRoles}
            databsdismiss="offcanvas"
          ></RdsButton>
        </div> */}
    </>
  );
};
export default RdsCompUserRoles;
