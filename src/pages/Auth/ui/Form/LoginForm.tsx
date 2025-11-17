import { Button, Input } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

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
				<Input
					size='large'
					placeholder='Введите логин'
					allowClear
				></Input>
				<Input.Password
					size='large'
					placeholder='Введите пароль'
					allowClear
				></Input.Password>
			</ul>
			<Button
				style={{
					width: '100%',
					height: '48px',
					backgroundColor: '#242424',
					color: '#fff'
				}}
				size='large'
				icon={<LoginOutlined />}
				iconPosition='end'
				shape='round'
			>
				Войти
			</Button>
		</form>
	)
}

export default LoginForm
