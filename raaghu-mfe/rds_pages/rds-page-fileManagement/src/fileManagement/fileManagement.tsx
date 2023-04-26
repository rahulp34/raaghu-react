import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./fileManagement.scss";
import RdsCompDataTable from "../../../../../raaghu-components/src/rds-comp-data-table";
import RdsCompDirectoryList, {
  DirectoryItem,
} from "../../../../../raaghu-components/src/rds-comp-directory-list/rds-comp-directory-list";
import RdsCompFileUploader from "../../../../../raaghu-components/src/rds-comp-fileUploader/rds-comp-fileUploader";
import { RdsCompAlertPopup } from "../../../rds-components";
import {
  RdsAlert,
  RdsBreadcrumb,
  RdsButton,
  RdsIcon,
  RdsIconLabel,
  RdsInput,
  RdsLabel,
  RdsOffcanvas,
  RdsSearch,
} from "../../../../../raaghu-elements/src";
import {
  DeleteFileDescriptor,
  deleteDirectoryDescriptor,
  fetchDirectoryDescriptor,
  fetchEditDirectory,
  fetchSubDirectory,
  infoFileDescriptor,
  moveDirectoryDescriptor,
  moveFileDescriptor,
  saveDirectoryDescriptor,
  updateDirectoryDescriptor,
  uploadFileDescriptor,
  useAppDispatch,
} from "../../../../libs/public.api";
import { useAppSelector } from "../../../../libs/state-management/hooks";
import { size } from "lodash-es";
import RdsCompFileMover from "../../../../../raaghu-components/src/rds-comp-file-mover";

