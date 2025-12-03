export const ceilDecimal = (value: number) => {
    
    let rounded = value.toFixed(1)
    if(Number(rounded) % 10 > 0) {
        return rounded
    }
    return Number(rounded).toFixed(0)
}