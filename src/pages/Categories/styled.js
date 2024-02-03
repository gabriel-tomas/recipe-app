import styled from 'styled-components';
import fonts from '../../config/fonts';

export const ContainerCategories = styled.div`
`;

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

  .container-category {
    background-color: var(--secondary);
    border-radius: 10px;
    animation: show.3s;
    display: grid;
    place-items: center;

    .container-img {
      z-index: 1;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      transition: all .2s;
    }

    &:hover .container-img {
      filter: brightness(80%);
    }

    .container-img > img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h2 {
      z-index: 1;
      position: absolute;
      color: var(--white);
    }
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media screen and (max-width: 694px) {
    grid-template-columns: auto;
    & {
      margin-inline: 2rem;
    }
  }

  @media screen and (max-width: 573px) {
    margin-inline: 1rem;
  }

  @media screen and (max-width: 331px) {
    & {
      margin-inline: 1rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: ${fonts.fontSizeLg};
  text-align: center;
`;
