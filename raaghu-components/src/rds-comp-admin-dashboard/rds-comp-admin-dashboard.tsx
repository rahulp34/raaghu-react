import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
	RdsPagination,
	RdsProgressBar,
	RdsWidget,
	RdsLineChart,
	RdsBigNumber,
	RdsDoughnutChart,
	RdsBooleanChart,
	RdsBarChart,
	RdsTable,
	RdsButtonGroup,
	RdsButton,
	RdsDatePicker,
	RdsIcon
} from '../rds-elements';
import { ScriptableContext } from "chart.js";
//import { RdsButton, RdsDatePicker, RdsIcon } from '../rds-elements';
const RdsCompAdminDashboard = () => {
	const monthlySummaryChartOptions = () => {
		return;
	};

	// const [selectFilterValue, setSelectFilterValue] = useState({
	// 	startDate: '',
	// 	endDate: ''
	// });

	// function onDatePicker(startEndDate: any) {
	// 	const [start, end] = startEndDate;
	// 	const endDate = end ? end.toISOString() : '';
	// 	setSelectFilterValue({
	// 		...selectFilterValue,
	// 		startDate: start.toISOString(),
	// 		endDate: endDate,
	// 	});
	// };

	const buttonGroupList = [
		{
			id: 'radio1',
			label: 'Day',
			name: 'btnradio',
			checked: true
		},
		{
			id: 'radio2',
			label: 'Week',
			name: 'btnradio',
			checked: false
		},
		{
			id: 'radio3',
			label: 'Month',
			name: 'btnradio',
			checked: false
		}
	]

	const { t } = useTranslation();
	let user = 'Host Admin';
	return (

		<div className="dark dashboard">
			<div className="row mb-3">
				<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12">
					<h5><label htmlFor="label" className="fw-bold">Hello, {user} !</label></h5>
				</div>
				<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-12">
					<div className="align-items-center d-flex gap-4 justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-start">
						{/* <div className="align-items-center d-flex justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-start">
							<span>
								<RdsButton
									icon="chevron_left"
									colorVariant="primary"
									block={false}
									isOutline={true}
									size="small"
									iconFill={false}
									iconStroke={true}
									iconColorVariant="light"
									iconHeight="15px"
									iconWidth="15px"
									type="button"
									class="btn-icon border"
									onClick={onDatePicker} />
							</span>
							<RdsDatePicker
								onDatePicker={(s: any) => onDatePicker(s)}
								type="advanced"
								selectedDate={selectFilterValue.startDate}
								customDate={onDatePicker}
							></RdsDatePicker>
							<span>
								<RdsButton
									icon="chevron_right"
									colorVariant="primary"
									block={false}
									isOutline={true}
									size="small"
									iconFill={false}
									iconStroke={true}
									iconColorVariant="light"
									iconHeight="15px"
									iconWidth="15px"
									type="button"
									class="btn-icon border"
									onClick={onDatePicker} />
							</span>
						</div> */}
						<div>
							<RdsButtonGroup
								buttonGroupItems={buttonGroupList}
							
								colorVariant="primary"
								isOutline={true}
								role="radio"
								size="small"
								vertical={false} 
								/>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<RdsWidget
						headerTitle={t("Monthly Summary")}
						isRefreshRequired={true}
					>
						<RdsLineChart
							id="linechart"
							height={250}
							width={650}
							labels={["Jan", "Mar", "May", "Jul", "Sep", "Nov"]}
							options={{
								radius: 0,
								pointStyle: "circle",
								responsive: true,
								borderWidth: 1,
								maintainAspectRatio: false,
								plugins: {
									title: {
										display: false,
									},
									legend: {
										position: "top",
										align: "end",
										pointStyle: "circle",
												
										labels: {
											usePointStyle: true,
											pointStyleWidth:13,
											boxWidth: 10,
											boxHeight: 10,
											padding: 30,
											height: 5,
										},
									},
									tooltip: {
										enabled: true,
									},
								},
								scales: {
									y: {
										axis: "y",
										beginAtZero: true,
										legend: {
											labels: {
												maxheight: 10,
											},
										},
										grid: {
											display: false,
											lineWidth: 1,
											drawBorder: true,
											drawOnChartArea: true,
											drawTicks: true,
											tickLength: 8,
											offset: false,
											borderDash: [],
											borderDashOffset: 0,
											borderWidth: 1,
											color: "rgba(0,0,0,0.1)",
											borderColor: "rgba(0,0,0,0.1)",
										},
										type: "linear",
										ticks: {
											minRotation: 0,
											maxRotation: 50,
											mirror: false,
											textStrokeWidth: 0,
											textStrokeColor: "",
											padding: 3,
											display: true,
											autoSkip: true,
											autoSkipPadding: 3,
											labelOffset: 0,
											minor: {},
											major: {},
											align: "center",
											crossAlign: "near",
											showLabelBackdrop: false,
											backdropColor: "rgba(255, 255, 255, 0.75)",
											backdropPadding: 2,
											color: "#666",
										},
										display: true,
										offset: false,
										reverse: false,
										bounds: "ticks",
										grace: 0,
										title: {
											display: false,
											text: "",
											padding: {
												top: 4,
												bottom: 4,
											},
											color: "#666",
										},
										id: "y",
										position: "left",
									},
									x: {
										axis: "x",
										grid: {
											display: false,
											lineWidth: 1,
											drawBorder: true,
											drawOnChartArea: true,
											drawTicks: true,
											tickLength: 8,
											offset: false,
											borderDash: [],
											borderDashOffset: 0,
											borderWidth: 1,
											color: "rgba(0,0,0,0.1)",
											borderColor: "rgba(0,0,0,0.1)",
										},
										type: "category",
										ticks: {
											minRotation: 0,
											maxRotation: 50,
											mirror: false,
											textStrokeWidth: 0,
											textStrokeColor: "",
											padding: 3,
											display: true,
											autoSkip: true,
											autoSkipPadding: 3,
											labelOffset: 0,
											minor: {},
											major: {},
											align: "center",
											crossAlign: "near",
											showLabelBackdrop: false,
											backdropColor: "rgba(255, 255, 255, 0.75)",
											backdropPadding: 2,
											color: "#666",
										},
										display: true,
										offset: false,
										reverse: false,
										beginAtZero: false,
										bounds: "ticks",
										grace: 0,
										title: {
											display: false,
											text: "",
											padding: {
												top: 4,
												bottom: 4,
											},
											color: "#666",
										},
										id: "x",
										position: "bottom",
									},
								},
								tooltip: {
									display: true,
									usePointStyle: true,
								},
							}}
							dataSets={[
								{
									label: "Sales",
									data: [800, 425, 280, 700, 490, 200],
									borderColor: "#4DCFFF",
									pointBackgroundColor: "#4DCFFF",
									fill: true,
									pointRadius: 2,
									// backgroundColor: ['rgba(25, 70, 186, 0.5)'],
									backgroundColor: (context: ScriptableContext<"line">) => {
										const ctx = context.chart.ctx;
										const gradient = ctx.createLinearGradient(0, 25, 0, 210);
										gradient.addColorStop(0.1, "rgba(25, 70, 186, 1)");
										gradient.addColorStop(1, "rgba(25, 70, 186, 0.08)");
										return gradient;
									},
									tension: 0.4,
								},
								{
									label: "Revenue",
									data: [400, 782.4, 490, 470, 750, 500],
									borderColor: "#863BFF",
									pointBackgroundColor: "#863BFF",
									fill: true,
									pointRadius: 2,
									// backgroundColor:["rgba(48, 22, 194, 0.5)"],
									backgroundColor: (context: ScriptableContext<"line">) => {
										const ctx = context.chart.ctx;
										const gradient = ctx.createLinearGradient(0, 25, 0, 210);
										gradient.addColorStop(0.1, "rgba(48, 22, 194, 1)");
										gradient.addColorStop(1, "rgba(48, 22, 194, 0.08)");
										return gradient;
									},
									tension: 0.4,
								},
							]}
						/>
					</RdsWidget>
				</div>

				<div className="col-lg-6 col-md-12">
					<div className="row">
						<div className="col-md-6">
							<div>
								<RdsWidget
									headerTitle={t("Sales")}
									isRefreshRequired={false}
									height="auto"
								>
									<RdsBigNumber
										subTitleColorVariant="success"
										subTitle="+$2203"
										iconFill={true}
										bigNumber="$332,230"
										iconWidth="12px"
										iconHeight="12px"
										icon="triangle_up"
										iconStroke={true}
									></RdsBigNumber>
								</RdsWidget>
							</div>
							<div>
								<RdsWidget
									headerTitle={t("Revenue")}
									isRefreshRequired={false}
									colorVariant="gradient-primary"
									height="auto"
									bigNumberColor="white"
								>
									<RdsBigNumber
										subTitleColorVariant="warning"
										subTitle="-$1203"
										iconFill={true}
										bigNumber="$972,900"
										iconWidth="12px"
										iconHeight="12px"
										icon="triangle_down"
										iconStroke={true}
										bigNumberColor="white"
									></RdsBigNumber>
								</RdsWidget>
							</div>
						</div>
						<div className="col-md-6">
							<RdsWidget
								headerTitle={t("Profit Share")}
								isRefreshRequired={true}
							>
								<div>
									<RdsBigNumber bigNumber="$39,330"></RdsBigNumber>
									<div className="col col-sm-12">
										<RdsDoughnutChart
											id="doughnutchart"
											titleText="35K"
											subTitleText="Profit"
											height={200}
											width={255}
											labels={[
												"Total Sales - 60%",
												"Revenue - 25%",
												"Expenses - 15%",
											]}
											
											options={{
												animationEnabled: true,
												title:{
													fontColor: "#fff",
												},
												cutoutPercentage: 40,
												legend: {
													display: false,
												},
												responsive: true,
												
												subtitles: {
													fontColor: "#fff",
												},
												maintainAspectRatio: false,
												plugins: {
													series: {
														label: {
															position: "inside",
															text: "total",
															display: false,
														},
													},
													doughnutlabel: {
														labels: [
															{
																text: "550",
																font: {
																	size: 20,
																	weight: "bold",
																},
															},
															{
																text: "total",
															},
														],
													},
													
													legend: {
														display: true,
														align: "middle",
														position: "right",
														labels: {
															boxWidth: 15,
															padding: 15,
														},
													},
												},
												scales: {},
											}}
											dataSets={[
												{
													label: "Dataset 1",
													data: [60, 25, 15],
													backgroundColor: ["#ff6384", "#BF00BB", "#4bc0c0"],
													fillStyle: "blue",
													fillRect: [200, 100, 140, 100],
													borderColor: ["#fff"],
													borderWidth: 1,
													cutout: "80%",
													title: {
														text: "Doughnut Chart",
														verticalAlign: "center",
														dockInsidePlotArea: true,
													},
												},
											]}
										/>
									</div>
								</div>
							</RdsWidget>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12 col-lg-6">
					<div className="row">
						<div className="col-md-6">
							<div>
								<RdsWidget
									headerTitle={t("Call Overview")}
									isRefreshRequired={false}
									
									height="auto"
								>
									<div>
										<div className="d-flex align-items-center">
											<div className="">
												<RdsBooleanChart
													centerIconName="headset"
													id="Boolean1"
													height={100}
													width={100}
													labels={[
														t("Total Calls Connected"),
														"Total Clients Called",
													]}
													options={{
														elements: {
															center: {
																text: "50%", //set as you wish
															},
														},
														cutoutPercentage: 75,
														legend: {
															display: false,
														},
														maintainAspectRatio: false,
														responsive: true,
														plugins: {
															series: {
																label: {
																	position: "inside",
																	text: "total", // or "inside" | "outside"
																	display: false,
																},
															},
															doughnutlabel: {
																labels: [
																	{
																		text: "550",
																		font: {
																			size: 20,
																			weight: "bold",
																		},
																	},
																	{
																		text: "total",
																	},
																],
															},
															legend: {
																display: false,
																align: "start",
																position: "right",
															},
															tooltip: { enabled: false },
														},
													}}
													dataSets={[
														{
															label: "Dataset 1",
															data: [80, 100 - 80],
															fillStyle: "#E1E1E1",
															fillRect: [200, 100, 40, 10],
															backgroundColor: ["#01AE9D", "#E1E1E1"],
															borderColor: ["#fff"],
															borderWidth: 1,
															cutout: "80%",
															title: {
																text: "Doughnut Chart",
																verticalAlign: "center",
																dockInsidePlotArea: true,
															},
														},
													]}
													chartStyle={""}
												></RdsBooleanChart>
											</div>
											<div className="ms-2">
												<h5 className="custom-title">80%</h5>
												<p className="custom-desc mb-0">
													{t("Total Calls Connected")}
												</p>
											</div>
										</div>
										<div className="d-flex align-items-center mt-3">
											<div className="">
												<RdsBooleanChart
													centerIconName="users"
													id="Boolean2"
													height={100}
													width={100}
													labels={[
														"Total Client calls connected",
														"Total Client calls disconnected",
													]}
													options={{
														elements: {
															center: {
																text: "50%", //set as you wish
															},
														},
														cutoutPercentage: 75,
														legend: {
															display: false,
														},
														responsive: true,
														maintainAspectRatio: false,
														plugins: {
															series: {
																label: {
																	position: "inside",
																	text: "total", // or "inside" | "outside"
																	display: true,
																},
															},
															doughnutlabel: {
																labels: [
																	{
																		text: "550",
																		font: {
																			size: 20,
																			weight: "bold",
																		},
																	},
																	{
																		text: "total",
																	},
																],
															},
															legend: {
																display: false,
																align: "start",
																position: "right",
																fontSize: 20,
															},
															tooltip: { enabled: false },
														},
													}}
													dataSets={[
														{
															label: "Dataset 1",
															data: [65, 100 - 65],
															fillStyle: "#D0D7DD",
															fillRect: [200, 100, 40, 10],
															backgroundColor: ["#EA2745", "#E1E1E1"],
															borderColor: ["#fff"],
															borderWidth: 1,
															cutout: "80%",
															title: {
																text: "Doughnut Chart",
																verticalAlign: "center",
																dockInsidePlotArea: true,
															},
														},
													]}
													chartStyle={""}
												></RdsBooleanChart>
											</div>
											<div className="ms-2">
												<h5 className="custom-title">20%</h5>
												<p className="custom-desc mb-0">
													{t("Total Clients Called")}
												</p>
											</div>
										</div>
									</div>
								</RdsWidget>
							</div>
							<div>
								<RdsWidget
									headerTitle={t("Sales")}
									isRefreshRequired={false}
								
									height="auto"
								>
									<RdsBigNumber
										subTitleColorVariant="success"
										subTitle="-$2203"
										iconFill={true}
										bigNumber="$332,230"
										iconWidth="12px"
										iconHeight="12px"
										icon="triangle_up"
										iconStroke={true}
									></RdsBigNumber>
								</RdsWidget>
							</div>
						</div>

						<div className="col-md-6">
							<RdsWidget
								headerTitle={t("Daily Sales Growth")}
								isRefreshRequired={true}
								
							>
								<div>
									<RdsBigNumber
										bigNumber="$373,960"
										icon={"triangle_down"}
										iconHeight={"12px"}
										subTitle="-$5850"
										iconStroke={false}
										iconFill={true}
										iconWidth={"12px"}
										subTitleColorVariant="danger"
									></RdsBigNumber>
									<RdsBarChart
										id="barchart"
										height={300}
										width={300}
										labels={[
											"10k",
											"20k",
											"25k",
											"30k",
											"40k",
											"50k",
											"60k",
											"70k",
											"75k",
											"80k",
											"90k",
											"95k",
										]}
										options={{
											indexAxis: "x",
											elements: {
												bar: {
													borderWidth: 0,
													width: 1,
												},
											},
											responsive: true,
											maintainAspectRatio: false,
											plugins: {
												legend: {
													position: "",
													pointStyle: "line",
													labels: {
														usePointStyle: true,
													},
												},
												scales: {
													y: {
														beginAtZero: true,
													},
												},
												tooltip: {
													usePointStyle: true,
												},
												title: {
													display: false,
													text: "Daily Sales Growth",
												},
											},
											scales: {
												x: {
													axis: "x",
													type: "category",
													offset: true,
													grid: {
														offset: true,
														display: true,
														lineWidth: 1,
														drawBorder: true,
														drawOnChartArea: true,
														drawTicks: true,
														tickLength: 8,
														borderDash: [],
														borderDashOffset: 0,
														borderWidth: 1,
														color: "rgba(0,0,0,0.1)",
														borderColor: "rgba(0,0,0,0.1)",
													},
													ticks: {
														minRotation: 0,
														maxRotation: 50,
														mirror: false,
														textStrokeWidth: 0,
														textStrokeColor: "",
														padding: 3,
														display: true,
														autoSkip: true,
														autoSkipPadding: 3,
														labelOffset: 0,
														minor: {},
														major: {},
														align: "center",
														crossAlign: "near",
														showLabelBackdrop: false,
														backdropColor: "rgba(255, 255, 255, 0.75)",
														backdropPadding: 2,
														color: "#666",
													},
													display: true,
													reverse: false,
													beginAtZero: false,
													bounds: "ticks",
													grace: 0,
													title: {
														display: false,
														text: "",
														padding: {
															top: 4,
															bottom: 4,
														},
														color: "#666",
													},
													id: "x",
													position: "bottom",
												},
												y: {
													axis: "y",
													type: "linear",
													beginAtZero: true,
													ticks: {
														minRotation: 0,
														maxRotation: 50,
														mirror: false,
														textStrokeWidth: 0,
														textStrokeColor: "",
														padding: 3,
														display: true,
														autoSkip: true,
														autoSkipPadding: 3,
														labelOffset: 0,
														minor: {},
														major: {},
														align: "center",
														crossAlign: "near",
														showLabelBackdrop: false,
														backdropColor: "rgba(255, 255, 255, 0.75)",
														backdropPadding: 2,
														color: "#666",
													},
													display: true,
													offset: false,
													reverse: false,
													bounds: "ticks",
													grace: 0,
													grid: {
														display: true,
														lineWidth: 1,
														drawBorder: true,
														drawOnChartArea: true,
														drawTicks: true,
														tickLength: 8,
														offset: false,
														borderDash: [],
														borderDashOffset: 0,
														borderWidth: 1,
														color: "rgba(0,0,0,0.1)",
														borderColor: "rgba(0,0,0,0.1)",
													},
													title: {
														display: false,
														text: "",
														padding: {
															top: 4,
															bottom: 4,
														},
														color: "#666",
													},
													id: "y",
													position: "left",
												},
											},
										}}
										dataSets={[
											{
												label: "Sales Growth",
												data: [
													15, 67, 34, 78, 45, 87, 76, 32, 50, 14, 35, 22,
												],
												// backgroundColor: "rgba(54, 162, 235, 1)",
												backgroundColor: (
													context: ScriptableContext<"line">
												) => {
													const ctx = context.chart.ctx;
													const gradient = ctx.createLinearGradient(
														0,
														50,
														0,
														300
													);
													gradient.addColorStop(0, "rgba(54, 162, 235, 1)");
													gradient.addColorStop(
														1,
														"rgba(54, 162, 235, 0.08)"
													);
													return gradient;
												},
												borderColor: "rgba(54, 162, 245, 1)",
												borderWidth: 0,
												borderRadius: 10,
												barThickness: 7,
												borderSkipped: false,
											},
										]}
									/>
								</div>
							</RdsWidget>
						</div>
					</div>
				</div>
				<div className="col-md-12 col-lg-6">
					<RdsWidget
						headerTitle={t("Member Activity")}
						isRefreshRequired={true}
				
					// minHeight="462px"
					// style={{ overflow: "scroll" }}
					>
						<div className="table-responsive">
							<RdsTable
								tableHeightForScroll="356px"
								
								headerDatas={[
									{
										displayName: t("Member"),
										key: "member",
										dataType: "html",
									},
									{ displayName: t("Cases"), key: "cases", dataType: "html" },
									{
										displayName: t("Active"),
										key: "active",
										dataType: "html",
									},
									{
										displayName: t("Closed"),
										key: "closed",
										dataType: "html",
									},
									{ displayName: t("Rate"), key: "rate", dataType: "html" },
								]}
								tableDatas={[
									{
										id: 12,
										cases: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 10 </div>
											</div>
										),
										member: (
											<div className="d-flex align-items-center gap-2">
												<div>
													{" "}
													<img
														src="./assets/dashboard-data.png"
														width="40px"
													/>
												</div>
												<div className="">
													<p className="mb-0">
														<b>Brian</b>
													</p>
													<small className="text-muted">
														Software Developer{" "}
													</small>
												</div>
											</div>
										),
										active: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 38 </div>
											</div>
										),
										closed: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 10 </div>
											</div>
										),
										rate: (
											<div className="HighRate text-danger d-flex align-items-center justify-content-start ">
												92%
											</div>
										),
									},
									{
										id: 23,
										cases: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 18 </div>
											</div>
										),
										member: (
											<div className="d-flex align-items-center gap-2">
												<div>
													{" "}
													<img
														src="./assets/dashboard-data.png"
														width="40px"
													/>
												</div>
												<div className="">
													<p className="mb-0">
														<b>Kim</b>
													</p>
													<small className="text-muted">
														Senior Developer{" "}
													</small>
												</div>
											</div>
										),
										active: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 342 </div>
											</div>
										),
										closed: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 25 </div>
											</div>
										),
										rate: (
											<div className="MidRate text-success d-flex align-items-center justify-content-start">
												42%
											</div>
										),
									},
									{
										id: 22,
										cases: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 7 </div>
											</div>
										),
										member: (
											<div className="d-flex align-items-center gap-2">
												<div>
													{" "}
													<img
														src="./assets/dashboard-data.png"
														width="40px\"
													/>
												</div>
												<div className="">
													<p className="mb-0">
														<b>Jane</b>
													</p>
													<small className="text-muted">
														Sales Executive{" "}
													</small>
												</div>
											</div>
										),
										active: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 25 </div>
											</div>
										),
										closed: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 5 </div>
											</div>
										),
										rate: (
											<div className="HighRate text-warning d-flex align-items-center justify-content-start">
												96%
											</div>
										),
									},
									{
										id: 11,
										cases: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 14 </div>
											</div>
										),
										member: (
											<div className="d-flex align-items-center gap-2">
												<div>
													{" "}
													<img
														src="./assets/dashboard-data.png"
														width="40px\"
													/>
												</div>
												<div className="">
													<p className="mb-0">
														<b>Brian</b>
													</p>
													<small className="text-muted">
														Software Developer
													</small>
												</div>
											</div>
										),
										active: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 42 </div>
											</div>
										),
										closed: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 42 </div>
											</div>
										),
										rate: (
											<div className="LowRate text-danger d-flex align-items-center justify-content-start">
												16%
											</div>
										),
									},
									{
										id: 19,
										cases: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 13 </div>
											</div>
										),
										member: (
											<div className="d-flex align-items-center gap-2">
												<div>
													{" "}
													<img
														src="./assets/dashboard-data.png"
														width="40px\"
													/>
												</div>
												<div className="">
													<p className="mb-0">
														<b>Kath</b>
													</p>
													<small className="text-muted">Manager </small>
												</div>
											</div>
										),
										active: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 10 </div>
											</div>
										),
										closed: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 3 </div>
											</div>
										),
										rate: (
											<div className="MidRate text-success d-flex align-items-center justify-content-start">
												52%
											</div>
										),
									},
									,
									{
										id: 20,
										cases: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 13 </div>
											</div>
										),
										member: (
											<div className="d-flex align-items-center gap-2">
												<div>
													{" "}
													<img
														src="./assets/dashboard-data.png"
														width="40px\"
													/>
												</div>
												<div className="">
													<p className="mb-0">
														<b>Kath</b>
													</p>
													<small className="text-muted">Manager </small>
												</div>
											</div>
										),
										active: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 10 </div>
											</div>
										),
										closed: (
											<div className="d-flex align-items-center justify-content-start">
												<div className="text-muted"> 3 </div>
											</div>
										),
										rate: (
											<div className="MidRate text-success d-flex align-items-center justify-content-start">
												52%
											</div>
										),
									},
								]}
							></RdsTable>
						</div>
						
					</RdsWidget>
				</div>
			</div>
			<div className="row mb-4">
				<div className="col-md-12">
					<RdsWidget
						headerTitle={t("To do List")}
						isRefreshRequired={true}
						
					// minHeight="462px"
					>
						<div>
							<RdsTable
								tableHeightForScroll="360px"
								headerDatas={[
									{
										displayName: t("Project"),
										key: "project",
										dataType: "html",
									},
									{ displayName: t("Issue"), key: "issue", dataType: "html" },

									{
										displayName: t("Progress"),
										key: "progress",
										dataType: "html",
									},
								]}
								tableDatas={[
									{
										id: 1,
										issue: (
											<div className="d-flex align-items-center  \">
												<div>
													<div className="text-muted\">
														Activate your account with others intil June 2023
													</div>{" "}
												</div>
											</div>
										),

										project: (
											<div className="d-flex align-items-center ">
												<div className="ms-2 mt-2\">
													<p className="mb-1">
														<b>Volosoft</b>
													</p>
													<small className="text-muted\">Website </small>
												</div>
											</div>
										),

										progress: (
											<div>
												<div>
													<RdsProgressBar
														width={"245px"}
														displayLevel={false}
														displaypercentage={false}
														colorVariant={"primary"}
														progressWidth={40}
														role={"single"}
													></RdsProgressBar>
												</div>
												<small className="text-muted">Due in two days</small>
											</div>
										),
									},
									{
										id: 2,
										issue: (
											<div className="d-flex align-items-center  \">
												<div>
													<div className="text-muted\">
														Your Order @22345678 has been confirmed
													</div>{" "}
												</div>
											</div>
										),

										project: (
											<div className="">
												<div className="ms-2 mt-2\">
													<p className="mb-1">
														<b>ABP Framework</b>
													</p>
													<small className="text-muted\">Modules</small>
												</div>
											</div>
										),

										progress: (
											<>
												<div>
													<RdsProgressBar
														displayLevel={false}
														displaypercentage={false}
														colorVariant={"danger"}
														progressWidth={20}
														role={"single"}
														width={"245px"}
													></RdsProgressBar>
												</div>
												<small className="text-muted">Due in two days</small>
											</>
										),
									},
									{
										id: 3,
										issue: (
											<div className="d-flex align-items-center  \">
												<div>
													<div className="text-muted\">
														Create a new page for CMS
													</div>{" "}
												</div>
											</div>
										),

										project: (
											<div className="d-flex align-items-center ">
												<div className="ms-2 mt-2\">
													<p className="mb-1">
														<b>ASPNET Zero</b>
													</p>
													<small className="text-muted\">
														Payment Module
													</small>
												</div>
											</div>
										),

										progress: (
											<>
												<div>
													<RdsProgressBar
														displayLevel={false}
														displaypercentage={false}
														colorVariant={"success"}
														progressWidth={80}
														role={"single"}
													></RdsProgressBar>
												</div>
												<small className="text-muted">Due in two days</small>
											</>
										),
									},
									{
										id: 4,
										issue: (
											<div className="d-flex align-items-center  \">
												<div>
													<div className="text-muted\">Payment Module</div>{" "}
												</div>
											</div>
										),

										project: (
											<div className="d-flex align-items-center ">
												<div className="ms-2 mt-2\">
													<p className="mb-1">
														<b>Volosoft</b>
													</p>
													<small className="text-muted\">ABP framework</small>
												</div>
											</div>
										),

										progress: (
											<>
												<div>
													<RdsProgressBar
														displayLevel={false}
														displaypercentage={false}
														colorVariant={"warning"}
														progressWidth={80}
														role={"single"}
													></RdsProgressBar>
												</div>
												<small className="text-muted">Due in two days</small>
											</>
										),
									},
									{
										id: 5,
										issue: (
											<div className="d-flex align-items-center  \">
												<div>
													<div className="text-muted\">
														Activate your account with others intil June 2023
													</div>{" "}
												</div>
											</div>
										),

										project: (
											<div className="d-flex align-items-center ">
												<div className="ms-2 mt-2\">
													<p className="mb-1">
														<b>Volosoft</b>
													</p>
													<small className="text-muted\">Website </small>
												</div>
											</div>
										),

										progress: (
											<>
												<div>
													<RdsProgressBar
														displayLevel={false}
														displaypercentage={false}
														colorVariant={"primary"}
														progressWidth={40}
														role={"single"}
													></RdsProgressBar>
												</div>
												<small className="text-muted">Due in two days</small>
											</>
										),
									},
								]}
							></RdsTable>
						</div>
					</RdsWidget>
				</div>
			</div>
		</div>

	);
};

export default RdsCompAdminDashboard;
