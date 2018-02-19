import React from 'react';
export default ({ width, height, fill, rectangleWidth, rectangleHeight }) => (
  <div className="spinner-wrapper">
    <div className="rectangle" style={{width: rectangleWidth, height: rectangleHeight}}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="2 0 40 44">
        <g fill="#006EDB" fillRule="evenodd">
          <g  stroke={fill} strokeWidth="1.5" transform="translate(2 1)">
            <circle cx="31" cy="8.5" r="3.5">
              <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1.3s" repeatCount="indefinite" values="1;0;0;0;0;0;0;0"/>
            </circle>
            <circle cx="36" cy="19.5" r="3.5">
              <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1.3s" repeatCount="indefinite" values="0;1;0;0;0;0;0;0"/>
            </circle>
            <circle cx="31" cy="30.5" r="3.5" opacity=".3">
              <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1.3s" repeatCount="indefinite" values="0;0;1;0;0;0;0;0"/>
            </circle>
            <circle cx="20" cy="35.5" r="3.5" opacity=".3">
              <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1.3s" repeatCount="indefinite" values="0;0;0;1;0;0;0;0"/>
            </circle>
            <circle cx="9" cy="30.5" r="3.5" opacity=".3">
              <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1.3s" repeatCount="indefinite" values="0;0;0;0;1;0;0;0"/>
            </circle>
            <circle cx="4" cy="19.5" r="3.5" opacity=".3">
              <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1.3s" repeatCount="indefinite" values="0;0;0;0;0;1;0;0"/>
            </circle>
            <circle cx="9" cy="8.5" r="3.5" opacity=".3">
              <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1.3s" repeatCount="indefinite" values="0;0;0;0;0;0;1;0"/>
            </circle>
            <circle cx="20" cy="3.5" r="3.5">
              <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1.3s" repeatCount="indefinite" values="0;0;0;0;0;0;0;1"/>
            </circle>
          </g>
        </g>
      </svg>
    </div>
  </div>
);