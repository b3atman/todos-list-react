import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 70%, 30%);

        &:hover {
            background-color: hsl(120, 70%, 35%);
        }

        &:active {
            background-color: hsl(120, 70%, 40%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(350, 80%, 40%);

        &:hover {
            background-color: hsl(350, 80%, 45%);
        }

        &:active {
            background-color: hsl(350, 80%, 50%);
        }
    `}
`;