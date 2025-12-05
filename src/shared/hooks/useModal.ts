import { useState } from 'react'

export const useModal = () => {
	const [openModal, setOpen] = useState<boolean>(false)
	return { openModal, setOpen }
}
