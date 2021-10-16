// import { useState } from "react";
// import { Image } from 'blitz'
// import Swiper, { ReactIdSwiperProps } from "react-id-swiper";
// import StudentsSliderItem from "./StudentsSliderItem";
// import honor2 from "app/core/assets/images/general/honor-2.png";

// export interface StudentItem{
//   id: number;
//   img: string;
//   result: string;
//   text: string;
//   name: string;
//   link: string;
// }

// const students: StudentItem[] = [
//   {
//     id: 0,
//     img: "/student_img/1591338186_student_img.jpeg",
//     result: "до 11 баллов после 30 баллов",
//     text: "Поступила в РФМШ в 2019 году",
//     name: "Курманбек Медина",
//     link: "/student/kurmanbek-medina",
//   },
//   {
//     id: 1,
//     img: "/student_img/1554884039_student_img.jpeg",
//     result: "до 572 баллов после 967 баллов",
//     text: "Поступил в НИШ в 2018 году",
//     name: "Ахметов Дархан",
//     link: "/student/akhmetov-darkhan",
//   },
//   {
//     id: 2,
//     img: "/student_img/1554884211_student_img.jpeg",
//     result: "до 520 баллов после 808 баллов",
//     text: "Поступила в НИШ в 2018 году",
//     name: "Тастемір Данеля",
//     link: "/student/tastemіr-danelya",
//   },
//   {
//     id: 3,
//     img: "/student_img/1554884340_student_img.jpeg",
//     result: "до 680 баллов после 922 баллов",
//     text: "Поступила в НИШ в 2018 году",
//     name: "Бұрақожаева Диана",
//     link: "/student/bұraқodgaeva-diana",
//   },
// ];

// interface Pagination{
//   current: number;
//   total: number;
// }

// function StudentsSlider() {
//   const [swiperRef, setSwiperRef] = useState<any | null>(null);
//   const [pagination, setPagination] = useState<Pagination>({
//     current: 0,
//     total: 0,
//   });
//   // const { data, loading, error } = useQuery(GET_STUDENTS_SLIDER);

//   // const students = React.useMemo(()=>{
//   //   return (loading || error || !data?.faqs) ? [] : data.slice(0,10).faqs.map(item=>({
//   //     id: item.id,
//   //     img: item.image,
//   //     result: `до ${item.beforeBallCount} баллов после ${item.afterBallCount} баллов`,
//   //     name: item.fioRu,
//   //     link: `students/${item.id}`
//   //   }));
//   // }, [data, loading, error])
//   // const [items, setItems] = React.useState([1, 2, 3, 4, 5, 6, 7, 8]);

//   const swiperParams: ReactIdSwiperProps & {getSwiper: any} = {
//     getSwiper: setSwiperRef,
//     spaceBetween: 10,
//     shouldSwiperUpdate: false,
//     rebuildOnUpdate: false,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "custom",
//       renderCustom: function (swiper, current, total) {
//         setPagination({ current, total });
//       },
//     },
//     zoom: true,
//     slidesPerView: 1,
//     preloadImages: false,
//     lazy: true,
//     loop: true,
//     breakpoints: {
//       576: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       992: {
//         slidesPerView: 4,
//       },
//     },
//   };

//   const handlePrev = () => {
//     if (swiperRef) {
//       swiperRef.slidePrev();
//     }
//   };
//   const handleNext = () => {
//     if (swiperRef) {
//       swiperRef.slideNext();
//     }
//   };
//   return (
//     <section className="bg-orange-gradient py-5">
//       <div className="container">
//         <div className="section-heading">
//           <div className="section-heading__img">
//             <Image width={120} height={142} src={honor2} alt="Honor 2" />
//           </div>
//           <div className="section-heading__content">
//             <a href="https://aiplus.kz/ru/students">
//               <div className="section-heading__title">Наша гордость</div>
//             </a>
//             <div className="section-heading__subtitle color-white">
//               Ученики поступившие в НИШ и РФМШ 2017-19 года
//             </div>
//           </div>
//         </div>
//         <div className="slider -light position-relative">
//           {/* {(!data || loading || error) ? null : (
//             <Swiper {...swiperParams}>
//               {students.map((teamItem) => (
//                 <div className="swiper-slide"  key={teamItem.id}>
//                   <StudentsSliderItem data={teamItem} />
//                 </div>
//               ))}
//             </Swiper>
//           )} */}

//             <Swiper {...swiperParams}>
//               <div>Hello world</div>
//               {/* <div className="swiper-slide"  key={students[0]?.id}> */}
//                 {/* <StudentsSliderItem data={students[0]} /> */}
//               {/* </div> */}
//             </Swiper>
//           <div className="slider__controls">
//             <div
//               onClick={handlePrev}
//               className="slider__prev jsDefaultSliderPrev slider__control-element"
//               data-id={621899125}
//             />
//             <div className="slider__counter">
//               <span className="slider__counter-current jsCounterCurrent">
//                 {pagination.current}
//               </span>
//               /<span className="jsCounterTotal">{pagination.total}</span>
//             </div>
//             <div
//               className="slider__pagination jsDefaultSliderPagination swiper-pagination-clickable swiper-pagination-bullets"
//               style={{ opacity: 0 }}
//               data-id={542384846}
//             >
//               <span className="swiper-pagination-bullet" />
//               <span className="swiper-pagination-bullet" />
//               <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
//             </div>
//             <div
//               onClick={handleNext}
//               className="slider__next jsDefaultSliderNext slider__control-element"
//               data-id={886250134}
//             />
//           </div>
//           <div className="text-center">
//             <a href="https://aiplus.kz/ru/students" className="slider__more">
//               Посмотреть всех
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default StudentsSlider;
let a = {}
export default a
