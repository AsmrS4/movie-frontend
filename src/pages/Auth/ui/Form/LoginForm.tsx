import { InputField, InputPasswordField } from '@components/Input/InputField'
import FormButton from '@components/Button/FormButton'
import { Form } from 'antd'
import { authSchema, type AuthSchema } from '@pages/Auth/constants/form.config'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { AuthRequest } from '@pages/Auth/models/AuthModel'
import { loginUser } from '@pages/Auth/api/auth'
import { LoginOutlined } from '@ant-design/icons'
import { useAppNotification } from '@hooks/useAppNotification'
import { AUTHORIZATION_FAILED } from '@pages/Auth/constants/messages'

const LoginForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<AuthSchema>({
		resolver: zodResolver(authSchema),
		defaultValues: {
			login: '',
			password: ''
		}
	})
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { contextHolder, showNotification } = useAppNotification()

	const dispatch: any = useDispatch()
	const onSubmit = async (form: AuthRequest) => {
		try {
			setIsLoading(true)
			return await dispatch(loginUser(form))
		} catch (error: any) {
			return showNotification(
				{
					message: AUTHORIZATION_FAILED,
					description: error?.message,
					placement: 'bottomRight'
				},
				'error'
			)
		} finally {
			return setIsLoading(false)
		}
	}
	return (
		<Form action='' className='auth-form' onFinish={handleSubmit(onSubmit)}>
			{contextHolder}
			<div className='form-header'>
				<h1 className='form-header__title'>Авторизация</h1>
				<span className='form-header__subtitle'>
					Введите учетные данные для входа в аккаунт
				</span>
			</div>
			<ul className='input-wrapper'>
				<Form.Item
					className='w-full'
					help={errors.login?.message}
					validateStatus={errors.login ? 'error' : ''}
				>
					<Controller
						name='login'
						control={control}
						render={({ field }) => (
							<InputField
								placeholder='Введите логин'
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item
					className='w-full'
					help={errors.password?.message}
					validateStatus={errors.password ? 'error' : ''}
				>
					<Controller
						name='password'
						control={control}
						render={({ field }) => (
							<InputPasswordField
								placeholder='Введите пароль'
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
				</Form.Item>
			</ul>
			<FormButton
				isLoading={isLoading}
				text='Войти'
				icon={<LoginOutlined />}
			/>
		</Form>
	)
}

export default LoginForm
