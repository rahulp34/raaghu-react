import React, { ReactNode } from "react";
import { RdsModal, RdsIcon, RdsButton, RdsLabel } from '../rds-elements';
export interface RdsCompAlertPopupProps {
  alertID: any;
  iconUrl?: string;
  colorVariant?: string;
  alertConfirmation?: string;
  messageAlert?: string;
  cancelButtonLabel?: string;
  deleteButtonLabel?: string;
  cancelButtonColor?: string;
  deleteButtonColor?: string;

  onSuccess?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
}
const RdsCompAlertPopup = (props: RdsCompAlertPopupProps) => {
  let iconUrl = props.iconUrl || "delete";
  let colorVariant = props.colorVariant || "danger";
  let alertConfirmation = props.alertConfirmation || "Are you sure?";
  let messageAlert =
    props.messageAlert || "The record will be deleted permanently";
  let CancelButtonLabel = props.cancelButtonLabel || "Cancel";
  let DeleteButtonLabel = props.deleteButtonLabel || "Delete";
  return (
    <div>
      <RdsModal
        modalId={props.alertID}
        modalBackdrop="static"
        preventEscapeKey={false}
        modalAnimation="modal fade"
        showModalFooter={false}
        showModalHeader={false}
        scrollable={false}
        size='default'
        verticallyCentered={true}
      >
        <div className="text-center  py-3 px-4 ">
          <p className="align-items-center d-flex justify-content-center">
            <RdsIcon
              height="40px"
              width="40px"
              name={iconUrl}
              fill={false}
              stroke={true}
              colorVariant={colorVariant}
              classes="border-danger p-2 border rounded-5"
            />
          </p>
          <h4 className="text-dark mt-4">
            <RdsLabel label={alertConfirmation} />
          </h4>
          <span>
            <RdsLabel class="text-muted" label={messageAlert} />
          </span>
          <div className="mt-4 d-flex gap-3 justify-content-center">
            <RdsButton
              onClick={props.onCancel}
              class="px-2"
              databsdismiss="modal"
              arialabel="close"
              label={CancelButtonLabel}
              size="'small'"
              type="button"
              tooltipTitle=""
              colorVariant="danger"
              isOutline={true}
            />
            <RdsButton
              type="button"
              class="px-2 text-white"
              label={DeleteButtonLabel}
              size="'small'"
              tooltipTitle=""
              colorVariant="danger"
              databsdismiss="modal"
              arialabel="close"
              onClick={props.onSuccess}
            />
          </div>
        </div>
      </RdsModal>
    </div>
  );
};

export default RdsCompAlertPopup;
