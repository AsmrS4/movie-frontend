import { Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import React from 'react'
import type { IconType } from 'antd/es/notification/interface'

interface ButtonProps {
	icon?: IconType
	iconPosition?: 'end' | 'start'
	text: string
	size?: 'small' | 'middle' | 'large' | undefined
	isLoading?: boolean
}

const FormButton = ({
	icon,
	iconPosition = 'end',
	size,
	text,
	isLoading = false
}: ButtonProps) => {
	return (
		<Button
			style={{
				width: '100%',
				height: '48px',
				backgroundColor: '#242424',
				color: '#fff'
			}}
			size={size}
			icon={icon}
			htmlType='submit'
			loading={isLoading}
			iconPosition={iconPosition}
			shape='round'
		>
			{text}
		</Button>
	)
}

export default FormButton
