import { InputField } from '@components/Input/InputField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppNotification } from '@hooks/useAppNotification'
import { Button, Form } from 'antd'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import CustomSlider from '../../../../shared/components/Slider'
import { filterSchema, type FilterSchema } from '../../constant/schema.config'
import CustomSelect from '@components/MultipleSelect'
import { fetchGenres } from '@pages/Catalogue/slice/api'
import type { GenreProps } from '@shared/models/MovieModel'

const FilterForm = () => {
	const currentYear = new Date().getFullYear()
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<FilterSchema>({
		resolver: zodResolver(filterSchema),
		defaultValues: {
			search: '',
			genres: [],
			years: [1950, currentYear],
			ageLimits: [0, 18]
		}
	})

	const [genres, setGenres] = useState<GenreProps[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { contextHolder, showNotification } = useAppNotification('error')
	const dispatch: any = useDispatch()
	const onSubmit = async (form: any) => {
		try {
			setIsLoading(true)
			console.log(form)
		} catch (error: any) {
			return showNotification({
				message: 'Не удалось обработать запрос',
				description: error?.message,
				placement: 'bottomRight'
			})
		} finally {
			return setIsLoading(false)
		}
	}
	useEffect(() => {
		;(async () => {
			const res = await fetchGenres()
			setGenres(res)
		})()
	}, [])
	return (
		<>
			<Form layout='vertical' onFinish={handleSubmit(onSubmit)}>
				<Form.Item
					className='w-full'
					help={errors.search?.message}
					validateStatus={errors.search ? 'error' : ''}
					label={'Название'}
				>
					<Controller
						name='search'
						control={control}
						render={({ field }) => (
							<InputField
								placeholder='Поиск по названию фильма'
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item className='w-full' label={'Жанры'}>
					<Controller
						name='genres'
						control={control}
						rules={{ required: false }}
						render={({ field }) => (
							<CustomSelect
								rawOptions={genres}
								placeholder={'Выберите жанры'}
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item className='w-full' label={'Годы выпуска'}>
					<Controller
						name='years'
						control={control}
						rules={{ required: false }}
						render={({ field }) => (
							<CustomSlider
								step={10}
								min={1900}
								max={currentYear}
								defaultValue={field.value}
								onChangeValue={field.onChange}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item className='w-full' label={'Возраст'}>
					<Controller
						name='ageLimits'
						control={control}
						rules={{ required: false }}
						render={({ field }) => (
							<CustomSlider
								step={6}
								min={0}
								max={18}
								defaultValue={field.value}
								onChangeValue={field.onChange}
							/>
						)}
					/>
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
					Применить
				</Button>
			</Form>
		</>
	)
}

export default FilterForm
