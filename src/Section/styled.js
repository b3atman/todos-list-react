import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin: 10px 0;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.silver};
`;

export const Header = styled.header`
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.silver};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.title`
    font-size: 20px;
    margin: 0;
`;

export const Body = styled.body`
    padding: 20px;
`;