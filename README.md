# 🚀 Bounty Countdown Timer

A beautiful, customizable countdown timer component for bounty displays. Built with **React** + **Tailwind CSS**.

![Bounty Countdown Timer](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- 🎨 **5 Beautiful Themes** - Purple, Blue, Green, Orange, Red
- 📱 **Responsive Design** - Works on all screen sizes
- ⏱️ **Full & Compact Modes** - Choose your display style
- 🎯 **Progress Bar** - Visual countdown progress
- ⏸️ **Pause/Resume** - Full timer control
- 🔄 **Auto-Reset** - Callback on completion
- 💫 **Glow Effects** - Modern glassmorphism design
- ♿ **Accessible** - Keyboard navigation support

## 📦 Installation

```bash
# Clone or copy the component
cd bounty-countdown-timer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Quick Start

### Basic Usage

```jsx
import CountdownTimer from './CountdownTimer';

function App() {
  return (
    <CountdownTimer
      targetDate="2026-05-01T00:00:00"
      bountyAmount="100K $FNDRY"
      bountyTitle="🏆 Featured Bounty"
    />
  );
}
```

### All Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `targetDate` | `number \| string` | **required** | Target date (timestamp or ISO string) |
| `bountyAmount` | `string` | `''` | Bounty amount to display |
| `bountyTitle` | `string` | `'Bounty'` | Title of the bounty |
| `theme` | `string` | `'purple'` | Color theme: purple, blue, green, orange, red |
| `showSeconds` | `boolean` | `true` | Whether to show seconds |
| `autoStart` | `boolean` | `true` | Auto-start countdown |
| `compact` | `boolean` | `false` | Compact mode for smaller display |
| `onComplete` | `function` | `undefined` | Callback when countdown completes |
| `className` | `string` | `''` | Additional CSS classes |

### Examples

#### Full Size Timer

```jsx
<CountdownTimer
  targetDate={new Date('2026-05-01')}
  bountyAmount="100K $FNDRY"
  bountyTitle="🏆 Smart Contract Audit"
  theme="purple"
  showSeconds={true}
/>
```

#### Compact Mode

```jsx
<CountdownTimer
  targetDate={new Date('2026-05-01')}
  bountyAmount="50K"
  compact={true}
  theme="blue"
/>
```

#### With Completion Callback

```jsx
<CountdownTimer
  targetDate={new Date('2026-05-01')}
  bountyAmount="25K $FNDRY"
  onComplete={() => {
    console.log('Bounty ended!');
    // Send notification, update state, etc.
  }}
/>
```

#### Multiple Themes

```jsx
// Available themes: purple, blue, green, orange, red
<CountdownTimer theme="green" {...props} />
<CountdownTimer theme="orange" {...props} />
<CountdownTimer theme="red" {...props} />
```

## 🎨 Theme Preview

| Theme | Preview |
|-------|---------|
| Purple | `from-purple-600 to-indigo-600` |
| Blue | `from-blue-600 to-cyan-600` |
| Green | `from-green-600 to-emerald-600` |
| Orange | `from-orange-600 to-amber-600` |
| Red | `from-red-600 to-rose-600` |

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
bounty-countdown-timer/
├── src/
│   ├── CountdownTimer.jsx    # Main component
│   ├── App.jsx               # Demo app
│   ├── index.jsx             # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind config
├── vite.config.js            # Vite config
├── postcss.config.js         # PostCSS config
└── README.md                 # This file
```

## 🎯 Use Cases

- **Bounty Platforms** - Display countdown for hackathons, challenges
- **NFT Drops** - Show time until mint opens
- **Token Sales** - Countdown to sale end
- **Event Timers** - Conference, webinar countdowns
- **Flash Sales** - E-commerce limited-time offers
- **Gaming** - Event timers, reward countdowns

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built with ❤️ by **Stardust** (星尘)

## 🙏 Acknowledgments

- React Team for the amazing library
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing fast build tool

---

**Happy Coding! 🚀**
