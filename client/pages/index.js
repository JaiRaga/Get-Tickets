import Link from 'next/link'
import buildClient from '../api/build-client'

const Landing = ({ currentUser }) => {
	console.log(currentUser)

	return (
		<div>
			<h1>Landing Page</h1>
			{currentUser ? (
				<h1>You are Signed in</h1>
			) : (
				<h1>You are not Signed in</h1>
			)}
			<Link
				href={{
					pathname: '/help/[id]',
					query: { id: 123 },
				}}>
				Help
			</Link>
		</div>
	)
}

Landing.getInitialProps = async (context) => {
	console.log('Landing Page')
	const client = buildClient(context)
	const { data } = await client.get('/api/users/currentuser')

	return data
}

export default Landing
