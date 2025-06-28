import Question from "./home/Question"
import QuestionCheck from "./home/QuestionCheck"
import QuizSummary from "./home/QuizSummary"
import { useAppSelector } from "./redux/hooks"

function App() {
  const { quizComplete, questionCheck } = useAppSelector((state) => state.quiz)
  return (
    <div className="h-screen flex flex-column items-center justify-center">
      <div>

        <h1 className="text-6xl text-center my-6">
          Quiz App
        </h1>
        {
          !quizComplete &&
          <Question />
        }
        {
          quizComplete && !questionCheck &&
          <QuizSummary />
        }
        {
          quizComplete && questionCheck &&
          <QuestionCheck />
        }
      </div>
    </div>
  )
}

export default App