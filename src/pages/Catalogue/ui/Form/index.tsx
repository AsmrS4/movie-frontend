import { InputField } from '@components/Input/InputField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppNotification } from '@hooks/useAppNotification'
import { Form } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import CustomSlider from '../../../../shared/components/Slider'
import { filterSchema, type FilterSchema } from '../../constant/schema.config'
import CustomSelect from '@components/MultipleSelect'
import { fetchGenres } from '@pages/Catalogue/slice/api'
import type { GenreProps } from '@shared/models/MovieModel'

const FilterForm = () => {
	const {
		handleSubmit,
		formState: { errors }
	} = useForm<FilterSchema>({
		resolver: zodResolver(filterSchema),
		defaultValues: {
			search: ''
		}
	})
	const currentYear = new Date().getFullYear()
	const [genres, setGenres] = useState<GenreProps[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { contextHolder, showNotification } = useAppNotification('error')

	const dispatch: any = useDispatch()
	const onSubmit = async () => {
		try {
			setIsLoading(true)
			//return await dispatch(loginUser(form))
		} catch (error: any) {
			return showNotification({
				message: 'Ошибка при авторизации',
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
					<InputField
						placeholder='Поиск по названию фильма'
						value={undefined}
						onChange={undefined}
					/>
				</Form.Item>
				<Form.Item className='w-full' label={'Жанры'}>
					<CustomSelect
						rawOptions={genres}
						placeholder={'Выберите жанры'}
					/>
				</Form.Item>
				<Form.Item className='w-full' label={'Годы выпуска'}>
					<CustomSlider
						step={10}
						min={1900}
						max={currentYear}
						defaultValue={[2000, currentYear]}
					/>
				</Form.Item>
				<Form.Item className='w-full' label={'Возраст'}>
					<CustomSlider
						step={6}
						min={0}
						max={18}
						defaultValue={[0, 18]}
					/>
				</Form.Item>
			</Form>
		</>
	)
}

export default FilterForm
