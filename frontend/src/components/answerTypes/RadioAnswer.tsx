import { Formik, Field } from 'formik';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setNextQuestionId } from '../../slices/activeQuestionSlice.js';
import { setAnswer } from '../../slices/answerSlice.js';
import type { Props, FormValue } from '../../types';

const RadioAnswer = (props: Props) => {
	const { question, options, id, progressId } = props;
  const dispatch = useDispatch();

  const onSubmit = (values: FormValue) => {
    const { answer } = values;
    dispatch(setAnswer({ id, answer }));
    if (id === progressId) {
      dispatch(setNextQuestionId());
    }
  };

  const initialValues: FormValue = { answer: '' };

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
							<label className="form-check-label">
								<Field className="form-check-input" type="radio" name="answer" value={option.text} />
								{option.text}
							</label>
						</div>
					))}
        </div>
				<button
          type="submit"
          className="w-20 mt-2 btn button"
          disabled={values.answer.length===0}
          >Отправить</button>
      </Form>
      )}
    </Formik>

  )
};

export default RadioAnswer;