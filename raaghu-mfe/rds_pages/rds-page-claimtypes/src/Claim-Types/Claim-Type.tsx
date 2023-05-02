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

  const [Alert, setAlert] = useState({ show: false, message: "", color: "" });

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
                <div>
                  <RdsIcon
                    name="check"
                    height="17px"
                    width="15px"
                    colorVariant="success"
                    strokeWidth="2px"
                  />
                </div>
              ) : (
                <div>
                  <RdsIcon
                    name="cancel"
                    height="17px"
                    width="15px"
                    colorVariant="danger"
                    strokeWidth="2px"
                  />
                </div>
              )}
            </>
          ),
          required: (
            <>
              {item.required == true ? (
                <div>
                  <RdsIcon
                    name="check"
                    height="17px"
                    width="15px"
                    colorVariant="success"
                    strokeWidth="2px"
                  />
                </div>
              ) : (
                <div>
                  <RdsIcon
                    name="cancel"
                    height="17px"
                    width="15px"
                    colorVariant="danger"
                    strokeWidth="2px"
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
      if (res.type == "claimTypes/deleteClaimTypesData/rejected") {
        setAlert({
          ...Alert,
          show: true,
          message: "your request has been denied",
          color: "danger",
        });
      } else {
        setAlert({
          ...Alert,
          show: true,
          message: "Claim Type deleted Successfully",
          color: "success",
        });
      }
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
      datatype: "text",
    },
    {
      displayName: t("Static"),
      key: "static",
      datatype: "text",
    },
  ];

  const actions = [
    { id: "editClaim", displayName: "Edit", offId: "claimType-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "claimType-delete-off" },
  ];

  const submitHandler = (data: any) => {
    
    dispatch(addClaimTypesData(data) as any).then((res: any) => {
      if (res.type == "claimTypes/addClaimTypesData/rejected") {
        setAlert({
          ...Alert,
          show: true,
          message: "your request has been denied",
          color: "danger",
        });
      } else {
        setAlert({
          ...Alert,
          show: true,
          message: "Claim Type added Successfully",
          color: "success",
        });
      }
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
      if (res.type == "claimTypes/editClaimTypesData/rejected") {
        setAlert({
          ...Alert,
          show: true,
          message: "your request has been denied",
          color: "danger",
        });
      } else {
        setAlert({
          ...Alert,
          show: true,
          message: "Claim Type edited Successfully",
          color: "success",
        });
      }
      dispatch(fetchClaimTypesData() as any)
    });
  };
  useEffect(() => {
    // Set a 3-second timer to update the state
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 2000);

    // Clean up the timer when the component unmounts or when the state changes
    return () => clearTimeout(timer);
  }, [claimTypesUser]);

  return (
    <div className="container-fluid p-0 m-0">
    <div className="row">
    <div className="col-md-12 mb-3 ">
      <div className="row ">
        <div className="col-md-4">
          {Alert.show && (
          <RdsAlert
          alertmessage={Alert.message}
          colorVariant={Alert.color}
        ></RdsAlert>
    )}  
    </div>
    <div className="col-md-8 d-flex justify-content-end ">
    <RdsOffcanvas
        canvasTitle={t("New Claim Type")}
        onclick={offCanvasHandler}
        placement="end"
        
        offcanvasbutton={
          <div className="d-flex justify-content-end my-1">
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
              showLoadingSpinner={true}
              colorVariant="primary"
            ></RdsButton>
          </div>
        }
        backDrop={true}
        scrolling={false}
        preventEscapeKey={false}
        offId={"claimType-add-off"}
      >
        <RdsCompNewClaimType
          claimsData={claimsData}
          valueType={valueType}
          onSubmit={submitHandler}
        ></RdsCompNewClaimType>
      </RdsOffcanvas>
    </div>
  </div>
</div></div>
<div className="row">
<div className="col-md-12">
  <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
  <RdsCompDatatable 
   actionPosition="right"
      tableHeaders={tableHeaders}
      actions={actions}
      tableData={Data!}
      pagination={true}
      recordsPerPage={10}
      recordsPerPageSelectListOption={true}
      onActionSelection={onActionSelection}
    ></RdsCompDatatable>
    <RdsCompAlertPopup
      alertID="claimType-delete-off"
      onSuccess={DeleteHandler}
    />
    <RdsOffcanvas
      canvasTitle="Edit Claim type"
      onclick={offCanvasHandler}
      placement="end"
      offId="claimType-edit-off"
      
      backDrop={true}
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
</div>
  );
};

export default ClaimType;
