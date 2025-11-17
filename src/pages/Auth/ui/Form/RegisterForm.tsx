import { Button, Input } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

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
				<Input
					size='large'
					placeholder='Придумайте логин'
					allowClear
				></Input>
				<Input.Password
					size='large'
					placeholder='Придумайте пароль'
					allowClear
				></Input.Password>
				<Input.Password
					size='large'
					placeholder='Повторите пароль'
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
				Создать
			</Button>
		</form>
	)
}

export default RegisterForm
