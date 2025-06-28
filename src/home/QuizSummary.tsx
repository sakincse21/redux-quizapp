import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useAppSelector } from "@/redux/hooks"

const getPerformance = (percentage: number) =>{
  if(percentage>=90){
    return {
      rating:"Excellent",
      bgColor: "bg-green-500"
    }}
  else if(percentage>=70){
    return {
      rating:"Very Good",
      bgColor: "bg-yellow-500"
    }}
  else if(percentage>=50){
    return {
      rating:"Good",
      bgColor: "bg-orange-500"
    }}
  else{ return {
      rating:"Need Improvement",
      bgColor: "bg-red-500"
    }}

}

const QuizSummary = () => {
  const {questions,userAnswer} = useAppSelector((state)=>state.quiz);
  console.log(userAnswer);
  
  const correctAnswerCount = questions.reduce((count,question,inx)=>{
    return question.correctAnswer===userAnswer[inx]?count+1:count;
  },0);
  const incorrectAnswerCount = questions.length - correctAnswerCount;
  const correctPercentage = parseFloat(((correctAnswerCount/questions.length)*100).toFixed(2))
  const {rating, bgColor} = getPerformance(correctPercentage);
  return (
    <div>
      <Card className="max-w-lg mx-auto p-6 shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className=" text-xl font-medium mb-4">You got {correctAnswerCount} out of {questions.length}</h3>
          {/* progress bar */}
          <div className="mb-4">
            <Progress value={correctPercentage} className={`h-4 rounded-full ${bgColor}`} />
          </div>
          <div className="flex justify-between mt-2">
            <span className=" text-sm">{correctPercentage}%</span>
            <span className=" text-sm">Performance: {rating}</span>
          </div>
          <div className="mb-4">
            <p className="text-sm">
              <strong>Incorrect Answer:</strong> {incorrectAnswerCount}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm">Great Job! Keep practicing...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default QuizSummary