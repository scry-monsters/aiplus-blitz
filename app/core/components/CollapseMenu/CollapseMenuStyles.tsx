import css from "styled-jsx/css"

export const collapseMenuStyles = css.global`
  .collapse-menu {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .collapse-menu > li {
    padding: 0;
  }
  .collapse-menu .collapse-menu__item {
    width: 100%;
    background: #e8e8e8;
    border-radius: 2rem;
  }
  .collapse-menu .collapse-menu__btn {
    font-size: 14px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #1e1e1e;
    position: relative;
    display: block;
    padding: 9px 15px;
    padding: 0.5625rem 0.9375rem;
    border-radius: 32px;
    border-radius: 2rem;
    background-color: #fff;
    border: 1px solid #fabf36;
    width: 100%;
    text-align: start;
  }
`
