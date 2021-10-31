import css from "styled-jsx/css"

export const styles = css.global`
  /* |-------------------------------------------------------------------------- | entry |-------------------------------------------------------------------------- */
  .entry {
    position: relative;
    z-index: 0;
    padding: 175px 0 0 0;
    padding: 10.9375rem 0 0 0;
  }
  .breadcrumbs {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
    position: relative;
    background: none;
    display: block;
  }
  .breadcrumbs .breadcrumbs__item {
    color: #000;
    font-size: 14px;
    font-size: 0.875rem;
    display: inline-block;
    position: relative;
    margin-right: 5px;
  }
  .breadcrumbs .breadcrumbs__item .breadcrumbs__link {
    color: #fff;
    text-decoration: none;
  }
  .breadcrumbs .breadcrumbs__item:before {
    content: "/";
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    margin: -1px 6px 0 0;
  }
  @media (max-width: 991.98px) {
    .entry {
      padding: 140px 0 100px;
      padding: 8.75rem 0 6.25rem;
    }
  }
  .entry:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 191px;
    background: url("../../assets/images/general/shadow.png") center no-repeat;
  }
  .entry__pattern {
    background: url("../../assets/images/general/pattern.png") repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: -4;
    opacity: 0.4;
  }
  .entry__content {
    padding: 40px 50px 0 0;
    padding: 2.5rem 3.125rem 0 0;
  }
  @media (max-width: 991.98px) {
    .entry__content {
      padding: 0;
    }
  }
  .entry__img {
    margin-left: -50px;
    margin-bottom: 20px;
    position: relative;
    z-index: -2;
  }
  @media (max-width: 1199.98px) {
    .entry__img {
      margin-bottom: 0;
    }
  }
  @media (max-width: 991.98px) {
    .entry__img {
      display: none;
    }
  }
  .entry__title {
    font-size: 56px;
    font-size: 3.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  @media (max-width: 1199.98px) {
    .entry__title {
      font-size: 47px;
      font-size: 2.9375rem;
    }
  }
  @media (max-width: 767.98px) {
    .entry__title {
      font-size: 30px;
      font-size: 1.875rem;
    }
  }
  .entry__subtitle {
    font-size: 25px;
    font-size: 1.5625rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
  }
  @media (max-width: 767.98px) {
    .entry__subtitle {
      font-size: 18px;
      font-size: 1.125rem;
    }
  }
  .entry__cats {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -5px 45px;
  }
  @media (max-width: 767.98px) {
    .entry__cats {
      margin-top: 20px;
    }
  }
  .entry__cats-item {
    max-width: 50%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    padding: 0 5px;
    margin-top: 18px;
    margin-top: 1.125rem;
  }
  @media (max-width: 767.98px) {
    .entry__cats-item {
      max-width: 100%;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      margin-top: 5px;
      margin-top: 0.3125rem;
    }
  }
  .entry__cats-link {
    font-size: 15px;
    font-size: 0.9375rem;
    color: #fff;
    border-radius: 30px;
    border-radius: 1.875rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #fff;
    position: relative;
    background: rgba(251, 192, 55, 0.4);
    padding: 5px;
    padding: 0.3125rem;
  }
  .entry__cats-link:hover,
  .entry__cats-link:focus {
    color: #fff;
    border: 1px solid transparent;
  }
  .entry__cats-link:hover .entry__cats-overlay,
  .entry__cats-link:focus .entry__cats-overlay {
    opacity: 1;
  }
  .entry__cats-link span {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: 0 40px 0 15px;
    padding: 0 2.5rem 0 0.9375rem;
  }
  @media (max-width: 1199.98px) {
    .entry__cats-link span {
      padding: 0 15px;
      padding: 0 0.9375rem;
    }
  }
  .entry__cats-overlay {
    font-size: 16px;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    background-image: linear-gradient(0deg, #45529e 0%, #33408a 100%);
    box-shadow: 0 4px 6.08px 1.92px rgba(137, 71, 155, 0.33);
    border-radius: 30px;
    border-radius: 1.875rem;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px;
    padding: 0.3125rem;
    -webkit-transition: 0.1s;
    transition: 0.1s;
  }
  .entry__cats-overlay span {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: 0 0 0 15px;
    padding: 0 0 0 0.9375rem;
  }
  /* |---------------------------------------------------- | waves |---------------------------------------------------- */
  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  .waves .waves__item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .waves .waves__item img {
    display: block;
    width: 100%;
  }
  .waves .waves__item:first-child {
    bottom: -1px;
  }
  @media (max-width: 991.98px) {
    .waves .waves__item:first-child {
      bottom: 0;
    }
  }
  .waves .waves__item:last-child {
    bottom: 0;
  }
  @media (max-width: 1199.98px) {
    .waves .waves__item:last-child {
      bottom: 15px;
    }
  }
  /* |--------------------------------------- | glow |--------------------------------------- */
  .glow {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: -3;
  }
  .glow > img {
    position: absolute;
    left: -130px;
    bottom: 0;
  }
  @media (max-width: 991.98px) {
    .glow {
      display: none;
    }
  }
  .testimons {
    font-family: "Roboto", Roboto, sans-serif;
    width: 100%;
    margin-bottom: 50px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
  }
  .testimons .testimons-video__container {
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .testimons .testimons-video__container h1 {
    font-size: 40px;
    font-weight: 500;
    margin: 2rem 0 2rem 1rem;
    color: #000;
  }
  .testimons .testimons-video__container .testimons__videos {
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
  }
  @media (max-width: 1200px) {
    .testimons .testimons-video__container .testimons__videos {
      justify-content: center;
    }
  }
  .testimons .testimons__btns {
    max-width: 420px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 3rem;
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
  .testimons .testimons__btns .giga__chad {
    width: auto;
    height: 36px;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding: 8px 13px;
    font-size: 13px;
    margin-right: 15px;
    color: #fff;
    background-image: -webkit-linear-gradient(0deg, #45529e 0%, #33408a 100%);
    border: 1px solid #6b6b6b;
    color: #3e3e3e;
    border-radius: 20px;
    transition: all 0.175s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    text-align: center;
  }
  .testimons .testimons__btns .giga__chad:hover {
    color: #fff;
    background-color: #36499b;
    border: 1px solid #36499b;
  }
  .testimons .consultation {
    height: auto;
    width: 90%;
    border-radius: 20px;
    background: #f9f9f9;
    box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
    margin-bottom: 50px;
  }
  .testimons .consultation .inner__consultation {
    width: 100%;
    padding: 0 50px;
  }
  .testimons .consultation .inner__consultation .consultation__title {
    font-size: 25px;
    font-size: 1.5625rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-bottom: 1.875rem;
    text-align: center;
    padding-top: 20px;
  }
  .testimons .consultation .inner__consultation .consultation__item input {
    font-weight: 600;
    width: 35%;
    margin-right: 10px;
    padding: 0.375rem 1rem;
    font-family: inherit;
    color: #000;
    min-height: 50px;
    background-color: #f0f0f0;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    -webkit-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
    -webkit-appearance: none;
    border-radius: 32px;
    border-radius: 2rem;
  }
  .testimons .consultation .inner__consultation .consultation__item input:focus {
    outline: none;
    background-color: white;
  }
  .testimons
    .consultation
    .inner__consultation
    .consultation__item
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .testimons .consultation .inner__consultation .consultation__item button {
    background-image: -webkit-linear-gradient(0deg, #45529e 0%, #33408a 100%);
    font-size: 16px;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    padding: 5px 25px;
    padding: 0.3125rem 1.5625rem;
    width: auto;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    outline: none;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 32px;
    border-radius: 2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.175s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.175s cubic-bezier(0.25, 0.8, 0.25, 1);
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 50px;
    width: 25%;
    margin-bottom: 50px;
  }
  .testimons .consultation .inner__consultation .consultation__item button:hover {
    box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  }
  @media (max-width: 767.98px) {
    .consultation {
      height: auto;
      width: 80%;
      border-radius: 20px;
      background: #f9f9f9;
      box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
      margin-bottom: 50px;
    }
    .consultation .inner__consultation {
      width: 100%;
      padding: 0 50px;
    }
    .consultation .inner__consultation .consultation__title {
      font-size: 25px;
      font-size: 1.5625rem;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 30px;
      margin-bottom: 1.875rem;
      text-align: center;
      padding-top: 20px;
    }
    .consultation .inner__consultation .consultation__item {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    .consultation .inner__consultation .consultation__item input {
      font-weight: 600;
      width: 100% !important;
      margin: 5px 0;
      padding: 0.375rem 1rem;
      font-family: inherit;
      color: #000;
      min-height: 50px;
      background-color: #f0f0f0;
      background-image: none;
      background-clip: padding-box;
      border: 1px solid transparent;
      border-radius: 0.25rem;
      -webkit-transition: all 0.1s ease-in;
      transition: all 0.1s ease-in;
      -webkit-appearance: none;
      border-radius: 32px;
      border-radius: 2rem;
    }
    .consultation .inner__consultation .consultation__item input:focus {
      outline: none;
      background-color: white;
    }
    .consultation .inner__consultation .consultation__item input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    .consultation .inner__consultation .consultation__item button {
      background-image: -webkit-linear-gradient(0deg, #45529e 0%, #33408a 100%);
      font-size: 16px;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      text-transform: uppercase;
      padding: 5px 25px;
      padding: 0.3125rem 1.5625rem;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      text-decoration: none;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      outline: none;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 32px;
      border-radius: 2rem;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-transition: all 0.175s cubic-bezier(0.25, 0.8, 0.25, 1);
      transition: all 0.175s cubic-bezier(0.25, 0.8, 0.25, 1);
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 50px;
      width: 100% !important;
      margin-bottom: 50px;
      margin-top: 5px;
    }
    .consultation .inner__consultation .consultation__item button:hover {
      box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
    }
    .holder__first {
      margin-bottom: 10px !important;
    }
    .giga__chad {
      margin-right: 0 !important;
    }
  }
`
