// Generic card color combinations that can be used across different components
export interface CardColorTheme {
  backgroundColor: string;
  textColor: string;
}

// Predefined color themes
export const CARD_COLOR_THEMES: CardColorTheme[] = [
  {
    backgroundColor: "bg-purple-200",
    textColor: "text-gray-800"
  },
  {
    backgroundColor: "bg-red-500",
    textColor: "text-white"
  },
  {
    backgroundColor: "bg-blue-500",
    textColor: "text-white"
  },
  {
    backgroundColor: "bg-gray-800",
    textColor: "text-white"
  },
  {
    backgroundColor: "bg-gray-300",
    textColor: "text-gray-800"
  },
  {
    backgroundColor: "bg-yellow-200",
    textColor: "text-gray-800"
  },
  {
    backgroundColor: "bg-green-500",
    textColor: "text-white"
  },
  {
    backgroundColor: "bg-purple-600",
    textColor: "text-white"
  },
  {
    backgroundColor: "bg-indigo-500",
    textColor: "text-white"
  },
  {
    backgroundColor: "bg-pink-400",
    textColor: "text-white"
  }
];

// Utility function to get a color theme by index or randomly
export const getCardColorTheme = (index?: number): CardColorTheme => {
  if (typeof index === 'number' && index >= 0 && index < CARD_COLOR_THEMES.length) {
    return CARD_COLOR_THEMES[index];
  }

  // Return random theme if no valid index provided
  const randomIndex = Math.floor(Math.random() * CARD_COLOR_THEMES.length);
  return CARD_COLOR_THEMES[randomIndex];
};

// Utility function to cycle through themes
export const getCardColorThemeByPosition = (position: number): CardColorTheme => {
  const index = position % CARD_COLOR_THEMES.length;
  return CARD_COLOR_THEMES[index];
};
