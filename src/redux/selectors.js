import { statusFilters } from "./constants";

export const selectTasks = (state) => state.tasks.items;

export const selectStatusFilter = (state) => state.filters.status;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

// Обчислення списку завдань які підходять під поточну умову фільтрації
export const selectVisibleTasks = (state) => {
  // Використовуємо інші селектори
  // Отримуємо масив завдань із стану Redux
  const tasks = selectTasks(state);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = selectStatusFilter(state);

  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const selectTaskCount = (state) => {
  // Отримуємо масив завдань із стану Redux
  const tasks = selectTasks(state);

  // На базі стану Redux отримуємо похідні дані кількості активних і виконаних завдань.
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
};
