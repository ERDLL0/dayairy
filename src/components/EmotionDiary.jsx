import React, { useState, useEffect } from 'react';
import EmojiPicker from './EmojiPicker';
import MentorCard from './MentorCard';
import HistoryCards from './HistoryCards';
import StatsPanel from './StatsPanel';
import CalendarPicker from './CalendarPicker';
import WordCounter from './WordCounter';
import AudioPlayer from './AudioPlayer';

import emotionWords from '../data/emotionWords.json';
import { analyzeEmotion } from '../utils/emotionAnalyzer';
import { generateMentorAdvice } from '../utils/mentorGenerator';
import { changeThemeByEmotion } from '../utils/themeChanger';
import { countWords } from '../utils/wordCounter';


const EmotionDiary = () => {
  const [entry, setEntry] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [history, setHistory] = useState([]);
  const [mentorAdvice, setMentorAdvice] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('diaryHistory'));
    if (stored) setHistory(stored);
  }, []);

  useEffect(() => {
    if (selectedEmotion) {
      changeThemeByEmotion(selectedEmotion);
      setMentorAdvice(generateMentorAdvice(selectedEmotion));
    }
  }, [selectedEmotion]);

  const handleSave = () => {
    if (!entry.trim()) return;
    const emotion = selectedEmotion || analyzeEmotion(entry, emotionWords);
    const newEntry = {
      text: entry,
      emotion,
      date,
    };
    const updated = [newEntry, ...history.slice(0, 4)];
    setHistory(updated);
    localStorage.setItem('diaryHistory', JSON.stringify(updated));
    setEntry('');
    setSelectedEmotion(null);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">📝 Dayairy</h1>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <CalendarPicker date={date} setDate={setDate} />

      <textarea
        className="w-full h-40 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
        placeholder="How are you feeling today? Write your thoughts here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <EmojiPicker
        selectedEmotion={selectedEmotion}
        setSelectedEmotion={setSelectedEmotion}
        emotions={[
          'happy',
          'sad',
          'angry',
          'anxious',
          'grateful',
          'hopeful',
          'lonely',
          'nostalgic',
          'excited',
          'tired',
          'peaceful',
          'worried',
          'confused',
          'inspired',
          'calm',
        ]}
      />

      <WordCounter text={entry} />

      {mentorAdvice && <MentorCard emotion={selectedEmotion} advice={mentorAdvice} />}

      <button
        onClick={handleSave}
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-indigo-600 transition"
      >
        Save Entry
      </button>

      <AudioPlayer emotion={selectedEmotion} />

      <HistoryCards history={history} />

      <StatsPanel history={history} />

      <StatsPanel entries={entries} />

    </div>
);

  );
};

export default EmotionDiary;
