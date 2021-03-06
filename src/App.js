import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import image1 from "./imgs/1.png";
import image2 from "./imgs/2.png";
import image3 from "./imgs/3.png";
import Influencer from "./Influencer";
import logo from "./imgs/logo.png";

function App() {
  const imageSize1 = {
    width: "150px",
    height: "300px",
    zIndex: 1,
  };
  const imageSize2 = {
    width: "150px",
    height: "300px",
    zIndex: 3,
  };
  const imageSize3 = {
    width: "150px",
    height: "300px",
    zIndex: 1,
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <DivSideLine>
              <DivFirstMent>
                <DivFirstMent1>인플루언서와 팬을 이어주는</DivFirstMent1>
                <DivFirstMent2>유료 구독형 메신저</DivFirstMent2>
                <DivFirstMent2>데일리즈</DivFirstMent2>
              </DivFirstMent>
              <DivImaBox>
                <Img2 src={image2} style={imageSize1} />
                <Img1 src={image1} style={imageSize2} />
                <Img3 src={image3} style={imageSize3} />
              </DivImaBox>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Link to="/influencer">
                  <Button style={{ marginTop: "40px" }}>인플루언서</Button>
                </Link>

                {/* <Router exact path="/influencer">
            <Influencer></Influencer>
          </Router> */}
                <div style={{ marginTop: "40px" }}>
                  <div style={{ color: "white" }}>
                    Next Generation Messenger
                  </div>
                  <div style={{ color: "white" }}>for Creators and Fans</div>
                </div>
              </div>
            </DivSideLine>
          </Route>
          <Route exact path="/influencer">
            <Influencer></Influencer>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const Button = styled.button`
  background: #585858;
  color: white;
  border: 0;
  border-radius: 5px;
  height: 30px;
  transition: all 0.5s;
  &:hover {
    background: #ffc815;
    transition: all 0.5s;
    color: black;
  }
  &:active {
    background: #ffc815;
    transition: all 0.5s;
    color: black;
  }
  @media only screen and (max-width: 750px) {
    background: #292929;
  }
`;

const Img1 = styled.img`
  position: relative;
  right: 40px;
`;
const Img2 = styled.img`
  position: relative;
  left: 40px;
`;
const Img3 = styled.img`
  position: relative;
  right: 120px;
`;
const DivImaBox = styled.div`
  display: flex;
  margin: 40px 0;
`;
//alskdjflkajskdljflkajsldfjkladjslkfjaljdflkjasldk
const DivSideLine = styled.div`
  border: 1px solid black;
  width: 375px;
  height: 100vh;
  text-align: center;
  margin: auto;
  background: black;
`;
const DivFirstMent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const DivFirstMent1 = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;
const DivFirstMent2 = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #ffc815;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export default App;
