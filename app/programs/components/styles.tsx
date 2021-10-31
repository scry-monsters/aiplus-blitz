import css from "styled-jsx/css"

export default css.global`
  .programms-page .page__header {
    position: relative;
    z-index: 0;
    padding: 145px 0 0;
    padding: 9.0625rem 0 0;
    min-height: 530px;
    /* background-image: -webkit-linear-gradient(0deg, #fbb640 0%, #6cc025 0%, #f3ba43 100%); */
  }
  .programms-page .section {
    margin-top: 10px !important;
  }
  @media (max-width: 991.98px) {
    .programms-page .page__header {
      padding: 130px 0 100px;
      padding: 8.125rem 0 6.25rem;
      min-height: auto;
    }
    .programms-page .page__content_mobile {
      display: block !important;
    }
    .programms-page .foundation__info {
      max-width: 720px;
      margin: 40px auto !important;
    }
    .programms-page .foundation {
      display: none;
    }
    .programms-page .foundation__cta {
      max-width: 720px;
      margin: 0 auto;
    }
    .programms-page .foundation__cta .cta__wrapper {
      display: flex;
      margin-top: 50px;
      flex-direction: column;
    }
    .programms-page .foundation__cta .cta__wrapper .cta__item {
      width: 100%;
      padding: 0 !important;
    }
    .programms-page .foundation__cta .cta__wrapper .button {
      width: 100%;
    }
    .programms-page .foundation__info span {
      font-size: 13px;
    }
    .programms-page .page__content_mobile {
      display: block !important;
    }
    .programms-page .container__mobile {
      max-width: 720px;
      padding-right: 15px;
      padding-left: 15px;
      margin: 0 auto;
    }
    .programms-page .foundation__info {
      max-width: 720px;
      margin: 40px auto !important;
    }
    .programms-page .row {
      display: flex;
    }
    .programms-page .foundation__features__row {
      display: flex;
      justify-content: center;
    }
    .programms-page .foundation__cta {
      max-width: 720px;
      margin: 0 auto;
    }
    .programms-page .foundation__cta .cta__wrapper {
      display: flex;
      margin-top: 50px;
      flex-direction: column;
    }
    .programms-page .foundation__cta .cta__wrapper .cta__item {
      width: 100%;
      padding: 0 !important;
    }
    .programms-page .foundation__cta .cta__wrapper .button {
      width: 100%;
    }
  }
  .programms-page .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
  }
  .programms-page .container .breadcrumbs {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
    position: relative;
    background: none;
    display: block;
  }
  .programms-page .container .breadcrumbs .breadcrumbs__item {
    font-size: 14px;
    font-size: 0.875rem;
    display: inline-block;
    position: relative;
    margin-right: 5px;
  }
  .programms-page .container .breadcrumbs .breadcrumbs__item:before {
    content: "/";
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    margin: -1px 6px 0 0;
  }
  .programms-page .container .breadcrumbs .breadcrumbs__item .breadcrumbs__link {
    color: #fff;
    text-decoration: none;
  }
  .programms-page .container .page__header-title {
    font-weight: 400;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 10px 0 0 0;
    margin: 0.625rem 0 0 0;
  }
  .programms-page .container .page__header-text {
    color: #fff;
    line-height: 1.2;
  }
  .programms-page .container .foundation .foundation__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 320px;
    justify-content: space-between;
  }
  .programms-page .container .foundation .foundation__header .foundation__title {
    font-size: 40px;
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
  .programms-page .container .foundation .foundation__header .foundation__img {
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
    margin-left: 150px;
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
    box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
    border: 4px solid rgba(255, 255, 255, 0.5);
  }
  .programms-page .container .foundation .foundation__header .foundation__img img {
    max-width: 100%;
  }
  @media (max-width: 1199.98px) {
    .programms-page .container .foundation .foundation__header .foundation__img {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 300px;
      flex: 0 0 300px;
      max-width: 300px;
      height: 300px;
      margin-right: 100px;
    }
  }
  .programms-page .container .foundation__info {
    height: auto;
    background-image: -webkit-linear-gradient(0deg, #fbb640 0%, #6cc025 0%, #f3ba43 100%);
    font-size: 18px;
    font-size: 1.125rem;
    font-weight: 300;
    color: #fff;
    text-transform: uppercase;
    border-radius: 10px;
    border-radius: 0.625rem;
    padding: 15px;
    padding: 0.9375rem;
    margin: 40px 0;
    margin: 2.5rem 0;
  }
  .programms-page .cta__wrapper {
    display: flex;
  }
  @media (max-width: 1050px) {
    .programms-page .entry {
      padding: 140px 0 100px;
      padding: 8.75rem 0 6.25rem;
    }
    .programms-page .foundation__img {
      display: none !important;
    }
    .programms-page .foundation__info span {
      font-size: 13px;
    }
    .programms-page .container__mobile {
      max-width: 720px;
      padding-right: 15px;
      padding-left: 15px;
      margin: 0 auto;
    }
    .programms-page .row {
      display: flex;
    }
    .programms-page .foundation__features__row {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 617px) {
    .programms-page .foundation__info span {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 320px) {
    .programms-page .button {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 370px) {
    .programms-page .foundation__img__mobile {
      max-width: 250px !important;
      width: 250px;
      height: 220px !important;
      margin-right: 150px !important;
      margin-left: 150px !important;
    }
  }
  @media screen and (max-width: 420px) {
    .programms-page .foundation__features-title {
      font-size: 10px !important;
    }
    .programms-page .why__list-item {
      font-size: 13px !important;
    }
  }
  .programms-page .container {
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .programms-page .page__content_mobile {
    margin-top: 100px;
    display: none;
  }
  .programms-page .page__content_mobile .foundation__mobile {
    justify-content: center;
    align-items: center;
  }
  .programms-page .page__content_mobile .foundation__mobile .foundation__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 320px;
    flex-direction: column;
    align-items: center;
  }
  .programms-page .page__content_mobile .foundation__mobile .foundation__header .foundation__title {
    font-size: 40px;
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
  .programms-page
    .page__content_mobile
    .foundation__mobile
    .foundation__header
    .foundation__img__mobile {
    border-radius: 50%;
    overflow: hidden;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 370px;
    flex: 0 0 370px;
    max-width: 370px;
    width: 370px;
    height: 370px;
    margin-top: 55px;
    margin-top: 3.4375rem;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
    border: 4px solid rgba(255, 255, 255, 0.5);
  }
  .programms-page
    .page__content_mobile
    .foundation__mobile
    .foundation__header
    .foundation__img__mobile
    img {
    max-width: 100%;
  }
  @media (max-width: 1199.98px) {
    .programms-page .page__content_mobile .foundation__mobile .foundation__header .foundation__img {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 300px;
      flex: 0 0 300px;
      max-width: 300px;
      width: 300px;
      height: 300px;
      margin-right: 100px;
    }
  }
  @media (max-width: 1050px) {
    .programms-page
      .page__content_mobile
      .foundation__mobile
      .foundation__header
      .foundation__title {
      font-size: 28px;
      font-size: 1.75rem;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      min-height: auto;
      color: #000;
      text-align: center;
    }
    .programms-page
      .page__content_mobile
      .foundation__mobile
      .foundation__header
      .foundation__header {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
  .programms-page .page__content_mobile .foundation__mobile .foundation__info {
    height: 60px;
    background-image: -webkit-linear-gradient(0deg, #fbb640 0%, #6cc025 0%, #f3ba43 100%);
    font-size: 18px;
    font-size: 1.125rem;
    font-weight: 300;
    color: #fff;
    text-transform: uppercase;
    border-radius: 10px;
    border-radius: 0.625rem;
    padding: 15px;
    padding: 0.9375rem;
    margin: 40px 0;
    margin: 2.5rem 0;
  }
  .programms-page .entry:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 191px;
    background: url("../../../assets/images/general/shadow.png") center no-repeat;
  }
  .programms-page .entry__pattern {
    background: url("../../../assets/images/general/pattern.png") repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: -4;
    opacity: 0.4;
  }
  .programms-page .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  .programms-page .waves .waves__item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .programms-page .waves .waves__item img {
    display: block;
    width: 100%;
  }
  .programms-page .waves .waves__item:first-child {
    bottom: -1px;
  }
  @media (max-width: 991.98px) {
    .programms-page .waves .waves__item:first-child {
      bottom: 0;
    }
  }
  .programms-page .waves .waves__item:last-child {
    bottom: 0;
  }
  @media (max-width: 1199.98px) {
    .programms-page .waves .waves__item:last-child {
      bottom: 15px;
    }
  }
  .programms-page .glow {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: -3;
  }
  .programms-page .glow > img {
    position: absolute;
    left: -130px;
    bottom: 0;
  }
  @media (max-width: 991.98px) {
    .programms-page .glow {
      display: none;
    }
  }
  .programms-page .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap !important;
    margin-right: -15px;
    margin-left: -15px;
  }
  .programms-page .row .video__wrapper {
    max-width: 600px;
  }
  .programms-page .row .video__wrapper .embed-responsive {
    position: relative;
    display: block;
    max-width: 100%;
    height: 350px;
    padding: 0;
    overflow: hidden;
  }
  .programms-page .row .video__wrapper .embed-responsive .embed-responsive-16by9::before {
    padding-top: 56.25% !important;
  }
  .programms-page .row .video__wrapper .embed-responsive .embed-responsive::before {
    display: block;
    content: "";
  }
  .programms-page .row .embed-responsive-item {
    max-width: 100% !important;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    border: 0;
  }
  .programms-page .row .section-heading__title {
    font-size: 40px;
    font-size: 2.5rem;
    font-weight: 300;
    color: #000;
    text-transform: uppercase;
  }
  .programms-page .row .section-heading {
    padding-bottom: 25px;
    padding-bottom: 1.5625rem;
  }
  @media (max-width: 767.98px) {
    .programms-page .row .section-heading__title {
      font-size: 26px !important;
      font-size: 1.625rem !important;
    }
    .programms-page .row .embed-responsive {
      position: relative;
      display: block;
      max-width: 100%;
      height: 200px !important;
      padding: 0;
      overflow: hidden;
    }
  }
  @media (max-width: 430px) {
    .programms-page .row .embed-responsive {
      max-width: 100%;
      width: 350px;
      height: 150px !important;
    }
  }
  @media (max-width: 992px) {
    .programms-page .row .col-lg-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .programms-page .row .embed-responsive {
      max-width: 100%;
      height: 300px;
    }
  }
  @media (max-width: 991px) {
    .programms-page .row .col-md-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (max-width: 991px) {
    .programms-page .row .col-md-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 90%;
    }
    .programms-page .row .section-heading {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
  }
  @media (max-width: 500px) {
    .programms-page .row .row {
      flex-direction: column !important;
    }
  }
  @media (max-width: 1200px) {
    .programms-page .container {
      max-width: 1140px;
    }
  }
  @media (max-width: 992px) {
    .programms-page .container {
      max-width: 960px;
    }
    .programms-page .col-lg-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
  .programms-page .consultation {
    height: auto;
    background-color: #dcdcdc;
  }
  .programms-page .consultation .container {
    max-width: 960px;
    margin: 0 auto;
  }
  .programms-page .consultation .consultation__title {
    font-size: 25px;
    font-size: 1.5625rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-bottom: 1.875rem;
    text-align: center;
    padding-top: 50px;
  }
  .programms-page .consultation .consultation__item input {
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
  .programms-page .consultation .consultation__item input:focus {
    outline: none;
    background-color: white;
  }
  .programms-page .consultation .consultation__item input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .programms-page .consultation .consultation__item button {
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
  .programms-page .consultation .consultation__item button:hover {
    box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  }
  @media (max-width: 992px) {
    .programms-page .consultation .container {
      max-width: 960px;
    }
  }
  @media (max-width: 768px) {
    .programms-page .consultation .container {
      max-width: 540px;
    }
    .programms-page .consultation .container .consultation__item input {
      width: 100%;
      margin-bottom: 15px !important;
      padding: 0 10px;
    }
    .programms-page .consultation .container .consultation__item button {
      width: 100%;
    }
  }
  .programms-page .questions {
    text-align: center;
    padding: 50px 0 80px;
    padding: 3.125rem 0 5rem;
    background-color: #fff;
  }
  .programms-page .questions .questions__title {
    font-size: 20px;
    font-size: 1.25rem;
    font-weight: 500;
    color: #292929;
  }
  .programms-page .questions .questions__button {
    color: #4a4a4a;
    max-width: 470px;
    margin: 12px auto 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-color: #a0a0a0;
    white-space: normal;
  }
  .programms-page .questions .questions__button:hover {
    background-image: -webkit-linear-gradient(0deg, #45529e 0%, #33408a 100%);
    color: white;
  }
  .programms-page .questions .section-heading__title {
    color: #292929;
    font-size: 40px;
    font-size: 2.5rem;
    font-weight: 300;
    color: #000;
    text-transform: uppercase;
  }
  .programms-page .questions .section-heading__subtitle {
    color: #545454;
    max-width: 690px;
    background-color: black;
  }
  @media screen and (max-width: 357px) {
    .programms-page .questions .section-heading__title {
      font-size: 23px;
    }
    .programms-page .questions a {
      font-size: 11px;
    }
  }
  .programms-page .foundation__features {
    padding-bottom: 50px;
    padding-bottom: 3.125rem;
  }
  .programms-page .foundation__features .foundation__features-heading {
    font-size: 18px;
    font-size: 1.125rem;
    text-transform: uppercase;
    padding-bottom: 25px;
    padding-bottom: 1.5625rem;
  }
  .programms-page .foundation__features .foundation__features-item {
    border-radius: 20px;
    border-radius: 1.25rem;
    box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
    overflow: hidden;
    height: 100%;
  }
  .programms-page .foundation__features .foundation__features-item .foundation__features-divider {
    background-image: -webkit-linear-gradient(0deg, #fbb640 0%, #6cc025 0%, #f3ba43 100%);
    height: 6px;
  }
  .programms-page .foundation__features .foundation__features-content {
    padding: 20px 15px;
    padding: 1.25rem 0.9375rem;
    text-align: center;
  }
  .programms-page .foundation__features .foundation__features-content .foundation__features-title {
    font-size: 17px;
    font-size: 1.0625rem;
    font-weight: 500;
    color: #484848;
    line-height: 1.2;
    text-transform: uppercase;
  }
  .programms-page .why {
    background-color: #f9f9f9;
    padding: 50px 0 70px;
    padding: 3.125rem 0 4.375rem;
  }
  .programms-page .why .why__row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .programms-page .why .why__row .why__list {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
    padding-right: 70px;
    padding-right: 4.375rem;
  }
  .programms-page .why .why__row .why__list .why__list-item {
    font-size: 17px;
    font-size: 1.0625rem;
    position: relative;
    color: #484848;
    margin-bottom: 30px;
    margin-bottom: 1.875rem;
    padding-left: 38px;
    padding-left: 2.375rem;
  }
  .programms-page .why .why__row .why__list .why__list-item:before {
    content: "";
    background: url("../../../assets/images/general/green-check.png") no-repeat;
    width: 26px;
    height: 27px;
    position: absolute;
    top: -4px;
    left: 0;
  }
  .programms-page .why .why__row .why__card {
    max-width: 325px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 325px;
    flex: 0 0 325px;
    border-radius: 20px;
    border-radius: 1.25rem;
    box-shadow: 0px 5px 6.8px 1.2px #b6b6b6;
    overflow: hidden;
  }
  .programms-page .why .why__row .why__card .why__card-title {
    background-image: -webkit-linear-gradient(0deg, #fbb640 0%, #6cc025 0%, #f3ba43 100%);
    font-size: 19px;
    font-size: 1.1875rem;
    font-weight: 300;
    line-height: 1;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    padding: 20px;
    padding: 1.25rem;
  }
  @media (max-width: 768px) {
    .programms-page .why .why__row .why__card .why__card-title {
      font-size: 40px;
      font-size: 2.5rem;
    }
  }
  @media (max-width: 576px) {
    .programms-page .why .why__row .why__card .why__card-title {
      font-size: 32px;
      font-size: 2rem;
    }
  }
  .programms-page .why .why__row .why__card .why__card-text {
    font-size: 17px;
    font-size: 1.0625rem;
    color: #484848;
    line-height: 1.6;
    padding: 20px 35px;
    padding: 1.25rem 2.1875rem;
  }
  @media (max-width: 767.98px) {
    .programms-page .why .section-heading__title {
      font-size: 26px;
      font-size: 1.625rem;
      margin-bottom: 50px;
    }
    .programms-page .why .why__list {
      padding: 0 0 40px 0 !important;
      padding: 0 0 2.5rem 0 !important;
    }
    .programms-page .why .why__row {
      display: block;
      flex-direction: column;
    }
    .programms-page .why .why__card {
      width: 100%;
      max-width: none !important;
    }
  }
  .programms-page body {
    background-color: white;
  }
  .programms-page body .section-heading__title {
    font-size: 40px;
    font-size: 2.5rem;
    font-weight: 300;
    color: #000;
    text-transform: uppercase;
  }
  @media (max-width: 1200px) {
    .programms-page .container {
      max-width: 1140px;
    }
  }
  @media (max-width: 992px) {
    .programms-page .container {
      max-width: 720px;
    }
  }
  @media (max-width: 768px) {
    .programms-page .container {
      max-width: 720px;
    }
  }
  @media (max-width: 576px) {
    .programms-page .container {
      max-width: 540px;
    }
  }
`
