import React, { useEffect, useState } from "react";
import {
  RdsCompNewClaimType,
  RdsCompDatatable,
  RdsCompAlertPopup,
} from "../../../rds-components";
import { RdsOffcanvas, RdsButton, RdsIcon } from "../../../rds-elements";
import { useTranslation } from "react-i18next";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";
import {
  fetchClaimTypesData,
  deleteClaimTypesData,
  addClaimTypesData,
} from "../../../../libs/state-management/claim-types/claim-types-slice";

const ClaimType = () => {
  const [tableDataRowid, setTableDataRowId] = useState(0);

  const { t } = useTranslation();
  const offCanvasHandler = () => {};
  const [Data, setData] = useState<any>([]);
  const claimTypesUser = useAppSelector(
    (state) => state.persistedReducer.claimTypes.users
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchClaimTypesData() as any);
    
  }, [dispatch]);

  useEffect(()=>{
    if(claimTypesUser){
      const tempData = claimTypesUser.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          valueType: item.valueTypeAsString,
          description: item.description,
          regex: item.regex,
          required: (
            <>
              {item.required == true ? (
                <div style={{ strokeWidth: "3px" }}>
                  <RdsIcon
                    name="check"
                    height="17px"
                    width="15px"
                    colorVariant="success"
                  />
                </div>
              ) : (
                <div style={{ strokeWidth: "3px" }}>
                  <RdsIcon
                    name="cancel"
                    height="17px"
                    width="15px"
                    colorVariant="danger"
                  />
                </div>
              )}
            </>
          ),
        };
      });
      console.log(" tempData ", tempData);
      setData(tempData);
    }
  }, [claimTypesUser])

  const onActionSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    setTableDataRowId(tableDataRowIndex);
  };

  const DeleteHandler = (e: any) => {
    dispatch(deleteClaimTypesData(tableDataRowid) as any).then((res: any) => {
      dispatch(fetchClaimTypesData() as any);
    });
  };

  const tableHeaders = [
    {
      displayName: t("Name"),
      key: "name",
      datatype: "text",
    },
    {
      displayName: t("Value Type"),
      key: "valueType",
      datatype: "text",
    },
    {
      displayName: t("Description"),
      key: "description",
      datatype: "text",
    },
    {
      displayName: t("Regex"),
      key: "regex",
      datatype: "text",
    },
    {
      displayName: t("Required"),
      key: "required",
      datatype: "children",
    },
  ];

  // const tableData = [
  //   {
  //     id: 1,
  //     name: "User Id",
  //     value: "Your Id",
  //     description: "Associate",
  //     regex: "Test_Employer",
  //     icon: (
  //       <div style={{ strokeWidth: "3px" }}>
  //         <RdsIcon
  //           name="check"
  //           height="17px"
  //           width="15px"
  //           colorVariant="success"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 2,
  //     name: "On_Request",
  //     value: "Boolean",
  //     description: "Has to request",
  //     regex: "New_Request",
  //     icon: (
  //       <div style={{ strokeWidth: "3px" }}>
  //         <RdsIcon
  //           name="check"
  //           height="17px"
  //           width="15px"
  //           colorVariant="success"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 3,
  //     name: "Family_name",
  //     value: "String",
  //     description: "List of names to get",
  //     regex: "String_Value",
  //     icon: (
  //       <div style={{ strokeWidth: "3px" }}>
  //         <RdsIcon
  //           name="check"
  //           height="17px"
  //           width="15px"
  //           colorVariant="success"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 4,
  //     name: "Tree_View",
  //     value: "String",
  //     description: "Structure to show parent child",
  //     regex: "Tree_Value",
  //     icon: (
  //       <div style={{ strokeWidth: "3px" }}>
  //         <RdsIcon
  //           name="cancel"
  //           height="17px"
  //           width="15px"
  //           colorVariant="danger"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 5,
  //     name: "On_Request",
  //     value: "Boolean",
  //     description: "Has to request",
  //     regex: "New_Request",
  //     icon: (
  //       <div style={{ strokeWidth: "3px" }}>
  //         <RdsIcon
  //           name="check"
  //           height="17px"
  //           width="15px"
  //           colorVariant="success"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 6,
  //     name: "Family_name",
  //     value: "String",
  //     description: "List of names to get",
  //     regex: "String_value",
  //     icon: (
  //       <div style={{ strokeWidth: "3px" }}>
  //         <RdsIcon
  //           name="check"
  //           height="17px"
  //           width="15px"
  //           colorVariant="success"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 7,
  //     name: "Tree_View",
  //     value: "String",
  //     description: "Structure to show parent child",
  //     regex: "Tree_Value",
  //     icon: (
  //       <div style={{ strokeWidth: "3px" }}>
  //         <RdsIcon
  //           name="cancel"
  //           height="17px"
  //           width="15px"
  //           colorVariant="danger"
  //         />
  //       </div>
  //     ),
  //   },
  // ];
  const actions = [
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  ];

  const [dataForNewClaimType, setDataForNewClaimType] = useState({
    name: "sdfghbjnmk",
    regex: "",
    value: "",
    regexDesc: "",
    desc: "",
  });

  const submitHandler = (data: any) => {
    const newDto = {
      name: data.name,
      required: true,
      regex: data.regex,
      regexDescription: data.regexDesc,
      description: data.desc,
    };
    dispatch(addClaimTypesData(newDto) as any).then((res: any) => {
      dispatch(fetchClaimTypesData() as any);
    });
  };

  return (
    <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch mt-3">
      <div className="d-flex justify-content-between">
        <div className="h5">Claim Type</div>
        <div>
          <RdsOffcanvas
            canvasTitle={t("New Claim Type")}
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={600}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  icon="plus"
                  label={t("New Claim Type") || ""}
                  iconColorVariant="light"
                  iconHeight="15px"
                  iconWidth="15px"
                  iconFill={false}
                  iconStroke={true}
                  block={false}
                  size="small"
                  type="button"
                  colorVariant="primary"
                ></RdsButton>
              </div>
            }
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
            offId={"tenant"}
          >
            <RdsCompNewClaimType
              name=""
              regex={""}
              value={""}
              regexDesc={""}
              desc={""}
              onSubmit={submitHandler}
            ></RdsCompNewClaimType>
          </RdsOffcanvas>
        </div>
      </div>
      <div>
        <RdsCompDatatable
          tableHeaders={tableHeaders}
          actions={actions}
          tableData={Data!}
          pagination={true}
          recordsPerPage={10}
          recordsPerPageSelectListOption={true}
          onActionSelection={onActionSelection}
        ></RdsCompDatatable>
        <RdsCompAlertPopup
          alertID="dynamic_delete_off"
          onSuccess={DeleteHandler}
        />
      </div>
    </div>
  );
};

export default ClaimType;
