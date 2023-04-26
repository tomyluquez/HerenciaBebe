import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../Data/images";
import {
  DivContainerImg,
  StyledCarousel,
} from "../../styles/Main/carouselStyles";
import { settingsCarousel } from "../../Data/settingsCarousels";

const Carousel = () => {
  const screenWidth = window.innerWidth;

  let visibleImages = images.slice(0, 2);
  if (screenWidth <= 700) {
    visibleImages = images.slice(2, 4);
  }

  return (
    <StyledCarousel {...settingsCarousel}>
      {visibleImages.map((image, index) => (
        <DivContainerImg key={index}>
          <img src={image.src} alt={image.alt} />
        </DivContainerImg>
      ))}
    </StyledCarousel>
  );
};

export default Carousel;
