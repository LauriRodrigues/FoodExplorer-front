import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    background: ${({theme}) => theme.COLORS.RED_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    border-radius: 1rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    
    &:disabled {
        cursor: auto;
        opacity: 0.5;
    }
`;