import React from 'react';

const CalendarPicker = ({ selectedDate, onDateChange }) => {
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">🗓️ Tarih Seç:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

export default CalendarPicker;
