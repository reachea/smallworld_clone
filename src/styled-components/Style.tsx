import styled from "styled-components";
import { Button, Row, Col, Layout } from 'antd';

const { Content } = Layout;

/* Parent Node */

  /* App Styled Components */

  export const ContentNode = styled(Content)`
    min-height: 100vh;
  `;

  export const AllContent = styled.div`
    padding-top: 0px;
    text-align: left;
  `;


  /* Home Styled Components */
  export const HomeNode = styled.div`

    h1, h2, h3, h4 {
      color: white;
    }

    h2 {
      font-size: 28px !important;
    }

    p {
      font-size: 20px!important;
      color: #edecec;
    }
  `;


  /* About Styled Components */
  export const AboutNode = styled.div`
  
    h1, h2, h3, h4 {
      color: #015e98;
    }

    h2 {
      font-size: 28px !important;
    }

    p {
      font-size: 20px !important;
      color: #8e8b8c;
    }
  `;

  export const AboutNavBar = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    background-color: #07568a;
  `;


  /* Works Styled Components */
  export const WorkNode = styled.div`

    h1, h2, h3, h4 {
      color: #015e98;
    }

    h2 {
      font-size: 28px !important;
    }

    p {
      font-size: 20px !important;
      color: #8e8b8c;
    }
  `;

  export const WorkNavBar = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    background-color: #07568a;
  `;


  /* News Styled Components */
  export const NewsNode = styled.div`
  
    h1, h2, h3, h4 {
      color: #015e98;
    }

    p {
      color: #9f9090;
    }
  `;

  export const NewsNavBar = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    background-color: #07568a;
  `;


  /* Spaces Styled Components */
  export const SpaceNode = styled.div`
    
    h1, h2, h3, h4 {
      color: #015e98;
    }

    p {
      color: #9f9090;
    }
  `;

  export const SpaceNavBar = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    background-color: #07568a;
  `;


  /* Contact Styled Components */

  export const ContactNode = styled.div`

    h1, h2, h3, h4 {
      color: #015e98;
    }

    h2 {
      font-size: 23px;
    }

    p {
      color: #9f9090;
    }
  `;

  export const ContactNavBar = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    background-color: #07568a;
  `;



/* Responsive Row and RowItem */
export const RowList = styled(Row)`
  padding-top: 30px;

  /* Responsive Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RowListItem = styled(Col)`
  display: flex;
  flex: 1 0 25%;

  /* Responsive Mobile */
  @media (max-width: 768px) {
    display: block;
    max-width: none;
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const BlockListItem = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 40px 0 hsla(0,0%,77.3%,.85);

  :hover {
    transition: .3s;
    transform: translateY(-5px);
  }
`;

export const BlockListItemContent = styled.div`
  min-height: 200px;
  width: 100%;
  background-color: #ffffff;
  padding: 5px 10px 5px 10px;

  h3 {
    font-size: 18px !important;
    text-align: center;
    color: #015e98;
  }

  p {
    text-align: left;
    font-size: 15px !important;
    color: #616161;
  }
`;

export const ImageItem = styled.div`
  min-height: 200px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


/**/


/* Button Family */
export const LoadMoreBtn = styled.div`

  border: 1px solid transparent;
  background-color: #94bbd4;
  border-radius: 1.5em;
  width: 170px;
  height: 35px !important;
  text-align: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  p {
    font-size: 16px !important;
    color: #015e98;
    padding-top: 2px;
  }
`;


export const HomeBtn = styled(Button)`
  min-height: 1em;
  height: 40px;
  width: 171px;
  background-color: white;
  border-color: transparent;
  color: #015e98;
  border-radius: 1.5em;

  :hover {
    background-color: white;
    color: #8e8b8c;
    transition: .3s !important;
    transform: translateY(-4px);
  }
`;

export const ImageBtn = styled.div`
  border: 1px solid transparent;
  background-color: #94bbd4;
  border-radius: 5px;
  width: 130px;
  height: 23px;
  text-align: center;

  p {
    font-size: 12px !important;
    color: #015e98;
    text-align: center;
  }
`;

export const UnclickableBtn = styled.div`
  border: 1px solid transparent;
  background-color: #ec0a5a;
  border-radius: 1.8em;
  width: 170px;
  height: 45px !important;
  text-align: center;

  p {
    font-size: 19px !important;
    font-weight: 500;
    color: #ffffff;
    padding-top: 5px;
    cursor: default;
  }
`;

export const FormBtn = styled(Button)`

  width: 150px;
  height: 37px;
  border-radius: 1.5em;
  background-color: #94bbd4;
  border: none;
  color: #015e98;
  font-weight: 500;
  padding: 5px 0px 5px 0px;

  :hover {
    color: #015e98;
    background-color: #94bbd4;
    transition: 0s;
  }

  :active {
    color: #015e98;
    background-color: #94bbd4;
    transition: 0s;
  }

  :focus {
    color: #015e98;
    background-color: #94bbd4;
    transition: 0s;
  }
`;


/* Map Components */

export const MapContent = styled.div`
  margin-top: 80px;
  min-height: 400px;
  background-color: #015e98;
`;

export const MapList = styled(Row)`
  height: 100%;
`;

export const MapItem = styled(Col)`
  
  h2 {
    color: white;
    padding-top: 25px;
  }

  p {
    color: white;
    font-size: 18px !important;
    padding-right: 35px;
  }

  @media (max-width: 1200px) {
    flex-basis: 50%;
    width: 50%;
    max-width: 50%;
  }
`;

export const MapItemHidden = styled(Col)`

  @media (max-width: 1200px) {
    flex: initial;
  }
`;


/* Responsive Styled Components */

export const Container = styled.div`

  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const ContainerII = styled(Container)`


  @media (max-width: 768px) {
    margin-right: 0px;
    margin-left: 0px;
    max-width: 100%;
  }
`;

export const ContainerIII = styled(ContainerII)`

  @media (max-width: 992px) {
    padding-left: 10%;
  }
`;

export const ParagraphI = styled(Col)`

  @media (max-width: 992px) {
    flex: initial;
    max-width: none;
  }
`;

export const ParagraphII = styled(Col)`

  @media (max-width: 768px) {
    flex: initial;
    max-width: none;
  }
`;

export const ParagraphIII = styled(Col)`
  
  min-height: 400px;
`;