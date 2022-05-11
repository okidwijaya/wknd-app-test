import React, { useState, useEffect } from "react";
import { getTestimonial } from "../../utils/getData";
import TestimonialCard from "../card/TestimonialCard";

const SliderTestimonial = () => {
  const [testData, setDataTestimonial] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const lengthSlider = testData.length;

  const nextSlide = () => {
    setCurrentSlider(
      currentSlider === lengthSlider - 1 ? 0 : currentSlider + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlider(
      currentSlider === 0 ? lengthSlider - 1 : currentSlider - 1
    );
  };

  useEffect(() => {
    getTestimonial()
      .then((res) => {
        setDataTestimonial(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!Array.isArray(testData) || testData.length <= 0) {
    return null;
  }
  return (
    <>
      <p onClick={prevSlide}>left</p>
      <p onClick={nextSlide}>right</p>
      <div className="slider">
        {testData.map((data, idx) => {
          return (
            // idx === currentSlider && (
            <TestimonialCard key={idx} title={data.by} post={data.testimony} />
            // )
          );
        })}
      </div>
    </>
  );
};

export default SliderTestimonial;
