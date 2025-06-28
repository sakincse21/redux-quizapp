import Question from "./home/Question"
import QuizSummary from "./home/QuizSummary"
import { useAppSelector } from "./redux/hooks"

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz)
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
          quizComplete &&
          <QuizSummary />
        }
      </div>
    </div>
  )
}

export default App