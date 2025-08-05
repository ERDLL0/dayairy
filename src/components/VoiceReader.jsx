import React, { useState } from 'react';

const VoiceReader = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = () => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="mt-4">
      <button
        onClick={isSpeaking ? stopSpeaking : speakText}
        className={`px-4 py-2 rounded-xl text-white transition ${
          isSpeaking ? 'bg-red-500' : 'bg-green-500'
        }`}
      >
        {isSpeaking ? '⛔ Durdur' : '🔊 Sesli Oku'}
      </button>
    </div>
  );
};

export default VoiceReader;
