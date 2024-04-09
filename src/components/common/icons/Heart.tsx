const SvgComponent = ({ isFavorite }: { isFavorite: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={95}
    fill="none"
  >
    <g filter="url(#a)">
      <path
        fill={isFavorite ? '#058240 ' : '#fafafa'}
        d="m38 59-3.77-3.38C20.84 43.657 12 35.768 12 26.086 12 18.198 18.292 12 26.3 12c4.524 0 8.866 2.075 11.7 5.353C40.834 14.075 45.176 12 49.7 12 57.708 12 64 18.198 64 26.087c0 9.682-8.84 17.57-22.23 29.558L38 59Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={100}
        height={95}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={12} dy={12} />
        <feGaussianBlur stdDeviation={12} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_248_305" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_248_305"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
