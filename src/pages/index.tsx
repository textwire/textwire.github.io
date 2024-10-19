import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomeFeatures'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()

    return (
        <header className="hero">
            <div className="container">
                <img
                    className="hero__logo"
                    src="/img/logo.png"
                    alt="Textwire Logo"
                />

                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <p className="hero__description">
                    Dynamic Templating and Scripting for Go. Ideal for embedding
                    dynamic content with Go applications
                </p>

                <div className="hero__buttons">
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/get-started"
                    >
                        Get started
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default function Home(): JSX.Element {
    return (
        <Layout
            title="Template language for Go"
            description="Simple yet powerful template language for Go"
        >
            <HomepageHeader />

            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}
