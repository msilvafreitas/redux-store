import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import styled from "styled-components";
import { Item } from "../Item/Item";

interface itemProps {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
}

const Background = styled.div`
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    gap: 1.125rem;
    flex-wrap: wrap;
    max-width: 1000px;    
    margin-top: 1.125rem;
    justify-content: center;
    `;

export function Grid() {
    
    const [items, setItems] = useState<itemProps[]>([])
    

    useEffect(() => {
        api.get('products?page=1&rows=9&sortBy=id&orderBy=DESC').then(response => {
            setItems(response.data.products)
            console.log(items)
        })
      }, [])

    return (
        <Background>
            <Container>
                {items.map(item => {
                    return (
                        <Item key={item.id} name={item.name} description={item.description} price={item.price} photo={item.photo} />
                    )

                })}
            </Container>
        </Background>
    )
}