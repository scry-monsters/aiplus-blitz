import Prisma from ".prisma/client"
import db from "./index"
/* eslint-disable no-console */

/*
 * Seed data is database data that needs to exist for your app to run.
 *
 * @see https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset
 * @see https://www.prisma.io/docs/guides/prisma-guides/seed-database
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
 */

async function main() {
  console.warn("Please define your seed data.")

  const features = require("./_seeds/feature_tab.json")
  const faqs = require("./_seeds/faq_tab.json")
  const facts = require("./_seeds/fact_tab.json")
  const programs = require("./_seeds/programm_tab.json")
  const cities = require("./_seeds/city_tab.json")
  const students = require("./_seeds/student_tab.json")

  const formatedFeatures = features.map((item) => ({
    id: item.feature_id,
    titleKz: item.feature_title_kz,
    titleRu: item.feature_title_ru,
    descriptionKz: item.feature_description_kz,
    descriptionRu: item.feature_description_ru,
    orderNum: item.order_num,
    image: item.feature_img,
  }))
  const formatedFaqs = faqs.map((item) => ({
    id: item.faq_id,
    titleKz: item.faq_title_kz,
    titleRu: item.faq_title_ru,
    descriptionKz: item.faq_text_kz,
    descriptionRu: item.faq_text_ru,
  }))
  const formatedFacts = facts.map((item) => ({
    id: item.fact_id,
    titleKz: item.fact_title_kz,
    titleRu: item.fact_title_ru,
    orderNumber: item.order_num,
    image: item.fact_img,
  }))
  const formatedPrograms = programs.map((item) => ({
    id: item.programm_id,
    titleRu: item.programm_title_ru,
    titleKz: item.programm_title_kz,
    shortSchoolNameRu: item.programm_shortname_ru,
    shortSchoolNameKz: item.programm_shortname_kz,
    fullSchoolNameRu: item.programm_fullname_ru,
    fullSchoolNameKz: item.programm_fullname_kz,
    subTitleRu: item.programm_subtitle_ru,
    subTitleKz: item.programm_subtitle_kz,
    city: item.city,
    titleAtRootRu: item.main_title_ru,
    titleAtRootKz: item.main_title_kz,
    titleAtRootHoverRu: item.main_hover_title_ru,
    titleAtRootHoverKz: item.main_hover_title_kz,
    logo: item.programm_logo,
    logoAtRoot: item.programm_img,
    logoAtListOfPrograms: item.programm_list_img,
    orderNumber: item.order_num,
    youtubeVideoId: item.programm_interview_youtube_id,
    videoTitleRu: item.video_title_ru,
    videoTitleKz: item.video_title_kz,
    factAboutProgramKz: item.programm_fact_kz,
    factAboutProgramRu: item.programm_fact_ru,
    titleWhyRu: item.programm_why_title_ru,
    titleWhyKz: item.programm_why_title_kz,
    textWhyKz: item.programm_why_text_kz,
    textWhyRu: item.programm_why_text_ru,
    cityId: item.programm_city_id,
    // createdAt: item.created_at,
    // updatedAt: item.updated_at,
    // School: item.School,
    // schoolId: item.schoolId,
    // ProgramBenefits: item.ProgramBenefits,
    // ProgramWhy: item.ProgramWhy,
    // ProgramSubject: item.ProgramSubject,
    // cityId: item.cityId,
  }))

  const formatedCities = cities.map((item) => ({
    id: item.city_id,
    name: item.city_title_ru,
  }))

  const formatedStudents = students.map((item) => ({
    id: item.student_id,
    fioKz: item.student_fio_kz,
    fioRu: item.student_fio_ru,
    image: item.student_img,
    beforeBallCount: item.before_ball_count,
    afterBallCount: item.after_ball_count,
    orderNum: item.order_num,
    listOrderNum: item.list_order_num,
    descriptionKz: item.student_description_kz,
    descriptionRu: item.student_description_ru,
    textKz: item.student_text_kz,
    textRu: item.student_text_ru,
    feedbackKz: item.student_feedback_kz,
    feedbackRu: item.student_feedback_ru,
    youtubeVideoId: item.student_interview_youtube_id,
    sliderSubtitleKz: item.slider_subtitle_kz,
    sliderSubtitleRu: item.slider_subtitle_ru,
    year: new Date(`${item.year}`),
    // createdAt: item.created_at,
    // updatedAt: item.updated_at,
    programId: item.programm_id,
    cityId: item.student_city_id,
  }))

  try {
    await db.feature.createMany({
      data: formatedFeatures,
    })
  } catch (e) {
    console.log(e)
  }

  try {
    await db.city.createMany({
      data: formatedCities,
    })
  } catch (error) {
    console.log(error)
  }
  try {
    await db.faq.createMany({
      data: formatedFaqs,
    })
  } catch (error) {
    console.log(error)
  }
  try {
    await db.fact.createMany({
      data: formatedFacts,
    })
  } catch (error) {
    console.log(error)
  }

  try {
    await db.program.createMany({
      data: formatedPrograms,
    })
  } catch (error) {
    console.log(error)
  }
  try {
    await db.student.createMany({
      data: formatedStudents,
    })
  } catch (error) {
    console.log(error)
  }
}

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  // for (let i = 0; i < 5; i++) {
  //   await db.project.create({ data: { name: "Project " + i } })
  // }
  main()
  // .catch((e) => console.error(e))
  // .finally(async () => {
  //   await db.$disconnect()
  // })
}

export default seed
