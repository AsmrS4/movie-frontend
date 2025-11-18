import { Input } from 'antd'

interface InputFieldProps {
	value: any
	onChange: any
	placeholder?: string
	allowClear?: boolean
	size?: 'small' | 'middle' | 'large' | undefined
}

export const InputField = ({
	placeholder,
	allowClear = false,
	size = 'large',
	value,
	onChange
}: InputFieldProps) => {
	return (
		<Input
			size={size}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			allowClear={allowClear}
		></Input>
	)
}

export const InputPasswordField = ({
	placeholder,
	allowClear = false,
	size = 'large',
	value,
	onChange
}: InputFieldProps) => {
	return (
		<Input.Password
			size={size}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			allowClear={allowClear}
		></Input.Password>
	)
}
