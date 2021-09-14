import { useState } from 'react'

import { useRouter } from 'next/router'
import useRequest from '../../hooks/use-request'

const Signin = () => {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { doRequest, errors } = useRequest({
		url: '/api/users/signin',
		method: 'post',
		body: {
			email,
			password,
		},
		onSuccess: () => router.push('/'),
	})

	const onSubmit = async (event) => {
		event.preventDefault()

		await doRequest()
	}

	return (
		<form onSubmit={onSubmit}>
			<h1>Sign in</h1>
			<div className='form-group'>
				<label>Email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='form-control'
				/>
			</div>
			<div className='form-group'>
				<label>Password</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='form-control'
				/>
			</div>
			{errors}
			<button className='btn btn-primary'>Sign in</button>
		</form>
	)
}

export default Signin
