/**
 * App registry — add new projects here.
 * Each entry becomes a card on the homepage.
 *
 *   name        – display name
 *   subdomain   – the subdomain slug (e.g. "chat" → chat.appsthataustinmade.com)
 *   description – one-liner shown on the card
 *   icon        – emoji or short text shown in the card badge
 *   color       – accent color for the card (hex)
 */
const APPS = [
  {
    name: "Pomodoro",
    subdomain: "pomodoro",
    description: "A minimal focus timer to keep you in the zone.",
    icon: "🍅",
    color: "#ef4444",
  },
  {
    name: "Markdown Previewer",
    subdomain: "markdown",
    description: "Live markdown editor with instant preview.",
    icon: "📝",
    color: "#8b5cf6",
  },
  {
    name: "Color Palette",
    subdomain: "colors",
    description: "Generate beautiful color palettes on the fly.",
    icon: "🎨",
    color: "#f59e0b",
  },
  {
    name: "Weather App",
    subdomain: "weather",
    description: "Quick weather lookup with a clean UI.",
    icon: "🌤️",
    color: "#3b82f6",
  },
  {
    name: "Budget Tracker",
    subdomain: "budget",
    description: "Simple expense tracking that stays out of your way.",
    icon: "💰",
    color: "#10b981",
  },
  {
    name: "Chat Room",
    subdomain: "chat",
    description: "Real-time chat, zero friction.",
    icon: "💬",
    color: "#ec4899",
  },
];
