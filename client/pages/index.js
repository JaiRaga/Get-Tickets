import Link from 'next/link'

const Landing = () => {
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

export default Landing
