import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompNewLanguage from "./rds-comp-new-language";

export default {
  title: "Components/New Language",
  component: RdsCompNewLanguage,
} as ComponentMeta<typeof RdsCompNewLanguage>;

const Template: ComponentStory<typeof RdsCompNewLanguage> = (args) => (
  <RdsCompNewLanguage {...args} />
);

export const Default = Template.bind({});

Default.args = {
 flags : [
		{ option: "ad" },
		{ option: "ae" },
		{ option: "af" },
		{ option: "ag" },
		{ option: "ai" },
	],
languageNames :  [
		{ option: "Invariant Language ()" },
		{ option: "Afar (aa)" },
		{ option: "Afar (Djibouti) (aa-DJ)" },
		{ option: "Afar (Eritrea) (aa-ER)" },
		{ option: "Afar (Ethiopia) (aa-ET)" },
		{ option: "Afrikaans (af)" },
		{ option: "Afrikaans (Namibia) (af-NA)" },
		{ option: "Afrikaans (South Africa) (af-ZA)" },
		{ option: "Aghem (agq)" },
		{ option: "Aghem (Cameroon) (agq-CM)" },
		{ option: "Akan (ak)" },
	]

};
