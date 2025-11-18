import { InputField, InputPasswordField } from '@components/Input/InputField'
import FormButton from '@components/Button/FormButton'
import { Form } from 'antd'
import {
	registerSchema,
	type RegisterSchema
} from '@pages/Auth/config/form.config'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import type { AuthRequest } from '@pages/Auth/models/AuthModel'
import { useState } from 'react'
import { LoginOutlined } from '@ant-design/icons'
import { useAppNotification } from '@hooks/useAppNotification'
import { registerUser } from '@pages/Auth/api/auth'

const RegisterForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			login: '',
			password: '',
			confirmPassword: ''
		}
	})
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { contextHolder, showNotification } = useAppNotification('error')

	const dispatch: any = useDispatch()
	const onSubmit = async (form: AuthRequest) => {
		try {
			setIsLoading(true)
			return await dispatch(registerUser(form))
		} catch (error: any) {
			return showNotification({
				message: 'Ошибка при регистрации',
				description: error?.message,
				placement: 'bottomRight'
			})
		} finally {
			return setIsLoading(false)
		}
	}
	return (
		<Form action='' className='auth-form' onFinish={handleSubmit(onSubmit)}>
			{contextHolder}
			<div className='form-header'>
				<h1 className='form-header__title'>Регистрация</h1>
				<span className='form-header__subtitle'>
					Введите данные для регистрации в системе
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
								placeholder='Придумайте логин'
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
								placeholder='Придумайте пароль'
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item
					className='w-full'
					help={errors.confirmPassword?.message}
					validateStatus={errors.confirmPassword ? 'error' : ''}
				>
					<Controller
						name='confirmPassword'
						control={control}
						render={({ field }) => (
							<InputPasswordField
								placeholder='Повторите пароль'
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
				</Form.Item>
			</ul>
			<FormButton
				text='Создать'
				isLoading={isLoading}
				icon={<LoginOutlined />}
			/>
		</Form>
	)
}

export default RegisterForm
