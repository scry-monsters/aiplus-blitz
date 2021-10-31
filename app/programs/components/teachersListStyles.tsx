import css from "styled-jsx/css"

const styles = css.global`
  .students-page .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .students-page .page__header {
    position: relative;
    z-index: 0;
    padding: 145px 0 0;
    padding: 9.0625rem 0 0;
    min-height: 530px;
  }
  .students-page .page__header:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 191px;
  }
  .students-page .page__header .breadcrumbs {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
    position: relative;
    background: none;
    display: flex;
    flex-direction: row;
  }
  .students-page .page__header .breadcrumbs .breadcrumbs__item {
    color: #000;
    font-size: 14px;
    font-size: 0.875rem;
    display: inline-block;
    position: relative;
    margin-right: 5px;
  }
  .students-page .page__header .breadcrumbs .breadcrumbs__item .breadcrumbs__link {
    color: #fff;
    text-decoration: none;
  }
  .students-page .page__header .breadcrumbs .breadcrumbs__item a {
    color: #36499b;
    text-decoration: none;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    background-color: transparent;
  }
  .students-page .page__header .breadcrumbs li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .students-page .page__header .page__header-title {
    font-weight: 400;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 10px 0 0 0;
    margin: 0.625rem 0 0 0;
  }
  .students-page .page__header h1 {
    font-size: 40px;
    font-size: 2.5rem;
  }
  @media (min-width: 576px) {
    .students-page .page__header h1 {
      font-size: 32px;
      font-size: 2rem;
    }
  }
  .students-page .page__header .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  .students-page .page__header .waves:first-child {
    bottom: -1px;
  }
  .students-page .page__header .waves .waves__item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  @media (max-width: 767.98px) {
    .students-page .page__header {
      padding: 125px 0 90px;
      padding: 7.8125rem 0 5.625rem;
      min-height: auto;
    }
  }
  @media (max-width: 991.98px) {
    .students-page .page__header {
      padding: 130px 0 100px;
      padding: 8.125rem 0 6.25rem;
    }
  }
  .students-page .bg-orange {
    background-image: -webkit-linear-gradient(0deg, #fabf36 0%, #eda04d 100%);
  }
  .students-page .page__content {
    margin: -270px 0 0 0;
    margin: -16.875rem 0 0 0;
    position: relative;
  }
  .students-page .page__content .row[data-gutter="20"] {
    margin-left: -10px;
    margin-right: -10px;
  }
  .students-page .page__content .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .students-page .page__content .row[data-gutter="20"] > [className^="col"] {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: 992px) {
    .students-page .page__content .col-lg-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .students-page .page__content col-lg-9 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
  }
  @media (min-width: 768px) {
    .students-page .page__content .col-md-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .students-page .page__content .col-md-8 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 66.66667%;
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
  }
  .students-page .page__content .col-md-4,
  .students-page .page__content .col-lg-3 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (max-width: 768px) {
    .students-page .page__content .menu:first-child {
      margin-top: 200px;
    }
    .students-page .page__content .students-list:first-child {
      margin-top: 1rem;
    }
  }
  .students-page .page__content .menu__item {
    margin-bottom: 8px;
  }
  .students-page .page__content .menu__item .menu__link {
    font-size: 0.875rem;
    font-weight: 500;
    color: #1e1e1e;
    position: relative;
    display: block;
    padding: 0.5625rem 0.9375rem;
    border-radius: 2rem;
    background-color: #fff;
    border: 1px solid #fabf36;
    transition: 0.3s;
  }
  .students-page .page__content .menu__item .menu__link-onfocus {
    font-size: 0.875rem;
    font-weight: 500;
    color: #1e1e1e;
    position: relative;
    display: block;
    padding: 0.5625rem 0.9375rem;
    border-radius: 2rem;
    background-color: #36499b;
    color: #fff;
  }
  .students-page .page__content .menu__item a {
    color: #36499b;
    text-decoration: none;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    background-color: transparent;
  }
  .students-page .page__content .menu__item .menu__sub {
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
  }
  .students-page .page__content .menu__item .menu__sub .menu__subitem:first-child .menu__sublink {
    padding-top: 50px;
    padding-top: 3.125rem;
  }
  .students-page .page__content .menu__item .menu__sub .menu__subitem .menu__sublink {
    font-size: 14px;
    font-size: 0.875rem;
    color: #585757;
    display: block;
    padding: 6px 15px;
    padding: 0.375rem 0.9375rem;
  }
  .students-page .page__content .menu__item .menu__sub .menu__subitem .menu__sublink:hover {
    color: #989898;
  }
  .students-page .page__content .menu__item ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  .students-page .page__content .menu__item ul li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .students-page .page__content .students-list {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }
  .students-page .page__content .students-list .students-list__item {
    margin-bottom: 1.9rem;
    border-radius: 20px;
    border-radius: 1.25rem;
    padding: 30px 40px;
    padding: 1.875rem 2.5rem;
    background: #fff;
    position: relative;
    overflow: hidden;
    min-height: 210px;
  }
  .students-page .page__content .students-list .students-list__item .students-list__img {
    border-radius: 50% 0 0 50%;
    border-radius: 50% 0 0 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    width: 325px;
    height: 325px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center 80%;
    object-position: center 80%;
  }
  .students-page .page__content .students-list .students-list__item img {
    max-width: 100%;
    border-style: none;
  }
  @media (max-width: 991.98px) {
    .students-page .page__content .students-list .students-list__item .students-list__img {
      position: static;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border-radius: 50%;
      -webkit-transform: none;
      transform: none;
      margin: 0 auto;
    }
  }
  .students-page .page__content .students-list .students-list__item .students-list__content {
    width: 315px;
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__results {
    font-size: 22px;
    font-size: 1.375rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    line-height: 1.2;
    text-transform: uppercase;
    position: relative;
    padding: 6px 0;
    padding: 0.375rem 0;
    margin: 0 40px;
    margin: 0 2.5rem;
    background: #36499b;
    z-index: 0;
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__results:before {
    content: "";
    position: absolute;
    top: 0;
    left: -40px;
    z-index: -1;
    height: 100%;
    width: 54px;
    background: -webkit-linear-gradient(left top, transparent 50%, #36499b 51%),
      -webkit-linear-gradient(right top, #36499b 50%, transparent 51%);
    background: linear-gradient(to right bottom, transparent 50%, #36499b 51%),
      linear-gradient(to left bottom, #36499b 50%, transparent 51%);
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__results:after {
    content: "";
    position: absolute;
    top: 0;
    right: -40px;
    z-index: -1;
    height: 100%;
    width: 54px;
    background: -webkit-linear-gradient(right top, transparent 50%, #36499b 51%),
      -webkit-linear-gradient(left top, #36499b 50%, transparent 51%);
    background: linear-gradient(to left bottom, transparent 50%, #36499b 51%),
      linear-gradient(to right bottom, #36499b 50%, transparent 51%);
  }
  @media (max-width: 1199.98px) {
    .students-page
      .page__content
      .students-list
      .students-list__item
      .students-list__content
      .students-list__results {
      font-size: 1.125rem;
    }
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__title {
    font-size: 21px;
    font-size: 1.3125rem;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    padding: 15px 0;
    padding: 0.9375rem 0;
    border-bottom: 1px solid #353535;
  }
  @media (max-width: 1199.98px) {
    .students-page
      .page__content
      .students-list
      .students-list__item
      .students-list__content
      .students-list__title {
      font-size: 18px;
      font-size: 1.125rem;
    }
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__name {
    font-size: 20px;
    font-size: 1.25rem;
    color: #141414;
    line-height: 1;
    text-align: center;
    margin-top: 15px;
    margin-top: 0.9375rem;
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__links {
    position: absolute;
    right: 15px;
    bottom: 5px;
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__links
    .button:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__links
    .button {
    font-size: 16px;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    padding: 5px 25px;
    padding: 0.3125rem 1.5625rem;
    width: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    touch-action: manipulation;
    outline: none;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 32px;
    border-radius: 2rem;
    user-select: none;
    transition: all 0.175s cubic-bezier(0.25, 0.8, 0.25, 1);
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 50px;
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__links
    .button:hover {
    background-color: #36499b;
    color: #fff;
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__links
    .students-list__link {
    font-size: 14px !important;
    font-size: 0.875rem !important;
    color: #989898;
    background: #fff;
    border: 1px solid #989898;
    height: auto;
    text-transform: none;
    margin-left: 10px;
  }
  .students-page
    .page__content
    .students-list
    .students-list__item
    .students-list__content
    .students-list__links
    .students-list__link:last-child {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 0;
  }
  @media (max-width: 991.98px) {
    .students-page
      .page__content
      .students-list
      .students-list__item
      .students-list__content
      .students-list__links {
      height: 150px;
      position: static;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1.25rem 0;
      justify-content: space-between;
    }
  }
  @media (max-width: 1199.98px) {
    .students-page .page__content .students-list .students-list__item .students-list__content {
      width: 290px;
    }
  }
  @media (max-width: 991.98px) {
    .students-page .page__content .students-list .students-list__item .students-list__content {
      width: auto;
      padding-top: 20px;
    }
    .students-page
      .page__content
      .students-list
      .students-list__item
      .students-list__content
      .students-list__links {
      position: static;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin: 1.25rem 0;
      padding: 10px;
    }
  }
  @media (max-width: 1199.98px) {
    .students-page .page__content .students-list .students-list__item {
      padding: 30px 15px;
      padding: 1.875rem 0.9375rem;
    }
  }
  @media (min-width: 576px) {
    .students-page .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .students-page .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .students-page .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .students-page .container {
      max-width: 1140px;
    }
  }
  /*
|--------------------------------------------------------------------------
| teachers-list
|--------------------------------------------------------------------------
*/
  .teachers-list {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }

  .teachers-list__item {
    margin-bottom: 15px;
    margin-bottom: 0.9375rem;
    box-shadow: 0 5px 6.8px 1.2px rgba(0, 0, 0, 0.13);
    border-radius: 20px;
    border-radius: 1.25rem;
    background: #fff;
    position: relative;
    overflow: hidden;
    min-height: 255px;
  }

  @media (max-width: 1199.98px) {
    .teachers-list__item {
      padding: 30px 15px;
      padding: 1.875rem 0.9375rem;
    }
  }

  .teachers-list__content {
    max-width: 325px;
    padding: 30px 0 30px 40px;
  }

  @media (max-width: 991.98px) {
    .teachers-list__content {
      text-align: center;
      max-width: none;
      padding-top: 20px;
    }
  }

  .teachers-list__name {
    font-size: 25px;
    font-size: 1.5625rem;
    color: #141414;
    line-height: 1;
    padding-bottom: 15px;
    padding-bottom: 0.9375rem;
    border-bottom: 1px solid #818181;
  }

  .teachers-list__job {
    font-size: 14px;
    font-size: 0.875rem;
    margin-top: 12px;
    margin-top: 0.75rem;
  }

  .teachers-list__text {
    font-size: 20px;
    font-size: 1.25rem;
    font-weight: 300;
    font-style: italic;
    line-height: 1.2;
    margin-top: 15px;
    margin-top: 0.9375rem;
  }

  .teachers-list__img {
    border-radius: 50% 0 0 50%;
    border-radius: 50% 0 0 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    width: 400px;
    height: 400px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center 80%;
    object-position: center 80%;
    font-family: "object-fit: cover; object-position: center 80%";
  }

  @media (max-width: 1199.98px) {
    .teachers-list__img {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 991.98px) {
    .teachers-list__img {
      position: static;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border-radius: 50%;
      -webkit-transform: none;
      transform: none;
      margin: 0 auto;
    }
  }

  .teachers-list__links {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }

  @media (max-width: 991.98px) {
    .teachers-list__links {
      position: static;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-top: 20px;
      margin-top: 1.25rem;
    }
  }

  .teachers-list__link {
    font-size: 14px !important;
    font-size: 0.875rem !important;
    color: #989898;
    background: #fff;
    border: 1px solid #989898;
    height: auto;
    text-transform: none;
    margin-left: 10px;
  }

  @media (max-width: 991.98px) {
    .teachers-list__link {
      margin: 5px 0;
    }
  }

  .teachers-list__link:hover,
  .teachers-list__link:focus {
    background: #36499b;
    color: #fff;
    border-color: #36499b;
  }

  .teachers-list__link:last-child {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 0;
  }

  /*
|--------------------------------------------------------------------------
| person
|--------------------------------------------------------------------------
*/
  .person {
    padding-left: 50px;
    padding-left: 3.125rem;
  }

  @media (max-width: 1199.98px) {
    .person {
      padding-left: 30px;
      padding-left: 1.875rem;
    }
  }

  @media (max-width: 991.98px) {
    .person {
      padding: 0;
      padding: 0;
    }
  }

  @media (max-width: 767.98px) {
    .person {
      padding: 30px 0 0 0;
      padding: 1.875rem 0 0 0;
    }
  }

  .person__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  @media (max-width: 991.98px) {
    .person__header {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  .person__info {
    color: #fff;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 330px;
    flex: 0 0 330px;
    max-width: 330px;
    min-height: 320px;
  }

  @media (max-width: 991.98px) {
    .person__info {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      min-height: auto;
      color: #000;
    }
  }

  .person__words {
    font-size: 20px;
    font-size: 1.25rem;
    font-weight: 300;
    font-style: italic;
    line-height: 1.3;
  }

  @media (max-width: 991.98px) {
    .person__words {
      font-size: 18px;
      font-size: 1.125rem;
    }
  }

  .person__title {
    font-size: 32px;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
  }

  @media (max-width: 991.98px) {
    .person__title {
      font-size: 22px;
      font-size: 1.375rem;
      color: #000;
    }
  }

  .person__subtitle {
    font-size: 18px;
    font-size: 1.125rem;
    font-weight: 500;
    color: #fff;
    line-height: 1.1;
    margin-top: 15px;
  }

  @media (max-width: 991.98px) {
    .person__subtitle {
      color: #000;
    }
  }

  .person__button {
    font-size: 14px;
    font-size: 0.875rem;
    margin-top: 25px;
  }

  .person__video {
    font-size: 14px;
    font-size: 0.875rem;
    font-weight: 400;
    color: #3e3e3e;
    border: 1px solid #3e3e3e;
    height: auto;
    text-transform: none;
    padding: 7px 15px;
  }

  @media (max-width: 991.98px) {
    .person__video {
      display: block;
      width: 160px;
      margin: 0 auto;
    }
  }

  .person__video:hover,
  .person__video:focus {
    color: #fff;
    background: #36499b;
    border-color: #36499b;
  }

  .person__img {
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

  @media (max-width: 1199.98px) {
    .person__img {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 300px;
      flex: 0 0 300px;
      max-width: 300px;
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 991.98px) {
    .person__img {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 250px;
      flex: 0 0 250px;
      max-width: 250px;
      width: 250px;
      height: 250px;
      margin: 40px auto 0;
    }
  }

  .person__img img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center 80%;
    object-position: center 80%;
    font-family: "object-fit: cover; object-position: center 80%";
  }

  .person__body {
    margin-top: -20px;
    padding-bottom: 20px;
    padding-bottom: 1.25rem;
  }

  @media (max-width: 991.98px) {
    .person__body {
      margin-top: 0;
      padding-top: 30px;
      padding-top: 1.875rem;
    }
  }

  .person__about {
    font-size: 16px;
    color: #484848;
    padding: 45px 0 15px;
    padding: 2.8125rem 0 0.9375rem;
  }

  .person__about h1,
  .person__about h2,
  .person__about h3,
  .person__about h4,
  .person__about h5,
  .person__about h6 {
    font-weight: 300;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .person__about hr {
    margin: 20px 0;
    border-top: 1px solid #818181;
  }

  .person__about i {
    font-size: 14px;
    display: block;
    margin: 5px 0 0 0;
  }

  /*
|--------------------------------------------------------------------------
| notes
|--------------------------------------------------------------------------
*/
  .notes {
    padding-left: 50px;
    padding-left: 3.125rem;
  }

  @media (max-width: 1199.98px) {
    .notes {
      padding-left: 30px;
      padding-left: 1.875rem;
    }
  }

  @media (max-width: 991.98px) {
    .notes {
      padding: 0;
    }
  }

  .notes__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: -15px;
  }

  .notes__item {
    padding: 0 15px;
    margin: 15px 0;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 210px;
    flex: 0 0 210px;
    max-width: 210px;
    width: 210px;
  }

  @media (max-width: 455.98px) {
    .notes__item {
      max-width: none;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
  }

  .notes__link {
    box-shadow: 0 5px 6.8px 1.2px rgba(0, 0, 0, 0.13);
    border-radius: 20px;
    border-radius: 1.25rem;
    background: #fff;
    display: block;
    height: 100%;
    margin: 0 auto;
  }

  .notes__img {
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

  .notes__img img {
    height: 90%;
  }

  .notes__text {
    font-size: 13px;
    font-size: 0.8125rem;
    line-height: 1.1;
    padding: 15px 15px 25px;
    padding: 0.9375rem 0.9375rem 1.5625rem;
    color: #484848;
  }
`

export default styles
