// Utility functions demonstrating ES6+ syntax.

export const createTask = (title, category, id) => ({
  id,
  title,
  category,
  completed: false
});

// Optional chaining + nullish coalescing.
export const getUserLabel = (user) =>
  user?.profile?.name ?? "Guest";

// Template literal.
export const taskLabel = ({ title, category }) =>
  `${title} — ${category}`;

// Destructuring.
export const getTaskParts = ({ title, category, completed }) => ({
  title,
  category,
  completed
});

// Rest parameters.
export const countArguments = (...values) => values.length;

// Spread operator.
export const addWithoutMutation = (items, newItem) => [
  ...items,
  newItem
];
