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

   const [postData, setData] = useState(props.blogPostData);
   useEffect(()=>{
      setData(props.blogPostData)
   },[props.blogPostData]);

   // const allFieldsAreEmpty = Object.values(postData).every((value) => value === "");

   // const fileArrayHandler = (files: any) => {
   //    setData({ ...postData, file: files })
   // }

   const onTitleChangeHandler = (value: any) =>{
      setData({ ...postData, title: value })
   }

   // const onSelectPostListValue = (value: any) => {
   //    setData({ ...postData, blog: value});
   //  };

   // const onSelectPostListValue = (value: any) => {
   //    setData({ ...postData, blogList: value });
   //  };

   const onSlugChangedHandler = (value : any) => {
      setData({ ...postData, slug: value });
   };

   const onDecChangedHandler = (value : any)=> {
      setData({ ...postData, description: value})
   };

   const onTagChangedHandler = (value : any)=>{
      setData({ ...postData, tag: value})
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

   function profileImage(data: any) {
      
   }

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
                     // onFileArray={(e: any)=>fileArrayHandler(e.target.Value)}
                     // getFileUploaderInfo={(data:any)=>profileImage(data)}
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
                     // onClick={(e:any)=>onSelectPostListValue(e.target.value)}
                  />
               </div>

               <div className="form-group px-2">
                  <RdsInput
                     inputType="text"
                     size="medium"
                     required={true}
                     isDisabled={false}
                     label="Title"
                     readonly={false}
                     value={postData.title}
                     name="title"
                     placeholder="Enter Title"
                     onChange={(e:any)=>onTitleChangeHandler(e.target.value)}
                  ></RdsInput>
               </div>
               <div className="form-group px-2">
                  <RdsInput
                     inputType="text"
                     required={true}
                     label={"Slug"}
                     name="slug"
                     value={postData.slug}
                     placeholder="Enter Slug"
                     onChange={(e:any)=>onSlugChangedHandler(e.target.value)}
                  ></RdsInput>
               </div>
               <div className="form-group px-2">
                  <RdsTextArea
                     label="Short description"
                     placeholder="Enter Description"
                     onChange={(e:any)=>onDecChangedHandler(e.target.value)}
                     value={postData.description}
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
                     value={postData.tag}
                     placeholder="Enter Tag"
                     onChange={(e:any)=>onTagChangedHandler(e.target.value)}
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
                        props.onSubmit(postData);
                      }}
						></RdsButton>
					</div>
         </div>

      </>
   );
}


export default RdsCompBlogPostNew;
