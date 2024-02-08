import styled from 'styled-components';

export const ContainerNotFound = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  animation: .2s opacity;

  h1 {
    text-align: center;
    margin-bottom: 4rem;
    font-size: var(--font-size-lg);
    font-weight: 500;
  }

  .message-paragraph {
    margin-bottom: 3rem;
    font-size: var(--font-size-base);
    font-weight: 500;
  }

  .container-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(230px, 100%, 400px);

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
      margin-inline: auto;
    }
  }
`;
