import React, { useState } from 'react'
import { Modal } from 'antd'

interface ModalProps {
	modalTitle: string
	open: boolean
	setOpen: (open: boolean) => void
	children: React.ReactNode
	okText?: string
	cancelText?: string
}

const CustomModal = ({
	modalTitle,
	open,
	setOpen,
	children,
	okText,
	cancelText
}: ModalProps) => {
	const handleCancel = () => {
		setOpen(false)
	}

	return (
		<>
			<Modal
				title={modalTitle}
				open={open}
				onCancel={handleCancel}
				footer={null}
			>
				{children}
			</Modal>
		</>
	)
}

export default CustomModal
