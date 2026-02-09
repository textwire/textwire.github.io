import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

export default function HomepageHeader(): React.ReactElement {
    const { siteConfig } = useDocusaurusContext()

    return (
        <header className="home-section hero">
            <div className="container">
                <img
                    className="hero__logo"
                    src="/images/banner.png"
                    alt="Textwire Logo"
                />

                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <p className="hero__description">
                    Textwire embraces Go’s philosophy by prioritizing stability, and ongoing performance improvements over frequent new feature releases. The focus is on delivering reliable, efficient solutions that users can depend on long term.
                </p>

                <div className="hero__buttons">
                    <Link
                        className="button button--primary button--lg"
                        to="/v3/get-started"
                    >
                        Get started
                    </Link>

                    <Link
                        className="button button--secondary button--lg"
                        to="/v3/introduction/"
                    >
                        Introduction
                    </Link>
                </div>
            </div>
        </header>
    )
}
