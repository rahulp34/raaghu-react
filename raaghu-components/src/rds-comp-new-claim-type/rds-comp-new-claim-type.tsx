import React from 'react'
import { RdsInput, RdsTextArea } from '../rds-elements'

export interface RdsCompNewClaimTypeProps {

}

const RdsCompNewClaimType = () => {
  return (
    <>

<div>
    <div className='mb-3 row'>
        <RdsInput label="Name" placeholder='Enter  name'  required={true} />
    </div>
    <div className="mb-3 row">
        <div className="col-6">  <RdsInput label="Regex"   required={true} /></div>
        <div className="col-6">  <RdsInput label="Value Type"  required={true} placeholder='Enter a value' /></div>
    </div>
    <div className='mb-3 row'>
        <RdsInput label="Regex Description"   required={true} />
    </div>
    <div className='mb-3 row'>
        <RdsInput label="Description"  required={true}  />
    </div>
</div>
    </>
  )
}

export default RdsCompNewClaimType;