import React, { useEffect, useState } from "react";
import {
  RdsCompNewClaimType,
  RdsCompDatatable,
  RdsCompAlertPopup,
} from "../../../rds-components";
import {
  RdsOffcanvas,
  RdsButton,
  RdsIcon,
  RdsInput,
  RdsAlert,
} from "../../../rds-elements";
import { useTranslation } from "react-i18next";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";
import {
  fetchClaimTypesData,
  deleteClaimTypesData,
  addClaimTypesData,
  editClaimTypesData,
  getClaimTypesData,
} from "../../../../libs/state-management/claim-types/claim-types-slice";
import { use } from "i18next";

const ClaimType = () => {
  const [tableDataRowid, setTableDataRowId] = useState(0);

  const [alert, setAlert] = useState({
    showAlert: false,
    message: "",
    success: false,
  });
  const [alertOne, setAlertOne] = useState(false);

  const { t } = useTranslation();
  const offCanvasHandler = () => { };
  const [Data, setData] = useState<any>([]);
  const claimTypesUser = useAppSelector(
    (state) => state.persistedReducer.claimTypes.users
  );
  const claimTypesEdit = useAppSelector(
    (state) => state.persistedReducer.claimTypes.editClaimsData
  );
  const claimTypeData = useAppSelector(
    (state) => state.persistedReducer.claimTypes
  );

  const [editClaimData, setEditClaimData] = useState<any>({});

  useEffect(() => {
    
    if (claimTypesEdit) {
      const tempData = { ...claimTypesEdit }
      setEditClaimData(tempData)
    }
  }, [claimTypesEdit]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchClaimTypesData() as any);
  }, [dispatch]);

  useEffect(() => {
    if (claimTypesUser) {
      
      const tempData = claimTypesUser.map((item: any) => {
        
        return {
          id: item.id,
          name: item.name,
          valueType: item.valueTypeAsString,
          description: item.description,
          regex: item.regex,
          static :(
            <>
              {item.isStatic == true ? (
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
  }, [claimTypesUser]);

  useEffect(() => {
    setAlert({
      showAlert: claimTypeData.alert,
      message: claimTypeData.alertMessage,
      success: claimTypeData.success,
    });
    setTimeout(() => {
      setAlert({
        showAlert: false,
        message: "",
        success: false,
      });
    }, 2000);
  }, [claimTypesUser]);

  const [claimsData, setClaimsData] = useState<any>({
    name: '',
    required: false,
    isStatic: false,
    regex: '',
    regexDescription: '',
    description: '',
    valueType: '',
    valueTypeAsString: '',
  });
  const [claimTypesId, setClaimTypesId] = useState("");

  const onActionSelection = (rowData: any, actionId: any) => {
    setTableDataRowId(rowData.id);
    if (actionId === "editClaim") {
      const tempApplicationId = String(rowData.id);
      setClaimTypesId(tempApplicationId);
      
      dispatch(getClaimTypesData(tempApplicationId) as any);
    }
  };

  const DeleteHandler = (e: any) => {
    dispatch(deleteClaimTypesData(tableDataRowid) as any).then((res: any) => {
      dispatch(fetchClaimTypesData() as any);
    });
    setAlertOne(true);
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
      datatype: "text",
    },
    {
      displayName: t("Static"),
      key: "static",
      datatype: "text",
    },
  ];

  const actions = [
    { id: "editClaim", displayName: "Edit", offId: "dynamic-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  ];

  const submitHandler = (data: any) => {
    
    dispatch(addClaimTypesData(data) as any).then((res: any) => {
      dispatch(fetchClaimTypesData() as any);
    });
    setClaimsData({
      name: '',
      required: false,
      isStatic: false,
      regex: '',
      regexDescription: '',
      description: '',
      valueType: '',
      valueTypeAsString: '',
    })
    setAlertOne(true);
  };
  const valueType = [
    { option: 'String', value: 0 },
    { option: 'Int', value: 1 },
    { option: 'Boolean', value: 2 },
    { option: 'DateTime', value: 3 },
  ]

  const onEditHandler = (editClaimData: any) => {
    
    const dTo = {
      id: claimTypesId,
      claimTypeDto: editClaimData,
    };
    dispatch(
      editClaimTypesData(dTo) as any
    ).then((res: any) => {
      dispatch(fetchClaimTypesData() as any).then((res: any) => {
        dispatch(fetchClaimTypesData() as any);
      });
    });
    setAlertOne(true);
  };

  return (
    <div>
      {alert.showAlert && alertOne && (
        <RdsAlert
          alertmessage={alert.message}
          colorVariant={alert.success ? "success" : "danger"}
          style={{ marginBottom: "0" }}
        ></RdsAlert>
      )}
      <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <div className="d-flex justify-content-between">
          <div className="h5">Claim Type</div>
          <div>
            <RdsOffcanvas
              canvasTitle={t("New Claim Type")}
              onclick={offCanvasHandler}
              placement="end"
              
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
                claimsData={claimsData}
                valueType={valueType}
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
          <RdsOffcanvas
            canvasTitle="EDIT EDITION"
            onclick={offCanvasHandler}
            placement="end"
            offId="dynamic-edit-off"
            
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
          >
            <RdsCompNewClaimType
              claimsData={editClaimData}
              valueType={valueType}
              onSubmit={onEditHandler}
            ></RdsCompNewClaimType>
          </RdsOffcanvas>
        </div>
      </div>
    </div>
  );
};

export default ClaimType;
