import { Formik, Field } from 'formik'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setNextQuestionId } from '../../slices/activeQuestionSlice.ts'
import { setAnswer } from '../../slices/answerSlice.ts'
import type { FormValue, Props } from '../../types'

const CheckboxAnswer = (props: Props) => {
  const { question, options, id, progressId } = props;
  const dispatch = useDispatch();

  const onSubmit = (values: FormValue) => {
    const { answer } = values;
    dispatch(setAnswer({ id, answer }));
    if (id === progressId) {
      dispatch(setNextQuestionId());
    }
  };

  const initialValues: FormValue = { answer: []};

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {({
        handleSubmit, values
      }) => (
      <Form onSubmit={handleSubmit}>
        <h5>{question}</h5>
        <div role="group" aria-labelledby="checkbox-group">
          {options?.map((option) => (
            <div className="form-check" key={option.id}>
              <Field type="checkbox" name="answer" id={option.id} value={option.text} className="form-check-input" />
              <label htmlFor={option.id.toString()} className='form-check-label'>{option.text}</label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="button"
          disabled={values.answer.length===0}
          >Отправить</button>
      </Form>
      )}
    </Formik>
  )
};

export default CheckboxAnswer;