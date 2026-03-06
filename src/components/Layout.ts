import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  background-color: #F0F0DB;
`;

export const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: nowrap;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;
