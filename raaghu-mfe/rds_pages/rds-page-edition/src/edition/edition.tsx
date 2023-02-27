import React, { useEffect, useState } from "react";
//import axios from "axios";
import {
  RdsCompEditionList,
  RdsCompEditionInformation,
  RdsCompPermissionTree,
  RdsCompAlertPopup,
  RdsCompDatatable,
} from "../../../rds-components";
import {
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
  RdsIcon,
  RdsInput,
  RdsAlert,
} from "../../../rds-elements";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";
import { useTranslation } from "react-i18next";

// import { useAppDispatch } from "../../../../libs/state-management/index"
import {
  fetchEditionData,
  deleteEditionData,
  addEditionData,
  editEditionData,
} from "../../../../libs/state-management/edition/edition-slice";
interface RdsPageEditionProps {}
const Edition = (props: RdsPageEditionProps) => {
  const [tableDataRowid, setTableDataRowId] = useState(0);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState({
    showAlert: false,
    message: "",
    success: false,
  });

  const { t } = useTranslation();
  const [Data, setData] = useState<any>([]);
  const editionuser = useAppSelector((state) => state.persistedReducer.edition) as any;
  const dispatch = useAppDispatch();
  const [val, setVal] = useState("");
  const [alertOne, setAlertOne] = useState(false);

  useEffect(() => {
    dispatch(fetchEditionData() as any);
  }, [dispatch]);

  useEffect(() => {
    if (editionuser.users?.items) {
      const tempData = editionuser.users.items.map((item: any) => {
        return {
          id: item.id,
          name: item.displayName,
        };
      });
      console.log(" tempData ", tempData);
      setData(tempData);
    }
  }, [editionuser.users]);

  useEffect(() => {
    setAlert({
      showAlert: editionuser.alert,
      message: editionuser.alertMessage,
      success: editionuser.success,
    });
    setTimeout(() => {
      setAlert({
        showAlert: false,
        message: "",
        success: false,
      });
    }, 2000);
  }, [editionuser.users]);

  const onActionSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    setTableDataRowId(tableDataRowIndex);
    if (action.displayName === "Edit") {
      setVal(tableDataRow.name);
    }
  };

  const deleteHandler = () => {
    dispatch(deleteEditionData(tableDataRowid) as any).then((res: any) => {
      dispatch(fetchEditionData() as any);
    });
    setAlertOne(true);
  };

  const dTo = {
    displayName: value,
  };

  const addDataHandler = () => {
    dispatch(addEditionData(dTo) as any).then((res: any) => {
      dispatch(fetchEditionData() as any);
    });
    setValue("");
    setAlertOne(true);
  };

  const editDataHandler = () => {
    const dTo = {
      displayName: val,
    };
    dispatch(editEditionData({ id: tableDataRowid, dTo: dTo }) as any).then(
      (res: any) => {
        dispatch(fetchEditionData() as any);
      }
    );
    setVal("");
    setAlertOne(true);
  };

  const tableHeaders = [
    {
      displayName: t("Edition Name"),
      key: "name",
      datatype: "text",
    },
  ];

  const actions = [
    { id: "edit_offcanvas", displayName: "Edit", offId: "dynamic-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  ];
  const offCanvasHandler = () => {};

  return (
    <div className="tenant">
      <div className="row align-items-center">
        <div className="col-lg-8 col-md-8">
          {alert.showAlert && alertOne && (
            <RdsAlert
              alertmessage={alert.message}
              colorVariant={alert.success ? "success" : "danger"}
              style={{ marginBottom: "0" }}
            ></RdsAlert>
          )}
        </div>
        <div className="col-lg-4 col-md-4">
          <RdsOffcanvas
            canvasTitle="NEW EDITION"
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={830}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  icon="plus"
                  iconColorVariant="light"
                  size="small"
                  type="button"
                  block={false}
                  iconHeight="15px"
                  iconWidth="15px"
                  iconFill={false}
                  iconStroke={true}
                  colorVariant="primary"
                  label="NEW EDITION"
                />
              </div>
            }
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
            offId={"Edition"}
          >
            <div>
              <RdsInput
                size="medium"
                inputType="text"
                placeholder="Add Placeholder"
                label="Label"
                labelPositon="top"
                id=""
                value={value}
                required={true}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              ></RdsInput>
              <div className="d-flex footer">
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
                  isDisabled={value === ""}
                  colorVariant="primary"
                  class="me-2"
                  onClick={addDataHandler}
                ></RdsButton>
              </div>
            </div>
          </RdsOffcanvas>
        </div>
      </div>
      <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          tableHeaders={tableHeaders}
          actions={actions}
          tableData={Data!}
          pagination={true}
          recordsPerPage={10}
          onActionSelection={onActionSelection}
          recordsPerPageSelectListOption={true}
        ></RdsCompDatatable>
        <RdsCompAlertPopup
          alertID="dynamic_delete_off"
          onSuccess={deleteHandler}
        />

        <RdsOffcanvas
          canvasTitle="NEW EDITION"
          onclick={offCanvasHandler}
          placement="end"
          offId="dynamic-edit-off"
          offcanvaswidth={830}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
          <RdsInput
            size="medium"
            inputType="text"
            placeholder="Add Placeholder"
            label="Label"
            labelPositon="top"
            id=""
            value={val}
            required={true}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          ></RdsInput>
          <div className="d-flex">
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
              isDisabled={val === ""}
              colorVariant="primary"
              class="me-2"
              onClick={editDataHandler}
            ></RdsButton>
          </div>
        </RdsOffcanvas>
      </div>
    </div>
  );
};
export default Edition;
