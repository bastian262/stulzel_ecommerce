export const useFormat = () => {
    const format = (num) => {
        const formatter = new Intl.NumberFormat('es-ES').format(num);
        return formatter;
    }
    return [format]
}