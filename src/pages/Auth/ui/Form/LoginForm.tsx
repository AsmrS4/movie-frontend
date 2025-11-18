import { InputField, InputPasswordField } from '@components/Input/InputField'
import FormButton from '@components/Button/FormButton'

const LoginForm = () => {
	return (
		<form action='' className='auth-form'>
			<div className='form-header'>
				<h1 className='form-header__title'>Авторизация</h1>
				<span className='form-header__subtitle'>
					Введите учетные данные для входа в аккаунт
				</span>
			</div>
			<ul className='input-wrapper'>
				<InputField placeholder='Введите логин' />
				<InputPasswordField placeholder='Введите пароль' />
			</ul>
			<FormButton text='Войти' />
		</form>
	)
}

export default LoginForm
