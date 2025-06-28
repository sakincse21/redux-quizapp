import { Button } from "@/components/ui/button"
import { nextQuestion, prevQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch } from "@/redux/hooks"

const QuizControl = () => {
    const dispatch = useAppDispatch();
    const handleNext = () => {
        dispatch(nextQuestion())
    }
    const handlePrevious = () => {
        dispatch(prevQuestion())
    }
    return (
        <div className="flex justify-between mt-4 space-x-4">
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
        </div>
    )
}

export default QuizControl