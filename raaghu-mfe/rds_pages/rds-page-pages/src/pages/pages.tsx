import React, { useEffect, useState } from "react";
import { RdsCompAlertPopup, RdsCompNewPage, RdsCompPages } from "../../../rds-components";
import { RdsButton, RdsOffcanvas, RdsSearch } from "raaghu-react-elements";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { useAppDispatch, useAppSelector, } from "../../../../libs/state-management/hooks";
import { deletePageData, editPageData, fetchEditPagesData, fetchPagesData, isHomePageChangeData, postPagesData } from "../../../../libs/state-management/pages/pages-slice";

const Pages = (props: any) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [tableData, setTableData] = useState<any>([]);
	const [actionId, setActionId] = useState("new");
	const [tempIsHomePageId,settempIsHomePageId]=useState(true);
	const pageData = useAppSelector((state) => state.persistedReducer.pages);
	const pageDatas = useAppSelector((state) => state.persistedReducer.pages.pagesData);
	const pageEdit = useAppSelector((state) => state.persistedReducer.pages.pagesDataEdit);
	const [Alert, setAlert] = useState({ show: false, message: "", color: "" });
	const offCanvasHandler = () => { };
	const [editClaimData, setEditClaimData] = useState<any>({});

	const [newPageData, setNewPageData] = useState<any>({
		title: '',
		slug: '',
		content: '',
		script: '',
		style: '',
	});

	const tableHeaders = [
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
			displayName: t("Is Home Page"),
			key: "isHomePage",
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
			displayName: t("Last Modification Time"),
			key: "lastModificationTime",
			datatype: "text",
			sortable: true,
		},
	];

	const actions = [
		{ id: "edit", displayName: "Edit", offId: "dynamic-edit-off" },
		{ id: "delete", displayName: "Delete", modalId: "page_del" },
		{ id: "isHomePageStatus", displayName: "Change Home Page Status", offId: "" },
	];

	function createNewCanvasFn(event: any) {
		debugger
		event.preventDefault();
		setActionId("new");
	}

	useEffect(() => {
		dispatch(fetchPagesData() as any);
	}, [dispatch]);

	useEffect(() => {
		if (pageEdit) {
			const pagesDataTable = { ...pageEdit }
			setEditClaimData(pagesDataTable)
		}
	}, [pageEdit]);

	const [homePageId, setHomePageId] = useState("");

	useEffect(() => {
		// dispatch(isHomePageChangeData(tableDataRowid) as any
		// ).then((res: any) => {
		// 	console.log("yyyyyyyyyyy", res)
		// });
		// dispatch(fetchPagesData() as any);
	});


	useEffect(() => {

		if (pageDatas) {
			const pagesDataTable = pageDatas.items.map((dataPages: any) => {
				const date = new Date(dataPages.creationTime);
				let day = date.getDate();
				let month = date.getMonth() + 1;
				let year = date.getFullYear();

				let createTime = date.toLocaleString("en-IN", {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					hour12: true,
				});

				const updateDate = new Date(dataPages.lastModificationTime);
				let days = updateDate.getDate();
				let months = updateDate.getMonth() + 1;
				let years = updateDate.getFullYear();
				let updateTime = updateDate.toLocaleString("en-IN", {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					hour12: true,
				});

				if (dataPages.lastModificationTime === " ") {
					dataPages.lastModificationTime == "-"
				}
				else {
					dataPages.lastModificationTime == updateDate;
				}

				let creationDate = `${year}/${month}/${day}` + '\n' + `${createTime}`;
				let modifiedDate = `${years}/${months}/${days}` + '\n' + `${updateTime}`;


				return {
					title: dataPages.title,
					slug: dataPages.slug,
					content: dataPages.content,
					script: dataPages.script,
					style: dataPages.style,
					creationTime: creationDate,
					isHomePage: (
						<>
							{dataPages.isHomePage == true ? ("true") : ("false")}
						</>
					),
					lastModificationTime: modifiedDate,
					id: dataPages.id
				}
			}, []);
			setTableData(pagesDataTable);
		}
	}, [pageDatas]);

	const submitHandler = (data: any) => {
		debugger
		dispatch(postPagesData(data) as any).then((res: any) => {
			if (res.type == "pages/postPagesData/rejected") {
				setAlert({
					...Alert,
					show: true,
					message: "your request has been denied",
					color: "danger",
				});
			} else {
				setAlert({
					...Alert,
					show: true,
					message: "Page added Successfully",
					color: "success",
				});
			}
			dispatch(fetchPagesData() as any);
		});
		setNewPageData({
			title: '',
			slug: '',
			content: '',
			script: '',
			style: '',
		})
	};

	const [claimTypesId, setClaimTypesId] = useState("");
	const onEditHandler = (editClaimData: any) => {

		const dTo = {
			id: claimTypesId,
			UpdatePageInputDto: editClaimData,
		};
		dispatch(
			editPageData(dTo) as any
		).then((res: any) => {
			if (res.type == "pages/editPageData/rejected") {
				setAlert({
					...Alert,
					show: true,
					message: "your request has been denied",
					color: "danger",
				});
			} else {
				setAlert({
					...Alert,
					show: true,
					message: "Claim Type edited Successfully",
					color: "success",
				});
			}
			dispatch(fetchPagesData() as any);
		});
		dispatch(fetchPagesData() as any);
	};



	const [tableDataRowid, setTableDataRowId] = useState(0);
	const onActionHandler = (rowData: any, actionId: any) => {
		setTableDataRowId(rowData.id);
		if (actionId === "edit") {
			const tempApplicationId = String(rowData.id);
			setClaimTypesId(tempApplicationId);

			dispatch(fetchEditPagesData(tempApplicationId) as any);
		}
		else if (actionId === "delete") {
			setTableDataRowId(rowData.id);
		}
		else if (actionId === "isHomePageStatus") {
			const tempIsHomePageId = String(rowData.id);
			setHomePageId(tempIsHomePageId);
			dispatch(isHomePageChangeData(tempIsHomePageId) as any).then((res: any) => {
			})
			dispatch(fetchPagesData() as any);
		}
	};

	const onDeleteHandler = (e: any) => {
		dispatch(deletePageData(tableDataRowid) as any).then((res: any) => {
			if (res.type == "pages/deletePageData/rejected") {
				setAlert({
					...Alert,
					show: true,
					message: "your request has been denied",
					color: "danger",
				});
			} else {
				setAlert({
					...Alert,
					show: true,
					message: "Claim Type deleted Successfully",
					color: "success",
				});
			}
			dispatch(fetchPagesData() as any);
		});
	};

	return (
		<>
			<div>
				<div className="row align-items-center">
					<div className="d-flex justify-content-end">
						<RdsOffcanvas
							canvasTitle={"New Page"}
							onclick={offCanvasHandler}
							placement="end"
							offcanvasbutton={
								<div className="d-flex justify-content-end my-1">
									<RdsButton
										icon="plus"
										label={"New Page"}
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
								<RdsCompNewPage
									onSubmit={submitHandler}
									newPageData={newPageData} />
							</div>
						</RdsOffcanvas>
					</div>
					<RdsCompAlertPopup alertID="page_del" onSuccess={onDeleteHandler} />
				</div>

				<div className="my-3">
					<div className="border-0 card p-3 pt-4 rounded-0">
						<div className="row">
							<div className="col-md-12">
								<RdsSearch
									iconside="right"
									placeholder="Search"
									size="small" />
							</div>

						</div>
					</div>
				</div>
				<div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
					<RdsCompPages
						tableHeaders={tableHeaders}
						actions={actions}
						tableData={tableData!}
						pagination={false}
						onActionSelection={onActionHandler}
						recordsPerPage={10}></RdsCompPages>


					<RdsOffcanvas
						canvasTitle="Edit Page"
						onclick={offCanvasHandler}
						placement="end"
						offId="dynamic-edit-off"

						backDrop={false}
						scrolling={false}
						preventEscapeKey={false}
					>
						<RdsCompNewPage
							onSubmit={onEditHandler}
							newPageData={editClaimData} />
					</RdsOffcanvas>
				</div>
			</div>
		</>
	)
}
export default Pages;