import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { quizData } from '@/home/QuizData'

const initialState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
  quizComplete: false,
  questionCheck: false
}

export const quizSlice = createSlice({
  name: 'quiz',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex === state.questions.length - 1) {
        state.quizComplete = true;
        state.questionCheck = false;
      }
      if (state.currentQuestionIndex < state.questions.length - 1 && state.userAnswer[state.currentQuestionIndex] !== null)
        state.currentQuestionIndex++;
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0)
        state.currentQuestionIndex--;
    },
    setQuestionCheck: (state) => {
      state.questionCheck = true;
      state.currentQuestionIndex = 0;
    },
    setReset: (state) => {
      state.currentQuestionIndex = 0;
      state.userAnswer = Array(quizData.length).fill(null);
      state.quizComplete = false;
      state.questionCheck = false;
    }
  }
})

export const { setAnswer, nextQuestion, prevQuestion, setQuestionCheck, setReset } = quizSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.quiz.questions;

export default quizSlice.reducer