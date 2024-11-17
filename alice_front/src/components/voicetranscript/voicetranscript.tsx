import styles from "./voicetranscript.module.css";

interface VoiceTranscriptProps {
  text: string;
}

export default function VoiceTranscript({ text }: VoiceTranscriptProps) {
  return (
    <div className={styles.transcriptContainer}>{text || "듣는 중..."}</div>
  );
}
