// 1. Создаем тестовые данные (Массив одной большой задачи)
const tasks = [
    {
        id: "task-1",
        title: "Купить продукты для пирога",
        subtasks: [
            { id: "sub-1", title: "Купить фарш", isCompleted: true },
            { id: "sub-2", title: "Найти ворчестерский соус", isCompleted: false }
        ]
    }
];

// 2. Находим наш контейнер в HTML
const appContainer = document.getElementById('app');
const subtaskInput = document.getElementById('subtask-input');
const addSubtaskBtn = document.getElementById('add-subtask-btn');

// 3. Пишем простую функцию, которая превратит массив в текст на экране
function renderApp() {
    let htmlContent = '';

    tasks.forEach(task => {
        // Добавляем заголовок большой задачи
        htmlContent += `<h2>Категория: ${task.title}</h2><ul>`;

        // Перебираем её подзадачи
        task.subtasks.forEach(subtask => {
            htmlContent += `<li>${subtask.title} (Сделано: ${subtask.isCompleted})</li>`;
        });

        htmlContent += `</ul>`;
    });

    // Вставляем сгенерированный HTML внутрь нашего div
    appContainer.innerHTML = htmlContent;
}

// 4. Запускаем функцию
renderApp();