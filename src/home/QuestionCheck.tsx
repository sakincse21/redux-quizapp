import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks"
import QuizControl from "./QuizControl";
import { cn } from "@/lib/utils";


const QuestionCheck = () => {
    const {questions, currentQuestionIndex, userAnswer}=useAppSelector((state)=>state.quiz);
    console.log(questions);
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = userAnswer[currentQuestionIndex];
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  return (
    <div className="flex justify-center">
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>
                    {currentQuestion?.question}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    {
                        currentQuestion?.options?.map((option,index)=> 
                        <Button
                        variant={'outline'} className={cn('w-full mt-3', {
                            'bg-red-400': currentAnswer!==correctAnswer && currentAnswer===option,
                            'bg-green-400': currentAnswer===correctAnswer || option===correctAnswer,
                            'bg-white': option!==correctAnswer && option !== currentAnswer
                            }
                        )} key={index} size={'lg'}
                        >{option}</Button>
                    )
                    }
                </div>
                <QuizControl />
            </CardContent>
        </Card>
    </div>
  )
}

export default QuestionCheck