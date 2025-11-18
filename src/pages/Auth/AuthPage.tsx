import { Segmented } from 'antd'
import { useState } from 'react'
import './Auth.scss'
import type { SegmentedLabeledOption } from 'antd/es/segmented'
import LoginForm from './ui/Form/LoginForm'
import RegisterForm from './ui/Form/RegisterForm'

const AuthPage = () => {
	const [type, setType] = useState<string | SegmentedLabeledOption>('login')
	return (
		<section className='auth'>
			<div className='container'>
				<div className='form-wrapper'>
					<Segmented<SegmentedLabeledOption>
						options={[
							{ label: 'Авторизация', value: 'login' },
							{ label: 'Регистрация', value: 'register' }
						]}
						size='large'
						shape='round'
						onChange={(option: SegmentedLabeledOption) => {
							setType(option)
						}}
					/>
					{type == 'login' ? <LoginForm /> : <RegisterForm />}
				</div>
			</div>
		</section>
	)
}

export default AuthPage
