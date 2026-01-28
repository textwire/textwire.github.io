import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

export default function HomepageHeader(): React.ReactElement {
    const { siteConfig } = useDocusaurusContext()

    return (
        <header className="hero">
            <div className="container">
                <img
                    className="hero__logo"
                    src="/img/banner.png"
                    alt="Textwire Logo"
                />

                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <p className="hero__description">
                    Dynamic Domain-Specific Language for Go.
                    <br />
                    Ideal for embedding dynamic content with Go applications
                </p>

                <div className="hero__buttons">
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/v3/get-started"
                    >
                        Get started
                    </Link>

                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/v3/introduction/"
                    >
                        Introduction
                    </Link>
                </div>
            </div>
        </header>
    )
}
