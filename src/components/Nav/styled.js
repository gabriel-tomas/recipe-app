import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 10svh;
  left: 50%;
  transform: translateX(-50%);
  transition: .3s all cubic-bezier(0.23, 1, 0.320, 1);

  &.search-active {
    bottom: 10svh;
    width: min(600px, 80%);
  }

  .container-nav-icon.button-search {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .input-search {
    display: none;
    flex-grow: 1;
    margin-inline: .5rem;
    padding-inline: .8rem;
    height: 33px;
    border-radius: 100px;
  }

  .input-search.active {
    display: block;
  }

  @media screen and (max-width: 563px) {
    &.search-active {
      width: 95%;
    }

    .input-search {
      width: 130px;
    }
  }

  @media screen and (max-width: 357px) {
    .input-search {
      width: 100px;
    }
  }
`;

export const Navigator = styled.nav`
  display: flex;
  align-items: center;
  gap: .3rem;
  background-color: var(--secondary);
  padding: .3rem 1rem;
  border-radius: 50px;

  .container-nav-icon.actived {
    background-color: var(--accent);
    box-shadow: 0 0 10px var(--neutral2);
    transition: all .5s;
  }

  .container-nav.search-active & {
    display: flex;
    justify-content: space-between;
  }

  .container-nav-icon {
    display: block;
    width: clamp(2.8rem, 2.627rem + 1.108vw, 3.25rem);
    height: clamp(2.8rem, 2.627rem + 1.108vw, 3.25rem);
    padding: clamp(0.7rem, 0.546rem + 0.985vw, 1.1rem);
    border-radius: 50%;

    &:hover {
      filter: brightness(.9);
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  button.container-nav-icon {
    background-color: unset;
  }
`;
