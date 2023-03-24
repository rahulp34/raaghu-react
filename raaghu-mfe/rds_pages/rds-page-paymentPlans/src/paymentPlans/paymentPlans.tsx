import React, { useState, useEffect } from "react";
import { RdsButton, RdsInput, RdsLabel, RdsOffcanvas, RdsTextArea } from "../../../../../raaghu-elements/src";
import { useAppDispatch, useAppSelector } from "../../../../libs/state-management/hooks";
import { createGatewayPlan, createNewPlan, deleteGatewayPlan, deletePlan, getAllGatewayPlansByPlanId, getAllPaymentPlans, getPlanById, updateGatewayPlan, updatePlan } from "../../../../libs/state-management/payment-plans/paymentPlans-slice";
import { RdsCompAlertPopup, RdsCompDatatable } from "../../../rds-components";

const PaymentPlans = () => {

  // Constants / Variables =============
  const tableHeadersPlans = [
    { displayName: "Name", key: "name", datatype: "text", dataLength: 30, required: true, sortable: false },
  ];
  const tableHeadersGatewayPlans = [
    { displayName: "Gateway", key: "gateway", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "External Id", key: "externalId", datatype: "text", dataLength: 30, required: true, sortable: false }
  ];

  const [actions, setActions] = useState([
    { id: "edit", displayName: "Edit", offId: "paymentPlans" },
    { id: "delete", displayName: "Delete", modalId: "delete" },
    { id: "manageGatewayPlans", displayName: "Manage Gateway Plans" },
  ]);

  // Use States ================
  const [plansTableData, setPlansTableData] = useState([
    { name: 'Test Plan' }
  ]);
  const [gatewayTableData, setGatewayTableData] = useState([]);
  const [canvasTitle, setCanvasTitle] = useState('Create New Payment Plans');
  const [paymentPlansObj, setPaymentPlansObj] = useState({ id: '', name: '', concurrencyStamp: '' });
  const [gatewayPlansObj, setGatewayPlansObj] = useState({ planId: '', gateway: '', externalId: '' });
  const [managePlan, setManagePlan] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<any>({});

  // dispatch and selectores for API calling ===============
  const dispatch = useAppDispatch();
  const paymentPlans = useAppSelector((state) => state.persistedReducer.paymentPlans);

  // Use Effects ==================
  useEffect(() => {
    dispatch(getAllPaymentPlans({ filter: undefined, sorting: undefined, cancelToken: undefined }));
    const item = { planId: 'fdd60537-48a6-1530-796c-3a0a10df34cf', filter: undefined, sorting: undefined, skipCount: 0, maxResultCount: 1000, cancelToken: undefined };
    dispatch(getAllGatewayPlansByPlanId(item));
  }, [dispatch]);

  // Get all alogs API
  useEffect(() => {
    if (paymentPlans.allPaymentPlans.items) {
      const allData = paymentPlans.allPaymentPlans.items.map((plan: any) => ({
        id: plan.id,
        name: plan.name,
        concurrencyStamp: plan.concurrencyStamp
      }));
      setPlansTableData(allData);
    }
  }, [paymentPlans.allPaymentPlans])

  // Get selected paymentPlans API
  useEffect(() => {
    if (paymentPlans.paymentPlan) {
      setPaymentPlansObj({
        id: paymentPlans.paymentPlan.id,
        name: paymentPlans.paymentPlan.name,
        concurrencyStamp: paymentPlans.paymentPlan.concurrencyStamp,
      });
    }
  }, [paymentPlans.paymentPlan])

  // Get all gateway plans
  useEffect(() => {
    if (paymentPlans.allGatewayPlans) {
      const allGatewayData = paymentPlans.allGatewayPlans.items.map((gateway: any) => ({
        planId: gateway.planId,
        gateway: gateway.gateway,
        externalId: gateway.externalId
      }));
      setGatewayTableData(allGatewayData);
    }
  }, [paymentPlans.allGatewayPlans])

  // Functions ================
  // Create New Plan
  function createpaymentPlansFn(event: any) {
    event.preventDefault();
    setIsEdit(false);
    setPaymentPlansObj({ id: '', name: '', concurrencyStamp: '' });
    setGatewayPlansObj({ planId: '', gateway: '', externalId: '' });
    setCanvasTitle(managePlan ? 'Create New Plan' : 'Create New Gateway Plan');
  }

  // On action selection from data table
  function onActionSelection(data: any, actionId: any) {
    setPaymentPlan(data);
    if (managePlan) {
      if (actionId === 'edit') {
        dispatch(getPlanById({ id: data.id }));
        setIsEdit(true);
        setCanvasTitle('Edit Plan');
      } else if (actionId === 'manageGatewayPlans') {
        dispatch(getAllGatewayPlansByPlanId({ planId: data.id }));
        setManagePlan(false);
        setActions([
          { id: "edit", displayName: "Edit", offId: "paymentPlans" },
          { id: "delete", displayName: "Delete", modalId: "delete" },
        ]);
      }
    } else {
      if (actionId === 'edit') {
        setGatewayPlansObj({ planId: 'fdd60537-48a6-1530-796c-3a0a10df34cf', gateway: paymentPlan.gateway, externalId: data.externalId });
        setIsEdit(true);
        setCanvasTitle('Edit Gateway Plan');
      }
    }
  }

  // Save / Update Payment Plans and Gateway Plans
  function saveUpdatePaymentPlans(event: any) {
    event.preventDefault();
    if (managePlan) {
      const body = { filter: undefined, sorting: undefined, cancelToken: undefined };
      if (isEdit) {
        const data = { id: paymentPlansObj.id, body: { name: paymentPlansObj.name } };
        dispatch(updatePlan(data)).then(() => dispatch(getAllPaymentPlans(body)));
        setIsEdit(false);
      } else {
        const data = { body: { name: paymentPlansObj.name } };
        dispatch(createNewPlan(data)).then(() => dispatch(getAllPaymentPlans(body)));
        setIsEdit(false);
      }
    } else {
      if (isEdit) {
        const data = {
          id: 'fdd60537-48a6-1530-796c-3a0a10df34cf',
          gateway: paymentPlan.gateway,
          body: {
            gateway: gatewayPlansObj.gateway,
            externalId: gatewayPlansObj.externalId,
            planId: 'fdd60537-48a6-1530-796c-3a0a10df34cf'
          }
        };
        const item = { planId: 'fdd60537-48a6-1530-796c-3a0a10df34cf', filter: undefined, sorting: undefined, skipCount: 0, maxResultCount: 1000, cancelToken: undefined };
        dispatch(updateGatewayPlan(data)).then(() => dispatch(getAllGatewayPlansByPlanId(item)));
        setIsEdit(false);
      } else {
        const data = {
          body: {
            gateway: gatewayPlansObj.gateway,
            externalId: gatewayPlansObj.externalId,
            // planId: gatewayPlansObj.planId
            planId: 'fdd60537-48a6-1530-796c-3a0a10df34cf'
          }
        };
        const item = { planId: 'fdd60537-48a6-1530-796c-3a0a10df34cf', filter: undefined, sorting: undefined, skipCount: 0, maxResultCount: 1000, cancelToken: undefined };
        dispatch(createGatewayPlan(data)).then(() => dispatch(getAllGatewayPlansByPlanId(item)));
        setIsEdit(false);
      }

    }
    setPaymentPlansObj({ id: '', name: '', concurrencyStamp: '' });
    setGatewayPlansObj({ planId: '', gateway: '', externalId: '' });
  }

  // Delete paymentPlans confirmation popup
  function confirmDelete() {
    if (managePlan) {
      const data = { id: paymentPlan.id };
      const body = { filter: undefined, sorting: undefined, cancelToken: undefined };
      dispatch(deletePlan(data)).then(() => dispatch(getAllPaymentPlans(body)));
    } else {
      // const data = { body: { planId: paymentPlan.id, gateway: paymentPlan.gateway } };
      const data = { planId: 'fdd60537-48a6-1530-796c-3a0a10df34cf', gateway: paymentPlan.gateway };
      const item = { planId: 'fdd60537-48a6-1530-796c-3a0a10df34cf', filter: undefined, sorting: undefined, skipCount: 0, maxResultCount: 1000, cancelToken: undefined };
      dispatch(deleteGatewayPlan(data)).then(() => dispatch(getAllGatewayPlansByPlanId(item)));
    }
  }

  // On Offcanvas Cancel
  function onCancelOffcanvas(event: any) {
    event.preventDefault();
    setPaymentPlansObj({ id: '', name: '', concurrencyStamp: '' });
    setGatewayPlansObj({ planId: '', gateway: '', externalId: '' });
  }

  // DOM
  return (
    <>
      <div className="row">
        <div className="d-flex">
          <div className="ms-auto">
            <RdsOffcanvas canvasTitle={canvasTitle} placement="end" offcanvaswidth={600} onClose={(event) => setPaymentPlansObj({ id: '', name: '', concurrencyStamp: '' })}
              offcanvasbutton={
                <div className="d-flex justify-content-end">
                  <RdsButton icon="plus" label={managePlan ? "Create New Plan" : "Create New Gateway Plan"} iconColorVariant="light" iconHeight="15px" iconWidth="15px"
                    iconFill={false} iconStroke={true} block={false} size="small" type="button" colorVariant="primary" onClick={createpaymentPlansFn}>
                  </RdsButton>
                </div>
              }
              backDrop={false} scrolling={false} preventEscapeKey={false} offId={"paymentPlans"}>
              <form>
                {
                  managePlan ? (
                    <>
                      <div className="form-group">
                        <RdsInput inputType="text" required={true} label={"Name"} value={paymentPlansObj.name} placeholder={"Enter Name"}
                          onChange={(event) => setPaymentPlansObj({ ...paymentPlansObj, name: event.target.value })}
                        ></RdsInput>
                      </div>
                    </>
                  ) : (
                    <>
                      {canvasTitle !== 'Edit Gateway Plan' &&
                        <div className="form-group">
                          <RdsInput inputType="text" required={true} label={"Gateway"} value={gatewayPlansObj.gateway} placeholder={"Enter Gateway"}
                            onChange={(event) => setGatewayPlansObj({ ...gatewayPlansObj, gateway: event.target.value })}
                          ></RdsInput>
                        </div>
                      }
                      <div className="form-group">
                        <RdsInput inputType="text" required={true} label={"External Id"} value={gatewayPlansObj.externalId} placeholder={"Enter External Id"}
                          onChange={(event) => setGatewayPlansObj({ ...gatewayPlansObj, externalId: event.target.value })}
                        ></RdsInput>
                      </div>
                    </>
                  )
                }
                <div className="footer-buttons mb-2 d-flex">
                  <RdsButton class="me-2" tooltipTitle={""} type={"button"} label="Cancel" colorVariant="outline-primary"
                    size="small" databsdismiss="offcanvas" onClick={(event) => onCancelOffcanvas(event)}
                  ></RdsButton>
                  <RdsButton class="me-2" label={canvasTitle === 'Create New Plan' || canvasTitle === 'Create New Gateway Plan' ? 'Save' : 'Update'}
                    size="small" colorVariant="primary" tooltipTitle={""} type={"submit"} databsdismiss="offcanvas"
                    onClick={(event) => saveUpdatePaymentPlans(event)}
                  ></RdsButton>
                </div>
              </form>
            </RdsOffcanvas>
          </div>
        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
          <RdsCompDatatable tableHeaders={managePlan ? tableHeadersPlans : tableHeadersGatewayPlans} tableData={managePlan ? plansTableData : gatewayTableData} pagination={false} actions={actions}
            onActionSelection={onActionSelection} classes="table" recordsPerPageSelectListOption={true} 
            recordsPerPage={5} noDataTitle={'No Plans Available'}></RdsCompDatatable>
        </div>
      </div>
      <RdsCompAlertPopup alertID="delete" onSuccess={confirmDelete} />
    </>
  );
};

export default PaymentPlans;
