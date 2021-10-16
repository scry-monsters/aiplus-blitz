import css from "styled-jsx/css"

const styles = css.global`
  .embla {
    position: relative;
    /* background-color: #f7f7f7; */
    padding: 20px;
    /* max-width: 670px; */
    margin-left: auto;
    margin-right: auto;
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
  }

  .embla__slide {
    padding-left: 10px;
    /* min-width: 100%; */
    position: relative;
    flex: 0 0 255px;
  }

  .embla__slide__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
  }
  .embla__slide__inner > .slider__item {
    height: 100%;
  }

  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    /* opacity: 0; */
    transform: translate(-50%, -50%);

    transform: translate(0%, -100%);
    /* top: auto !important;
  left: auto !important;
  right: auto !important;
  bottom: auto !important; */
    inset: auto !important;
    /* transition: opacity 0.2s ease-in-out; */
  }

  /* .embla__slide.has-loaded .embla__slide__img {
  opacity: 1;
} */

  .embla__button {
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    fill: #1bcacd;
    padding: 0;
  }

  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
  }

  .embla__button--prev {
    left: 27px;
  }

  .embla__button--next {
    right: 27px;
  }
`
export default styles