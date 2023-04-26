import Slider from "react-slick";
import styled from "styled-components";

export const StyledCarousel = styled(Slider)`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;

  @media (max-width: 700px) {
    height: 500px;
    margin: 0 0 50px 0;
  }

  .slick-slide {
    margin-right: 0px;
  }

  .slick-slide div {
    margin-right: 0;
  }
`;

export const DivContainerImg = styled.div`
  & img {
    object-fit: contain;
    width: 100%;
  }
`;
