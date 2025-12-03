import React from 'react'
import { Slider } from 'antd'

interface SliderProps {
	step?: number
	defaultValue?: number[]
	min?: number
	max?: number
}

const CustomSlider = ({ step, defaultValue, min, max }: SliderProps) => {
	const onChange = (value: number | number[]) => {
		console.log('onChange: ', value)
	}

	const onChangeComplete = (value: number | number[]) => {
		console.log('onChangeComplete: ', value)
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
				onChangeComplete={onChangeComplete}
			/>
		</>
	)
}

export default CustomSlider
