import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompEmailSettings from "./rds-comp-email-settings";

export default {
  title: "Components/Email Settings",
  component: RdsCompEmailSettings,

} as ComponentMeta<typeof RdsCompEmailSettings>;


const Template: ComponentStory<typeof RdsCompEmailSettings> = (args) => 
  <RdsCompEmailSettings {...args} />;


export const Default = Template.bind({});

Default.args ={
    emailSettings: {
        "currentEmail": "niphy.anto@waiin.com",
        "newEmail": "abc@waiin.com",
        "confirmEmail": "abc@waiin.com"
      }
}