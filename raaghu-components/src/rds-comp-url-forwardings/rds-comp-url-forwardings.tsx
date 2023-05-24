import React, { useEffect, useState } from "react";
import { RdsInput, RdsLabel } from "../rds-elements";

interface RdsCompUrlForwardingsProps{
	urlForwardingData?:any
	emitUrlForwardingData?:any
}

function RdsCompUrlForwardings(props: RdsCompUrlForwardingsProps){
	const[formData, setFormData] = useState(props.urlForwardingData)

	useEffect(()=>{
		
		setFormData(props.urlForwardingData)
	},[props.urlForwardingData])

	function handleSource(data:any){
		setFormData((prev:any)=>({...prev, source:data}))
		props.emitUrlForwardingData({...formData, source:data});
	}
	function handleTarget(data:any){
		setFormData((prev:any)=>({...prev, target:data}));
		props.emitUrlForwardingData({...formData, target:data});
	}
	return (
		<>
			<div className="tab-content">
				<form>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group mb-3">
								<RdsInput
									inputType="text"
									label="Source"
									placeholder="Type"
									required={true}
									value={formData.source}
									onChange={(e:any)=>{handleSource(e.target.value)}}
									dataTestId="source"
								></RdsInput>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group mb-3">
								<RdsInput
									inputType="text"
									label="Target"
									placeholder="Value"
									required={false}
									onChange={(e:any)=>{handleTarget(e.target.value)}}
									value={formData.target}
									dataTestId="target"
								></RdsInput>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default RdsCompUrlForwardings;
