import React, { Suspense } from "react";
// import { store } from "../../../libs/state-management/index";
import Language from "./language/language";
// import {
//   useAppDispatch,
//   useAppSelector,
// } from "../../../libs/state-management/hooks";
// import { fetchLanguages } from "../../../libs/state-management/language/language-slice";
// import { RdsBadge, RdsIcon } from "../../rds-elements";



// const tableHeaders = [
//   {
//     displayName: "Language",
//     key: "languageName",
//     datatype: "text",
//     sortable: true,
//   },
//   {
//     displayName: "Display Name",
//     key: "code",
//     datatype: "text",
//     sortable: true,
//   },
//   {
//     displayName: "Country",
//     key: "creationTime",
//     datatype: "children",
//     sortable: true,
//   },
//   {
//     displayName: "Status",
//     key: "isenabled",
//     datatype: "children",
//     sortable: true,
//   },
// ];
// [
  
//   {id: 1, languageName: 'India', code: 'IND', isenabled: {
//   children: (
//     <>
//       { "False" ? (
//         <RdsIcon
//           name="close"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//           colorVariant="danger"
//         ></RdsIcon>
//       ) : (
//         <RdsIcon
//           name="tick"
//           colorVariant="success"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//         ></RdsIcon>
//       )}
//     </>
//   ),
// }, creationTime: {
//   children: (
//     <>
//       { "False" ? (
//         <RdsIcon
//           name="close"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//           colorVariant="danger"
//         ></RdsIcon>
//       ) : (
//         <RdsIcon
//           name="tick"
//           colorVariant="success"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//         ></RdsIcon>
//       )}
//     </>
//   ),
// }, },
// { id: 3,languageName: 'India', code: 'IND', isenabled: {
//   children: (
//     <>
//       { "False" ? (
//         <RdsIcon
//           name="close"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//           colorVariant="danger"
//         ></RdsIcon>
//       ) : (
//         <RdsIcon
//           name="tick"
//           colorVariant="success"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//         ></RdsIcon>
//       )}
//     </>
//   ),
// }, creationTime: {
//           children: (
//             <>
//               { "False" ? (
//                 <RdsIcon
//                   name="close"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                   colorVariant="danger"
//                 ></RdsIcon>
//               ) : (
//                 <RdsIcon
//                   name="tick"
//                   colorVariant="success"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                 ></RdsIcon>
//               )}
//             </>
//           ),
//         },},
// { id: 2,languageName: 'India', code: 'IND', isenabled: {
//   children: (
//     <>
//       { "False" ? (
//         <RdsIcon
//           name="close"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//           colorVariant="danger"
//         ></RdsIcon>
//       ) : (
//         <RdsIcon
//           name="tick"
//           colorVariant="success"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//         ></RdsIcon>
//       )}
//     </>
//   ),
// }, creationTime: {
//           children: (
//             <>
//               { "False" ? (
//                 <RdsIcon
//                   name="close"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                   colorVariant="danger"
//                 ></RdsIcon>
//               ) : (
//                 <RdsIcon
//                   name="tick"
//                   colorVariant="success"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                 ></RdsIcon>
//               )}
//             </>
//           ),
//         },},
// { id: 4,languageName: 'India', code: 'IND', isenabled: {
//   children: (
//     <>
//       { "False" ? (
//         <RdsIcon
//           name="close"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//           colorVariant="danger"
//         ></RdsIcon>
//       ) : (
//         <RdsIcon
//           name="tick"
//           colorVariant="success"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//         ></RdsIcon>
//       )}
//     </>
//   ),
// }, creationTime:{
//           children: (
//             <>
//               { "False" ? (
//                 <RdsIcon
//                   name="close"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                   colorVariant="danger"
//                 ></RdsIcon>
//               ) : (
//                 <RdsIcon
//                   name="tick"
//                   colorVariant="success"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                 ></RdsIcon>
//               )}
//             </>
//           ),
//         }, },
// { id: 5,languageName: 'India', code: 'IND', isenabled: {
//   children: (
//     <>
//       { "False" ? (
//         <RdsIcon
//           name="close"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//           colorVariant="danger"
//         ></RdsIcon>
//       ) : (
//         <RdsIcon
//           name="tick"
//           colorVariant="success"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//         ></RdsIcon>
//       )}
//     </>
//   ),
// }, creationTime:{
//           children: (
//             <>
//               { "False" ? (
//                 <RdsIcon
//                   name="close"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                   colorVariant="danger"
//                 ></RdsIcon>
//               ) : (
//                 <RdsIcon
//                   name="tick"
//                   colorVariant="success"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                 ></RdsIcon>
//               )}
//             </>
//           ),
//         }, },
// { id: 6,languageName: 'India', code: 'IND', isenabled: {
//   children: (
//     <>
//       { "False" ? (
//         <RdsIcon
//           name="close"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//           colorVariant="danger"
//         ></RdsIcon>
//       ) : (
//         <RdsIcon
//           name="tick"
//           colorVariant="success"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//         ></RdsIcon>
//       )}
//     </>
//   ),
// }, creationTime:{
//           children: (
//             <>
//               { "False" ? (
//                 <RdsIcon
//                   name="close"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                   colorVariant="danger"
//                 ></RdsIcon>
//               ) : (
//                 <RdsIcon
//                   name="tick"
//                   colorVariant="success"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                 ></RdsIcon>
//               )}
//             </>
//           ),
//         }, },
// { id: 7,languageName: 'India', code: 'IND', isenabled: {
//   children: (
//     <>
//       { "False" ? (
//         <RdsIcon
//           name="close"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//           colorVariant="danger"
//         ></RdsIcon>
//       ) : (
//         <RdsIcon
//           name="tick"
//           colorVariant="success"
//           fill={false}
//           stroke={true}
//           width="24px"
//           height="16px"
//         ></RdsIcon>
//       )}
//     </>
//   ),
// }, creationTime: {
//           children: (
//             <>
//               { "False" ? (
//                 <RdsIcon
//                   name="close"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                   colorVariant="danger"
//                 ></RdsIcon>
//               ) : (
//                 <RdsIcon
//                   name="tick"
//                   colorVariant="success"
//                   fill={false}
//                   stroke={true}
//                   width="24px"
//                   height="16px"
//                 ></RdsIcon>
//               )}
//             </>
//           ),
//         },}];



