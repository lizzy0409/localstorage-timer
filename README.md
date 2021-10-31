## Localstorage-timer

Русифицированный вариант [countdown.js](https://github.com/mckamey/countdownjs), хранящий состояние таймера в localstorage. Таймер устанавливается при первом появлении пользователя на странице и устанавлизается на несколько дней вперёд.

Использование:

```html
<!-- Подключаем библиотеку -->
<script src="https://cdn.jsdelivr.net/npm/countdown@2.6.0/countdown.min.js"></script>
<script src="./path/to/your/scripts/localstorage-timer.js"></script>
<script>
  // Настройка
  // Сколько дней даётся пользователю?
  const daysToEnd = 2
  // Куда вставлять таймер?
  const selectorForTimer = '.timer'
  // id таймера
  const timerId = 1

  localstorageTimer(daysToEnd, selectorForTimer, timerId)
</script>
```
Чтобы поставить новый таймер, необходимо сменить id таймера.
