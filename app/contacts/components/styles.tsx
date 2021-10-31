import css from "styled-jsx/css"

export const constactsPageStyles = css.global`
  /* |-------------------------------------------------------------------------- | entry |-------------------------------------------------------------------------- */
  .entry {
    position: relative;
    z-index: 0;
    padding: 175px 0 0 0;
    padding: 10.9375rem 0 0 0;
    /* |---------------------------------------------------- | waves |---------------------------------------------------- */
  }
  @media (max-width: 1010px) {
    .entry .first__block {
      display: none;
    }
  }
  .entry .entry__pattern {
    background: url("../../assets/images/general/pattern.png") repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: -4;
    opacity: 0.4;
  }
  .entry .container .glow {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: -3;
  }
  .entry .container .glow .glow__img {
    position: absolute;
    left: -130px;
    bottom: 0;
  }
  .entry .container .page__header {
    position: relative;
    z-index: 0;
    padding: 145px 0 0;
    padding: 9.0625rem 0 0;
    min-height: 530px;
  }
  .entry .container .page__header:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 191px;
  }
  .entry .container .foundation__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-height: 50px;
  }
  .entry .container .foundation__header .foundation__title {
    font-size: 40px;
    margin-top: 20px;
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    line-height: 1.2;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 570px;
    flex: 0 0 570px;
    max-width: 570px;
  }
  .entry .container .foundation__header button {
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
  .entry .container .foundation__header button:hover {
    box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  }
  .entry .container .foundation__header .call__center {
    font-size: 17px !important;
    color: #fff;
    margin-left: 20px;
  }
  .entry .container .foundation__header .contacts__social {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .entry .container .foundation__header .foundation__img {
    border-radius: 50%;
    overflow: hidden;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 370px;
    flex: 0 0 370px;
    max-width: 370px;
    width: 370px;
    height: 370px;
    margin-top: -55px;
    margin-top: -3.4375rem;
    margin-left: auto;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: 4px solid rgba(255, 255, 255, 0.5);
  }
  .entry .container .contacts__social .social__item {
    width: 38px;
    height: 38px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 50% !important;
    font-size: 1.25rem;
    color: #fff;
  }
  .entry .container .breadcrumbs {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
    position: relative;
    background: none;
    display: block;
  }
  .entry .container .breadcrumbs .breadcrumbs__item {
    color: #000;
    font-size: 14px;
    font-size: 0.875rem;
    display: inline-block;
    position: relative;
    margin-right: 5px;
  }
  .entry .container .breadcrumbs .breadcrumbs__item .breadcrumbs__link {
    color: #fff;
    text-decoration: none;
  }
  .entry .container .breadcrumbs .breadcrumbs__item:before {
    content: "/";
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    margin: -1px 6px 0 0;
  }
  .entry .container .page__header-title {
    font-weight: 400;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 10px 0 0 0;
    margin: 0.625rem 0 0 0;
  }
  .entry .container .page__header-text {
    color: #fff;
    line-height: 1.2;
  }
  @media (max-width: 992px) {
    .entry .holder__first {
      padding-left: 50px;
    }
  }
  @media (max-width: 768px) {
    .entry .consultation {
      height: 50vh !important;
      background-color: #1d0f0f;
      padding-bottom: 100px;
    }
    .entry .consultation .container {
      width: 80%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      max-height: 300px !important;
      border-radius: 20px;
      box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
      background: #221818 !important;
    }
    .entry .consultation .container .consultation__title {
      font-size: 25px;
      font-size: 1.5625rem;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 1.875rem;
      text-align: center;
      padding-top: 30px !important;
    }
    .entry .consultation .container .consultation__item {
      display: flex;
      flex-direction: column;
    }
    .entry .consultation .container .consultation__item input {
      font-weight: 600;
      width: 100% !important;
      margin-right: 10px;
      padding: 0.375rem 1rem;
      font-family: inherit;
      color: #000;
      min-height: 40px;
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
    .entry .consultation .container .consultation__item input:focus {
      outline: none;
      background-color: white;
    }
  }
  .entry .consultation {
    height: 40vh;
    background-color: #1f1313 !important;
  }
  .entry .consultation .container .consultation__title {
    font-size: 25px;
    font-size: 1.5625rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-bottom: 1.875rem;
    text-align: center;
    padding-top: 50px;
  }
  .entry .consultation .container .consultation__item input {
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
  .entry .consultation .container .consultation__item input:focus {
    outline: none;
    background-color: white;
  }
  .entry .consultation input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .entry .consultation button {
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
  .entry .consultation button:hover {
    box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  }
  @media (max-width: 400px) {
    .entry .consultation {
      padding-top: 10px;
      height: 50vh;
      background-color: #fff;
    }
  }
  @media (max-width: 768px) {
    .entry .container .consultation__item input {
      width: 100%;
      margin-bottom: 15px !important;
      padding: 0 10px;
    }
    .entry .container .consultation__item button {
      width: 100%;
    }
  }
  @media (max-width: 991.98px) {
    .entry .entry {
      padding: 140px 0 100px;
      padding: 8.75rem 0 6.25rem;
    }
  }
  .entry .entry:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 191px;
  }
  .entry .entry__pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: -4;
    opacity: 0.4;
  }
  .entry .entry__content {
    padding: 40px 50px 0 0;
    padding: 2.5rem 3.125rem 0 0;
  }
  @media (max-width: 991.98px) {
    .entry .entry__content {
      padding: 0;
    }
  }
  .entry .entry__img {
    margin-left: -50px;
    margin-bottom: 20px;
    position: relative;
    z-index: -2;
  }
  @media (max-width: 1199.98px) {
    .entry .entry__img {
      margin-bottom: 0;
    }
  }
  @media (max-width: 991.98px) {
    .entry .entry__img {
      display: none;
    }
  }
  .entry .entry__title {
    font-size: 56px;
    font-size: 3.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  @media (max-width: 1199.98px) {
    .entry .entry__title {
      font-size: 47px;
      font-size: 2.9375rem;
    }
  }
  @media (max-width: 500px) {
    .entry .entry .parent__entry__container {
      display: flex;
    }
    .entry .entry .parent__entry__container .entry__title {
      font-size: 30px;
      font-size: 1.875rem;
    }
    .entry .entry .parent__entry__container .contacts__social {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100% !important;
    }
  }
  .entry .entry__subtitle {
    font-size: 25px;
    font-size: 1.5625rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
  }
  @media (max-width: 767.98px) {
    .entry .entry__subtitle {
      font-size: 18px;
      font-size: 1.125rem;
    }
  }
  .entry .entry__cats {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -5px 45px;
  }
  @media (max-width: 767.98px) {
    .entry .entry__cats {
      margin-top: 20px;
    }
  }
  .entry .entry__cats-item {
    max-width: 50%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    padding: 0 5px;
    margin-top: 18px;
    margin-top: 1.125rem;
  }
  @media (max-width: 767.98px) {
    .entry .entry__cats-item {
      max-width: 100%;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      margin-top: 5px;
      margin-top: 0.3125rem;
    }
  }
  .entry .entry__cats-link {
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
  .entry .entry__cats-link:hover,
  .entry .entry__cats-link:focus {
    color: #fff;
    border: 1px solid transparent;
  }
  .entry .entry__cats-link:hover .entry__cats-overlay,
  .entry .entry__cats-link:focus .entry__cats-overlay {
    opacity: 1;
  }
  .entry .entry__cats-link span {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: 0 40px 0 15px;
    padding: 0 2.5rem 0 0.9375rem;
  }
  @media (max-width: 1199.98px) {
    .entry .entry__cats-link span {
      padding: 0 15px;
      padding: 0 0.9375rem;
    }
  }
  .entry .entry__cats-overlay {
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
  .entry .entry__cats-overlay span {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: 0 0 0 15px;
    padding: 0 0 0 0.9375rem;
  }
  .entry .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    /* |--------------------------------------- | glow |--------------------------------------- */
  }
  .entry .waves .waves__item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .entry .waves .waves__item img {
    display: block;
    width: 100%;
  }
  .entry .waves .waves__item:first-child {
    bottom: -1px;
  }
  @media (max-width: 991.98px) {
    .entry .waves .waves__item:first-child {
      bottom: 0;
    }
  }
  .entry .waves .waves__item:last-child {
    bottom: 0;
  }
  @media (max-width: 1199.98px) {
    .entry .waves .waves__item:last-child {
      bottom: 15px;
    }
  }
  .entry .waves .glow {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: -3;
  }
  .entry .waves .glow > img {
    position: absolute;
    left: -130px;
    bottom: 0;
  }
  @media (max-width: 991.98px) {
    .entry .waves .glow {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    .entry .second__block {
      display: none;
    }
    .foundation__header {
      display: none;
    }
  }
  @media (min-width: 1010px) {
    .second__main .container {
      display: none;
    }
    .second__block {
      display: none !important;
    }
  }
  .second__main {
    margin: 70px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .second__main .second__main__inner {
    padding: 50px 0;
  }
  .second__main .second__main__inner .social__item {
    width: 38px;
    height: 38px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: 1px solid #000;
    border-radius: 50% !important;
    font-size: 1.25rem;
    color: #000 !important;
  }
  .second__main .second__main__inner .social__item .social__link {
    color: black;
  }
  .second__main .second__main__inner p {
    font-size: 17px;
  }
  .second__main .second__main__inner button {
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
    width: 55%;
    margin-bottom: 10px;
  }
  .second__main .second__main__inner button:hover {
    box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  }
  .consultation__secondary {
    height: 30vh;
    margin-bottom: 50px;
  }
  .consultation__secondary .container {
    max-width: 100%;
    border-radius: 20px;
    box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
    background: #f9f9f9 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .consultation__secondary .container .consultation__title {
    font-size: 25px;
    font-size: 1.5625rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-bottom: 1.875rem;
    text-align: center;
    padding-top: 20px;
  }
  .consultation__secondary .container form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .consultation__secondary .container form .consultation__item input {
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
  .consultation__secondary .container form .consultation__item input:focus {
    outline: none;
    background-color: white;
  }
  .consultation__secondary input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .consultation__secondary button {
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
    margin-bottom: 20px;
  }
  .consultation__secondary button:hover {
    box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  }
  @media (max-width: 800px) {
    .consultation__secondary {
      height: 70%;
    }
    .consultation__secondary .container {
      max-width: 80%;
      border-radius: 20px;
      box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
      background: #f9f9f9 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
    }
    .consultation__secondary .container .consultation__title {
      font-size: 25px;
      font-size: 1.5625rem;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 30px;
      margin-bottom: 1.875rem;
      text-align: center;
      padding-top: 50px;
    }
    .consultation__secondary .container form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .consultation__secondary .container form .consultation__item {
      display: flex;
      flex-direction: column;
      width: 80%;
    }
    .consultation__secondary .container form .consultation__item input {
      font-weight: 600;
      width: 100%;
      padding: 0.375rem 1rem;
      margin: 5px 0;
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
    .consultation__secondary .container form .consultation__item input:focus {
      outline: none;
      background-color: white;
    }
    .consultation__secondary input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    .consultation__secondary button {
      background-image: -webkit-linear-gradient(0deg, #45529e 0%, #33408a 100%);
      font-size: 16px;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      text-transform: uppercase;
      padding: 10px 25px;
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
      width: 100%;
      margin-top: 5px;
      margin-bottom: 50px;
    }
    .consultation__secondary button:hover {
      box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
    }
  }
  .container__cards {
    background-color: #fff;
  }
  .container__cards .card {
    border-radius: 22px;
    border-radius: 1.375rem;
    background: #fff;
    box-shadow: 0 5px 6.8px 1.2px rgba(111, 111, 111, 0.2);
  }
  .container__cards .card .card-body {
    border: 1px solid #d4d4d4;
    border-radius: 22px 22px 0 0;
    border-radius: 1.375rem 1.375rem 0 0;
  }
  .container__cards .card .card-body .han__icon {
    filter: grayscale(1);
  }
  .container__cards .card .card-body .han__icon:hover {
    filter: grayscale(0);
  }
  .container__cards .holder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  .container__cards .holder .card_el {
    width: 250px;
    height: 396px;
    margin: 10px 20px;
    border: 1px solid #d4d4d4;
    border-radius: 22px 22px 0 0;
    border-radius: 1.375rem 1.375rem 0 0;
    box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
    background: #fff !important;
  }
  .container__cards .holder .card_el .han__icon {
    display: none;
    align-items: center;
    justify-content: center;
    height: 120px;
  }
  .container__cards .holder .card_el .han__icon img {
    height: 50px;
    filter: grayscale(1);
    opacity: 0.44;
  }
  .container__cards .holder .card_el .han__icon img:hover {
    filter: grayscale(0);
    opacity: 1;
  }
  .container__cards .holder .card_el .card__map {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
  }
  .container__cards .holder .card_el .card__map > * {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
  @media (max-width: 767.98px) {
    .container__cards {
      height: 100%;
      background-color: #fff;
    }
    .container__cards .holder {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .container__cards .holder .card_el {
      width: 250px;
      height: 396px;
      margin: 10px 20px;
      border-radius: 20px;
      box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
      background: #fff !important;
    }
    .container__cards .holder .card_el .han__icon {
      display: none;
      align-items: center;
      justify-content: center;
      height: 120px;
    }
    .container__cards .holder .card_el .han__icon img {
      height: 50px;
      filter: grayscale(1);
      opacity: 0.44;
    }
    .container__cards .holder .card_el .han__icon img:hover {
      filter: grayscale(0);
      opacity: 1;
    }
    .container__cards .holder .card_el .card__map {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden img;
      overflow-flex-shrink: 0;
      overflow-min-width: 100%;
      overflow-min-height: 100%;
    }
  }
  .container__book {
    height: 100%;
    background-color: #e6e5e5;
    width: 100%;
    padding-bottom: 50px;
  }
  .container__book .container__book__icon {
    padding: 50px 0 10px 0;
  }
  .container__book .container__book__title p {
    font-size: 1.5625rem;
    font-weight: 500;
    margin-top: 10px;
  }
  .container__book .container__book__form {
    width: 100%;
    margin: 0 auto;
  }
  .container__book .container__book__form .book__form .consultation__item input {
    font-weight: 600;
    width: 80%;
    margin: 10px 0 10px 100px;
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
  .container__book .container__book__form .book__form .consultation__item input:focus {
    outline: none;
    background-color: white;
  }
  .container__book .container__book__form .book__form .consultation__item .reports__textarea {
    height: 100%;
    display: block;
    font-weight: 600;
    width: 90%;
    min-width: 200px;
    margin-left: 30px;
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
  .container__book .container__book__form .book__form .consultation__item .control__input {
    display: block;
    font-weight: 600;
    width: 100%;
    min-width: 200px;
    margin-left: 30px;
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
  .container__book button {
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
    margin: 0 auto;
  }
  .container__book button:hover {
    box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  }
  @media (max-width: 767.98px) {
    .container__book {
      height: 100%;
      width: 100%;
      background-color: #e6e5e5;
    }
    .container__book .container__book__icon {
      padding: 50px 0 10px 0;
    }
    .container__book .container__book__title p {
      font-size: 1.5625rem;
      font-weight: 500;
      margin-top: 10px;
    }
    .container__book .container__book__form {
      width: 100%;
    }
    .container__book .container__book__form .book__form {
      height: 100%;
    }
    .container__book .container__book__form .book__form .consultation__item {
      width: 100%;
      height: 100%;
    }
    .container__book .container__book__form .book__form .consultation__item input {
      font-weight: 600;
      width: 80%;
      margin: 10px 0 10px 100px;
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
    .container__book .container__book__form .book__form .consultation__item input:focus {
      outline: none;
      background-color: white;
    }
    .container__book .container__book__form .book__form .consultation__item .reports__textarea {
      height: 100%;
      font-weight: 600;
      width: 85%;
      min-width: 200px;
      margin-top: 10px;
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
    .container__book
      .container__book__form
      .book__form
      .consultation__item
      .reports__textarea:focus {
      outline: none;
      background-color: white;
    }
    .container__book .container__book__form .book__form .consultation__item .control__input {
      display: block;
      font-weight: 600;
      width: 85%;
      min-width: 200px;
      margin-left: 30px;
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
    .container__book button {
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
      width: 45%;
      margin: 0 auto;
    }
    .container__book button:hover {
      box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
    }
  }
`
