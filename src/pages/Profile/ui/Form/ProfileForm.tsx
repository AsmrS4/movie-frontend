import { InputField } from '@components/Input/InputField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppNotification } from '@hooks/useAppNotification'
import { AUTHORIZATION_FAILED } from '@pages/Auth/constants/messages'
import { editProfile } from '@pages/Profile/api/profile'
import {
	profileSchema,
	type ProfileSchema
} from '@pages/Profile/constants/profile.schema'
import { EDIT_PROFILE_SUCCESS, SUCCESS } from '@shared/contants/messages'
import type { EditUserModel, UserModel } from '@shared/models/UserModel'
import { Button, Form } from 'antd'

import { Controller, useForm } from 'react-hook-form'

interface CallbackProps {
	callback: any
}

interface ProfileFormProps {
	setProfile: React.Dispatch<React.SetStateAction<UserModel>>
}

export const ProfileForm = ({
	firstName,
	lastName,
	login,
	imageUrl,
	callback,
	setProfile
}: UserModel & CallbackProps & ProfileFormProps) => {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<ProfileSchema>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			firstName: firstName,
			lastName: lastName,
			login: login,
			imageUrl: imageUrl
		}
	})
	const { contextHolder, showNotification } = useAppNotification()
	const setClose = () => {
		callback()
	}
	const onSubmit = async (form: EditUserModel) => {
		try {
			const editedProfileResponse = await editProfile(form)
			setProfile(editedProfileResponse)
			return showNotification(
				{
					message: SUCCESS,
					description: EDIT_PROFILE_SUCCESS,
					placement: 'bottomRight'
				},
				'success'
			)
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
			setTimeout(() => {
				setClose()
			}, 300)
		}
	}
	return (
		<Form layout='vertical' onFinish={handleSubmit(onSubmit)}>
			{contextHolder}
			<Form.Item
				className='w-full'
				help={errors.firstName?.message}
				validateStatus={errors.firstName ? 'error' : ''}
				label={'Имя'}
			>
				<Controller
					name='firstName'
					control={control}
					render={({ field }) => (
						<InputField
							value={field.value}
							onChange={field.onChange}
						/>
					)}
				></Controller>
			</Form.Item>
			<Form.Item
				className='w-full'
				help={errors.lastName?.message}
				validateStatus={errors.lastName ? 'error' : ''}
				label={'Фамилия'}
			>
				<Controller
					name='lastName'
					control={control}
					render={({ field }) => (
						<InputField
							value={field.value}
							onChange={field.onChange}
						/>
					)}
				></Controller>
			</Form.Item>
			<Form.Item
				className='w-full'
				help={errors.imageUrl?.message}
				validateStatus={errors.imageUrl ? 'error' : ''}
				label={'Ссылка на фото'}
			>
				<Controller
					name='imageUrl'
					control={control}
					render={({ field }) => (
						<InputField
							value={field.value}
							onChange={field.onChange}
						/>
					)}
				></Controller>
			</Form.Item>
			<Form.Item
				className='w-full'
				help={errors.login?.message}
				validateStatus={errors.login ? 'error' : ''}
				label={'Логин'}
			>
				<Controller
					name='login'
					control={control}
					render={({ field }) => (
						<InputField
							value={field.value}
							onChange={field.onChange}
						/>
					)}
				></Controller>
			</Form.Item>
			<Button
				style={{
					width: '100%',
					backgroundColor: '#242424',
					color: '#fff',
					fontSize: '14px',
					fontWeight: 400
				}}
				size='large'
				shape='round'
				htmlType='submit'
			>
				Изменить
			</Button>
		</Form>
	)
}
