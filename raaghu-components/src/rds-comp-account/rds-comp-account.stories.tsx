/* eslint-disable */
import RdsCompAccount from './rds-comp-account';

export default {
  title: "RdsCompAccount",
};

export const Default = () => <RdsCompAccount />;

Default.story = {
  name: 'default',
}
Default.args = {
 versionList: [{ option: "1" }, { option: "2" },{ option: "3" }],
 twoFactList:[{option: "Optional" }, { option: "Disabled" },{ option: "Forced" }]
};

