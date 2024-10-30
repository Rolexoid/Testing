import TextAnswer from './TextAnswer'
import TextAreaAnswer from './TextAreaAnswer'
import CheckboxAnswer from './CheckBoxAnswer'
import RadioAnswer from './RadioAnswer'
import { ComponentProps } from 'react'

type AnswerTypes = { [key: string]: (props: ComponentProps<typeof TextAnswer>) => JSX.Element };

const answerComponents: AnswerTypes = {
  text: TextAnswer,
  textArea: TextAreaAnswer,
  radio: RadioAnswer,
  checkBox: CheckboxAnswer, 
};

const getComponent = (type: string) => answerComponents[type];

export default getComponent;