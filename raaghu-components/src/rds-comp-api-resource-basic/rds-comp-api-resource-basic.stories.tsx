
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompApiResourceBasic from "./rds-comp-api-resource-basic";

export default {
  title: "Components/Api Resource Basic",
  component: RdsCompApiResourceBasic,

} as ComponentMeta<typeof RdsCompApiResourceBasic>;


const Template: ComponentStory<typeof RdsCompApiResourceBasic> = (args) => 
  <RdsCompApiResourceBasic {...args} />;


export const Default = Template.bind({});

Default.args ={
    resourceData:{
        "Name": "",
        "Displayname": "",
        "Description": "",
        checklist:[
            {
              "id": 1,
              "label": "Enables",
              "checked": false,
              "disabled": false
            },
            {
              "id": 2,
              "label": "Required",
              "checked": false,
              "disabled": false
            },
            {
                "id": 3,
                "label": "Emphasize",
                "checked": false,
                "disabled": false
              },
              {
                "id": 4,
                "label": "Show in discovery Documents",
                "checked": false,
                "disabled": false
              },
          ]
        
      }
}

