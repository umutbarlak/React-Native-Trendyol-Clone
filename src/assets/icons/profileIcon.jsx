import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const ProfileIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user-round"
    {...props}>
    <Circle cx={12} cy={8} r={5} />
    <Path d="M20 21a8 8 0 0 0-16 0" />
  </Svg>
);
export default ProfileIcon;
