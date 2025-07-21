const weekDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ]
  
  export const formatDateWithDay = (isoDate: string) => {
    const date = new Date(isoDate)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    const weekDay = weekDays[date.getDay()]
    return `${weekDay} — ${day}.${month}.${year}`
  }
  