const Loader = ({
    size = "200px",
    ...other
}) => (
    <svg width={"50px"}
		height={size}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...other}>
       <rect x="21" y="30" width="8" height="40" fill="#ffffff">
  <animate attributeName="y" repeatCount="indefinite" dur="1.1764705882352942s" calcMode="spline" keyTimes="0;0.5;1" values="16;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.23529411764705885s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.1764705882352942s" calcMode="spline" keyTimes="0;0.5;1" values="68;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.23529411764705885s"></animate>
</rect>
<rect x="46" y="30" width="8" height="40" fill="#ffffff">
  <animate attributeName="y" repeatCount="indefinite" dur="1.1764705882352942s" calcMode="spline" keyTimes="0;0.5;1" values="19.499999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.11764705882352942s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.1764705882352942s" calcMode="spline" keyTimes="0;0.5;1" values="61.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.11764705882352942s"></animate>
</rect>
<rect x="71" y="30" width="8" height="40" fill="#ffffff">
  <animate attributeName="y" repeatCount="indefinite" dur="1.1764705882352942s" calcMode="spline" keyTimes="0;0.5;1" values="19.499999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.1764705882352942s" calcMode="spline" keyTimes="0;0.5;1" values="61.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
</rect>
    </svg>
);

export default Loader;
