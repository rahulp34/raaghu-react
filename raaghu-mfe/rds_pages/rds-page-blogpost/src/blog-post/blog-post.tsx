import React, { useState ,useEffect } from "react";
import { RdsCompBlogPost, RdsCompBlogPostNew } from "../../../rds-components";
import { RdsButton, RdsDropdownList, RdsSearch } from "../../../../../raaghu-elements/src";
import { useTranslation } from "react-i18next";
import { RdsOffcanvas } from 'raaghu-react-elements';
import { addBlogPostData, getAllBlogPost } from "../../../../libs/state-management/blog-post/blog-post-slice";
import { useAppDispatch } from "../../../../libs/public.api";


const BlogPost = () => {
	const { t } = useTranslation();

	const [actionId, setActionId] = useState("new");

	const tableHeaders = [
		{
			displayName: t("Details"),
			key: "details",
			datatype: "text",
			sortable: true,
		},

		{
			displayName: t("Blog"),
			key: "blog",
			datatype: "text",
			sortable: true,
		},

		{
			displayName: t("Title"),
			key: "title",
			datatype: "text",
			sortable: true,
		},

		{
			displayName: t("Slug"),
			key: "slug",
			datatype: "text",
			sortable: true,
		},

		{
			displayName: t("Creation Time"),
			key: "creationTime",
			datatype: "text",
			sortable: true,
		},

		{
			displayName: t("Status"),
			key: "status",
			datatype: "text",
			sortable: true,
		},
	];

	const tableData = [
		{
			id: 1,
			details: "Standard",
			title: 60,
			blog: "Name",
			status : "publish",
			slug: 5,
			isHomePage: "yes",
			creationTime: "11-03-2023",
			lastModificationTime: "12-03-2023",
		},

		{
			id: 2,
			details: "Basic",
			title: 120,
			blog: "Name",
			status : "publish",
			slug: 10,
			isHomePage: "yes",
			creationTime: "11-03-2023",
			lastModificationTime: "12-03-2023",
		},

		{
			id: 3,
			details: "Premium",
			title: 250,
			blog: "Name",
			status : "publish",
			slug: 5,
			isHomePage: "yes",
			creationTime: "11-03-2023",
			lastModificationTime: "12-03-2023",
		},
	];

	const dropDownList = [
		{
			iconHeight: '20px',
			iconWidth: '20px',
			label: 'Draft',
			val: 'draft'
		},
		{
			iconHeight: '20px',
			iconWidth: '20px',
			label: 'publish',
			val: 'publish'
		},
		{
			iconHeight: '20px',
			iconWidth: '20px',
			label: 'Waiting for Review',
			val: 'waiting for review'
		}
	]

	const actions = [
		{ id: "edit", displayName: "Edit", offId: "blogsPost-edit-off" },
		{ id: "draft", displayName: "Draft", offId: "draft" },
		{ id: "delete", displayName: "Delete", modalId: "blogsPost_delete_off" },
	];


	const dispatch = useAppDispatch();

	useEffect(()=>{
		 dispatch(getAllBlogPost() as any)
	},[dispatch]);

  function createNewCanvasFn(event: any) {
    event.preventDefault();
    setActionId("new");
  }

  const blogPostOffCanvashandler =()=>{};

  const [blogPostData, setBlogPostData] = useState<any>({
	file : "",
	title: "",
	blog : "",
	slug : "",
	description : "",
	tag : ""
});

const postSubmitHandler = (data: any)=>{
	console.log("Dta check", blogPostData);
	 dispatch(addBlogPostData(data) as any).then((res : any)=>{
      console.log(res)

	  dispatch(getAllBlogPost() as any);
	 });

	 setBlogPostData({
		file : "",
		title: "",
		blog : "",
		slug : "",
		description : "",
		tag : ""
	  })
};

	return (
		<>
			<div>
				<div className="row align-items-center">
					<div className="col-md-12 d-flex justify-content-end">
              <RdsOffcanvas
                canvasTitle={"Blog Post"}
                placement="end" 
				onClose={blogPostOffCanvashandler}
                offcanvasbutton={
                  <div className="d-flex justify-content-end my-1">
                    <RdsButton
                      icon="plus"
                      label={"New Blog Post"}
                      iconColorVariant="light"
                      iconHeight="15px"
                      iconWidth="15px"
                      iconFill={false}
                      iconStroke={true}
                      block={false}
                      size="small"
                      type="button"
                      colorVariant="primary"
                      onClick={(e: any) => createNewCanvasFn(e)}
                    ></RdsButton>
                  </div>
                }
                backDrop={true}
                scrolling={false}
                preventEscapeKey={false}
                offId={"blogPost"}
              >
                <div className="mt-3">
                  <RdsCompBlogPostNew 
				  blogPostData={blogPostData}
				   onSubmit={postSubmitHandler}
				  />
                </div>
              </RdsOffcanvas>
            </div>
				</div>


				<div className="my-3">
					<div className="card p-2 border-0 rounded-0 pt-4">
				
						<div className="row">
							<div className="col-2">
								<RdsDropdownList
									borderDropdown
									listItems={dropDownList}
									placeholder="Select a Status"
									id={"selectStatus"}
								/>
							</div>
							<div className="col-md-10">
								<RdsSearch
									iconside="right"
									placeholder="Search"
									size="small"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
					<RdsCompBlogPost
						tableHeaders={tableHeaders}
						tableData={tableData}
						pagination={true}
						actions={actions}
						recordsPerPage={10}
					></RdsCompBlogPost>
				</div>
			
			</div>
		</>
	);
};
export default BlogPost;
