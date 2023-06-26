import styled from "styled-components";
import BG from "../../assets/img/banner.jpg";

export const Logo = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const Banner = styled.div`
  margin: 50px 0;

  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: multiply;
  background-color: #bcbcbc;
  width: 100%;
  height: 500px;

  position: relative;

  &::after {
    content: "Discover exceptional home goods for a stylish living!";
    position: absolute;
    top: 150px;
    left: 50px;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
    color: #d9d9d9;
    width: 400px;
    font-weight: 600;
    font-size: 40px;
  }

  &::before {
    content: "at low prices";
    position: absolute;
    top: 350px;
    left: 50px;
    color: #fff;
    width: 300px;
    font-size: 20px;
  }
`;
