import React from 'react';

const WordCounter = ({ text }) => {
  // Metindeki kelime sayısını hesapla (boşluklara göre)
  const countWords = (str) => {
    if (!str) return 0;
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  const wordCount = countWords(text);

  return (
    <div className="text-sm text-gray-600 mt-2 font-mono">
      Kelime sayısı: <span className="font-semibold">{wordCount}</span>
    </div>
  );
};

export default WordCounter;
 export function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}
