import styled from 'styled-components';

export const ContainerRecipes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-size: var(--font-size-base);

  a.recipe-item:hover {
    text-decoration: none;
  }

  .recipe-item {
    background-color: var(--backgroundCard);
    border-radius: 10px;
    animation: show .3s;
  }

  .container-img > img {
    width: 100%;
    height: clamp(12.5rem, 10.096rem + 15.385vw, 18.75rem);
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .container-img > .container-svg {
    width: 100%;
    height: clamp(12.5rem, 10.096rem + 15.385vw, 18.75rem);
    display: grid;
    place-items: center;
  }

  .container-bottom {
    padding: 1rem;
  }

  .container-bottom h1 {
    font-size: var(--font-size-base);
  }

  .container-meal-info {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    margin-top: .6rem;
  }

  .container-meal-info > span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .container-difficulty-rating {
    margin-top: .6rem;
    font-size: var(--font-size-sm);
    display: flex;
    justify-content: space-between;
  }

  .container-difficulty-rating .rating {
    display: flex;
    align-items: center;
  }

  @keyframes show {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
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
