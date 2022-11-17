export const dateToStr = (date) => {
    const day = `${date.getDate()}`.length < 2 ? `0${date.getDate()}` : date.getDate();
    const month = `${(date.getMonth() + 1)}`.length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    return `${month}-${day}-${date.getFullYear()}`
}