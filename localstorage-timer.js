function localstorageTimer(daysToEnd, selectorForTimer, timerId) {
  window.addEventListener('DOMContentLoaded', () => {

    // Запускает таймер
    // Принимает окончание таймера и строку-селектор для вставки таймера
    // Отдаёт каждую секунду строку со временем
    function runTimer(end, selectorForTimer) {
      let now = new Date()
      let ms = end - now

      setInterval(() => {
        if (ms > 0) {
          let timespan = countdown(null, end, countdown.DAYS | countdown.HOURS | countdown.MINUTES)

          const casesDays = ['дней', 'день', 'дня']
          const casesHours = ['часов', 'час', 'часа']
          const casesMinutes = ['минут', 'минута', 'минуты']

          function caseChoice(number) {
            return (number >= 5 && number <= 20) || (number.toString().slice(1) >= 5 && number.toString().slice(1) <= 9) || number == 0 || (number.toString().slice(1) !== '' && number.toString().slice(1) == 0)
              ? 0
              : number == 1 || (number.toString().slice(1) !== '' && number.toString().slice(1) == 1)
              ? 1
              : 2
          }

          let wordDay = casesDays[caseChoice(timespan.days)]
          let wordHour = casesHours[caseChoice(timespan.hours)]
          let wordMinute = casesMinutes[caseChoice(timespan.minutes)]

          document.querySelector(selectorForTimer).innerHTML = `${timespan.days} ${wordDay}, ${timespan.hours} ${wordHour} и ${timespan.minutes} ${wordMinute}`
        } else {
          document.querySelector(selectorForTimer).innerHTML = `0 дней, 0 часов, 0 минут`
        }
      }, 1000)
    }

    // Проверяем localStorage
    // Если id есть, то какой-то таймер установлен
    // Но мы могли вставить новый таймер, а старый убрать
    // Поэтому проверяем id таймера и если id новый или он вообще отсутствует
    // То устанавливаем новый таймер
    if (localStorage.getItem('timerId') != timerId) {
      localStorage.setItem('timerId', timerId)
      let end = new Date().setTime(Date.parse(new Date(Number(new Date()) + daysToEnd * 1000 * 60 * 60 * 24)))
      localStorage.setItem('timerEnd', end)
      console.log('Отсчёт таймера инициализирован')
    } else {
      console.log('Отсчёт таймера продолжен')
    }

    runTimer(localStorage.getItem('timerEnd'), selectorForTimer)
  })
}

