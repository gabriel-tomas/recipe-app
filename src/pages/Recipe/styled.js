import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin-bottom: 7.3rem;
  font-size: var(--font-size-base);
`;

export const ContainerRecipe = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
  gap: 2rem;

  .container-img > img {
    width: 100%;
    height: min(400px, 100%);
    object-fit: cover;
    border-radius: 10px;
  }

  .container-title > h1 {
    text-align: left;
    font-size: var(--font-size-lg);
  }

  .container-meal-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container-top > .container-info {
    display: flex;
    flex-direction: column;
    gap: .26rem;
    margin-top: .5rem;
  }

  .container-top > .container-info > span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .container-difficulty-rating {
    font-size: var(--font-size-sm);
    display: flex;
    justify-content: space-between;
  }

  .container-difficulty-rating .rating {
    display: flex;
    align-items: center;
  }

  .container-meal-type, .container-cuisine {
    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-sm);
  }

  .container-difficulty-rating, .container-cuisine {
    margin-top: .3rem;
  }

  .container-tags {
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
    gap: .4rem;
  }

  .container-tags-items {
    display: flex;
    flex-wrap: wrap;
    gap: .3rem;
    margin-top: .2rem;
  }

  .container-tags-items > .tag-item {
    font-size: var(--font-size-sm);
    background-color: var(--neutral1);
    border-radius: 5px;
    padding-inline: 0.2rem;
  }

  @media screen and (max-width: 640px) {
    & {
      grid-template-columns: 1fr;
    }

    .container-img > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
  }
`;

export const ContainerIngredients = styled.div`
  margin-top: 2rem;

  .container-title {
    text-align: center;
  }

  .ingredients {
    margin-top: 1.2rem;
  }

  .ingredients ul {
    list-style-type: disc;
    list-style-position: inside;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }

  .ingredients .ingredient-item {
    margin-top: .2rem;
  }

  @media screen and (max-width: 522px) {
    .ingredients ul {
      columns: 1;
      -webkit-columns: 1;
      -moz-columns: 1;
    }
  }
`;

export const ContainerInstructions = styled.div`
  margin-top: 2rem;

  .container-title {
    text-align: center;
  }

  .instructions {
    margin-top: 1.2rem;
  }

  .instructions .instruction-item {
    list-style-position: inside;
    margin-top: .35rem;
    font-size: calc(var(--font-size-base) + .2rem);
  }

  .instructions .instruction-item::marker {
    color: var(--primary);
    font-weight: 700;
  }

  .instructions .instruction-item > span {
    padding-left: .4rem;
    font-size: var(--font-size-base);
  }
`;
