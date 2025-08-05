import React, { useState, useEffect, useRef } from 'react';

// Örnek müzik önerileri (placeholder URL'ler, kendi müziklerinizi koyabilirsiniz)
const musicLibrary = {
  mutlu: '/music/happy.mp3',
  üzgün: '/music/sad.mp3',
  huzurlu: '/music/peaceful.mp3',
  sinirli: '/music/calm-down.mp3',
  enerjik: '/music/energetic.mp3',
  yorgun: '/music/relax.mp3',
  // İstersen buraya daha fazla duygu ve müzik ekleyebilirsin
};

const AudioPlayer = ({ emotion }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  useEffect(() => {
    // Duygu değiştiğinde otomatik durdur ve yeni müziği yükle
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [emotion]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  if (!emotion || !musicLibrary[emotion]) return null;

  return (
    <div className="flex items-center space-x-4 bg-white/20 p-3 rounded-lg shadow-md max-w-md mx-auto mt-4 backdrop-blur-sm">
      <audio ref={audioRef} src={musicLibrary[emotion]} loop preload="auto" />
      <button
        onClick={togglePlay}
        className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? 'Duraklat' : 'Çal'}
      </button>
      <label className="flex items-center space-x-2 text-gray-700">
        <span>Ses:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          className="w-24"
        />
      </label>
    </div>
  );
};

export default AudioPlayer;
