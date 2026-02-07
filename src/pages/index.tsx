import React from 'react'
import Layout from '@theme/Layout'
import HomeFeatures from '@site/src/components/HomeFeatures'
import HomeIntroduction from '@site/src/components/HomeIntroduction'
import HomeHeader from '@site/src/components/HomeHeader'

// Home page. Main page.
export default function Home(): React.ReactElement {
    return (
        <Layout
            title="Template language for Go"
            description="Simple yet powerful template language for Go"
        >
            <HomeHeader />

            <main>
                <HomeIntroduction />
                <HomeFeatures />
            </main>
        </Layout>
    )
}
