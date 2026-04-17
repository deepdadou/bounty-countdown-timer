import React, { useState, useEffect, useMemo } from 'react';

/**
 * Bounty Countdown Timer Component
 * 
 * A beautiful, customizable countdown timer for displaying bounty deadlines.
 * Built with React + Tailwind CSS.
 * 
 * @param {Object} props
 * @param {number|string} props.targetDate - Target date (timestamp or ISO string)
 * @param {string} props.bountyAmount - Bounty amount to display (e.g., "100K $FNDRY")
 * @param {string} props.bountyTitle - Title of the bounty
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.theme - Color theme: 'purple', 'blue', 'green', 'orange', 'red'
 * @param {boolean} props.showSeconds - Whether to show seconds
 * @param {boolean} props.autoStart - Auto-start countdown
 * @param {Function} props.onComplete - Callback when countdown completes
 * @param {boolean} props.compact - Compact mode for smaller display
 */
const CountdownTimer = ({
  targetDate,
  bountyAmount = '',
  bountyTitle = 'Bounty',
  className = '',
  theme = 'purple',
  showSeconds = true,
  autoStart = true,
  onComplete,
  compact = false,
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isComplete, setIsComplete] = useState(false);
  const [isRunning, setIsRunning] = useState(autoStart);

  // Theme configurations
  const themeConfig = useMemo(() => ({
    purple: {
      gradient: 'from-purple-600 to-indigo-600',
      bg: 'bg-purple-500',
      text: 'text-purple-600',
      border: 'border-purple-500',
      glow: 'shadow-purple-500/50',
    },
    blue: {
      gradient: 'from-blue-600 to-cyan-600',
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      border: 'border-blue-500',
      glow: 'shadow-blue-500/50',
    },
    green: {
      gradient: 'from-green-600 to-emerald-600',
      bg: 'bg-green-500',
      text: 'text-green-600',
      border: 'border-green-500',
      glow: 'shadow-green-500/50',
    },
    orange: {
      gradient: 'from-orange-600 to-amber-600',
      bg: 'bg-orange-500',
      text: 'text-orange-600',
      border: 'border-orange-500',
      glow: 'shadow-orange-500/50',
    },
    red: {
      gradient: 'from-red-600 to-rose-600',
      bg: 'bg-red-500',
      text: 'text-red-600',
      border: 'border-red-500',
      glow: 'shadow-red-500/50',
    },
  }), []);

  const colors = themeConfig[theme] || themeConfig.purple;

  // Calculate time left from target date
  function calculateTimeLeft() {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        total: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference,
    };
  }

  // Update countdown every second
  useEffect(() => {
    if (!isRunning || isComplete) return;

    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);

      if (time.total <= 0) {
        setIsComplete(true);
        setIsRunning(false);
        if (onComplete) onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isComplete, onComplete, targetDate]);

  // Format number with leading zero
  const formatNumber = (num) => num.toString().padStart(2, '0');

  // Toggle countdown
  const toggleTimer = () => {
    if (isComplete) {
      setTimeLeft(calculateTimeLeft());
      setIsComplete(false);
    }
    setIsRunning(!isRunning);
  };

  // Compact mode display
  if (compact) {
    return (
      <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${colors.gradient} text-white shadow-lg ${colors.glow} ${className}`}>
        <span className="font-semibold text-sm">{bountyAmount}</span>
        <div className="flex items-center gap-1 font-mono">
          <span className="text-lg font-bold">{formatNumber(timeLeft.days)}</span>
          <span className="text-xs opacity-75">d</span>
          <span className="text-xs opacity-50">:</span>
          <span className="text-lg font-bold">{formatNumber(timeLeft.hours)}</span>
          <span className="text-xs opacity-75">h</span>
          <span className="text-xs opacity-50">:</span>
          <span className="text-lg font-bold">{formatNumber(timeLeft.minutes)}</span>
          <span className="text-xs opacity-75">m</span>
          {showSeconds && (
            <>
              <span className="text-xs opacity-50">:</span>
              <span className="text-lg font-bold">{formatNumber(timeLeft.seconds)}</span>
              <span className="text-xs opacity-75">s</span>
            </>
          )}
        </div>
        <button
          onClick={toggleTimer}
          className="ml-2 px-2 py-1 rounded bg-white/20 hover:bg-white/30 transition-colors text-xs"
        >
          {isRunning ? '⏸' : '▶'}
        </button>
      </div>
    );
  }

  // Full display mode
  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Main Card */}
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.gradient} p-1 shadow-2xl ${colors.glow}`}>
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 md:p-8">
          {/* Bounty Info */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {bountyTitle}
            </h2>
            {bountyAmount && (
              <div className={`inline-block px-4 py-2 rounded-full ${colors.bg} text-white font-bold text-lg md:text-xl shadow-lg`}>
                🎁 {bountyAmount}
              </div>
            )}
          </div>

          {/* Countdown Display */}
          {isComplete ? (
            <div className="text-center py-8">
              <div className="text-5xl md:text-6xl mb-4">🎉</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Time's Up!
              </h3>
              <p className="text-gray-400">This bounty has ended</p>
              <button
                onClick={toggleTimer}
                className={`mt-4 px-6 py-3 rounded-lg ${colors.bg} text-white font-semibold hover:opacity-90 transition-opacity`}
              >
                Restart Timer
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {/* Days */}
              <TimeUnit
                value={timeLeft.days}
                label="Days"
                colors={colors}
              />
              {/* Hours */}
              <TimeUnit
                value={timeLeft.hours}
                label="Hours"
                colors={colors}
              />
              {/* Minutes */}
              <TimeUnit
                value={timeLeft.minutes}
                label="Minutes"
                colors={colors}
              />
              {/* Seconds */}
              {showSeconds && (
                <TimeUnit
                  value={timeLeft.seconds}
                  label="Seconds"
                  colors={colors}
                />
              )}
            </div>
          )}

          {/* Progress Bar */}
          {!isComplete && (
            <div className="mt-6">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Progress</span>
                <span>{calculateProgress()}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${colors.bg} transition-all duration-1000 ease-out`}
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={toggleTimer}
              className={`px-6 py-2 rounded-lg ${colors.bg} text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2`}
            >
              {isRunning ? (
                <>
                  <span>⏸</span> Pause
                </>
              ) : (
                <>
                  <span>▶</span> {isComplete ? 'Restart' : 'Start'}
                </>
              )}
            </button>
            <button
              onClick={() => {
                setTimeLeft(calculateTimeLeft());
                setIsComplete(false);
                setIsRunning(true);
              }}
              className="px-6 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-colors"
            >
              🔄 Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Time Unit Component
const TimeUnit = ({ value, label, colors }) => (
  <div className="flex flex-col items-center">
    <div className={`w-full aspect-square ${colors.bg}/20 border-2 ${colors.border} rounded-xl flex items-center justify-center mb-2`}>
      <span className="text-3xl md:text-4xl font-bold text-white font-mono">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
      {label}
    </span>
  </div>
);

// Calculate progress percentage
function calculateProgress() {
  // This would need the original start time to be accurate
  // For now, return a placeholder
  return 0;
}

export default CountdownTimer;
