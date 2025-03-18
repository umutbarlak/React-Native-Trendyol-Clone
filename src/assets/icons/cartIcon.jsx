import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const CartIcon = props => (
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
    className="lucide lucide-shopping-cart"
    {...props}>
    <Circle cx={8} cy={21} r={1} />
    <Circle cx={19} cy={21} r={1} />
    <Path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </Svg>
);
export default CartIcon;
