export interface Answer {
  id: number;
  answer: string | string[];
}

export interface AnswerState {
  answers: Answer[];
}


interface RadioAnswers {
  id: number;
  text: string;
}

export interface Question {
  id: number;
  number: number;
  type: string;
  question: string;
  options: null | RadioAnswers[];
  rightAnswer: string | string[];
}

export interface Props {
  id: number;
  question: string;
  options: null | RadioAnswers[];
  progressId: number;
}

export interface Data {
  test: Question[];
  timer: number;
}

export interface FormValue {
  answer: string | string[];
};
