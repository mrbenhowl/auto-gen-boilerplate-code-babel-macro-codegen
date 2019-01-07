import React from 'react'
import { Wrapper } from './deleteBin.styles'

const DeleteBin = ({ className, onClick }) => (
  <Wrapper className={className} onClick={onClick}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 224 224' width='60'
      height='60'>
      <g fill='none' strokeMiterlimit='10' fontFamily='none' fontWeight='none'
        fontSize='none' textAnchor='none' style={{ mixBlendMode: 'normal' }}>
        <path d='M0,224v-224h224v224z' />
        <path d='M97.06667,22.4c-1.99785,-0.02711 -3.92324,0.74754 -5.34562,2.15074c-1.42238,1.4032 -2.22311,3.31789 -2.22313,5.31593h-44.69792c-2.69275,-0.03808 -5.19741,1.37667 -6.55489,3.70252c-1.35749,2.32585 -1.35749,5.20245 0,7.5283c1.35749,2.32585 3.86215,3.7406 6.55489,3.70252h134.4c2.69275,0.03808 5.19741,-1.37667 6.55489,-3.70252c1.35749,-2.32585 1.35749,-5.20245 0,-7.5283c-1.35749,-2.32585 -3.86215,-3.7406 -6.55489,-3.70252h-44.69792c-0.00002,-1.99804 -0.80074,-3.91273 -2.22313,-5.31593c-1.42238,-1.4032 -3.34777,-2.17785 -5.34562,-2.15074zM44.8,59.73333v119.46667c0,8.25067 6.68267,14.93333 14.93333,14.93333h104.53333c8.25067,0 14.93333,-6.68267 14.93333,-14.93333v-119.46667z'
          fill='#2a3166' />
      </g>
    </svg>
  </Wrapper>
)

export default DeleteBin