const App = () => {
  // const data = useAppSelector((state) => state.persistedReducer.language);
  // const [Data, setData] = useState<any>([]);
  // const [Lang, setLang] = useState<any>([]);
  // const [Country, setCountry] = useState<any>([]);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchLanguages() as any);

  //   // .filter(country => country !== '');

  //   // const tempLanguage = Edit.languagesEdit.languageNames.map(
  //   //   (item: any, i) => {
  //   //     if (i !== 0) {
  //   //       return {
  //   //         option: item.displayText,
  //   //         value: item.value,
  //   //         isSelected: item.isSelected,
  //   //       };
  //   //     }
  //   //   }
  //   // );
  //   // const tempLanguageName = tempLanguage.filter((item) => item !== undefined);

  //   // setLang(tempLanguageName);

  //   // console.log("this is response",Edit.languagesEdit.languageNames)

  //   // const tempCountry = Edit.languagesEdit.languageNames.map((item: any, i) => {
  //   //   const str = item.displayText;
  //   //   const startIndex = str.indexOf("(");
  //   //   const endIndex = str.indexOf(")");
  //   //   const name = str.substring(startIndex + 1, endIndex);

  //   //   const text = item.displayText.trim().split(" ")[1];
  //   //   const cleanedText = text.replace(/[\(\)]/g, "");

  //   //   let value;
  //   //   const val =() => {
  //   //     if (item.value.indexOf("-") !== -1) {
  //   //       return (value = item.value.trim().split("-")[1]);
  //   //     } else {
  //   //       return (value = item.value);
  //   //     }
  //   //   };
  //   //   val()
  //   //   console.log(value)

  //   //   if (i !== 0) {
  //   //     return {
  //   //       label: name,
  //   //       val: item.value,
  //   //       icon: value,
  //   //       // isSelected: item.isSelected,
  //   //       iconWidth: "20px",
  //   //       iconHeight: "20px",
  //   //     };
  //   //   }
  //   // });
  //   // console.log("hello", tempCountry);
  //   // const tempCountryName = tempCountry.filter(
  //   //   (item) => item !== undefined
  //   // );
  //   // console.log("without undefined",tempCountryName)

  //   // setCountry(tempCountryName);
  //   const tempData = data.languages.items.map((item: any) => {
      
  //     return {
  //       id: item.id,
  //       languageName: item.displayName,
  //       code: item.cultureName
  //       ,
  //       isenabled: (
  //           <>
  //             {item.isEnabled === "false" ? (
  //               <RdsBadge
  //                 label={"Inactive"}
  //                 size={"medium"}
  //                 badgeType={"rectangle"}
  //                 colorVariant={"danger"}
  //               ></RdsBadge>
  //             ) : (
  //               <RdsBadge
  //                 label={"Active"}
  //                 size={"medium"}
  //                 badgeType={"rectangle"}
  //                 colorVariant={"success"}
  //               ></RdsBadge>
  //             )}
  //           </>),
  //       creationTime: (
  //           <>
  //             {item.flagIcon ? (
  //             <RdsIcon
  //               name={item.flagIcon}
  //               fill={false}
  //               stroke={true}
  //               height="20px"
  //               width="20px"
  //             ></RdsIcon>
  //             ):""}
  //           </>),
  //     };
  //   });
  //   console.log('temp',tempData);
  //   setData(tempData);
  // }, [dispatch]);

  // useEffect(() => {
  //   fetchLanguages();
  //   console.log("hello effect runs");
  //   // const credentials = localStorage.getItem("LoginCredential");
  //   // if (credentials) {
  //   //   var parsedCredentials = JSON.parse(credentials);
  //   // }
  //   // async function getData() {
  //   //   const resp = await axios.get(
  //   //     "https://anzdemoapi.raaghu.io/api/services/app/Language/GetLanguages",
  //   //     {
  //   //       headers: {
  //   //         Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
  //   //       },
  //   //     }
  //   //   );
  //   //   console.log(
  //   //     "hello this is new data ",
  //   //     resp.data.result.items.map((item: any) => ({
  //   //       id: item.id,
  //   //       languageName: item.languageName,
  //   //       code: item.name,
  //   //       isenabled: !item.isDisabled,
  //   //       creationTime: item.creationTime,
  //   //     }))
  //   //   );

  //   //   setData(
  //   //     resp.data.result.items.map((item: any) => {
  //   //       let date = new Date(item.creationTime);
  //   //       let day = date.getDate();
  //   //       let month = date.getMonth() + 1;
  //   //       let year = date.getFullYear();

  //   //       let currentTime = date.toLocaleString("en-IN", {
  //   //         hour: "numeric",
  //   //         minute: "numeric",
  //   //         second: "numeric",
  //   //         hour12: true,
  //   //       });

  //   //       let currentDate = `${day}/${month}/${year}, ${currentTime}`;

  //   //       return {
  //   //         id: item.id,
  //   //         languageName: item.displayName,
  //   //         code: item.name,
  //   //         isenabled: item.isDisabled ? "false" : "true",
  //   //         creationTime: currentDate,
  //   //       };
  //   //     })
  //   //   );
  //   // }
  //   // getData();
  // }, []);

  //   flags : [
  // 		{ option: "ad" },
  // 		{ option: "ae" },
  // 		{ option: "af" },
  // 		{ option: "ag" },
  // 		{ option: "ai" },
  // 	],
  // languageNames :  [
  // 		{ option: "Invariant Language ()" },
  // 		{ option: "Afar (aa)" },
  // 		{ option: "Afar (Djibouti) (aa-DJ)" },
  // 		{ option: "Afar (Eritrea) (aa-ER)" },
  // 		{ option: "Afar (Ethiopia) (aa-ET)" },
  // 		{ option: "Afrikaans (af)" },
  // 		{ option: "Afrikaans (Namibia) (af-NA)" },
  // 		{ option: "Afrikaans (South Africa) (af-ZA)" },
  // 		{ option: "Aghem (agq)" },
  // 		{ option: "Aghem (Cameroon) (agq-CM)" },
  // 		{ option: "Akan (ak)" },
  // 	]

  return (
    <Suspense>
      <Language     
      ></Language>
    </Suspense>
  );
};

export default App;
