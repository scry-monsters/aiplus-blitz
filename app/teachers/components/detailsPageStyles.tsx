import css from "styled-jsx/css"

const styles = css.global`
  .teachers-detail-page {
    /* |-------------------------------------------------------------------------- | button |-------------------------------------------------------------------------- */
  }
  .teachers-detail-page .layout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    overflow-x: hidden;
  }
  .teachers-detail-page .layout__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }
  .teachers-detail-page .layout__main {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    /* flex: 1;
	 would be enough but it looks bad in IE */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .teachers-detail-page .layout__main {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    /* flex: 1;
	 would be enough but it looks bad in IE */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .teachers-detail-page .page__header {
    position: relative;
    z-index: 0;
    padding: 145px 0 0;
    padding: 9.0625rem 0 0;
    min-height: 530px;
    background-image: -webkit-linear-gradient(0deg, #fbb640 0%, #6cc025 0%, #f3ba43 100%);
  }
  .teachers-detail-page .page__header:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 191px;
    background: url("../../assets/images/general/shadow.png") center no-repeat;
  }
  .teachers-detail-page .page__header-title {
    font-weight: 400;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 10px 0 0 0;
    margin: 0.625rem 0 0 0;
  }
  .teachers-detail-page .page__header-text {
    color: #fff;
    line-height: 1.2;
  }
  .teachers-detail-page .page__content {
    margin: -270px 0 0 0;
    margin: -16.875rem 0 0 0;
    position: relative;
  }
  .teachers-detail-page .color-white {
    color: #fff !important;
  }
  .teachers-detail-page .bg-dark-gray {
    background-color: #dcdcdc;
  }
  .teachers-detail-page .bg-gray {
    background-color: #f9f9f9;
  }
  .teachers-detail-page .bg-white {
    background-color: #fff;
  }
  .teachers-detail-page .bg-orange-gradient {
    background-image: -webkit-linear-gradient(0deg, #fabf36 0%, #eda04d 100%);
    background-image: -ms-linear-gradient(0deg, #fabf36 0%, #eda04d 100%);
  }
  .teachers-detail-page .bg-green-gradient {
    background-image: -webkit-linear-gradient(0deg, #fbb640 0%, #6cc025 0%, #f3ba43 100%);
    background-image: -ms-linear-gradient(0deg, #fbb640 0%, #6cc025 0%, #f3ba43 100%);
  }
  .teachers-detail-page .bg-red-gradient {
    background-image: -webkit-linear-gradient(0deg, #6cc025 0%, #ec2328 0%, #f3ba43 100%);
    background-image: -ms-linear-gradient(0deg, #6cc025 0%, #ec2328 0%, #f3ba43 100%);
  }
  .teachers-detail-page .bg-blue-gradient {
    background-image: -webkit-linear-gradient(0deg, #6cc025 0%, #23e5ec 0%, #f3ba43 100%);
    background-image: -ms-linear-gradient(0deg, #6cc025 0%, #23e5ec 0%, #f3ba43 100%);
  }
  .teachers-detail-page .row.row-no-gutter,
  .teachers-detail-page [data-gutter="0"],
  .teachers-detail-page .row[data-gutter="none"] {
    margin: 0 !important;
  }
  .teachers-detail-page .row.row-no-gutter > [class^="col"],
  .teachers-detail-page .row[data-gutter="0"] > [class^="col"],
  .teachers-detail-page .row[data-gutter="none"] > [class^="col"] {
    padding: 0 !important;
  }
  .teachers-detail-page .row[data-gutter="10"] {
    margin-left: -5px;
    margin-right: -5px;
  }
  .teachers-detail-page .row[data-gutter="10"] > [class^="col"] {
    padding-left: 5px;
    padding-right: 5px;
  }
  .teachers-detail-page .row[data-gutter="15"] {
    margin-left: -7.5px;
    margin-right: -7.5px;
  }
  .teachers-detail-page .row[data-gutter="15"] > [class^="col"] {
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
  .teachers-detail-page .row[data-gutter="20"] {
    margin-left: -10px;
    margin-right: -10px;
  }
  .teachers-detail-page .row[data-gutter="20"] > [class^="col"] {
    padding-left: 10px;
    padding-right: 10px;
  }
  .teachers-detail-page .row[data-gutter="30"] {
    margin-left: -15px;
    margin-right: -15px;
  }
  .teachers-detail-page .row[data-gutter="30"] > [class^="col"] {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 992px) {
    .teachers-detail-page .row[data-lg-gutter="10"] {
      margin-left: -5px;
      margin-right: -5px;
    }
    .teachers-detail-page .row[data-lg-gutter="10"] > [class^="col"] {
      padding-left: 5px;
      padding-right: 5px;
    }
    .teachers-detail-page .row[data-lg-gutter="15"] {
      margin-left: -7.5px;
      margin-right: -7.5px;
    }
    .teachers-detail-page .row[data-lg-gutter="15"] > [class^="col"] {
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
    .teachers-detail-page .row[data-lg-gutter="20"] {
      margin-left: -10px;
      margin-right: -10px;
    }
    .teachers-detail-page .row[data-lg-gutter="20"] > [class^="col"] {
      padding-left: 10px;
      padding-right: 10px;
    }
    .teachers-detail-page .row[data-lg-gutter="30"] {
      margin-left: -15px;
      margin-right: -15px;
    }
    .teachers-detail-page .row[data-lg-gutter="30"] > [class^="col"] {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .teachers-detail-page .row[vertical-gutter="10"] {
    margin-top: -5px;
    margin-bottom: -5px;
  }
  .teachers-detail-page .row[vertical-gutter="10"] > [class^="col"] {
    margin-top: 2.5px;
    margin-bottom: 2.5px;
  }
  .teachers-detail-page .row[vertical-gutter="15"] {
    margin-top: -7.5px;
    margin-bottom: -7.5px;
  }
  .teachers-detail-page .row[vertical-gutter="15"] > [class^="col"] {
    margin-top: 7.5px;
    margin-bottom: 7.5px;
  }
  .teachers-detail-page .row[vertical-gutter="20"] {
    margin-top: -10px;
    margin-bottom: -10px;
  }
  .teachers-detail-page .row[vertical-gutter="20"] > [class^="col"] {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .teachers-detail-page .row[vertical-gutter="25"] {
    margin-top: -12.5px;
    margin-bottom: -12.5px;
  }
  .teachers-detail-page .row[vertical-gutter="25"] > [class^="col"] {
    margin-top: 12.5px;
    margin-bottom: 12.5px;
  }
  .teachers-detail-page .row[vertical-gutter="30"] {
    margin-top: -15px;
    margin-bottom: -15px;
  }
  .teachers-detail-page .row[vertical-gutter="30"] > [class^="col"] {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .teachers-detail-page .row[vertical-gutter="40"] {
    margin-top: -25px;
    margin-bottom: -20px;
  }
  .teachers-detail-page .row[vertical-gutter="40"] > [class^="col"] {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .teachers-detail-page .row[vertical-gutter="50"] {
    margin-top: -25px;
    margin-bottom: -25px;
  }
  .teachers-detail-page .row[vertical-gutter="50"] > [class^="col"] {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .teachers-detail-page .row[vertical-gutter="60"] {
    margin-top: -30px;
    margin-bottom: -30px;
  }
  .teachers-detail-page .row[vertical-gutter="60"] > [class^="col"] {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .teachers-detail-page .row[vertical-gutter="70"] {
    margin-top: -35px;
    margin-bottom: -35px;
  }
  .teachers-detail-page .row[vertical-gutter="70"] > [class^="col"] {
    margin-top: 35px;
    margin-bottom: 35px;
  }
  .teachers-detail-page .row[vertical-gutter="80"] {
    margin-top: -40px;
    margin-bottom: -40px;
  }
  .teachers-detail-page .row[vertical-gutter="80"] > [class^="col"] {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 992px) {
    .teachers-detail-page .row[vertical-lg-gutter="10"] {
      margin-top: -5px;
      margin-bottom: -5px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="10"] > [class^="col"] {
      margin-top: 2.5px;
      margin-bottom: 2.5px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="15"] {
      margin-top: -7.5px;
      margin-bottom: -7.5px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="15"] > [class^="col"] {
      margin-top: 7.5px;
      margin-bottom: 7.5px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="20"] {
      margin-top: -10px;
      margin-bottom: -10px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="20"] > [class^="col"] {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="25"] {
      margin-top: -12.5px;
      margin-bottom: -12.5px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="25"] > [class^="col"] {
      margin-top: 12.5px;
      margin-bottom: 12.5px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="30"] {
      margin-top: -15px;
      margin-bottom: -15px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="30"] > [class^="col"] {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="40"] {
      margin-top: -25px;
      margin-bottom: -20px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="40"] > [class^="col"] {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="50"] {
      margin-top: -25px;
      margin-bottom: -25px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="50"] > [class^="col"] {
      margin-top: 25px;
      margin-bottom: 25px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="60"] {
      margin-top: -30px;
      margin-bottom: -30px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="60"] > [class^="col"] {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="70"] {
      margin-top: -35px;
      margin-bottom: -35px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="70"] > [class^="col"] {
      margin-top: 35px;
      margin-bottom: 35px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="80"] {
      margin-top: -40px;
      margin-bottom: -40px;
    }
    .teachers-detail-page .row[vertical-lg-gutter="80"] > [class^="col"] {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
  .teachers-detail-page .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .teachers-detail-page .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .teachers-detail-page .breadcrumbs {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
    position: relative;
    background: none;
    display: block;
  }
  @media (max-width: 767.98px) {
    .teachers-detail-page .breadcrumbs {
      display: none;
    }
  }
  .teachers-detail-page .breadcrumbs__item {
    font-size: 14px;
    font-size: 0.875rem;
    display: inline-block;
    position: relative;
    margin-right: 5px;
  }
  .teachers-detail-page .breadcrumbs__item:before {
    content: "/";
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    margin: -1px 6px 0 0;
  }
  .teachers-detail-page .breadcrumbs__item:first-child:before {
    display: none;
  }
  .teachers-detail-page .breadcrumbs__link {
    color: #fff;
    text-decoration: none;
  }
  .teachers-detail-page .breadcrumbs__link:hover,
  .teachers-detail-page .breadcrumbs__link:focus {
    color: #fff;
    text-decoration: underline;
  }
  .teachers-detail-page .breadcrumbs__item {
    color: #000;
  }
  .teachers-detail-page .paginator {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }
  .teachers-detail-page .paginator__item {
    display: inline-block;
    vertical-align: top;
    margin: 0 2px;
  }
  .teachers-detail-page .paginator__item.-disabled {
    display: none;
  }
  .teachers-detail-page .paginator__item.-active .paginator__link {
    background: #36499b;
    color: #fff;
  }
  .teachers-detail-page .paginator__item.-active .paginator__link:hover,
  .teachers-detail-page .paginator__item.-active .paginator__link:focus {
    color: #fff;
    opacity: 1;
  }
  .teachers-detail-page .paginator__link {
    font-size: 14px;
    font-size: 0.875rem;
    font-weight: 600;
    color: #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    border-radius: 0.1875rem;
    background-color: rgba(0, 0, 0, 0.03);
  }
  .teachers-detail-page .paginator__link:hover,
  .teachers-detail-page .paginator__link:focus {
    opacity: 0.8;
    text-decoration: none;
    color: #000;
  }
  .teachers-detail-page .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  .teachers-detail-page .waves__item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .teachers-detail-page .waves__item:first-child {
    bottom: -1px;
  }
  .teachers-detail-page .waves__item:last-child {
    bottom: 0;
  }
  .teachers-detail-page .waves__item img {
    display: block;
    width: 100%;
  }
  .teachers-detail-page .button {
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
    background-image: none;
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
  }
  .teachers-detail-page .button:active:focus,
  .teachers-detail-page .button:active.-focus,
  .teachers-detail-page .button.-active:focus,
  .teachers-detail-page .button.-active.-focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  .teachers-detail-page .button:hover,
  .teachers-detail-page .button:focus,
  .teachers-detail-page .button.-focus {
    text-decoration: none;
  }
  .teachers-detail-page .button:active,
  .teachers-detail-page .button.-active {
    outline: 0;
    background-image: none;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .teachers-detail-page .button.-disabled,
  .teachers-detail-page .button[disabled] {
    cursor: not-allowed;
    opacity: 0.65;
    box-shadow: none;
  }
  .teachers-detail-page .button:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .teachers-detail-page .button.-default {
    color: #fff;
    background-image: -webkit-linear-gradient(0deg, #45529e 0%, #33408a 100%);
    background-image: -ms-linear-gradient(0deg, #45529e 0%, #33408a 100%);
  }
  .teachers-detail-page .button.-default:hover,
  .teachers-detail-page .button.-default:focus {
    color: #fff;
    background-image: -webkit-linear-gradient(0deg, #33408a 0%, #33408a 100%);
    background-image: -ms-linear-gradient(0deg, #33408a 0%, #33408a 100%);
    box-shadow: 0 4px 6.08px 1.92px rgba(137, 71, 155, 0.33);
    outline: none;
  }
  .teachers-detail-page .button.-default.-disabled,
  .teachers-detail-page .button.-default:disabled {
    color: #fff;
    background-color: #2f4088;
  }
  .teachers-detail-page .button.-md {
    padding-left: 35px;
    padding-left: 2.1875rem;
    padding-right: 35px;
    padding-right: 2.1875rem;
  }
  .teachers-detail-page .waves__item img {
    display: block;
    width: 100%;
  }
  .teachers-detail-page .page__header-text {
    color: #fff;
    line-height: 1.2;
  }
  .teachers-detail-page .page__content {
    margin: -270px 0 0 0;
    margin: -16.875rem 0 0 0;
    position: relative;
  }
  .teachers-detail-page .menu__item {
    margin-bottom: 8px;
  }
  .teachers-detail-page .menu__link {
    cursor: pointer;
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
  }
  .teachers-detail-page .menu__link:hover,
  .teachers-detail-page .menu__link:focus {
    color: #191a1e;
    text-decoration: none;
  }
  .teachers-detail-page .menu__link.-active {
    background: #36499b;
    border-color: #36499b;
    color: #fff;
    background-image: -webkit-linear-gradient(0deg, #45529e 0%, #33408a 100%);
    background-image: -ms-linear-gradient(0deg, #45529e 0%, #33408a 100%);
    box-shadow: 0 4px 6.08px 1.92px rgba(137, 71, 155, 0.33);
  }
  .teachers-detail-page .menu__sub {
    background: #e8e8e8;
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
    margin-top: -38px;
    margin-top: -2.375rem;
    border-radius: 18px;
    border-radius: 1.125rem;
    padding-bottom: 15px;
    padding-bottom: 0.9375rem;
    overflow: hidden;
    display: none;
  }
  .teachers-detail-page .menu__subitem:first-child .menu__sublink {
    padding-top: 50px;
    padding-top: 3.125rem;
  }
  .teachers-detail-page .menu__sublink {
    font-size: 14px;
    font-size: 0.875rem;
    color: #585757;
    display: block;
    padding: 6px 15px;
    padding: 0.375rem 0.9375rem;
  }
  .teachers-detail-page .menu__sublink:hover,
  .teachers-detail-page .menu__sublink:focus,
  .teachers-detail-page .menu__sublink.-active {
    color: #585757;
    background: #d8d8d8;
  }
  .teachers-detail-page .person {
    padding-left: 50px;
    padding-left: 3.125rem;
  }
  .teachers-detail-page .person__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .teachers-detail-page .person__info {
    color: #fff;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 330px;
    flex: 0 0 330px;
    max-width: 330px;
    min-height: 320px;
  }
  .teachers-detail-page .person__words {
    font-size: 20px;
    font-size: 1.25rem;
    font-weight: 300;
    font-style: italic;
    line-height: 1.3;
  }
  .teachers-detail-page .person__title {
    font-size: 32px;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
  }
  .teachers-detail-page .person__subtitle {
    font-size: 18px;
    font-size: 1.125rem;
    font-weight: 500;
    color: #fff;
    line-height: 1.1;
    margin-top: 15px;
  }
  .teachers-detail-page .person__img {
    border-radius: 50%;
    overflow: hidden;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 385px;
    flex: 0 0 385px;
    max-width: 385px;
    width: 385px;
    height: 385px;
    margin-top: -55px;
    margin-top: -3.4375rem;
    margin-left: auto;
    box-shadow: 0 4px 6.08px 1.92px rgba(52, 52, 52, 0.29);
  }
  .teachers-detail-page .person__body {
    margin-top: -20px;
    padding-bottom: 20px;
    padding-bottom: 1.25rem;
  }
  .teachers-detail-page .person__about {
    font-size: 16px;
    color: #484848;
    padding: 45px 0 15px;
    padding: 2.8125rem 0 0.9375rem;
  }
  .teachers-detail-page .person__about h1,
  .teachers-detail-page .person__about h2,
  .teachers-detail-page .person__about h3,
  .teachers-detail-page .person__about h4,
  .teachers-detail-page .person__about h5,
  .teachers-detail-page .person__about h6 {
    font-weight: 300;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  .teachers-detail-page .person__about hr {
    margin: 20px 0;
    border-top: 1px solid #818181;
  }
  .teachers-detail-page .person__about i {
    font-size: 14px;
    display: block;
    margin: 5px 0 0 0;
  }
  .teachers-detail-page .notes {
    padding-left: 50px;
    padding-left: 3.125rem;
  }
  .teachers-detail-page .notes__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: -15px;
  }
  .teachers-detail-page .notes__item {
    padding: 0 15px;
    margin: 15px 0;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 210px;
    flex: 0 0 210px;
    max-width: 210px;
    width: 210px;
  }
  .teachers-detail-page .notes__link {
    box-shadow: 0 5px 6.8px 1.2px rgba(0, 0, 0, 0.13);
    border-radius: 20px;
    border-radius: 1.25rem;
    background: #fff;
    display: block;
    height: 100%;
    margin: 0 auto;
  }
  .teachers-detail-page .notes__img {
    border-bottom: 6px solid #dcdcdc;
    height: 120px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .teachers-detail-page .notes__img img {
    height: 90%;
  }
  .teachers-detail-page .notes__text {
    font-size: 13px;
    font-size: 0.8125rem;
    line-height: 1.1;
    padding: 15px 15px 25px;
    padding: 0.9375rem 0.9375rem 1.5625rem;
    color: #484848;
  }
  .teachers-detail-page .slider__button:hover,
  .teachers-detail-page .slider__button:focus {
    color: #fff;
    border-color: #36499b !important;
    background: #36499b;
    box-shadow: 0 4px 6.08px 1.92px rgba(137, 71, 155, 0.33);
  }
  .teachers-detail-page .slider__controls {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 10px;
    position: relative;
  }
  .teachers-detail-page .slider__prev,
  .teachers-detail-page .slider__next {
    width: 19px;
    height: 35px;
    cursor: pointer;
  }
  .teachers-detail-page .slider__pagination {
    position: absolute;
    visibility: hidden;
    width: 0;
  }
  .teachers-detail-page .slider__more {
    font-size: 15px;
    font-size: 0.9375rem;
    color: #5b5b5b;
    margin-top: 10px;
    text-align: center;
    display: inline-block;
  }
  .teachers-detail-page .slider__more:hover,
  .teachers-detail-page .slider__more:focus {
    color: #5b5b5b;
    text-decoration: underline;
  }
  .teachers-detail-page .slider__counter {
    font-size: 56px;
    font-size: 3.5rem;
    font-weight: 500;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 1;
    color: #36499b;
    margin: 0 15px;
  }
  .teachers-detail-page .slider__counter-current {
    color: #989898;
  }
  .teachers-detail-page .slider.-light .slider__more {
    color: #fff;
  }
  .teachers-detail-page .slider.-light .slider__more:hover,
  .teachers-detail-page .slider.-light .slider__more:focus {
    color: #fff;
  }
  .teachers-detail-page .slider.-light .slider__counter {
    color: #fff;
  }
  .teachers-detail-page .slider.-light .slider__counter-current {
    color: #242424;
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .page__header-title {
      margin: 0;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .page__header {
      padding: 130px 0 100px;
      padding: 8.125rem 0 6.25rem;
      min-height: auto;
    }
  }
  @media (max-width: 767.98px) {
    .teachers-detail-page .page__header {
      padding: 125px 0 90px;
      padding: 7.8125rem 0 5.625rem;
    }
  }
  @media (max-width: 575.98px) {
    .teachers-detail-page .page__header {
      padding: 125px 0 70px;
      padding: 7.8125rem 0 4.375rem;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .page__header-title {
      margin: 0;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .page__content {
      margin: 0;
      padding: 30px 0 0 0;
      padding: 1.875rem 0 0 0;
    }
  }
  @media (min-width: 576px) {
    .teachers-detail-page .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .teachers-detail-page .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .teachers-detail-page .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .teachers-detail-page .container {
      max-width: 1140px;
    }
  }
  @media (max-width: 1199.98px) {
    .teachers-detail-page .waves__item:last-child {
      bottom: 15px;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .waves__item:last-child {
      bottom: 0;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .page__content {
      margin: 0;
      padding: 30px 0 0 0;
      padding: 1.875rem 0 0 0;
    }
  }
  @media (max-width: 1199.98px) {
    .teachers-detail-page .person {
      padding-left: 30px;
      padding-left: 1.875rem;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .person {
      padding: 0;
      padding: 0;
    }
  }
  @media (max-width: 767.98px) {
    .teachers-detail-page .person {
      padding: 30px 0 0 0;
      padding: 1.875rem 0 0 0;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .person__info {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      min-height: auto;
      color: #000;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .person__words {
      font-size: 18px;
      font-size: 1.125rem;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .person__title {
      font-size: 22px;
      font-size: 1.375rem;
      color: #000;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .person__subtitle {
      color: #000;
    }
  }
  @media (max-width: 1199.98px) {
    .teachers-detail-page .person__img {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 300px;
      flex: 0 0 300px;
      max-width: 300px;
      width: 300px;
      height: 300px;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .person__img {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 250px;
      flex: 0 0 250px;
      max-width: 250px;
      width: 250px;
      height: 250px;
      margin: 40px auto 0;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .person__body {
      margin-top: 0;
      padding-top: 30px;
      padding-top: 1.875rem;
    }
  }
  @media (max-width: 1199.98px) {
    .teachers-detail-page .notes {
      padding-left: 30px;
      padding-left: 1.875rem;
    }
  }
  @media (max-width: 991.98px) {
    .teachers-detail-page .notes {
      padding: 0;
    }
  }
  @media (max-width: 455.98px) {
    .teachers-detail-page .notes__item {
      max-width: none;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
  }
  @media (max-width: 767.98px) {
    .teachers-detail-page .slider__controls {
      margin-bottom: 30px;
    }
  }
`

export default styles
