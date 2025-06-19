import * as Yup from 'yup'
import { Form, Field, ErrorMessage, Formik } from 'formik'

function LoginForm() {
	const validate = Yup.object({
		name: Yup.string()
			.min(2, 'Имя должно содержать минимум 2 символа')
			.required('Имя обязательно'),
		email: Yup.string()
			.email('Некорректный Email')
			.required('Email обязателен'),
	})
	return (
		<>
			<Formik
				initialValues={{ name: '', email: '' }}
				validationSchema={validate}
				onSubmit={value => {
					alert(JSON.stringify(value, null, 2))
				}}
			>
				<Form>
					<div>
						<label>Имя</label>
						<Field name='name' type='name' />
						<ErrorMessage
							name='name'
							component='div'
							style={{ color: 'red' }}
						/>
					</div>
					<div>
						<label>Email</label>
						<Field name='email' type='email' />
						<ErrorMessage
							name='email'
							component='div'
							style={{ color: 'red' }}
						/>
					</div>
					<button type='submit'>Войти</button>
				</Form>
			</Formik>
		</>
	)
}

export default LoginForm
