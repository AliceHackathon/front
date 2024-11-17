"use client";

import Image from "next/image";
import styles from "./mainpage.module.css";
import character from "../images/character.png";
import voice from "../images/voice.png";
import { useState, useEffect, useRef } from "react";
import Card from "@/components/card/card";
import OvalBackground from "@/components/background/background";
import NavBar from "@/components/navBar/navBar";

const dummyData = [
  { sender: "server", text: "안녕하세요? 오늘 어떠신가요?" },
  { sender: "server", text: "엘리에게 직접 주문해보세요!" },
  { sender: "user", text: "추천 메뉴가 있니?" },
  { sender: "server", text: "아래와 같은 메뉴가 있습니다." },
];

const menuItems = [
  {
    name: "더블 1955 버거 세트",
    englishName: "Double 1955 Burger Meal",
    price: "8,600원",
  },
  { name: "빅맥 세트", englishName: "Big Mac Meal", price: "7,500원" },
  { name: "치즈버거 세트", englishName: "Cheeseburger Meal", price: "5,500원" },
  {
    name: "상하이 스파이스 치킨버거 세트",
    englishName: "Shanghai Spice Chicken Meal",
    price: "8,000원",
  },
];

export default function MainPage() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [chatMessages, setChatMessages] = useState(dummyData);
  const [showMenuCards, setShowMenuCards] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // 텍스트 길이에 따라 너비 계산
  const getMessageWidth = (text: string) => {
    const length = text.length;
    const baseWidth = 80; // 최소 너비 (픽셀)
    const maxWidth = window.innerWidth * 0.3; // 최대 너비는 화면의 30%
    const calculatedWidth = baseWidth + length * 10; // 글자 수에 따라 너비 계산
    return Math.min(calculatedWidth, maxWidth); // 최대 너비 제한
  };

  // 음성 인식 시작
  const startListening = () => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      alert("이 브라우저는 음성 인식 기능을 지원하지 않습니다.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognizer = new SpeechRecognition();
    recognizer.lang = "ko-KR";
    recognizer.interimResults = true;
    recognizer.continuous = true;

    recognizer.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = "";
      let finalTranscript = transcript;

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        } else {
          interimTranscript += result[0].transcript;
        }
      }

      setTranscript(finalTranscript + interimTranscript);

      // 타이머 초기화 및 재설정
      if (timeoutId) clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => {
        if (finalTranscript.trim() !== "") {
          handleUserMessage(finalTranscript.trim());
        }
        setTranscript("");
      }, 3000);
      setTimeoutId(newTimeoutId);
    };

    recognizer.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech Recognition Error:", event.error);
      stopListening();
    };

    recognizer.onend = () => {
      setIsListening(false);
    };

    setRecognition(recognizer);
    recognizer.start();
    setIsListening(true);
  };

  // 음성 인식 중지
  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  // 사용자 메시지 처리
  const handleUserMessage = (message: string) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
    ]);
    if (message.includes("추천 메뉴")) {
      handleMenuRecommendation();
    } else {
      sendToServer(message);
    }
  };

  // 메뉴 추천 처리
  const handleMenuRecommendation = () => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "server", text: "아래와 같은 메뉴가 있습니다." },
    ]);
    setShowMenuCards(true);
  };

  // 서버로 텍스트 전송
  const sendToServer = async (message: string) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      handleServerMessage(data.response);
    } catch (error) {
      console.error("서버 통신 오류:", error);
    }
  };

  // 서버 메시지 처리
  const handleServerMessage = (message: string) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "server", text: message },
    ]);
  };

  // 새로운 메시지가 추가될 때 자동 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <>
      <div className={styles.characterSection}>
        <div className={styles.container2}>
          <OvalBackground width="130%" height="40%" />
          <Image
            src={character}
            alt="Character"
            className={styles.characterImage}
          />
        </div>
        <div className={styles.chatBox}>
          {chatMessages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "user"
                  ? styles.userMessage
                  : styles.serverMessage
              }
              style={{ width: `${getMessageWidth(message.text)}px` }}
            >
              {message.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {showMenuCards && (
          <div className={styles.menuList}>
            {menuItems.map((menu, index) => (
              <Card key={index} menu={menu} />
            ))}
          </div>
        )}

        <NavBar />

        <footer
          style={{
            display: "flex",
            justifyContent: "space-around",
            bottom: 80,
            position: "fixed",
            width: "100%",
          }}
        >
          {/* <Image src={cart} alt="" className={styles.img} layout="fixed" /> */}
          <Image
            src={voice}
            alt="Voice"
            className={styles.img}
            onClick={isListening ? stopListening : startListening}
            style={{
              background: isListening ? "#FFCCCC" : "white",
              borderRadius: "50%",
              boxShadow:
                "0 0 20px 10px rgba(222, 68, 50, 0.2), 0 0 40px 20px rgba(222, 68, 50, 0.2)",
            }}
            layout="fixed"
          />
          {/* <Image src={payment} alt="" className={styles.img} layout="fixed" /> */}
        </footer>
      </div>
    </>
  );
}
