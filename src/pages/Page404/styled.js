import styled from 'styled-components';

export const Container404 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-size-base);
  text-align: center;
  animation: .2s opacity;

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

  @keyframes opacity {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }

  @media screen and (max-height: 570px) {
    & {
      position: static;
      transform: unset;
      margin-block: 2rem;
    }
  }
`;
