import React from 'react'
import { Wrapper } from './deleteBin.styles'

const DeleteBin = ({ className, onClick }) => (
  <Wrapper className={className} onClick={onClick}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 224 224'
      width='24'
      height='24'
    >
      <g
        fill='none'
        strokeMiterlimit='10'
        fontFamily='none'
        fontWeight='none'
        fontSize='none'
        textAnchor='none'
        style={{ mixBlendMode: 'normal' }}
      >
        <path d='M0,224v-224h224v224z' />
        <path
          d='M93.33333,18.66667l-9.33333,9.33333h-46.66667v18.66667h28h93.33333h28v-18.66667h-46.66667l-9.33333,-9.33333zM46.66667,65.33333v121.33333c0,10.26667 8.4,18.66667 18.66667,18.66667h93.33333c10.26667,0 18.66667,-8.4 18.66667,-18.66667v-121.33333z'
          fill='#2a3166'
        />
      </g>
    </svg>
  </Wrapper>
)

export default DeleteBin
