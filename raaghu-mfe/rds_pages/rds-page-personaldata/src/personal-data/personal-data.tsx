import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { RdsCompDatatable } from "../../../rds-components";
import { RdsButton } from "../../../../../raaghu-elements/src";
import { useAppDispatch, useAppSelector, } from "../../../../libs/state-management/hooks";
import { deletePersonalData, downloadTokenPersonalData, getPersonalData, requestPersonalData, } from "../../../../libs/state-management/personal-data/personal-data-slice";

const PersonalData = () => {
    // const { t } = useTranslation();
    const [tableDataid, setTableDataRowId] = useState(0);
    const dispatch = useAppDispatch();
    const [personalTableData, setPersonalTableData] = useState<any[]>([{}]);
    //const Data = useAppSelector((state) => state.persistedReducer.personalData) as any;
    const pData = useAppSelector((state) => state.persistedReducer.personalData);

    const tableHeaders = [
        {
            displayName: "Creation Time",
            key: "creationTime",
            datatype: "text",
            sortable: false,
        },
        {
            displayName:"Ready Time",
            key: "readyTime",
            datatype: "text",
            sortable: false,
        },
    ];

    const actions = [
        { id: "download", displayName: "Download" },
    ];

    const personalDataActionSelection = (rowData: any, actionId: any) => {
        setTableDataRowId(rowData.id)
    };

    const Personalpayload = ()=>{
        debugger
        const userId = "e4016d1e-144e-1c57-1057-3a09f1f27599"
        dispatch(getPersonalData(userId) as any);    
        if (pData.personalData) {
            const personalDataTable = pData.personalData.items.map((dataPersonal: any) => {                        
                const dateOne = new Date(dataPersonal.readyTime);
                let dayOne = dateOne.getDate();
                let monthOne = dateOne.getMonth() + 1;
                let yearOne = dateOne.getFullYear();
                let readyTime = dateOne.toLocaleString("en-IN", {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                });
                let readyTimes = `${yearOne}/${monthOne}/${dayOne}` + '\n' + `${readyTime}`;
                const date = new Date(dataPersonal.creationTime);
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let currentTime = date.toLocaleString("en-IN", {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                });                                       
                let currentDate = `${year}/${month}/${day}` + '\n' + `${currentTime}`;
                return {
                    creationTime:currentDate,
                    readyTime: readyTimes,
                };
              }, []);
              setPersonalTableData(personalDataTable);
        }
    }
    
    const downloadTokenPersonalDataPayload = ()=>{
        debugger
          dispatch(downloadTokenPersonalData() as any);    
    }
    

    useEffect(() => {
        Personalpayload();
    }, [dispatch]);


    // useEffect(() => {
    //     const userId = "e4016d1e-144e-1c57-1057-3a09f1f27599"
    //     dispatch(getPersonalData(userId) as any);
    // }, [dispatch]);

    const handlerRequestData = () => {
        dispatch(requestPersonalData() as any);
    };

    const handlerDeletePersonalData = () => {
        dispatch(deletePersonalData() as any);
    };


    useEffect(() => {
        downloadTokenPersonalDataPayload();
    }, [dispatch]);
    

    // useEffect(() => {
    //     if (Array.isArray(Data.personalData)) {
    //         const tempData = Data.personalData?.map((curr: any) => {
    //             return {
    //                 creationTime: curr.creationTime,
    //                 readyTime: curr.readyTime,
    //             };
    //         });
    //         setPersonalTableData({ ...personalTableData, personalTableData: tempData });
    //     }
    // }, [Data.personalTableData]);
    
    return (
        <div>

            <div className="row align-items-center">
                <div className="d-flex justify-content-end">
                    <RdsButton
                        icon="plus"
                        label={("Request Peronal Data") || ""}
                        iconColorVariant="light"
                        iconHeight="15px"
                        iconWidth="15px"
                        iconFill={false}
                        iconStroke={true}
                        block={false}
                        size="small"
                        type="button"
                        colorVariant="primary"
                        onClick={handlerRequestData}
                        class="mx-2"
                    ></RdsButton>
                    <RdsButton
                        icon="plus"
                        label={("Delete Peronal Data") || ""}
                        iconColorVariant="light"
                        iconHeight="15px"
                        iconWidth="15px"
                        iconFill={false}
                        iconStroke={true}
                        block={false}
                        size="small"
                        type="button"
                        colorVariant="danger"
                        onClick={handlerDeletePersonalData}
                    ></RdsButton>
                </div>
            </div>
            <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
                <RdsCompDatatable
                    tableHeaders={tableHeaders}
                    actions={actions}
                    tableData={personalTableData}
                    pagination={true}
                    recordsPerPage={10}
                    recordsPerPageSelectListOption={true}
                    onActionSelection={personalDataActionSelection}
                ></RdsCompDatatable>
            </div>
        </div>

    );
};

export default PersonalData;