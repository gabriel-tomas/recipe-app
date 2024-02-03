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
  position: relative;

  .button-menu {
    display: grid;
    place-items: center;
  }

  .button-menu > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .container-menu {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
    position: absolute;
    right: -2rem;
    bottom: -7rem;
    padding: 1.2rem 2rem;
    background-color: var(--neutral3);
    border-bottom-left-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    animation: opacity .15s cubic-bezier(0.6, 0.04, 0.98, 0.335);

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
    display: flex;
  }

  @keyframes opacity {
    0% { opacity: 0 }
    100% { opacity: 1 }
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
