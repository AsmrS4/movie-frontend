import { Input } from 'antd'

interface InputFieldProps {
	placeholder?: string
	allowClear?: boolean
	size?: 'small' | 'middle' | 'large' | undefined
}

export const InputField = ({
	placeholder,
	allowClear = false,
	size = 'large'
}: InputFieldProps) => {
	return (
		<Input
			size={size}
			placeholder={placeholder}
			allowClear={allowClear}
		></Input>
	)
}

export const InputPasswordField = ({
	placeholder,
	allowClear = false,
	size = 'large'
}: InputFieldProps) => {
	return (
		<Input.Password
			size={size}
			placeholder={placeholder}
			allowClear={allowClear}
		></Input.Password>
	)
}
