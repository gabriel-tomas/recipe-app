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
    background-color: var(--neutral1);
    border-radius: 10px;
    animation: show.3s;
    display: grid;
    place-items: center;
    animation: show .3s;
    height: calc(100% - 3px);

    .container-img {
      z-index: 1;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      transition: all .2s;
    }

    .container-img > .container-svg {
      width: 100%;
      height: 260px;
      display: grid;
      place-items: center;
    }

    &:hover .container-img {
      filter: brightness(80%);
    }

    .container-img > img {
      border-radius: 10px;
      width: 100%;
      height: clamp(12.5rem, 10.096rem + 15.385vw, 18.75rem);
      object-fit: cover;
      animation: show .3s;
    }

    h2 {
      z-index: 1;
      position: absolute;
      color: var(--white);
    }

    @keyframes show {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
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
    .container-img > img {
      width: 100%;
      height: 100%;
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
