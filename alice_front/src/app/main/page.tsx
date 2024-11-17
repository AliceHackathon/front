"use client";

import Image from "next/image";
import styles from "./mainpage.module.css";
import character from "../images/character.png";
import Union from "../images/Union.png";
import payment from "../images/payment.png";
import voice from "../images/voice.png";
import cart from "../images/cart.png";
// import Card from "@/components/card/card";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

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
          handleChatMessage(finalTranscript.trim());
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

  // 채팅 메시지 처리
  const handleChatMessage = (message: string) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
    sendToServer(message);
  };

  // 백엔드로 텍스트 전송
  const sendToServer = async (message: string) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      console.log("서버 응답:", data);
    } catch (error) {
      console.error("서버 통신 오류:", error);
    }
  };

  return (
    <>
      <div className={styles.characterSection}>
        <div className={styles.container2}>
          <Image src={Union} alt="Union" className={styles.Union} />
          <Image
            src={character}
            alt="Character"
            className={styles.characterImage}
          />
        </div>
        <div className={styles.ask}>
          <p>엘리에게 직접 주문해보세요!</p>
        </div>
        {/* <Card /> */}
        <div className={styles.chatBox}>
          {chatMessages.map((message, index) => (
            <div key={index} className={styles.chatMessage}>
              {message}
            </div>
          ))}
        </div>
        <footer
          style={{
            display: "flex",
            justifyContent: "space-around",
            bottom: 80,
            position: "fixed",
            width: "100%",
          }}
        >
          <Image src={cart} alt="" className={styles.img} layout="fixed" />
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
          <Image src={payment} alt="" className={styles.img} layout="fixed" />
        </footer>
      </div>
    </>
  );
}
