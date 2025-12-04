import { Slider } from 'antd'

interface SliderProps {
	step?: number
	defaultValue?: number[]
	min?: number
	max?: number
	onChangeValue: (value: number[]) => void
}

const CustomSlider = ({
	step,
	defaultValue,
	min,
	max,
	onChangeValue
}: SliderProps) => {
	const onChange = (value: number[]) => {
		onChangeValue(value)
	}

	return (
		<>
			<Slider
				style={{ width: '50%' }}
				range
				step={step}
				min={min}
				max={max}
				defaultValue={defaultValue}
				onChange={onChange}
			/>
		</>
	)
}

export default CustomSlider
