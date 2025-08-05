import React from 'react';
import { getMentorSuggestion } from '../utils/mentorGenerator';

const MentorCard = ({ selectedEmotion }) => {
  if (!selectedEmotion) return null;

  const suggestion = getMentorSuggestion(selectedEmotion);

  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 p-4 rounded-2xl shadow-lg transition-all duration-500 max-w-md mx-auto mt-4 animate-fade-in">
      <h2 className="text-lg font-bold mb-2 text-indigo-600">🧠 Mentor'dan Öneri</h2>
      <p className="text-gray-700 text-base">{suggestion}</p>
    </div>
  );
};

export default MentorCard;
