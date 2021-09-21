import React from 'react'
import { css } from "@emotion/react";
import HashLoader from 'react-spinners/HashLoader'
const override = css`
   display: flex;
   margin: 0 auto;
   border-color: red;
   justify-content: center;
   margin-top: 40px;
`;
const MyLoader = () => {
 
    return (
        <div>  
             <HashLoader size={50}  color="#6c01c3" css={override} /> 
        </div>
    )
}

export default MyLoader
