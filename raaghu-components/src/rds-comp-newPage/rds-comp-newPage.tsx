import React, { FC, useEffect, useState } from 'react';
import { RdsCompNewPageWrapper } from './rds-comp-newPage.styled';
import { RdsButton, RdsInput, RdsTextEditor } from 'raaghu-react-elements';

interface RdsCompNewPageProps {
   title?: string;
   slug?: string;
   content?: string;
   script?: string;
   style?: string;
   onSubmit?: any;
   newPageData?: any;
}

const RdsCompNewPage = (props: RdsCompNewPageProps) => {
   const [data, setData] = useState(props.newPageData);
   const allFieldsAreEmpty = Object.values(data).every((value) => value === "");

   useEffect(() => {
      setData(props.newPageData);
    }, [props.newPageData]);

   const onTextChangeHandler = (e: any) => {
      setData({ ...data, title: e.target.value });
   };

   const onSlugChangeHandler = (e: any) => {
      setData({ ...data, slug: e.target.value });
   };

   return (
      <div className="row">
         <div className="col-md-12">
            <div className="form-group">
               <RdsInput
                  inputType="text"
                  required={true}
                  label={"Title"}
                  placeholder={"Enter Title Name"}
                  value={data.title}
                  onChange={onTextChangeHandler}
               ></RdsInput>
            </div>
         </div>
         <div className="col-md-12">
            <div className="form-group">
               <RdsInput
                  inputType="text"
                  required={true}
                  label={"Slug"}
                  placeholder={"Enter Slug Name"}
                  value={data.slug}
                  onChange={onSlugChangeHandler}
               ></RdsInput>
            </div>
         </div>
         <RdsTextEditor />
         <div className="footer-buttons mb-2 d-flex">
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
            isDisabled={allFieldsAreEmpty}
            colorVariant="primary"
            class="me-2"
            onClick={() => {
              props.onSubmit(data);
            }}
          ></RdsButton>
        </div>
      </div>
   );
};

export default RdsCompNewPage;
