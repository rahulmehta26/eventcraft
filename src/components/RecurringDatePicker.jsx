import React from "react";
import { FaClock } from "react-icons/fa6";
import { PiRepeatBold } from "react-icons/pi";

const RecurringDatePicker = ({ value, onChange }) => {
  const recurrenceTypes = ["none", "daily", "weekly", "monthly", "yearly"];

  const handleTypeChange = (type) => {
    onChange({ ...value, type });
  };

  const handleIntervalChange = (e) => {
    const val = e.target.value;
    if (val === "" || isNaN(Number(val))) {
      onChange({ ...value, interval: "" });
    } else {
      onChange({ ...value, interval: parseInt(val) });
    }
  };

  const getRecurrenceIcon = (type) => {
    const icons = {
      none: '🚫',
      daily: '📅',
      weekly: '📆',
      monthly: '🗓️',
      yearly: '📋'
    };
    return icons[type] || '📅';
  };

  return (
    <div className="space-y-6">
      <label className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
        <PiRepeatBold  className="w-6 h-6 text-emerald-600" />
        Recurrence Pattern
      </label>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {recurrenceTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleTypeChange(type)}
            className={`relative p-4 rounded-xl border-2 transition-all duration-200 capitalize font-medium text-center ${
              value.type === type
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-lg scale-105'
                : 'border-gray-200 bg-white text-gray-600 hover:border-emerald-300 hover:bg-emerald-50 hover:scale-102'
            }`}
          >
            <div className="text-2xl mb-2">{getRecurrenceIcon(type)}</div>
            <div className="text-sm font-semibold">
              {type === 'none' ? 'No Repeat' : type}
            </div>
            {value.type === type && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      {value.type !== "none" && (
        <div className="bg-white rounded-xl border-2 border-emerald-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaClock className="w-5 h-5 text-emerald-600" />
            <h4 className="font-semibold text-emerald-800">Frequency Settings</h4>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Repeat every:
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={value.interval || ""}
                min={1}
                max={365}
                onChange={handleIntervalChange}
                className="w-20 px-3 py-2 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 text-center font-semibold"
                placeholder="1"
              />
              <span className="text-sm font-medium text-gray-700 capitalize">
                {value.type}{value.interval > 1 ? 's' : ''}
              </span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm text-emerald-700">
              <span className="font-medium">Preview:</span> Event will repeat every{' '}
              <span className="font-semibold">
                {value.interval || 1} {value.type}{(value.interval || 1) > 1 ? 's' : ''}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurringDatePicker;