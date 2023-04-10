import React, { useEffect, useState } from "react";
import {
  RdsAlert,
  RdsBadge,
  RdsButton,
  RdsCheckbox,
  RdsIcon,
  RdsInput,
  RdsOffcanvas,
} from "../../../rds-elements";
import {
  RdsCompAlertPopup,
  RdsCompNewLanguage,
} from "../../../rds-components";
import RdsCompDirectoryList, {
	DirectoryItem,
  } from "../../../../../raaghu-components/src/rds-comp-directory-list/rds-comp-directory-list";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import {
	deleteMenuItem,
	postMenuItems,
	editMenuItem,
	getMenuItem,
	getAllMenuItems
} from "../../../../libs/state-management/public.api";
import {
  CreateLanguageDto,
  UpdateLanguageDto,
} from "../../../../libs/shared/service-proxy";
import RdsCompNewMenuProps from "../../../../../raaghu-components/src/rds-comp-new-menu/rds-comp-new-menu"


const Menus = () => {
  const [Data, setData] = useState<any>({url: '',
	  displayName: "",
	  isActive: true,
	  icon: "string",
	  target: "string",
	  elementId: "string",
	  cssClass: "string",});
  const [directories, setDirectories] = useState<any[]>([
    // {
    //   name: "All",
    //   path: "/all",
    //   parentId: null,
    //   id: null,
    //   hasChildren: false,
    //   children: [],
    // },
  ]);
 const dispatch = useAppDispatch(); 
 

 
const handlerAddMenu =()=>{}

const handlerSaveAddMenu = (data: 
	{  url?: string;
		  displayName?: string;
		  isActive?: boolean;
		  icon?: string;
		  target?: string;
		  elementId?: string;
		  cssClass?: string;}
	) =>
   {
	let dto:any ={
		parentId: '',
    displayName: '',
    isActive:'',
    url:'',
    icon:'',
    order:'',
    target: '',
    elementId: '',
    cssClass: '',
    pageId:'',
	}
	dto.parentId= "piwef";
    dto.displayName= data.displayName;
    dto.isActive= data?.isActive;
    dto.url= data?.url;
    dto.icon= data?.icon;
    dto.target= data?.target;
    dto.elementId= data?.elementId;
    dto.cssClass= data?.cssClass;

    dispatch(postMenuItems(dto) as any).then((res: any) => {
      // if (res.type == "language/postNewLanguage/rejected") {
      //   setAlert({
      //     ...Alert,
      //     show: true,
      //     message: "your request has been denied",
      //     color: "danger",
      //   });
      // } else {
      //   setAlert({
      //     ...Alert,
      //     show: true,
      //     message: "Language added Successfully",
      //     color: "success",
      //   });
      // }
      dispatch(getAllMenuItems() as any);
    });

    // setname([]);
  };

const handlerEditMenu =()=>{}
const handlerDeleteMenu =()=>{}
const handlerAddSubMenu =()=>{}
  const setPathValue=()=>{}
  return (
    <>
      <div className="row">
        <div className="col-md-12 mb-3 ">
          <div className="row ">
            <div className="col-md-4">
             {/* {Alert.show && (
                <RdsAlert
                  alertmessage={Alert.message}
                  colorVariant={Alert.color}
                ></RdsAlert>
              )}  */}
            </div>
            <div className="col-md-8 d-flex justify-content-end ">
              <RdsOffcanvas
                offcanvasbutton={
                  <div className="my-1">
                    <RdsButton
                      type={"button"}
                      label="New Menu"
                      iconColorVariant="light"
                      size="small"
                      colorVariant="primary"
                      icon="plus"
                      iconFill={false}
                      iconStroke={true}
                      iconHeight="12px"
                      onClick={handlerAddMenu}
                      iconWidth="12px"
                    ></RdsButton>
                  </div>
                }
                placement={"end"}
                backDrop={true}
                scrolling={false}
                preventEscapeKey={false}
                offId={"Language"}
                canvasTitle={"New Menu"}
              >
				<RdsCompNewMenuProps menusData={Data} onSubmit={handlerSaveAddMenu}  />
              </RdsOffcanvas>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch">
			<h4>Menu Items</h4>
			{directories.length===0&&<h6>There is no menu item yet!</h6>}
		  <RdsCompDirectoryList
              items={directories}
              path={setPathValue}
              selectedItemId={directories[0]?.id}
            ></RdsCompDirectoryList>
            {/* <RdsOffcanvas
              placement={"end"}
              backDrop={true}
              scrolling={false}
              preventEscapeKey={false}
              offId={"languagesEdit"}
              canvasTitle={"Edit Language"}
            >
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group mt-3">
                      <RdsInput
                        size="small"
                        label="Display Name"
                        placeholder="Enter Display Name"
                        value={dataEmit.displayName}
                        onChange={inputChangeHandler}
                        required={true}
                      ></RdsInput>
                    </div>
                  </div>
                </div>

                <RdsCheckbox
                  label="is Enabled"
                  checked={dataEmit.check}
                  onChange={checkboxHandler}
                ></RdsCheckbox>
              </form>

              <div className="footer-buttons my-2">
                <div className="row">
                  <div className="col-md-12 d-flex">
                    <div>
                      <RdsButton
                        label="Cancel"
                        type="button"
                        colorVariant="primary"
                        size="small"
                        databsdismiss="offcanvas"
                        isOutline={true}
                      ></RdsButton>
                    </div>
                    <div>
                      <RdsButton
                        label="Save"
                        type="button"
                        size="small"
                        isDisabled={formValid}
                        class="ms-2"
                        colorVariant="primary"
                        databsdismiss="offcanvas"
                        onClick={() => onEditHandler(dataEmit)}
                      ></RdsButton>
                    </div>
                  </div>
                </div>
              </div>
            </RdsOffcanvas>

            <RdsCompAlertPopup
              alertID={"languagesDel"}
              onSuccess={onDeleteHandler}
            ></RdsCompAlertPopup> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
