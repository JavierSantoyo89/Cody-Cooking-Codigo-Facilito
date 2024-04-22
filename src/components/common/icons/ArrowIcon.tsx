/* eslint-disable @typescript-eslint/no-explicit-any */
const ArrowIcon = (props: any) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="currentColor"
      data-testid="arrow-icon"
      {...props}
    >
      <path
        d="M25.5 13.75H10.2875L17.275 6.7625L15.5 5L5.5 15L15.5 25L17.2625 23.2375L10.2875 16.25H25.5V13.75Z"
        fill="#50504D"
      />
    </svg>
  );
};
export default ArrowIcon;
