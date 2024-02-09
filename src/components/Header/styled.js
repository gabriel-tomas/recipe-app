import styled from 'styled-components';
import fonts from '../../config/fonts';

export default styled.header`
  border-bottom: 1px solid var(--neutral1);
  padding-block: .8rem;
  display: flex;
  justify-content: space-between;
  font-size: ${fonts.fontSizeBase};
  align-items: center;
  padding-inline: 2rem;
  gap: 2rem;

  h1 {
    font-size: ${fonts.fontSizeMd};
  }

  @media screen and (max-width: 464px) {
    gap: unset;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  .button-search {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
  }

  .button-search > svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  .input-search {
    background-color: var(--neutral1);
    padding: .3rem 1rem;
    border-radius: 1000px;
    visibility: hidden;
    width: 0%;
    opacity: 0.2;
    transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  .input-search.on {
    visibility: visible;
    width: 100%;
    opacity: 1;
  }
`;

export const ContainerMenu = styled.div`
  .button-menu {
    display: grid;
    place-items: center;
  }

  .button-menu > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .container-menu {
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
    position: absolute;
    top: 0;
    right: 0;
    width: min(60vw, 350px);
    padding: 1.2rem 2rem;
    background-color: var(--neutral3);
    border-bottom-left-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    height: 100%;
    z-index: 3;

    .exit-menu {
      position: absolute;
      top: 0;
      left: 0;
      margin: clamp(0.1rem, -0.323rem + 2.708vw, 1.2rem);
      margin-top: 1.2rem;
      height: unset;

      &:active {
        background-color: unset;
      }

      svg {
        width: 1.4rem;
        height: 1.4rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  .container-menu.on {
    right: 0;
    visibility: visible;
  }

  @media screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const ContainerNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;
