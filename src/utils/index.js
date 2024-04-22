import { hair, angrybeard, bearcopete } from "../assets/svg/index"
import { photoReview1, photoReview2, photoReview3 } from "../assets/images/users/index"

export const cardInfo = [
  {
    id: 1,
    title: "Corte de Pelo Clásico",
    img: bearcopete,
    paragraph: "Estilo atemporal para hombres elegantes. Cortes precisos y acabados impecables que resaltan tu personalidad con clase.",
    price: "10.000",
    bgColor: "bg-secondary-dark",
  },
  {
    id: 2,
    title: "Diseño de Barba Personalizado",
    img: angrybeard,
    paragraph: "Estilo único para tu barba. Diseños precisos y asesoramiento experto para conseguir la forma y el mantenimiento perfectos.",
    price: "15.000",
    bgColor: "bg-primary-dark",
  },
  {
    id: 3,
    title: "Corte de Pelo Moderno",
    img: bearcopete,
    paragraph: "Estilo contemporáneo para hombres vanguardistas. Cortes innovadores, texturas dinámicas y acabados únicos que te harán destacar con audacia y estilo.",
    price: "20.000",
    bgColor: "bg-secondary-dark",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Juan Pérez",
    img: photoReview1,
    comment: '"Excelente atención y servicio. Los barberos son muy profesionales y amables. ¡Volveré pronto!"',
  },
  {
    id: 2,
    name: "Pedro Sánchez",
    img: photoReview2,
    comment: '"Muy buenos cortes y precios accesibles. El ambiente es muy agradable y acogedor. ¡Muy recomendado!"',
  },
  {
    id: 3,
    name: "Carlos González",
    img: photoReview3,
    comment: '"¡La mejor barbería de la ciudad! Los barberos son muy talentosos y siempre me dejan satisfecho con el resultado."',
  }
];