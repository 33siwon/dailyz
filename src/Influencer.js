import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import i1 from "./imgs/1.png";
import i2 from "./imgs/2.png";
import i3 from "./imgs/3.png";
import i4 from "./imgs/4.png";
import i5 from "./imgs/5.png";
import i6 from "./imgs/6.png";
import i7 from "./imgs/7.png";
import logo from "./imgs/logo.png";

const Influencer = () => {
  const imageSize4 = {
    width: "170px",
    height: "340px",
    display: "flex",
  };
  const imageSize5 = {
    width: "170px",
    height: "340px",
    display: "flex",
  };
  return (
    <div>
      <DivSideLine>
        <Link to="/">
          <img src={logo} style={{ width: "250px", height: "102px" }}></img>
        </Link>

        <div
          style={{
            display: "flex",
            flexDirection: "column",

            height: "500px",
            marginBottom: "20px",
            padding: "100px 0",
          }}
        >
          <DivWhite style={{ marginBottom: "20px" }}>
            데일리즈는 어떤 서비스인가요?
          </DivWhite>
          <DivWhite>데일리즈는 팬과 인플루언서를 위한</DivWhite>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DivYellow>채팅방</DivYellow>
            <DivWhite>을 제공합니다.</DivWhite>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              justifyContent: "center",
            }}
          >
            <Img5 src={i5} style={imageSize5} />
            <Img4 src={i4} style={imageSize4} />
          </div>
        </div>
        <div className="why">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ color: "#ffc815", fontSize: "20px" }}>왜&nbsp;</div>
            <div style={{ color: "white", fontSize: "20px" }}>
              데일리즈를 선택해야 하나요?
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div style={{ color: "white", fontSize: "25px" }}>
              채팅방을 통한&nbsp;
            </div>
            <div style={{ color: "#ffc815", fontSize: "25px" }}>
              부담없는 팬 관리
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <img src={i7} style={{ width: "284px", height: "200px" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{ color: "#585858", fontSize: "18px", marginTop: "20px" }}
            >
              한번만 전송하면 채팅방에 있는
            </div>
            <div style={{ color: "#585858", fontSize: "18px" }}>
              모든 팬들에게 개별 메세지로 전달
            </div>
            <div style={{ color: "#585858", fontSize: "18px" }}>
              1:1 메세지같은 느낌을 주는 채팅 시스템
            </div>
            <div
              style={{ color: "#585858", fontSize: "18px", marginTop: "20px" }}
            >
              팬들과 만나는 공간은 오직 채팅방!
            </div>
            <div style={{ color: "#585858", fontSize: "18px" }}>
              우리, 정해진 곳에서만 만나요
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                color: "#ffc815",
                fontSize: "25px",
              }}
            >
              단방향&nbsp;
            </div>
            <div style={{ color: "white", fontSize: "25px" }}>팬 서비스</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{ color: "#585858", fontSize: "18px", marginTop: "20px" }}
            >
              팬들이 요구하는 부담스러울 수 있는
            </div>
            <div style={{ color: "#585858", fontSize: "18px" }}>
              콘텐츠 제작은 No
            </div>
            <div style={{ color: "#585858", fontSize: "18px" }}>
              내가 원하는 것을 올려보세요!
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "50px",
              justifyContent: "center",
            }}
          >
            <Img5 src={i5} style={imageSize5} />
            <Img4 src={i2} style={imageSize4} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <div style={{ color: "white", fontSize: "25px" }}>
              통계서비스&nbsp;
            </div>
            <div style={{ color: "#ffc815", fontSize: "25px" }}>
              및 추천 크리에이터
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{ color: "#585858", fontSize: "18px", marginTop: "20px" }}
            >
              통계서비스를 통해 어떤 멘트와 사진에
            </div>
            <div style={{ color: "#585858", fontSize: "18px" }}>
              높은 반응이 왔는지 확인해요
            </div>
            <div style={{ color: "#585858", fontSize: "18px" }}>
              추천 크리에이터로 선정되어 더 많은 팬을
            </div>
            <div style={{ color: "#585858", fontSize: "18px" }}>
              만나보세요!
            </div>
          </div>
        </div>
        <div className="how">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "80px 0",
            }}
          >
            <div style={{ color: "white", fontSize: "25px" }}>그래서&nbsp;</div>
            <div style={{ color: "#ffc815", fontSize: "25px" }}>어떻게</div>
            <div style={{ color: "white", fontSize: "25px" }}>
              이용하나요?&nbsp;
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div style={{ color: "white", fontSize: "20px" }}>
              1. 회원가입을 해주세요.
            </div>
            <img src={i1} style={imageSize4} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div style={{ color: "white", fontSize: "20px" }}>
              2. 인플루언서 등록을 해주세요.
            </div>
            <img src={i6} style={imageSize4} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div style={{ color: "white", fontSize: "20px" }}>
              3. 채팅방 구독료를 설정하고 팬을 모으세요.
            </div>
            <img src={i5} style={imageSize4} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div style={{ color: "white", fontSize: "20px" }}>
              4. 당신의 스타성을 마음껏 보여주세요.
            </div>
            <img src={i3} style={imageSize4} />
          </div>

          <div>
            <div
              style={{ color: "white", fontSize: "20px", marginTop: "20px" }}
            >
              스타의 자질이 있는 당신,
            </div>
            <div style={{ color: "white", fontSize: "20px" }}>
              그 가치를 데일리즈와 함께 찾으세요.
            </div>
            <div
              style={{ color: "white", fontSize: "15px", marginTop: "20px" }}
            >
              We find your value. We connect your emotions
            </div>
          </div>
        </div>
      </DivSideLine>
    </div>
  );
};
const Img4 = styled.img`
  position: relative;
  z-index: 1;
  right: 40px;
  top: -20px;
`;
const Img5 = styled.img`
  position: relative;
  left: 40px;
  top: 20px;
`;
const DivWhite = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
`;
const DivYellow = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #ffc815;
`;

const DivSideLine = styled.div`
  border: 1px solid black;
  width: 375px;
  height: 3900px;
  text-align: center;
  margin: auto;
  background: black;
`;

export default Influencer;
