import React, { useState, useEffect } from "react";
import {
  RdsButton,
  RdsInput,
  RdsLabel,
  RdsOffcanvas,
  RdsSearch,
  RdsSelectList,
  RdsTextArea,
} from "../../../../../raaghu-elements/src";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import { RdsCompAlertPopup, RdsCompDatatable } from "../../../rds-components";
import RdsDatepicker from "../../../../../raaghu-elements/src/rds-datepicker";
import { getAllPaymentRequests } from "../../../../libs/state-management/payment-requests/paymentRequests-slice";
import { format, parseISO } from "date-fns";

const PaymentRequests = () => {
  // Constants / Variables =============
  const tableHeadersProducts = [
    {
      displayName: "Code",
      key: "code",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Name",
      key: "name",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Count",
      key: "count",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Unit Price",
      key: "unitPrice",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Total Price",
      key: "totalPrice",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Payment Type",
      key: "paymentType",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
  ];
  const tableHeaders = [
    {
      displayName: "Creation Time",
      key: "creationTime",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Total Price",
      key: "totalPrice",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Currency",
      key: "currency",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "State",
      key: "state",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Gateway",
      key: "gateway",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "External Subscription Id",
      key: "externalSubscriptionId",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
  ];
  const actions = [
    { id: "products", displayName: "Products", offId: "paymentRequests" },
  ];
  const paymentTypes: any[] = [
    { id: 1, value: 0, option: "OneTime" },
    { id: 2, value: 1, option: "Subscription" },
  ];

  const status: any[] = [
    { id: 1, value: 0, option: "Waiting" },
    { id: 2, value: 1, option: "Completed" },
    { id: 3, value: 2, option: "Failed" },
    { id: 4, value: 3, option: "Refunded" },
  ];
  const canvasTitle: string = "Products";

  // Use States ================
  const [tableData, setTableData] = useState([]);
  const [tableDataProducts, setTableDataProducts] = useState([]);
  const [filterParameters, setFilterParameters] = useState({
    filter: undefined,
    creationDateMax: "",
    creationDateMin: "",
    paymentType: undefined,
    status: undefined,
    sorting: "",
    skipCount: undefined,
    maxResultCount: undefined,
  });

  // dispatch and selectores for API calling ===============
  const dispatch = useAppDispatch();
  const paymentRequests = useAppSelector(
    (state) => state.persistedReducer.paymentRequests
  );

  // Use Effects ==================
  useEffect(() => {
    const data = {
      filter: undefined,
      creationDateMax: undefined,
      creationDateMin: undefined,
      paymentType: undefined,
      status: undefined,
      sorting: undefined,
      skipCount: 0,
      maxResultCount: 1000,
    };
    dispatch(getAllPaymentRequests(data));
  }, [dispatch]);

  useEffect(() => {
    if (paymentRequests.allPaymentRequests.items !== undefined) {
      const data = paymentRequests.allPaymentRequests.items.map(
        (payment: any) => ({
          id: payment.id,
          creationTime: format(
            new Date(payment.creationTime),
            "yyyy/dd/MM, HH:MM a"
          ),
          totalPrice: payment.totalPrice,
          currency: payment.currency,
          state: payment.state,
          gateway: payment.gateway,
          externalSubscriptionId: payment.externalSubscriptionId,
          products: payment.products.map((x: any) => ({
            ...x,
            paymentType:
              x.paymentType === 0
                ? "OneTime"
                : x.paymentType === 1
                  ? "Subscription"
                  : x.paymentType,
          })),
        })
      );
      setTableData(data);
    }
  }, [paymentRequests.allPaymentRequests]);
  function onDatePicker(startEndDate: any) {

    const [start, end] = startEndDate;
    setFilterParameters({
      ...filterParameters,
      creationDateMax: start.toISOString(),
      creationDateMin: end.toISOString(),
    });
  }
  // DOM
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="card p-3 border-0 rounded-0 card-full-stretch-wthlabel mt-3">
          <form>
            <div className="d-flex  mb-3 row">
              <div className="col-md-4 form-group">
                <RdsDatepicker DatePickerLabel="Creation Time"
                  type="advanced"
                  onDatePicker={(s: any) => onDatePicker(s)}
                  selectedDate={filterParameters.creationDateMin}
                  customDate={onDatePicker}
                ></RdsDatepicker>

              </div>
              <div className="col-md-4 form-group">
                <div className="mb-2">
                  <RdsLabel label={"Payment Type"}></RdsLabel>
                </div>
                <RdsSelectList
                  label={"Payment Type"}
                  placeholder={"Payment Type"}
                  selectItems={paymentTypes}
                  selectedValue={filterParameters.paymentType}
                  onSelectListChange={(value: any) =>
                    dispatch(
                      getAllPaymentRequests({
                        ...filterParameters,
                        paymentType: value,
                      })
                    )
                  }
                ></RdsSelectList>
              </div>
              <div className="col-md-4 form-group">
                <div className="mb-2">
                  <RdsLabel label={"Status"}></RdsLabel>
                </div>
                <RdsSelectList
                  label={"Status"}
                  placeholder={"Status"}
                  selectItems={status}
                  selectedValue={filterParameters.status}
                  onSelectListChange={(value: any) =>
                    dispatch(
                      getAllPaymentRequests({
                        ...filterParameters,
                        status: value,
                      })
                    )
                  }
                ></RdsSelectList>
              </div>
            </div>
            <div>
              <RdsSearch
                placeholder={"Search"}
                size={""}
                onChange={(event: any) =>
                  setFilterParameters({
                    ...filterParameters,
                    filter: event.target.value,
                  })
                }
                onSearchClick={() =>
                  dispatch(getAllPaymentRequests(filterParameters))
                }
              ></RdsSearch>
            </div>
          </form>
          <RdsCompDatatable
            actionPosition="right"
            tableHeaders={tableHeaders}
            tableData={tableData}
            pagination={false}
            actions={actions}
            onActionSelection={(event) => setTableDataProducts(event.products)}
            classes="table"
            recordsPerPageSelectListOption={true}
            recordsPerPage={5}
            noDataTitle={"No Payment Requests Available"}
          ></RdsCompDatatable>
          <RdsOffcanvas
            canvasTitle={canvasTitle}
            placement="end"
            offcanvaswidth={650}
            onClose={() => function () { }}
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
            offId={"paymentRequests"}
          >
            <RdsCompDatatable
              actionPosition="right"
              tableHeaders={tableHeadersProducts}
              tableData={tableDataProducts}
              pagination={false}
              classes="table"
              recordsPerPageSelectListOption={true}
              recordsPerPage={5}
              noDataTitle={"No Products Available"}
            ></RdsCompDatatable>
          </RdsOffcanvas>
        </div>
      </div>
    </>
  );
};

export default PaymentRequests;
