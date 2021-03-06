/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    font-size: 18px;
    text-align: justify;
    color: ${props => props.theme.theme().fg};
`;
