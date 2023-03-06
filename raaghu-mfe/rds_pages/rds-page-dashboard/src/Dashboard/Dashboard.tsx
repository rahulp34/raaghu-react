import { t } from "i18next";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

import { RdsCompAdminDashboard } from "../../../rds-components";
// To view for separetly Dashboard page please uncomment the below link
// import "../../../../raaghu-themes/themes/default.scss";

export interface DashboardProps {}

const Dashboard = (props: DashboardProps) => (
	<>
	const { t } = useTranslation();

	<Suspense>
		
		<RdsCompAdminDashboard />
	</Suspense>
	</>
);

export default Dashboard;
