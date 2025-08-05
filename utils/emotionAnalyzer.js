import emotionWords from "../data/emotionWords.json";

export function analyzeEmotion(text) {
  const lowerText = text.toLowerCase();
  for (const [emotion, keywords] of Object.entries(emotionWords)) {
    for (const word of keywords) {
      if (lowerText.includes(word)) {
        return emotion;
      }
    }
  }
  return "nötr";
}
