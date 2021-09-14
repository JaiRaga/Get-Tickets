import Link from 'next/link'

const Navbar = ({ currentUser }) => {
	const links = [
		!currentUser && { label: 'SignUp', href: '/auth/signup' },
		!currentUser && { label: 'SignIn', href: '/auth/signin' },
		currentUser && { label: 'SignOut', href: '/auth/signout' },
	]
		.filter((linkConfig) => linkConfig)
		.map(({ label, href }) => {
			return (
				<li key={href} className='nav-item'>
					<Link href={href}>
						<a className='nav-link'>{label}</a>
					</Link>
				</li>
			)
		})
	return (
		<nav className='navbar nav-light bg-light'>
			<Link href='/'>
				<a className='navbar-brand'>Tickets</a>
			</Link>

			<div className='d-flex justify-content-end'>
				<ul className='nav d-flex align-items-center'>{links}</ul>
			</div>
		</nav>
	)
}

export default Navbar
