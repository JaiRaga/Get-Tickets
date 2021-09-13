import Link from 'next/link'
import buildClient from '../api/build-client'

const Landing = ({ currentUser }) => {
	console.log(currentUser)

	return (
		<div>
			<h1>Landing Page</h1>
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
	const client = buildClient(context)
	const { data } = await client.get('/api/users/currentuser')

	return data
}

export default Landing
