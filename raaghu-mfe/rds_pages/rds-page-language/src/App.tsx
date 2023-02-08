import React, { Suspense, useEffect, useState } from "react";
import { store } from "../../../libs/state-management/index";
import Language from "./language/language";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../libs/state-management/hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanguages } from "../../../libs/state-management/language/language-slice";
import { fetchLanguagesEdit } from "../../../libs/state-management/language/languageEdit-slice";

import axios from "axios";
import { RdsBadge, RdsIcon } from "../../rds-elements";

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
  { id: "edit", displayName: "Edit" },
  { id: "changeText", displayName: "Change Texts" },
  { id: "setDefaultLanguage", displayName: "Set as default language" },
  { id: "delete", displayName: "Delete" },
];

const App = () => {
  const data = useAppSelector((state) => state.persistedReducer.language);
  const Edit = useAppSelector((state) => state.persistedReducer.languageEdit);
  const [Data, setData] = useState<any>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLanguages() as any);
    dispatch(fetchLanguagesEdit() as any);
    console.log(data.languages);
    console.log("this is edit data ", Edit.languagesEdit);

    const tempLanguageName = Edit.languagesEdit.languageName.map((item:any)=>)

    const tempData = data.languages.items.map((item: any) => {
      let flag = item.icon.trim().split(" ")[1];
      let country = item.displayName.trim().split(" ")[1];
      console.log(flag);
      return {
        id: item.id,
        languageName: item.displayName.trim().split(" ")[0],
        code: item.name,
        isenabled: {
          children: (
            <>
              {!item.isDisabled ? (
                <RdsBadge
                  label={"Inactive"}
                  size={"medium"}
                  badgeType={"rectangle"}
                  colorVariant={"danger"}
                ></RdsBadge>
              ) : (
                <RdsBadge
                  label={"Active"}
                  size={"medium"}
                  badgeType={"rectangle"}
                  colorVariant={"success"}
                ></RdsBadge>
              )}
            </>
          ),
        },
        creationTime: {
          children: (
            <>
              <RdsIcon
                name={flag}
                fill={false}
                stroke={true}
                height="20px"
                width="20px"
              ></RdsIcon>{" "}
              <div>{}</div>{" "}
            </>
          ),
        },
      };
    });
    setData(tempData);
  }, [dispatch]);

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
        languagetableHeaders={tableHeaders}
        languagetableData={Data}
        actions={actions}
        languageName={[]}
        flags={[]}
      ></Language>
    </Suspense>
  );
};

export default App;
