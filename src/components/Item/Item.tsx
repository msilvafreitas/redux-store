import styled from 'styled-components';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Product = styled.div`
    height: 20.5rem;
    width: 15.68rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.13);
    @media (min-width: 768px) {
        height: 17.81rem;
        width: 13.625rem;
  }

`;

const Picture = styled.img`
    margin-bottom: 0.8rem;
    height: 138px;
    `;

const HeadItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    justify-items: center;
    `;

const Name = styled.p`
    font-size: 1rem;
    color: #2C2C2C;
    margin-left: 0.875rem;
    width: 7.7rem;
    max-width: 8.9rem;
    margin-right: 0.3rem;
    @media (min-width: 768px) {
        margin-right: 0;
  }
`;

const Price = styled.span`
    background-color: #373737;
    font-size: 15px;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-right: 0.75rem;
    height: 1.8rem;
    margin-top: 3px;
    color: #FFFFFF;
    
`;
const Description = styled.p`
    margin-top: 0.7rem;
    font-weight: 300;
    font-size: 0.625rem;
    color: #2C2C2C;
    margin-left: 0.875rem;
`;

const BuyButton = styled.button`
    margin-top: 0.9rem;
    color: #FFFFFF;
    background-color: #0F52BA;
    font-weight: 600;
    font-size: 15px;
    width: 100%;
    border: none;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    @media (min-width: 768px) {
        height: 2rem;
  }
`;
export function Item(props: { name: string, description: string, price: number, photo: string }) {
    return (
        <Product>
            <BuyButton><LocalMallOutlinedIcon fontSize='inherit' /> COMPRAR</BuyButton>
            <Description>{props.description}</Description>
            <HeadItem>
                <Name>{props.name}</Name>
                <Price>R${Math.floor(props.price)}</Price>
            </HeadItem>

            <Picture src={props.photo} alt={props.name} />

        </Product>
    )
}