import { useState } from "react";

export const useRecommendMark = () => {
    const [isVisible, setVisible] = useState<boolean>(false)
    const [color, setColor] = useState<'green'|'orange' | null>(null)
    const handleRecommend = (rating: number) => {
        if(rating==null || rating < 7) {
            return
        }
        if(rating >= 7.0 && rating < 8.5) {
            setColor('orange')
        } else if(rating >= 8.5) {
            setColor('green')
        }
        return setVisible(true)
    }
    return {isVisible, color, handleRecommend}
}