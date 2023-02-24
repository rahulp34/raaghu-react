import React, { Suspense, useEffect, useState } from "react";
import Tenant from "./tenant/tenant";
//import {fetchTenants} from "../../../libs/state-management/tenant/tenant-slice"

import {
    useAppDispatch,
    useAppSelector,
  } from "../../../libs/state-management/hooks";

// const tableData = [
//  {
//     id: 1,
//     tenant: {
//       avatar:
//         "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
//       title: "Wai Technology",
//       info: "software",
//     },
//     editionName: "Standard",
//     status: { badgeColorVariant: "primary", content: "inactive" },
//     expiry: "23-11-22",
//   },
//   {
//     id: 2,
//     tenant: {
//       avatar:
//         "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
//       title: "Wai Technology",
//       info: "software",
//     },
//     editionName: "apple",
//     status: { badgeColorVariant: "success", content: "active" },
//     expiringEdition: "Standard",
//     expiry: "23-11-22",
//   },
//   {
//     id: 3,
//     tenant: {
//       avatar:
//         "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
//       title: "Wai Technology",
//       info: "software",
//     },
//     editionName: "tesla",
//     status: { badgeColorVariant: "success", content: "active" },
//     expiringEdition: "Standard",
//     expiry: "23-11-22",
//   },
//   ]

const tableHeaders = [
    {
      displayName: "Language",
      key: "languageName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Display Name",
      key: "code",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Country",
      key: "creationTime",
      datatype: "children",
      sortable: true,
    },
    {
      displayName: "Status",
      key: "isenabled",
      datatype: "children",
      sortable: true,
    },
  ];
  const actions = [
    { id: "edit", displayName: "Edit", offId: "Edit" },
    { id: "delete", displayName: "Delete", modalId: "Del" },
  ];

const App = () => {
//   const dispatch = useAppDispatch();
// const data= useAppSelector((state)=> state.persistedReducer.tenant)
// const Edit= useAppSelector((state) =>state.persistedReducer.EditionCombox)
const [Data, setData] = useState<any>([]);
// useEffect(() => {
//   dispatch(fetchEditionTenant() as any);
//   //dispatch(fetchTenants() as any);    
// }, [dispatch]);




return (<Suspense>

    <Tenant></Tenant>

</Suspense>)


};



export default App;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

