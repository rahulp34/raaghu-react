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
		setBasicApplicationData({ ...basicApplicationData, allowLogoutEndpoint: value });
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
	};


    const isClientIdValid = (id: any) => {
		if (!id || id.length === 0) {
		  return false;
		}
		return true;
	  };
	
	  const isDisplayNameValid = (name: any) => {
		if (!name || name.length === 0) {
		  return false;
		}
		return true;
	  };

	  const isFormValid = isClientIdValid(basicApplicationData.clientId) && isDisplayNameValid(basicApplicationData.displayName)

	return (
		<>
			<div className="pt-4">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-12 col-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
							<RdsInput
								label="Client Id"
								placeholder="Enter Id"
								inputType="text"
								onChange={(e:any) => setClientId(e.target.value)}
								value={basicApplicationData.clientId}
								name={"clientId"}
								required={true}
							></RdsInput>
							{errorClientId && <span className="text-danger">{errorClientId}</span>}
						</div>
						<div className="col-12 col-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
							<RdsInput
							    required={true}
								label="Display Name"
								placeholder="Enter Display Name"
								inputType="text"
								onChange={e => setDisplayName(e.target.value)}
								name={"displayName"}
								value={basicApplicationData.displayName}
							></RdsInput>
							{errorDisplayName && <span className="text-danger">{errorDisplayName}</span>}
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-6 col-lg-6 col-md-6 col-xl4 col-xxl-6 mb-4">
							<RdsInput
								label="Client Uri"
								placeholder="Enter Url"
								inputType="url"
								onChange={e => setClientUrl(e.target.value)}
								value={basicApplicationData.clientUri}
								name={"clientUrl"}
								required={false}
							></RdsInput>
						</div>
						<div className="col-12 col-6 col-lg-6 col-md-6 col-xl4 col-xxl-6 mb-4">
							<RdsInput
								label="Logo Uri"
								placeholder="Enter Uri"
								inputType="url"
								onChange={e => setLogoUrl(e.target.value)}
								name={"logoUrl"}
								value={basicApplicationData.logoUri}
								required={false}
							></RdsInput>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-6 col-lg-6 col-md-6 col-xl4 col-xxl-6 mb-3">
							<RdsLabel label="Type" class="pb-2" />
							<RdsSelectList
								label={"Type"}
								selectItems={props.typeList}
								selectedValue={basicApplicationData.type}
								onSelectListChange={setSelectedOption}
							></RdsSelectList>
							{errorType && <span className="text-danger">{errorType}</span>}
						</div>
						<div className="col-12 col-6 col-lg-6 col-md-6 col-xl4 col-xxl-6 mb-3">
							<RdsLabel label="Scopes" class="pb-2" />
							<RdsSelectList
								label={"Ecoped"}
								selectItems={props.scopesList}
								selectedValue={basicApplicationData.scopes}
								isMultiple={true}
								someCallback={setScopesOption}
							></RdsSelectList>
						</div>
					</div>
					<div className="row ">
						{basicApplicationData.type === 'confidential' && (
							<RdsInput
								label="Client Secrete"
								placeholder="Enter Secrete"
								inputType="text"
								onChange={e => setClientSecret(e.target.value)}
								name={"clientSecret"}
								value={basicApplicationData.clientSecret}
							></RdsInput>
						)}
					</div>
					<div className="row">
						<div className="col-12 col-6 col-lg-6 col-md-6 col-xl4 col-xxl-6 mb-0 mb-lg-3 mb-xl-3 mb-xxl-3">
							<RdsCheckbox
								classes="py-2"
								label="Allow Authorization Code Flow"
								onChange={e => { setCredential(e.target.checked) }}
								checked={basicApplicationData.allowAuthorizationCodeFlow}
							></RdsCheckbox>
							<RdsCheckbox
								classes="py-2"
								label="Allow Implicit Flow"
								onChange={e => { setImplicit(e.target.checked) }}
								checked={basicApplicationData.allowImplicitFlow}
							></RdsCheckbox>
							<RdsCheckbox
								classes="py-2"
								label="Allow Hybrid Flow"
								onChange={e => { setHybrid(e.target.checked) }}
								checked={basicApplicationData.allowHybridFlow}
							></RdsCheckbox>
							<RdsCheckbox
								classes="py-2"
								label="Allow Refresh Token Flow"
								onChange={e => { setRefresh(e.target.checked) }}
								checked={basicApplicationData.allowRefreshTokenFlow}
								isDisabled={isDisabled}
							></RdsCheckbox>
						</div>
						<div className="col-12 col-6 col-lg-6 col-md-6 col-xl4 col-xxl-6 mb-3">
							<RdsCheckbox
								classes="py-2"
								label="Allow Password Flow"
								onChange={e => { setPassword(e.target.checked) }}
								checked={basicApplicationData.allowPasswordFlow}
							></RdsCheckbox>
							<RdsCheckbox
								classes="py-2"
								label="Allow Client Credential Flow"
								onChange={e => { setClient(e.target.checked) }}
								checked={basicApplicationData.allowClientCredentialsFlow}
								isDisabled={basicApplicationData.type === 'public'}
							></RdsCheckbox>
							<RdsCheckbox
								classes="py-2"
								label="Allow Device Endpoint"
								onChange={e => { setDevice(e.target.checked) }}
								checked={basicApplicationData.allowDeviceEndpoint}
								isDisabled={basicApplicationData.type === 'public'}
							></RdsCheckbox>
						</div>
					</div>
					{basicApplicationData.allowAuthorizationCodeFlow || basicApplicationData.allowImplicitFlow ||
						basicApplicationData.allowHybridFlow ? (<>
							<RdsLabel label="Consent Type" class="py-2" />

							<RdsSelectList
								classes="mb-3"
								label={"Consent Type"}
								selectItems={props.consentType}
								selectedValue={basicApplicationData.consentType}
								onSelectListChange={setConsentType}
							></RdsSelectList>
							<div className="row">
								<RdsTextArea
									label="Redirect Uris"
									placeholder="Enter uris"
									onChange={e => setRedirectUris(e.target.value)}
									value={basicApplicationData.redirectUris}
									rows={3}
								/>
							</div>
							<div className=" col-6 py-3">
								<RdsCheckbox
									label="Allow Logout EndPoint"
									onChange={e => { setLogoutEndpoint(e.target.checked) }}
									checked={basicApplicationData.allowLogoutEndpoint}
								></RdsCheckbox>
							</div>
						</>) : null
					}
					<div className="row">
						{basicApplicationData.allowLogoutEndpoint && (
							<>
								<RdsTextArea
									label="Post Logout Redirect Uris"
									placeholder="Enter uris"
									onChange={e => setPostLogoutRedirectUris(e.target.value)}
									value={basicApplicationData.postLogoutRedirectUris}
									rows={3}
								/>
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
					<div className="footer-buttons my-2" >
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
							isDisabled={!isFormValid}
							onClick={() => { props.handleSubmit(basicApplicationData) }}
						></RdsButton>
					</div>
				</form>
			</div>
		</>
	);
};
export default RdsCompApplicationBasic;
