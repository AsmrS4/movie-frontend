import { InputField } from '@components/Input/InputField'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form } from 'antd'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import CustomSlider from '../../../../shared/components/Slider'
import { filterSchema, type FilterSchema } from '../../constant/schema.config'
import CustomSelect from '@components/MultipleSelect'
import { fetchGenres } from '@pages/Catalogue/slice/api'
import type { Filter, GenreProps, MovieFilter } from '@shared/models/MovieModel'
import { setFilters } from '@pages/Catalogue/slice/movieSlice'
import { delay } from '@helpers/delay'

const transformFilterToCorrectFormat = (rawFilters: Filter) => {
	const filters: MovieFilter = {
		search: rawFilters.search || '',
		minAge: rawFilters.ageLimits[0],
		maxAge: rawFilters.ageLimits[1],
		minYear: rawFilters.years[0],
		maxYear: rawFilters.years[1],
		genres: rawFilters.genres || []
	}
	return filters
}

interface FilterFormProps {
	setClose: () => void
}

const FilterForm = ({ setClose }: FilterFormProps) => {
	const currentYear = new Date().getFullYear()
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<FilterSchema>({
		resolver: zodResolver(filterSchema),
		defaultValues: {
			search: null,
			genres: null,
			years: [1950, currentYear],
			ageLimits: [0, 18]
		}
	})
	const [genres, setGenres] = useState<GenreProps[]>([])
	const dispatch: any = useDispatch()
	const onSubmit = async (form: Filter) => {
		const filters = transformFilterToCorrectFormat(form)
		dispatch(setFilters(filters))
		setTimeout(() => {
			setClose()
		}, 300)
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
