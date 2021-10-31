import css from "styled-jsx/css"

const styles = css`
  .testimons {
    font-family: "Roboto", Roboto, sans-serif;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .testimons .testimons-video__container {
    margin: 0 auto;
    width: 95%;
  }
  .testimons .testimons-video__container h1 {
    font-size: 40px;
    font-weight: 500;
    margin: 2rem 0 2rem 1rem;
    color: #000;
  }
  @media (min-width: 1400px) {
    .testimons .testimons-video__container h1 {
      margin: 2rem 0 2rem 2.5rem;
    }
  }
  @media (max-width: 1200px) {
    .testimons .testimons-video__container h1 {
      margin: 2rem 0 2rem 3.5rem;
    }
  }
  @media (max-width: 990px) {
    .testimons .testimons-video__container h1 {
      margin: 2rem 0 2rem 0rem;
    }
  }
  @media (max-width: 766px) {
    .testimons .testimons-video__container h1 {
      margin: 2rem 0 2rem 5rem;
    }
  }
  @media (max-width: 490px) {
    .testimons .testimons-video__container h1 {
      margin: 2rem 0 2rem 3rem;
    }
  }
  @media (max-width: 475px) {
    .testimons .testimons-video__container h1 {
      margin: 2rem 0 2rem 2rem;
    }
  }
  @media (max-width: 400px) {
    .testimons .testimons-video__container h1 {
      margin: 2rem 0 2rem 1rem;
    }
  }
  @media (max-width: 340px) {
    .testimons .testimons-video__container h1 {
      margin: 2rem 0 2rem 0rem;
    }
  }
  .testimons .testimons-video__container .testimons__videos {
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .testimons .testimons-video__container .testimons__videos .testimons__video {
    margin: 0 auto 3rem;
  }
  .testimons .testimons__btns {
    margin-top: 2rem;
    gap: 1rem;
    max-width: 420px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
  @media (max-width: 417px) {
    .testimons .testimons__btns {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .testimons .testimons__btns .testimons__btn {
    width: auto;
    height: 36px;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding: 8px 13px;
    font-size: 13px;
    background-color: #fff;
    border: 1px solid #6b6b6b;
    color: #3e3e3e;
    border-radius: 20px;
    transition: all 0.175s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    text-align: center;
  }
  .testimons .testimons__btns .testimons__btn:hover {
    color: #fff;
    background-color: #36499b;
    border: 1px solid #36499b;
  }
`

export default styles
