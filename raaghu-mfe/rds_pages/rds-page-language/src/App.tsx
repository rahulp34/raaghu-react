import React, { Suspense, useEffect, useState } from "react";
import { store } from "../../../libs/state-management/index";
import Language from "./language/language";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../libs/state-management/hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanguages } from "../../../libs/state-management/language/language-slice";
import { fetchLanguageForEdit } from "../../../libs/state-management/language/languageEdit-slice";
import axios from "axios";
import { RdsIcon } from "../../rds-elements";

const tableHeaders = [
  {
    displayName: "Language Name",
    key: "languageName",
    datatype: "text",
    sortable: true,
  },
  {
    displayName: "Code",
    key: "code",
    datatype: "text",
    sortable: true,
  },
  {
    displayName: "Is Enabled",
    key: "isenabled",
    datatype: "children",
    sortable: true,
  },
  {
    displayName: "Creation Time",
    key: "creationTime",
    datatype: "text",
    sortable: true,
  },
];

const actions = [
  { id: "edit", displayName: "Edit", offId: "editCanvas" },
  { id: "changeText", displayName: "Change Texts" },
  { id: "setDefaultLanguage", displayName: "Set as default language" },
  { id: "delete", displayName: "Delete", modalId: "deleteModal" },
];

const App = () => {
  const [Data, setData] = useState<any>([]);

  const data = useAppSelector((state) => state.persistedReducer.language);
  const dataEdit = useAppSelector(
    (state) => state.persistedReducer.languageEdit
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLanguages() as any);
    dispatch(fetchLanguageForEdit() as any);

    console.log("edit lang ", dataEdit.languagesForEdit);

    const tempData = data.languages.map((item: any) => {
      return {
        id: item.id,
        languageName: item.languageName,
        code: item.code,
        isenabled: {
          children: (
            <>
              {item.isenabled === "False" ? (
                <RdsIcon
                  name="close"
                  fill={false}
                  stroke={true}
                  width="24px"
                  height="16px"
                  colorVariant="danger"
                ></RdsIcon>
              ) : (
                <RdsIcon
                  name="tick"
                  colorVariant="success"
                  fill={false}
                  stroke={true}
                  width="24px"
                  height="16px"
                ></RdsIcon>
              )}
            </>
          ),
        },
        // item.isenabled === "False" ? <div>nothello</div> : <div>hello</div>,
        creationTime: item.creationTime,
      };
    });

    // children: (
    //   <>
    //     Work
    //     <span className="ms-1">
    //       <RdsBadge label={"Default"} colorVariant={"success"}></RdsBadge>{" "}
    //     </span>
    //   </>
    // ),

    console.log(tempData);
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
