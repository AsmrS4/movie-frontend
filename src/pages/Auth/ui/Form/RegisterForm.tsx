import { InputField, InputPasswordField } from '@components/Input/InputField'
import FormButton from '@components/Button/FormButton'

const RegisterForm = () => {
	return (
		<form action='' className='auth-form'>
			<div className='form-header'>
				<h1 className='form-header__title'>Регистрация</h1>
				<span className='form-header__subtitle'>
					Введите данные для регистрации в системе
				</span>
			</div>
			<ul className='input-wrapper'>
				<InputField placeholder='Придумайте логин' />
				<InputPasswordField placeholder='Придумайте пароль' />
				<InputPasswordField placeholder='Повторите пароль' />
			</ul>
			<FormButton text='Создать' />
		</form>
	)
}

export default RegisterForm
