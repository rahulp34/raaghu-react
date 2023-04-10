import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompSyntaxHighlighter from './rds-comp-syntax-highlighter'

export default {
  title: "Components/AlertPopup",
  component: RdsCompSyntaxHighlighter,
} as ComponentMeta<typeof RdsCompSyntaxHighlighter>;

const Template: ComponentStory<typeof RdsCompSyntaxHighlighter> = (args) => (
  <>
    {/* // Button trigger modal  */}
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#alert_popup"
    >
      Alert popup
    </button>
    <RdsCompSyntaxHighlighter {...args} />
  </> 
);

export const Default = Template.bind({});

Default.args = {
  alertID: "alert_popup",
  iconUrl: "delete",
  colorVariant: "danger",
  alertConfirmation: "Are you sure to Delete",
  messageAlert: "The record will be deleted permanently",
  cancelButtonLabel: "Cancel",
  deleteButtonLabel: "Delete",
};
