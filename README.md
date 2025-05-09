# Routinize

A productivity web app that helps users track and improve their daily routines — not with vague habits, but with structured blocks of focused work, health rituals, and accountability check-ins. Built for makers: developers, creators, and disciplined individuals who want to optimize their time and mental performance without relying on dopamine-spiking task apps.

## Features

### 🎯 **Structured Routines**
- Create and manage daily routines with specific time blocks
- Track completion of routine tasks
- Visual progress indicators and completion rates
- Routine categories: Morning, Work, Health, Evening

### ⏱️ **Time Blocking System**
- Focused work sessions with built-in timers
- Start, pause, resume, and reset functionality
- Visual progress tracking
- Session completion tracking

### 💚 **Health & Wellness Tracking**
- Daily health check-ins with metrics:
  - Hydration levels
  - Energy levels
  - Focus levels
  - Mood tracking
- Weekly trend analysis
- Historical health data

### 📊 **Progress & Accountability**
- Weekly completion rates
- Streak tracking
- Deep work time tracking
- Visual progress dashboards

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useEffect)
- **Date Handling**: date-fns

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd routinize
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Dashboard (home page)
│   ├── routines/           # Routine management
│   ├── time-blocks/       # Time blocking system
│   └── health/            # Health tracking
├── components/            # Reusable React components
│   ├── RoutineCard.tsx    # Routine display component
│   ├── TimeBlock.tsx     # Timer component
│   └── HealthCheck.tsx   # Health tracking form
├── types/                 # TypeScript type definitions
│   └── index.ts          # Core data types
└── lib/                  # Utility functions
```

## Key Components

### RoutineCard
Displays individual routines with:
- Routine type and status indicators
- Task lists with completion tracking
- Start/pause/complete controls
- Time duration and scheduling

### TimeBlock
Interactive timer component with:
- Countdown timer with visual progress
- Start, pause, resume, stop, and reset controls
- Real-time progress tracking
- Completion status management

### HealthCheck
Wellness tracking form with:
- Slider-based metric input (1-10 scale)
- Hydration, energy, focus, and mood tracking
- Notes section for additional observations
- Data persistence and historical tracking

## Design Philosophy

Routinize is designed for **makers** who value:
- **Structure over chaos**: Clear time blocks instead of vague habits
- **Focus over distraction**: No dopamine-spiking features
- **Progress over perfection**: Measurable improvements
- **Discipline over motivation**: Systems that work regardless of mood

## Future Enhancements

- [ ] User authentication and data persistence
- [ ] Mobile app development
- [ ] Advanced analytics and insights
- [ ] Routine templates and sharing
- [ ] Integration with calendar apps
- [ ] Team accountability features
- [ ] Export and reporting capabilities

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons by Lucide React
- Inspired by productivity methodologies for makers and creators