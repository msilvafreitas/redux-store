import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SwipeableDrawer } from '@mui/material';
import { useState } from "react";

// const [showCart, setShowCart] = useState(false);

// const toggleDrawer =
// (open: boolean) =>
// (event: React.KeyboardEvent | React.MouseEvent) => {
//   if (
//     event &&
//     event.type === 'keydown' &&
//     ((event as React.KeyboardEvent).key === 'Tab' ||
//       (event as React.KeyboardEvent).key === 'Shift')
//   ) {
//     return;
//   }

//   setShowCart(open);
// };


const MKS = styled.span`
    font-weight: 600;
    font-size: 2rem;
    color: #FFFFFF;
    @media (min-width: 768px) {
        font-size: 2.5rem;
  }

`;

const Sistemas = styled.span`
    font-weight: 300;
    font-size: 1rem;
    margin-left: 0.4rem;
    position: relative;
    bottom: 0.125rem;
    color: #FFFFFF;
    @media (min-width: 768px) {
        font-size: 1.125rem;
        margin-left: 0.625rem;
        bottom: 0.25rem;
  }
`;

const Button = styled.button`
  color: black;
  width: 3.25rem;
  height: 1.625rem;
  background-color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.75rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Montserrat', sans-serif;
  @media (min-width: 768px) {
    width: 5.6rem;
    height: 2.8rem;
    font-size: 1.125rem;
  }
`;

const Wrapper = styled.section`
    width: 100vw;
    background-color: #0F52BA;
    height: 3rem;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding-left: 1.25rem;
    padding-right: 1.4rem;
    @media (min-width: 768px) {
        height: 6.3rem;
        padding-left: 3.9375rem;
        padding-right: 5.5rem;
  }
`;

export function Header() {


    return (
        <Wrapper>
            <div>
                <MKS>MKS</MKS>
                <Sistemas>Sistemas</Sistemas>
            </div>
            {/* <SwipeableDrawer
                open={showCart}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            ></SwipeableDrawer> */}
            <Button>
                <ShoppingCartIcon fontSize='inherit' />
                <span>0</span>
            </Button>
        </Wrapper>
    )
}