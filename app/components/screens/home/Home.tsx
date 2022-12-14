import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IHome } from '@/components/screens/home/home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home Page</h1>
		</Layout>
	)
}

export default Home
