import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    background-image: url("/images/hero-banner-image.jpeg");
    height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    position: relative;
    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      content: "";
      background-color: #5e4933;
      opacity: 0.8;
    }
    .container-wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
    }
    .hero-banner-wrapper {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      justify-content: center;
      align-items: center;
      height: 100%;
      z-index: 5;
      position: relative;

      .hero-banner-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
          width: 140px;
        }

        .hero-banner-content-text {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
          color: ${theme.coreColor.textColor};
          font-family: "Courier New", Courier, monospace;
          text-align: center;
        }
      }

      .hero-banner-content-wrapper {
        width: 100%;
        font-family: "Courier New", Courier, monospace;
        display: flex;
        flex-direction: column;
        gap: 30px;
        ul {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 20px;
          font-size: 20px;
          color: #fff;
          list-style: none;
          width: 100%;

          li {
            gap: 10px;
            display: -webkit-inline-box;
            margin: 0 auto;

            &.show-border {
              border-top: 1px solid rgba(212, 212, 255, 0.1);
              padding-top: 20px;
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  `}
`;
