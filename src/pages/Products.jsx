import React from "react";
import Container from "../components/Container";
import { useLanguage } from "../context/LanguageContext";
import { space } from "postcss/lib/list";
import { ProductEnglishData, ProductSwedishData } from "../Data/ProductData";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { language } = useLanguage();
  let data;
  switch (language) {
    case "en":
      data = ProductEnglishData;
      break;
    case "swe":
      data = ProductSwedishData;
      break;
    default:
      data = ProductEnglishData; // Default to English if language not found
  }
  return (
    <Container>
      <section id="product" className="min-h-screen">
        <div className="mt-10">
          {language === "en" && (
            <h1 className="fonta  text-primary ">
              Powerful Healthtech Solutions.Tailored Approach
            </h1>
          )}
          {language === "swe" && (
            <h1 className="fonta  text-primary">
              Kraftfulla Healthtech-lösningar.Skräddarsytt tillvägagångssätt
            </h1>
          )}
        </div>
        <div className="mt-3">
          {language === "en" && (
            <span className="fontb">
              At Prev Health, we understand that every healthcare provider has
              unique needs and challenges. That's why we offer two distinct
              solutions tailored to meet those needs effectively: our product
              offering and our service offering.
            </span>
          )}

          {language === "swe" && (
            <span className="fontb">
              På Prev Health förstår vi att varje vårdgivare har unika behov och
              utmaningar. Därför erbjuder vi två distinkta lösningar som är
              utformade för att effektivt möta dessa behov: vårt produktutbud
              och vårt tjänsteerbjudande.
            </span>
          )}
        </div>
        <div className="mt-6 flex flex-col gap-10">
          {data.map((item, index) => {
            return <ProductCard data={item} key={index} />;
          })}
        </div>
      </section>
    </Container>
  );
};

export default Products;