const FileManagement = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const file = useAppSelector((state) => state.persistedReducer.fileManagement);

  const [path, setPath] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [uploadFile, setUploadFile] = useState();
  const [totalFiles, setTotaFiles] = useState<any[]>([]);
  const [uploadFiles, setUploadFiles] = useState<any>([]);
  const [moveNewFolder, setMoveNewFolder] = useState<string>("");
  const [RenameFolder, setRenameFolder] = useState<any>({});
  const [addedFile, setAddedFile] = useState<any>([]);
  const [moveFile, setMoveFile] = useState<any>({});
  const [files, setFiles] = useState([]);
  const[formData,setformData]=useState<any>("")
  const [folderId, setFolderId] = useState<string>("");
  const [datafolderId, setDataFolderId] = useState<string>("");
  const [isDirectory, setDirectory] = useState<string>();
  const [datafolderParentId, setdatafolderParentId] = useState<any>();

  const [directories, setDirectories] = useState<any[]>([
    {
      name: "All",
      path: "/all",
      parentId: null,
      id: null,
      hasChildren: false,
      children: [],
    },
  ]);
  const [tableData, setTableData] = useState<any[]>([]);

  const [breadItems, setbreadCrumItems] = useState<any>([])
  // const [breadItems, setbreadCrumItems] = useState<any>([
  //   {
  //     label: "All",
  //     // id: 1,
  //     //route: "#",
  //   //   disabled: false,
  //   //   icon: "home",
  //   //   iconFill: false,
  //   //   iconstroke: true,
  //   //   iconWidth: "12px",
  //   //   iconHeight: "12px",
  //   //   iconColor: "primary",
  //   //   active: false,
  //   },
  // ]);

  const tableHeaders = [
    {
      displayName: "Name",
      key: "name",
      datatype: "avatarTitleInfo",
      sortable: true,
    },
    {
      displayName: "Size",
      key: "size",
      datatype: "text",
      sortable: true,
    },
  ];
  interface FileOrFolder {
    id: string;
    mimeType?: string;
  }

  useEffect(() => {
    if (file.directoryDescriptor?.items.length) {
      const tempdata = file.directoryDescriptor.items.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          isDirectory: item.isDirectory,
          size: item.size,
        };
      });
      setTableData(tempdata);
      setData(tempdata);
    }
  }, [file.directoryDescriptor]);

  const actions = [
    { id: "rename", displayName: "Rename", offId: "Rename" },
    { id: "delete", displayName: "Delete", modalId: "DeleteFile" },
    { id: "move", displayName: "Move", offId: "Move" },
  ];

  const onActionHandler = (rowData: any, actionId: any) => {
    if ((actionId = "Rename ")) {
      setFolderId(rowData.id);
      setRenameFolder(rowData.name);
      setName(rowData.name);
    }

    if ((actionId = "Move")) {
      setFolderId(rowData.id);
      console.log(rowData);
      setMoveFile(rowData.id);
    }
    setdatafolderParentId(rowData.parentId);
    setRenameFolder(rowData.name);
    setDataFolderId(rowData.id);
    setDirectory(rowData.isDirectory);
  };

  const UpdateFolderName = () => {
    let dto = { body: { name: name }, id: folderId };
    dispatch(updateDirectoryDescriptor(dto) as any).then((res: any) => {
      dispatch(fetchSubDirectory(undefined) as any);
      dispatch(fetchDirectoryDescriptor(undefined) as any);
    });
    setRenameFolder("");
    setDirectories([
      {
        name: "All",
        path: "/all",
        parentId: null,
        id: null,
        hasChildren: false,
        children: [],
      },
    ]);
  };
  useEffect(() => {
    if (file.editDirectory) {
      setRenameFolder(file.editDirectory);
    }
  }, [file.editDirectory]);
  
  const handleDragAndDrop=(sourceId:string, destinationId:string)=>{
    const files = {
      body: {
        id: sourceId,
        newParentId: destinationId,
        // formData: { File: new Blob([e], { type: e.type }) },
      },    
    };
      dispatch(moveDirectoryDescriptor(files)as any).then((res:any) => {
        dispatch(fetchSubDirectory(undefined) as any);
      dispatch(fetchDirectoryDescriptor(undefined) as any);
      })
      setDirectories([
        {
          name: "All",
          path: "/all",
          parentId: null,
          id: null,
          hasChildren: false,
          children: [],
        },
      ]);
  
  } 

  const movefolder = (e:any) => {
    
    const files = {
      body: {
        id: folderId,
        newParentId: moveNewFolder,
        // formData: { File: new Blob([e], { type: e.type }) },
      },
    };
    
    if(isDirectory){
      dispatch(moveDirectoryDescriptor(files)as any).then((res:any) => {
        dispatch(fetchSubDirectory(undefined) as any);
      dispatch(fetchDirectoryDescriptor(undefined) as any);
      })
    }else{
      dispatch(moveFileDescriptor(files)as any).then((res:any) => {
        dispatch(fetchSubDirectory(undefined) as any);
        dispatch(fetchDirectoryDescriptor(undefined) as any);
      })
    }
    setDirectories([
      {
        name: "All",
        path: "/all",
        parentId: null,
        id: null,
        hasChildren: false,
        children: [],
      },
    ]);
  
  };
  useEffect(() => {
    if (file.moveDirectory) {
      setMoveFile(file.moveDirectory);
    }
  }, [file.moveDirectory]);

  function recursiveFunctionAddData(directories: any, data: any) {
    return directories.map((el: any) => {
      if (data.parentId == el.id) {
        let flag = 0;
        el.children?.map((e: any) => {
          if (e.id == data.id) {
            flag = 1;
          }
        });
        if (!flag) {
          el.hasChildren = true;
          if (el.children) {
            el.children.push(data);
          } else {
            el["children"] = [data];
          }
        }
        return el;
      } else {
        if (el.children) {
          el.children = recursiveFunctionAddData(el.children, data);
        }
        return el;
      }
    });
  }

  useEffect(() => {
    dispatch(fetchSubDirectory(folderId) as any);
    dispatch(fetchDirectoryDescriptor(folderId) as any);
  }, [dispatch]);

  useEffect(() => {
    
    if (file.subDirectories) {
      let parsedDirectory = JSON.parse(JSON.stringify(directories));
      file.subDirectories.items.map((el: any) => {
        let tempData = recursiveFunctionAddData(parsedDirectory, el);
        setDirectories(tempData);
        setbreadCrumItems({...breadItems, label:el.name})
      });
      
    }
  }, [file.subDirectories]);
  const dTo: {
    name: string;
    parentId: any;
    extraProperties: any;
  } = { name: "", parentId: null, extraProperties: {} };
  function setbreadCrum(data: any) {
    // directories.
  }

  function setPathValue(event: any) {
    
    let id = undefined;
    if (event && event.id) {
      id = event.id;
    } else {
      id = undefined;
    }
    setFolderId(id);
    dispatch(fetchDirectoryDescriptor(id) as any);
    dispatch(fetchSubDirectory(id) as any);
    setbreadCrum(id);
    // dispatch(fetchSubDirectory(event.name) as any);
  }

  function setFolderPath(event: any) {
    let id = undefined;
    if (event && event.id) {
      id = event.id;
    } else {
      id = undefined;
    }
    setMoveNewFolder(id);
    dispatch(fetchDirectoryDescriptor(id) as any);
    dispatch(fetchSubDirectory(id) as any);
  }

  const addDataHandler = () => {
    dTo.name = name;
    dTo.parentId = folderId;
    dispatch(saveDirectoryDescriptor(dTo) as any).then((res: any) => {
      dispatch(fetchSubDirectory(undefined) as any);
      dispatch(fetchDirectoryDescriptor(undefined) as any);
    });
    setName("");
    setDirectories([
      {
        name: "All",
        path: "/all",
        parentId: null,
        id: null,
        hasChildren: false,
        children: [],
      },
    ]);
  };

  // const onDeleteFile = () => {
  //   dispatch(deleteDirectoryDescriptor(folderId) as any).then((res: any) => {
  //     setDirectories([
  //       {
  //         name: "All",
  //         path: "/all",
  //         parentId: null,
  //         id: null,
  //         hasChildren: false,
  //         children: [],
  //       },
  //     ]);

  //     dispatch(fetchSubDirectory(undefined) as any);
  //     dispatch(fetchDirectoryDescriptor(undefined) as any);
  //   });
  // };
  

  const onDeleteFile = () => {
    if (isDirectory) {
      dispatch(deleteDirectoryDescriptor(datafolderId) as any).then(
        (res: any) => {
          dispatch(fetchSubDirectory(undefined) as any);
          dispatch(fetchDirectoryDescriptor(undefined) as any);
        }
      );
    } else {
      dispatch(DeleteFileDescriptor(datafolderId) as any).then((res: any) => {
        dispatch(fetchSubDirectory(undefined) as any);
        dispatch(fetchDirectoryDescriptor(undefined) as any);
      });
    }
    setDirectories([
      {
        name: "All",
        path: "/all",
        parentId: null,
        id: null,
        hasChildren: false,
        children: [],
      },
    ]);
  };

  const SetSearchName = (e: any) => {
    let temparr = data.filter((data: any) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTableData(temparr);
  };

  function setValue(value: string) {
    throw new Error("Function not implemented.");
  }

  function preUploadFileInfo(_data: any) {
    let tempUploadfiles: any[] = [];
    let tempfiles: any[] = [];
    [..._data.files].map((res: any) => {
      const data: any = {
        directoryId: folderId,
        fileName: res.name,
        size: res.size,
      };
      tempUploadfiles.push(data);
      tempfiles.push(res);
    });
    setTotaFiles(totalFiles.concat(tempfiles));
    setUploadFiles(uploadFiles.concat(tempUploadfiles));
  }

  useEffect(() => {
    dispatch(infoFileDescriptor(uploadFiles) as any);
  }, [uploadFiles]);
  const UploadedFile = () => {
    
    totalFiles.map((e: any) => {
      const body = {
        relativePath: null,
        name: e.name,
        directoryId: folderId,
        extraProperties: {},
        formData: { File: new Blob([e], { type: e.type }) },
      };
      console.log(body);
      // setUploadFile(totalFiles[0])
      dispatch(uploadFileDescriptor(body) as any);
      dispatch(fetchSubDirectory(folderId) as any);
      dispatch(fetchDirectoryDescriptor(undefined) as any);
    });
  };

  return (
    <div className="New Folder">
      <div className="d-flex justify-content-end">
        <RdsOffcanvas
          canvasTitle={"CREATE FOLDER"}
          placement="end"
          backDrop={true}
          scrolling={false}
          preventEscapeKey={false}
          offId={"Folder"}
          offcanvasbutton={
            <div className="d-flex justify-content-end">
              <RdsButton
                icon="plus"
                label={"Create New Folder"}
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
        >
          <div>
            <div className="pt-3">
              <RdsInput
                size="medium"
                inputType="text"
                placeholder="Enter Name"
                label="Folder Name"
                labelPositon="top"
                id=""
                value={name}
                required={true}
                onChange={(e) => {
                  setName(e.target.value);

                }}
              ></RdsInput>
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
                  isDisabled={name === ""}
                  colorVariant="primary"
                  class="me-2"
                  showLoadingSpinner={true}
                  onClick={addDataHandler}
                ></RdsButton>
              </div>
            </div>
          </div>
        </RdsOffcanvas>

        <RdsOffcanvas
          canvasTitle={"Upload Files"}
          placement="end"
          backDrop={true}
          scrolling={false}
          preventEscapeKey={false}
          offId={"Files"}
          offcanvasbutton={
            <div className="d-flex justify-content-end ms-3">
              <RdsButton
                icon="upload_data"
                label={"UPLOAD FILES"}
                iconColorVariant="primary"
                iconHeight="15px"
                iconWidth="15px"
                iconFill={false}
                iconStroke={true}
                block={false}
                size="small"
                type="button"
                colorVariant="primary"
                isOutline={true}
                showLoadingSpinner={true}
              ></RdsButton>
            </div>
          }
        >
          <RdsCompFileUploader
            onClick={UploadedFile}
            preFileInfo={(data: any) => preUploadFileInfo(data)}
          ></RdsCompFileUploader>
        </RdsOffcanvas>
      </div>
      <div className="card pt-2 h-100 border-0 rounded-0 card-full-stretch mt-3 ">
        <div className="row">
          <div className="col-md-3 pt-3">
            <RdsCompDirectoryList
              items={directories}
              path={setPathValue}
              selectedItemId={directories[0].id}
              onDragAndDrop={handleDragAndDrop}
            ></RdsCompDirectoryList>
          </div>

          <div className="col-md-9 border-start">
            <div className="row mt-3 ms-3">
              <div className="col-md-4 d-flex justify-comtent-start">
                {/* <RdsBreadcrumb breadItems={directories}/> */}
                
                <RdsBreadcrumb
                  breadItems={breadItems}
                  role="advance"
                ></RdsBreadcrumb>
              </div>

              <div className="col md-4 d-flex "></div>

              <div className="col md-4 d-flex justify-content-end">
                <RdsSearch
                  placeholder={"Search"}
                  size={"5px"}
                  onChange={SetSearchName}
                ></RdsSearch>
              </div>
            </div>

            <div className="row mt-3 ms-3">
              <RdsCompDataTable
               actionPosition="right"
                tableHeaders={tableHeaders}
                tableData={tableData}
                pagination={false}
                actions={actions}
                onActionSelection={onActionHandler}
                noDataTitle="No data"
              />
              <RdsOffcanvas
                canvasTitle={"RENAME"}
                placement="end"
                offcanvaswidth={650}
                backDrop={true}
                scrolling={false}
                preventEscapeKey={false}
                offId="Rename"
              >
                <div>
                  <div className="pt-3">
                    <RdsInput
                      size="medium"
                      inputType="text"
                      placeholder="Enter Name"
                      label="Name"
                      labelPositon="top"
                      id=""
                      value={name}
                      required={true}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></RdsInput>
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
                        label="RENAME"
                        type={"button"}
                        size="small"
                        databsdismiss="offcanvas"
                        isDisabled={name === ""}
                        colorVariant="primary"
                        class="me-2"
                        onClick={UpdateFolderName}
                        showLoadingSpinner={true}
                      ></RdsButton>
                    </div>
                  </div>
                </div>
              </RdsOffcanvas>
              <RdsOffcanvas
                canvasTitle={"MOVE"}
                placement="end"
                offcanvaswidth={650}
                backDrop={true}
                scrolling={false}
                preventEscapeKey={false}
                offId={"Move"}
              >
                <div>
                  <div className="pt-3">
                    <RdsLabel label="Move To Under" size="15px"></RdsLabel>
                  </div>
                  <div className="mt-3 p-2 border">
                    <RdsIconLabel
                      icon="home"
                      iconSize="small"
                      label="All FIles"
                      size="small"
                      fill={false}
                    />
                  </div>
                  <div className="mt-3 pb-1 border-bottom">
                    <RdsLabel label="Folder Name" size="14px">
                      <RdsIcon
                        name={"up"}
                        height="12px"
                        width="12px"
                        stroke={true}
                      />

                      <RdsIcon
                        name={"down"}
                        height="12px"
                        width="12px"
                        stroke={true}
                      />
                    </RdsLabel>
                  </div>
                  <RdsCompFileMover
                    items={directories}
                    path={setFolderPath}
                    selectedItemId={directories[0].id}
                  ></RdsCompFileMover>
                  <div className="d-flex footer-buttons ms-2">
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
                      label="MOVE"
                      type={"button"}
                      size="small"
                      databsdismiss="offcanvas"
                      colorVariant="primary"
                      class="me-2"
                      showLoadingSpinner={true}
                      onClick={movefolder}
                    ></RdsButton>
                  </div>
                </div>
              </RdsOffcanvas>
              <RdsCompAlertPopup
                alertID="DeleteFile"
                onSuccess={onDeleteFile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileManagement;
