import React, { useEffect, useState } from "react";
import { RdsButton, RdsCheckbox, RdsDropdownList, RdsInput, RdsLabel, RdsSelectList, RdsTextArea } from "../rds-elements";

export interface RdsCompApplicationBasicProps {
	typeList: any[];
	basicData?: any;
	scopesList: any[];
	consentType: any[];
	handleSubmit: React.EventHandler<any>;
	editApplicationData?: any;
}

const RdsCompApplicationBasic = (props: RdsCompApplicationBasicProps) => {

	const [basicApplicationData, setBasicApplicationData] = useState<any>(props.basicData);
	useEffect(() => {
		setBasicApplicationData(props.basicData);
	}, [props.basicData]);

	const [errorClientId, srrorClientId] = useState("");
	const [errorDisplayName, setErrorDisplayName] = useState("");
	const [errorType, setErrorType] = useState("");
	const checkboxes = [basicApplicationData.allowAuthorizationCodeFlow, basicApplicationData.allowHybridFlow, basicApplicationData.allowPasswordFlow];
	const isDisabled = checkboxes.length > 1 && !checkboxes.some((checkbox) => checkbox);

	function setClientId(value: any) {
		if (!value && value.length === 0) {
			srrorClientId("Client is invalid");
		} else {
			srrorClientId("");
		}
		setBasicApplicationData({ ...basicApplicationData, clientId: value })
	}
	function setDisplayName(value: any) {
		if (!value && value.length === 0) {
			setErrorDisplayName("Display name is invalid");
		} else {
			setErrorDisplayName("");
		}
		setBasicApplicationData({ ...basicApplicationData, displayName: value })
	}
	function setClientUrl(value: any) {
		setBasicApplicationData({ ...basicApplicationData, clientUri: value })
	}
	function setLogoUrl(value: any) {
		setBasicApplicationData({ ...basicApplicationData, logoUri: value })
	}
	function setCredential(value: any) {
		setBasicApplicationData({ ...basicApplicationData, allowAuthorizationCodeFlow: value })
	}
	function setDevice(value: any) {
		setBasicApplicationData({ ...basicApplicationData, allowDeviceEndpoint: value })
	}
	function setImplicit(value: any) {
		setBasicApplicationData({ ...basicApplicationData, allowImplicitFlow: value })
	}
	function setHybrid(value: any) {
		setBasicApplicationData({ ...basicApplicationData, allowHybridFlow: value })
	}
	function setPassword(value: any) {
		setBasicApplicationData({ ...basicApplicationData, allowPasswordFlow: value })
	}
	function setClient(value: any) {
		setBasicApplicationData({ ...basicApplicationData, allowClientCredentialsFlow: value })
	}
	function setRedirectUris(value: any) {
		const lines = value.split('\n');

		setBasicApplicationData({ ...basicApplicationData, redirectUris: lines })
	}
	function setLogoutEndpoint(value: any) {
		setBasicApplicationData({ ...basicApplicationData, allowLogoutEndpoint: value })
	}
	function setPostLogoutRedirectUris(value: any) {
		const lines = value.split('\n');
		setBasicApplicationData({ ...basicApplicationData, postLogoutRedirectUris: lines })
	}
	function setRefresh(value: any) {
		setBasicApplicationData({ ...basicApplicationData, allowRefreshTokenFlow: value })
	}
	function setClientSecret(value: any) {
		;
		setBasicApplicationData({ ...basicApplicationData, clientSecret: value })
	}
	function setSelectedOption(value: any) {
		setBasicApplicationData({ ...basicApplicationData, type: value })
	}
	function setScopesOption(value: any) {
		setBasicApplicationData({ ...basicApplicationData, scopes: value })
	}
	function setConsentType(value: any) {
		setBasicApplicationData({ ...basicApplicationData, consentType: value })
	}


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(basicApplicationData, basicApplicationData, 'basicApplicationData');

	};



	return (
		<>
			<div className="pt-4">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className=" col-6 ">
							<RdsInput
								label="Client ID"
								placeholder="Enter Id"
								inputType="text"
								onChange={e => setClientId(e.target.value)}
								value={basicApplicationData.clientId}
								name={"clientId"}
							></RdsInput>
							{errorClientId && <span style={{ color: "red" }}>{errorClientId}</span>}
						</div>
						<div className="col-6 ">
							<RdsInput
								label="Display Name"
								placeholder="Enter Displayname"
								inputType="text"
								onChange={e => setDisplayName(e.target.value)}
								name={"displayName"}
								value={basicApplicationData.displayName}
							></RdsInput>
							{errorDisplayName && <span style={{ color: "red" }}>{errorDisplayName}</span>}
						</div>
					</div>
					<div className="row">
						<div className=" col-6 ">
							<RdsInput
								label="Client Url"
								placeholder="enter url"
								inputType="url"
								onChange={e => setClientUrl(e.target.value)}
								value={basicApplicationData.clientUri}
								name={"clientUrl"}
							></RdsInput>
						</div>
						<div className="col-6 ">
							<RdsInput
								label="Logo Url"
								placeholder="Enter logo url"
								inputType="url"
								onChange={e => setLogoUrl(e.target.value)}
								name={"logoUrl"}
								value={basicApplicationData.logoUri}
							></RdsInput>
						</div>
					</div>
					<div className="row pb-3">
						<div className=" col-6 ">
							<RdsLabel label="Type" class="pb-2" />
							<RdsSelectList
								label={"Type"}
								selectItems={props.typeList}
								selectedValue={basicApplicationData.type}
								onSelectListChange={setSelectedOption}
							></RdsSelectList>
							{errorType && <span style={{ color: "red" }}>{errorType}</span>}
						</div>
						<div className=" col-6 ">
							<RdsLabel label="Scopes" class="pb-2" />
							<RdsSelectList
								label={"Type"}
								selectItems={props.scopesList}
								selectedValue={basicApplicationData.scopes}
								isMultiple={true}
								someCallback={setScopesOption}
							></RdsSelectList>
						</div>
					</div>
					<div className="row">
						<div className=" col-6">
							<div className="row py-2">
								<RdsCheckbox
									label="Allow Authorization Code Flow"
									onChange={e => { setCredential(e.target.checked) }}
									checked={basicApplicationData.allowAuthorizationCodeFlow}
								></RdsCheckbox>
							</div>
							<div className="row py-2">
								<RdsCheckbox
									label="Allow Implicit Flow"
									onChange={e => { setImplicit(e.target.checked) }}
									checked={basicApplicationData.allowImplicitFlow}
								></RdsCheckbox>
							</div>
							<div className="row py-2">
								<RdsCheckbox
									label="Allow Hybrid Flow"
									onChange={e => { setHybrid(e.target.checked) }}
									checked={basicApplicationData.allowHybridFlow}
								></RdsCheckbox>
							</div>
							<div className="row py-2">
								<RdsCheckbox
									label="Allow Password Flow"
									onChange={e => { setPassword(e.target.checked) }}
									checked={basicApplicationData.allowPasswordFlow}
								></RdsCheckbox>
							</div>
							<div className="row py-2">
								<RdsCheckbox
									label="Allow Client Credential Flow"
									onChange={e => { setClient(e.target.checked) }}
									checked={basicApplicationData.allowClientCredentialsFlow}
									isDisabled={basicApplicationData.type === 'public'}
								></RdsCheckbox>
							</div>
							<div className="row py-2">
								<RdsCheckbox
									label="Allow Refresh Token Flow"
									onChange={e => { setRefresh(e.target.checked) }}
									checked={basicApplicationData.allowRefreshTokenFlow}
									isDisabled={isDisabled}
								></RdsCheckbox>
							</div>
							<div className="row py-2">
								<RdsCheckbox
									label="Allow Device Endpoint"
									onChange={e => { setDevice(e.target.checked) }}
									checked={basicApplicationData.allowDeviceEndpoint}
									isDisabled={basicApplicationData.type === 'public'}
								></RdsCheckbox>
							</div>
						</div>
						<div className="col-6">
							{basicApplicationData.type === 'confidential' && (
								<RdsInput
									label="Client secrete"
									placeholder="Enter client secrete"
									inputType="text"
									onChange={e => setClientSecret(e.target.value)}
									name={"clientSecret"}
									value={basicApplicationData.clientSecret}
								></RdsInput>
							)}
						</div>
					</div>
					{basicApplicationData.allowAuthorizationCodeFlow || basicApplicationData.allowImplicitFlow ||
						basicApplicationData.allowHybridFlow ? (<>
							<div className="row">
								<div className=" col-6 ">
									<RdsTextArea
										label="Redirect Uris"
										placeholder="enter redirect uris"
										onChange={e => setRedirectUris(e.target.value)}
										value={basicApplicationData.redirectUris}
										rows={3}
									/>
								</div>
								<div className="col-6 ">
									<RdsLabel label="Consent Type" class="pb-2" />
									<RdsSelectList
										label={"Consent Type"}
										selectItems={props.consentType}
										selectedValue={basicApplicationData.consentType}
										onSelectListChange={setConsentType}
									></RdsSelectList>
								</div>
							</div>
						</>) : null
					}
					<div className="row py-2">
						<div className=" col-6 ">
							<RdsCheckbox
								label="Allow Logout EndPoint"
								onChange={e => { setLogoutEndpoint(e.target.checked) }}
								checked={basicApplicationData.allowLogoutEndpoint}
							></RdsCheckbox>
						</div>
						{basicApplicationData.allowLogoutEndpoint && (
							<>
								<div className=" col-6 ">
									<RdsTextArea
										label="Post Logout Redirect Uris"
										placeholder="enter post logout redirect uris"
										onChange={e => setPostLogoutRedirectUris(e.target.value)}
										value={basicApplicationData.postLogoutRedirectUris}
										rows={3}
									/>
								</div>
							</>)
						}
					</div>
					{basicApplicationData.id && (
						<div className="row py-2">
							<RdsCheckbox
								label="Enabled"
								// onChange={true}
								checked={basicApplicationData.enabled}
							></RdsCheckbox>
						</div>
					)}
					<div className="footer-buttons justify-content-end d-flex bottom-0 pt-0" >
						<RdsButton
							class="me-2"
							type={"button"}
							label="cancel"
							size="small"
							isOutline={true}
							colorVariant="primary"
							databsdismiss="offcanvas"
							databstoggle="offcanvas"
							databstarget="#application"
						></RdsButton>
						<RdsButton
							class="me-2"
							label="SAVE"
							type="submit"
							isOutline={false}
							colorVariant="primary"
							databsdismiss="offcanvas"
							size="small"
							onClick={() => { props.handleSubmit(basicApplicationData) }}
						></RdsButton>
					</div>
				</form>
			</div>
		</>
	);
};
export default RdsCompApplicationBasic;
