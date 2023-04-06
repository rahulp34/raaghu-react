import React from "react";
import { RdsCompPages } from "../../../rds-components";
import { RdsButton } from "raaghu-react-elements";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export interface RdsPagePagesProps {
	// pagesTableHeaders: any;
	// pagesTableData: any;
	// pagesTablePagination: boolean
	// pagesTableRecords: any

}

const tableHeaders = [
	{
		displayName: t("Details"),
		key: "details",
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


const tableData = [
	{
		"id": 1,
		"details": "Standard",
		"title": 60,
		"slug": 5,
		"isHomePage": "yes",
		"creationTime": "11-03-2023",
		"lastModificationTime": "12-03-2023"
	},
	{
		"id": 2,
		"details": "Basic",
		"title": 120,
		"slug": 10,
		"isHomePage": "yes",
		"creationTime": "11-03-2023",
		"lastModificationTime": "12-03-2023"
	},
	{
		"id": 3,
		"details": "Premium",
		"title": 250,
		"slug": 5,
		"isHomePage": "yes",
		"creationTime": "11-03-2023",
		"lastModificationTime": "12-03-2023"
	},

]


const Pages = (props: any) => {
	const { t } = useTranslation();
	return (
		<>
			<div>

				<div className="row align-items-center">
					<div className="d-flex justify-content-end">
						<RdsButton
							icon="plus"
							label={("New Page") || ""}
							iconColorVariant="light"
							iconHeight="15px"
							iconWidth="15px"
							iconFill={false}
							iconStroke={true}
							block={false}
							size="small"
							type="button"
							colorVariant="primary"
							//onClick={handlerRequestData}
							class="mx-2"
						></RdsButton>
					</div>
				</div>

				<div className="my-3">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-3">
									hi
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
					<RdsCompPages
						tableHeaders={tableHeaders}
						tableData={tableData}
						pagination={true}
						recordsPerPage={10}></RdsCompPages>
				</div>
			</div>

		</>
	)
}
export default Pages;