import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#d49d06' : 
    'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff' : '#000dd1a')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY() (-2px);
    }
`;