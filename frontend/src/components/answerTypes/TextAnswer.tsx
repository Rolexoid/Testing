import { useRef, useEffect } from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setNextQuestionId } from '../../slices/activeQuestionSlice.js';
import { setAnswer } from '../../slices/answerSlice.js';
import type { Props, FormValue } from '../../types';

const TextAnswer = (props: Props) => {
  const { question, id, progressId } = props;
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
        handleSubmit, handleChange, values
      }) => (
        <Form onSubmit={handleSubmit}>
          <h5>{question}</h5>
          <Form.Control
            name="answer"
            type="text"
            required
            onChange={handleChange}
            value={values.answer}
            ref={inputRef}
          />
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

export default TextAnswer;