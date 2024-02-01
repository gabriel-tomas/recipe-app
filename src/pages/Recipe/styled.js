import styled from 'styled-components';

export const ContainerRecipe = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
  gap: 2rem;

  .container-img > img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }

  .container-title > h1 {
    text-align: left;
    font-size: var(--font-size-lg);
  }

  .container-more-info {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    margin-top: .5rem;
  }

  .container-more-info > span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .container-difficulty-rating {
    margin-top: .5rem;
    font-size: var(--font-size-sm);
    display: flex;
    justify-content: space-between;
  }

  .container-difficulty-rating .rating {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 940px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
