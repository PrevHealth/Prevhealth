import React, { useState } from "react";
import Container from "../components/Container";
import { useLanguage } from "../context/LanguageContext";
import { FaqEnglishData, FaqSwedishData } from "../Data/FaqData";

const Faq = () => {
  const { language, changeLanguage } = useLanguage();
  const [selectedId, setSelectedId] = useState(null);
  let data;
  switch (language) {
    case "en":
      data = FaqEnglishData;
      break;
    case "swe":
      data = FaqSwedishData;
      break;
    default:
      data = FaqEnglishData; // Default to English if language not found
  }
  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="bg-[#F7F7FB]">
      <Container>
        <section className="min-h-screen">
          <h1 className="fonta text-primary text-center pt-5">FAQ</h1>
          <div className="flex flex-col gap-8 mt-5 pb-8">
            {data.map((item) => {
              const isOpen = selectedId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="border-b-2 bg-white cursor-pointer rounded-xl shadow-lg  border-[#E3ECED]"
                >
                  <div className="flex justify-between items-start lgitems-center p-8">
                    <h1 className="text-[22px] font-bold text-[#042D3B]">
                      {item.question}
                    </h1>
                    <div className="text-primary bg-blak border p-3 shadow-2xl hidden lg:flex rounded-full">
                      {isOpen ? (
                        <div className="rotate-90">
                          <img src="/Home/faq.png" alt="" />
                        </div>
                      ) : (
                        <div>
                          <img src="/Home/faq.png" alt="" />
                        </div>
                      )}
                    </div>
                  </div>
                  {isOpen && (
                    <p className="px-8 pb-5 text-[22px]">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Faq;
