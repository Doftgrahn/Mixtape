import React, { FC } from 'react'

interface props {
  height: number
  width: number
}

const Logo: FC<props> = ({ height, width }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 475 295" version="1.1">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Logo">
          <rect id="Rectangle" fill="#223843" x="6" y="0" width="463" height="295" rx="13"></rect>
          <rect id="Rectangle" fill="#223843" x="0" y="181" width="475" height="114" rx="13"></rect>
          <path
            d="M39,216.84375 L39,61.0819692 C39,58.7233097 39.8337229,56.4405644 41.3538487,54.6370976 L58.2807583,34.5551284 C60.1808119,32.3009178 62.9787459,31 65.9269096,31 L407.389359,31 C410.115074,31 412.722676,32.1126353 414.608752,34.0804365 L434.207675,54.5285951 C435.99207,56.3903102 436.988281,58.8693893 436.988281,61.4481586 L436.988281,216.84375 C436.988281,219.605174 434.749705,221.84375 431.988281,221.84375 L44,221.84375 C41.2385763,221.84375 39,219.605174 39,216.84375 Z"
            id="Path-4"
            fill="#C5CCCF"></path>
          <rect id="Rectangle" fill="#223843" x="99" y="100" width="274" height="81" rx="35"></rect>
          <circle id="Oval" fill="#D77A61" cx="144" cy="141" r="28"></circle>
          <circle id="Oval-Copy" fill="#D77A61" cx="331" cy="141" r="28"></circle>
        </g>
      </g>
    </svg>
  )
}

export default Logo
