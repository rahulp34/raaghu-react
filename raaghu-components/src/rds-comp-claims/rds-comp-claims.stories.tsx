import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompClaims from "./rds-comp-claims";

export default {
  title: "Components/Claims",
  component: RdsCompClaims,

  argTypes: {
    onCreate: { action: "Created" },
    onCancel: { action: " cancelled" },
  },
} as ComponentMeta<typeof RdsCompClaims>;

const Template: ComponentStory<typeof RdsCompClaims> = (args) => (
  <RdsCompClaims {...args} />
);

export const Default = Template.bind({});

Default.args = {

};
