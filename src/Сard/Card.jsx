import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import css from "./card.module.css";
import ak47 from "../assets/ak-47.jpg";
import fnSkar from "../assets/fn-scar.jpg";
import sigSauer from "../assets/sig-sauer.jpg";

export default function Card() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={css.container}>
        <img src={ak47} width={500} height={300} alt="ak47" />
        <div className={css.textContainer}>
          <p>AK 47</p>
          <p>
            Калибр: 7,62×39 мм. Деревянные части приклад, цевье и пистолетная
            рукоятка придают классический вид. Магазин на 30 патронов изогнутой
            формы. Газоотводная автоматика и простая конструкция делают его
            надежным и эффективным в различных условиях эксплуатации.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={css.container}>
        <img src={fnSkar} width={500} height={300} alt="fnSkar" />
        <div className={css.textContainer}>
          <p>FN SCAR</p>
          <p>
            Регулируемый приклад и телескопическая система — характерная
            особенность FN SCAR. Планки Picatinny на ствольной коробке и цевье
            позволяют крепить различные аксессуары, такие как оптические
            прицелы, фонари или лазеры. Дизайн ствола с дульным
            компенсатором/тормозом и газоотводная система напоминают конструкцию
            SCAR, известного своей модульностью.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={css.container}>
        <img src={sigSauer} width={500} height={300} alt="sigSauer" />
        <div>
          <p>SIG SAUER</p>
          <p>
            Металлический корпус с черной матовой отделкой. Рифленая затворная
            рама, что улучшает удобство перезарядки. Эргономичная рукоятка с
            текстурой для лучшего хвата. Патроны, изображенные рядом, скорее
            всего, калибра 9 мм, что типично для подобных пистолетов.
          </p>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}

// import css from "./card.module.css";
// className={css.container}

// const test = dataCard.map((data, index) => {
//   console.log(data.img);
// });

/* <Swiper spaceBetween={10} slidesPerView={1}>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <img src={img} alt={`Product Image ${index + 1}`} />
    </SwiperSlide>
  ))}
</Swiper>; */

// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// import { Button, Flex, Link, Text } from "@radix-ui/themes";

// const productData = [
//   {
//     img: { ak47 },
//     title: "INTELLIGENT DIGITAL HEADSET",
//     description: "SURROUND 7.1 CHANNEL USB VIBRATION LIGHT",
//     label: "NEW HEARING",
//     sublabel: "FASHION CHOICE",
//   },
//   {
//     img: { fnSkar },
//     title: "INTELLIGENT DIGITAL HEADSET 2",
//     description: "IMPROVED SOUND QUALITY WITH SURROUND 7.1",
//     label: "NEW HEARING",
//     sublabel: "PREMIUM SOUND",
//   },
//   {
//     img: { sigSauer },
//     title: "INTELLIGENT DIGITAL HEADSET 2",
//     description: "IMPROVED SOUND QUALITY WITH SURROUND 7.1",
//     label: "NEW HEARING",
//     sublabel: "PREMIUM SOUND",
//   },
// ];

// export default function Card() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#1a1a1a",
//         padding: "20px",
//         borderRadius: "10px",
//       }}
//     >
//       <Flex direction="column" align="center">
//         <Swiper spaceBetween={30} slidesPerView={1}>
//           {productData.map((product, index) => (
//             <SwiperSlide key={index}>
//               <Flex direction="column" align="center" gap="3">
//                 <img src={product.img} width={500} height={300} alt="ak47" />

//                 <Text size="5" color="orange">
//                   {product.title}
//                 </Text>
//                 <Text size="3" color="gray">
//                   {product.description}
//                 </Text>
//                 <Flex gap="2">
//                   <Button
//                     as={Link}
//                     href="#"
//                     size="2"
//                     color="red"
//                     variant="solid"
//                   >
//                     {product.label}
//                   </Button>
//                   <Button
//                     as={Link}
//                     href="#"
//                     size="2"
//                     color="gray"
//                     variant="outline"
//                   >
//                     {product.sublabel}
//                   </Button>
//                 </Flex>
//               </Flex>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Flex>
//     </div>
//   );
// }
