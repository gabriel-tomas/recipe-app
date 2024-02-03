import styled from 'styled-components';

export const Container404 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-size-base);
  text-align: center;

  p {
    margin-top: 1.2rem;
  }

  .container-img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    min-width: 200px;
    max-width: 250px;

    img {
      width: 100%;
    }
  }
`;
