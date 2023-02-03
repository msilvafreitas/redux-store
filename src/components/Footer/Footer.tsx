import styled from "styled-components";

const Note = styled.div`
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
    width: 100vw;
    height: 34px;
    margin-top: 1rem;
    bottom: 0;
    @media (min-width: 925px) {
        position: absolute;
        bottom: 0;
    }
`;

export function Footer() {
    return (
        <Note>         
            MKS sistemas © Todos os direitos reservados
        </Note>
    )
}