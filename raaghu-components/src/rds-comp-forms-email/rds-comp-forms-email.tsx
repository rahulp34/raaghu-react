import { RdsButton, RdsInput, RdsTextArea, RdsTextEditor } from '../rds-elements';
import React, { useEffect, useState } from "react";

export interface RdsCompFormsEmailProps {
    formsEmailData?: any;
    handleSubmit: React.EventHandler<any>;
}

const RdsCompFormsEmail = (props: RdsCompFormsEmailProps) => {
    const [emailData, setEmailData] = useState<any>(props.formsEmailData);
    function setTo(value: any) {
        setEmailData({ ...emailData, to: value })
    }
    function setSubject(value: any) {
        setEmailData({ ...emailData, subject: value })
    }
    function setBody(value: any) {
        setEmailData({ ...emailData, body: value })
    }
    const isEmailValid = (email: any) => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!emailData.to || !emailPattern.test(emailData.to)) {
            return false;
        }
        return true;
    };
    const isFormValid = isEmailValid(emailData.to);

    useEffect(() => {
        setEmailData(props.formsEmailData);
    }, [props.formsEmailData])
    return (
        <>
            <div className="ps-2">
                <RdsInput required={true} inputType="email" label="To" value={emailData.to} onChange={(e) => setTo(e.target.value)} dataTestId="email"></RdsInput>
                <RdsInput label="Subject" value={emailData.subject} onChange={(e) => setSubject(e.target.value)} dataTestId="subject"></RdsInput>
                <div className="pt-3">
                    <RdsTextEditor label="Body" value={emailData.body} onChange={(e) => setBody(e)} placeholder={""} ></RdsTextEditor >
                </div>
                <div className="footer-buttons my-2">
                    <div className="row">
                        <div className="col-md-12 d-flex">
                            <div>
                                <RdsButton
                                    label="Cancel"
                                    type="button"
                                    colorVariant="primary"
                                    size="small"
                                    databsdismiss="offcanvas"
                                    isOutline={true}
                                ></RdsButton>
                            </div>
                            <div>
                                <RdsButton
                                    label="SEND"
                                    type="button"
                                    size="small"
                                    class="ms-2"
                                    colorVariant="primary"
                                    databsdismiss="offcanvas"
                                    onClick={() => props.handleSubmit(emailData)}
                                    isDisabled={!isFormValid}
                                    dataTestId="send"
                                ></RdsButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RdsCompFormsEmail;
