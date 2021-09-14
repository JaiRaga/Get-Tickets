import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useRequest from '../../hooks/use-request'

const signout = () => {
	const router = useRouter()
	const { doRequest } = useRequest({
		url: '/api/users/signout',
		method: 'post',
		body: {},
		onSuccess: () => router.push('/'),
	})

	useEffect(() => {
		doRequest()
	}, [])

	return <div>Signing You Out...</div>
}

export default signout
