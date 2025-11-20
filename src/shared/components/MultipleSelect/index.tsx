import { useState } from 'react'
import type { SelectProps } from 'antd'
import { Select } from 'antd'
import type { SizeType } from 'antd/es/config-provider/SizeContext'

interface CustomSelectProps {
	rawOptions: Array<Object>
	placeholder: string
	size?: SizeType
}

const CustomSelect = ({ rawOptions, placeholder, size }: CustomSelectProps) => {
	const [value, setValue] = useState([])
	const options: any = rawOptions.map(item => {
		if ('id' in item && 'name' in item) {
			return { label: item?.name, value: item?.id }
		}
		return
	})
	const sharedProps: SelectProps = {
		mode: 'multiple',
		style: { width: '100%' },
		options: options,
		placeholder: placeholder,
		maxTagCount: 'responsive'
	}

	const selectProps: SelectProps = {
		value,
		onChange: setValue
	}

	return <Select size={size || 'large'} {...sharedProps} {...selectProps} />
}

export default CustomSelect
