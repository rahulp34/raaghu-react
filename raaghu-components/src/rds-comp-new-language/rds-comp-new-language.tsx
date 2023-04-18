import React, { useState, useEffect } from "react";
import {
  RdsSelectList,
  RdsCheckbox,
  RdsInput,
  RdsLabel,
  RdsButton,
} from "raaghu-react-elements";

export interface RdsCompNewLanguageProps {
  languageNames: any[];
  languageItems: any[];
  placeholder: any;
  onClick: any;
  onSaveHandler: any;
  check: any;
  displayName?: any;
  edit?: boolean;
  id?: any;
}
const RdsCompNewLanguage = (props: RdsCompNewLanguageProps) => {
  const [dataEmit, setdataEmit] = useState<{
    check: boolean;
    name: string;
    item: string;
    displayName: any;
    id: any;
    flag: any;
  }>({
    check: props.check,
    name: "Select Culture Name",
    item: "Select UI Culture Name",
    displayName: props.displayName || "",
    id: props.id,
    flag: "",
  });

  const [formValid, setformValid] = useState(true);

  useEffect(() => {
    if (props.edit) {
      if (dataEmit.displayName && 
        dataEmit.displayName.trim() !== "") {
        setformValid(false);
      }else{
        setformValid(true)
      }
    } else {
      if (
        dataEmit.name != "Select Culture Name" &&
        dataEmit.item != "Select UI Culture Name" &&
        dataEmit.displayName && 
        dataEmit.displayName.trim() !== ""
      ) {
        setformValid(false);
      }else{
        setformValid(true)
      }
    }
    
  }, [dataEmit.name, dataEmit.item, dataEmit.displayName]);

  const checkboxHandler = (event: any) => {
    setdataEmit({ ...dataEmit, check: event.target.checked });
  };
  const langNamesHandler = (value: any) => {
    
    setdataEmit({ ...dataEmit, name: value ,item:value});
    let displayName=''
    props.languageNames.map((res:any)=>{
        if(res.value==value){
          displayName=res.option
        }
    })
    setdataEmit((prev:any)=>{ return {...prev, displayName:displayName}  });
  };
  const langItemHandler = (value: any) => {
    
    setdataEmit({ ...dataEmit, name: value,item:value });
    let displayName=''
    props.languageNames.map((res:any)=>{
        if(res.value==value){
          displayName=res.option
        }
    })
    setdataEmit((prev:any)=>{ return {...prev, displayName:displayName}  });
  };

  const onSaveHandler = (data: any) => {
    props.onSaveHandler(dataEmit);
    setdataEmit({
      check: false,
      name: "Select Culture Name",
      item: "Select UI Culture Name",
      displayName: "",
      id: "",
      flag: "",
    });
  };

  const inputChangeHandler = (event: any) => {
   setdataEmit({ ...dataEmit, displayName:event.target.value });
  };
  return (
    <>
      <form>
        <div key={props.id} className="row">
          {!props.edit && (
            <div className="col-md-6 mb-3">
              <div className="form-group mt-3">
                <div className="mb-2">
                  <RdsLabel label="Culture" required={true}></RdsLabel>
                </div>
                <RdsSelectList
                  // id={"1"}
                  placeholder="Select Culture Name"
                  label={dataEmit.name}
                  selectItems={props.languageNames}
                  selectedValue={dataEmit.name}
                  onSelectListChange={langNamesHandler}
                ></RdsSelectList>
              </div>
            </div>
          )}
          <div className="col-md-6 mb-3">
            <div className="form-group mt-3">
              {/* <div className="mb-2">
                <RdsLabel label="Display Name"></RdsLabel>
              </div> */}

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
        {!props.edit && (
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <div className="mb-2">
                  <RdsLabel label="Ui Culture" required={true}></RdsLabel>
                </div>
                <RdsSelectList
                  // id={"2"}
                   placeholder="Select Culture Name"
                  label={dataEmit.item}
                  selectItems={props.languageItems}
                  onSelectListChange={langItemHandler}
                  selectedValue={dataEmit.item}
                ></RdsSelectList>
              </div>
            </div>
          </div>
        )}
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
                onClick={() => onSaveHandler(dataEmit)}
              ></RdsButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RdsCompNewLanguage;
