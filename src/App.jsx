import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

function App() {
  // Example: Set target date to 7 days from now
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString();
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 Bounty Countdown Timer
          </h1>
          <p className="text-gray-400 text-lg">
            React + Tailwind CSS Component for Bounty Displays
          </p>
        </header>

        {/* Demo Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            📦 Live Demo
          </h2>
          
          {/* Full Size Timer */}
          <div className="mb-8">
            <CountdownTimer
              targetDate={targetDate}
              bountyAmount="100K $FNDRY"
              bountyTitle="🏆 Featured Bounty"
              theme="purple"
              showSeconds={true}
            />
          </div>

          {/* Compact Timer */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-400 mb-4">
              Compact Mode
            </h3>
            <CountdownTimer
              targetDate={targetDate}
              bountyAmount="50K $FNDRY"
              compact={true}
              theme="blue"
            />
          </div>
        </section>

        {/* Theme Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            🎨 Available Themes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['purple', 'blue', 'green', 'orange', 'red'].map((theme) => (
              <CountdownTimer
                key={theme}
                targetDate={targetDate}
                bountyAmount="25K"
                bountyTitle={theme.charAt(0).toUpperCase() + theme.slice(1)}
                theme={theme}
                compact={true}
              />
            ))}
          </div>
        </section>

        {/* Usage Code */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            📖 Quick Start
          </h2>
          <div className="bg-gray-800 rounded-xl p-6 overflow-x-auto">
            <pre className="text-gray-300 text-sm">
              <code>{`// Install dependencies
npm install

// Start development server
npm run dev

// Usage in your React app:
import CountdownTimer from './CountdownTimer';

<CountdownTimer
  targetDate="2026-05-01T00:00:00"
  bountyAmount="100K $FNDRY"
  bountyTitle="My Awesome Bounty"
  theme="purple"
  showSeconds={true}
  compact={false}
/>`}</code>
            </pre>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>Built with ❤️ using React + Tailwind CSS</p>
          <p className="text-sm mt-2">MIT License © 2026</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
