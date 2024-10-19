import Layout from '@theme/Layout'
import HomeFeatures from '@site/src/components/HomeFeatures'
import HomeHeader from '@site/src/components/HomeHeader'

export default function Home(): JSX.Element {
    return (
        <Layout
            title="Template language for Go"
            description="Simple yet powerful template language for Go"
        >
            <HomeHeader />

            <main>
                <HomeFeatures />
            </main>
        </Layout>
    )
}
