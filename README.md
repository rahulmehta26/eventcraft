# EventCraft 🎯

**EventCraft** is a smart and flexible event scheduling app built with React, Redux, and Vite. It allows users to create and manage recurring events with custom repeat patterns like "every X days" or "2nd Tuesday of each month."

## 🔧 Features

- 🗓️ Create and manage recurring events
- 🔁 Support for interval-based patterns and specific day rules
- 🧠 Redux for state management
- 💾 localStorage for persistent data
- 📆 Mini calendar preview of selected dates
- 🎨 Tailwind CSS for responsive UI
- ⚡ Powered by Vite with HMR for blazing-fast development

## 📁 Project Structure

```bash
src/
├── components/         # Reusable UI components
├── redux/              # Redux store and slices
├── utils/              # Date handling logic
├── App.jsx             # Main app entry
├── index.css           # Global styles & theme colors
└── main.jsx            # Vite entry point

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

🛠️ Built With
React

Redux Toolkit

Vite

Tailwind CSS

localStorage API

```
## ⚙️ How It Works

EventCraft lets users plan events with powerful recurring logic. You can:

1. Enter basic details like event name, participants, and time.
2. Choose a recurrence pattern:
   - Every X days
   - Every week on specific days
   - 2nd Monday or Last Friday of the month
3. Preview recurring dates on a mini calendar.
4. Save events using Redux, which persists in localStorage.

All logic is handled locally—no backend needed!

---

## 🔄 Application Flow

1. User fills the form in `EventForm.jsx`.
2. `RecurringDatePicker.jsx` dynamically handles recurring logic.
3. Redux dispatches and stores the event in `eventSlice.js`.
4. `MiniCalendar.jsx` renders recurring dates.
5. Events are listed in `EventList.jsx` using global state from Redux.
6. Data is saved and reloaded from `localStorage` on refresh.



```
🙌 Author
Rahul Kumar Mehta

