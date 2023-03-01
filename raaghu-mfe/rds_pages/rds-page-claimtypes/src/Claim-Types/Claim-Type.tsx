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
  const offCanvasHandler = () => {};
  const [Data, setData] = useState<any>([]);
  const claimTypesUser = useAppSelector(
    (state) => state.persistedReducer.claimTypes.users
  );
  const claimTypeData = useAppSelector(
    (state) => state.persistedReducer.claimTypes
  );
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

  const [name, setName] = useState("");
  const [regex, setRegex] = useState("");
  const [value, setValue] = useState("");
  const [regexDesc, setregexDesc] = useState("");
  const [desc, setDesc] = useState("");

  const onActionSelection = (rowData: any, actionId: any) => {
    setTableDataRowId(rowData.id);
    if (actionId === "editClaim") {
      setName(rowData.name);
      setRegex(rowData.regex);
      setValue(rowData.value);
      setregexDesc(rowData.regexDesc);
      setDesc(rowData.description);
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
      datatype: "children",
    },
  ];

  const actions = [
    { id: "editClaim", displayName: "Edit", offId: "dynamic-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  ];

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
    setAlertOne(true);
  };

  const onEditHandler = () => {
    const dTo = {
      name: name,
      required: true,
      regex: regex,
      regexDescription: regexDesc,
      description: desc,
    };
    dispatch(
      editClaimTypesData({ id: tableDataRowid, claimTypeDto: dTo }) as any
    ).then((res: any) => {
      dispatch(fetchClaimTypesData() as any);
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
              offcanvaswidth={550}
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
          <RdsOffcanvas
            canvasTitle="NEW EDITION"
            onclick={offCanvasHandler}
            placement="end"
            offId="dynamic-edit-off"
            offcanvaswidth={550}
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
          >
            <>
              <div className="row">
                <RdsInput
                  label="Name"
                  value={name}
                  placeholder="Enter  name"
                  required={true}
                  name="name"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <RdsInput
                    label="Regex"
                    value={regex}
                    name="regex"
                    required={true}
                    onChange={(e: any) => {
                      setRegex(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  {" "}
                  <RdsInput
                    label="Value Type"
                    required={true}
                    value={value}
                    name="value"
                    placeholder="Enter a value"
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <RdsInput
                  label="Regex Description"
                  value={regexDesc}
                  name="regexDesc"
                  required={true}
                  onChange={(e: any) => {
                    setregexDesc(e.target.value);
                  }}
                />
              </div>
              <div className="row">
                <RdsInput
                  label="Description"
                  value={desc}
                  required={true}
                  name="desc"
                  onChange={(e: any) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex footer-buttons">
                <RdsButton
                  label="CANCEL"
                  databsdismiss="offcanvas"
                  type={"button"}
                  size="small"
                  isOutline={true}
                  colorVariant="primary"
                  class="me-2"
                ></RdsButton>
                <RdsButton
                  label="SAVE"
                  type={"button"}
                  size="small"
                  databsdismiss="offcanvas"
                  colorVariant="primary"
                  class="me-2"
                  onClick={onEditHandler}
                ></RdsButton>
              </div>
            </>
          </RdsOffcanvas>
        </div>
      </div>
    </div>
  );
};

export default ClaimType;
