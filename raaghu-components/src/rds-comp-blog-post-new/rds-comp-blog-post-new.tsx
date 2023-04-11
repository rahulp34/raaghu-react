import { RdsButton, RdsDropdownList, RdsInput, RdsLabel, RdsTextArea, RdsTextEditor } from 'raaghu-react-elements';
import React, { useEffect, useState } from 'react';
import { RdsFileUploader } from '../rds-elements';


export interface RdsCompBlogPostNewProps {
   file?: any;
   title?: string;
   blog?: string;
   slug?: string;
   description?: string;
   tag?: string;
   blogPostData ?: any;
   onSubmit:any;

}

const RdsCompBlogPostNew = (props: RdsCompBlogPostNewProps) => {

   const [user, setData] = useState(props.blogPostData);
   useEffect(()=>{
      setData(props.blogPostData)
   },[props.blogPostData]);

   // const allFieldsAreEmpty = Object.values(user).every((value) => value === "");

   const fileArrayHandler = (files: any) => {
      setData({ ...user, file: files })
   }

   const onTitleChangeHandler = (e: any) =>{
      setData({ ...user, title: e.target.innerText })
   }

   const onSelectPostListValue = (e: any) => {
      setData({ ...user, blog: e.target.innerText });
    };

   const onSlugChangedHandler = (e : any) => {
      setData({ ...user, slug: e.target.innerText });
   };

   const onDecChangedHandler = (e : any)=> {
      setData({ ...user, description: e.target.innerText})
   };

   const onTagChangedHandler = (e : any)=>{
      setData({ ...user, tag: e.target.innerText})
   };

   const blogList = [
      {
         label: "blog-name",
         val: "blogName"
      },
      {
         label: "blog-name1",
         val: "blogName1"
      },
   ];

   return (
      <>
         <div className="row align-items-center">
            <div className="col-md-12">
               <form>
               <div className="from-group">

                  <RdsFileUploader
                     colorVariant="dark"
                     extensions=""
                     multiple={false}
                     size="mid"
                     limit={0}
                     label="Cover Image" 
                     onFileArray={fileArrayHandler}
                     />
               </div>
               <div className="form-group pb-3 px-2">
                <div className="mb-2">
                <RdsLabel   
                     label="Blog"
                  />
                </div>
                 
                  <RdsDropdownList
                     placeholder="Select List"
                     multiSelect={false}
                     borderDropdown={true}
                     // reset={isReset}
                     listItems={blogList}
                     id={"postList"}
                     onClick={onSelectPostListValue}
                  />
               </div>

               <div className="form-group px-2">
                  <RdsInput
                     inputType="text"
                     required={true}
                     label="Title"
                     value={user.title}
                     name="title"
                     placeholder="Enter Title"
                     onChange={onTitleChangeHandler}
                  ></RdsInput>
               </div>
               <div className="form-group px-2">
                  <RdsInput
                     inputType="text"
                     required={true}
                     label={"Slug"}
                     name="slug"
                     value={user.slug}
                     placeholder="Enter Slug"
                     onChange={onSlugChangedHandler}
                  ></RdsInput>
               </div>
               <div className="form-group px-2">
                  <RdsTextArea
                     label="Short description"
                     placeholder="Enter Description"
                     onChange={onDecChangedHandler}
                     value={user.description}
                     rows={3}
                  />
               </div>
               <div className="form-group px-2 pt-4">
                  <RdsTextEditor />
               </div>
               <div className="form-group mt-3 px-2">
                  <RdsInput
                     inputType="text"
                     required={true}
                     label={"Tag"}
                     value={user.tag}
                     placeholder="Enter Tag"
                     onChange={onTagChangedHandler}
                  ></RdsInput>
               </div>
               </form>
            </div>
            <div className="footer-buttons justify-content-start d-flex bottom-0 pt-0" >
						<RdsButton
							class="me-2"
							type={"button"}
							label="Save as draft"
							size="small"
							isOutline={true}
							colorVariant="primary"
							databsdismiss="offcanvas"
							databstoggle="offcanvas"
							databstarget="#application"
						></RdsButton>
						<RdsButton
							class="me-2"
							label="Publish"
							type="submit"
							isOutline={false}
							colorVariant="primary"
							databsdismiss="offcanvas"
							size="small"
                     // isDisabled={allFieldsAreEmpty}
                     onClick={() => {
                        props.onSubmit(user);
                      }}
						></RdsButton>
					</div>
         </div>

      </>
   );
}


export default RdsCompBlogPostNew;
