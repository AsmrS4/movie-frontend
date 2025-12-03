import { useState } from "react";

export const useRecommendMark = () => {
    const [isVisible, setVisible] = useState<boolean>(false)
    const [color, setColor] = useState<'green'|'orange' | null>(null)
    const [recommendationMsg, setMessage] = useState<string>('');
    const handleRecommend = (rating: number) => {
        if(rating==null || rating < 7) {
            return
        }
        if(rating >= 7.0 && rating < 8.0) {
            setColor('orange')
            setMessage('Хороший фильм')
        } else if(rating >= 8.0) {
            setColor('green')
            setMessage('Высокий рейтинг')
        }
        return setVisible(true)
    }
    return {isVisible, color, recommendationMsg, handleRecommend}
}