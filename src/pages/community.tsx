import React from 'react'
import Layout from '@theme/Layout'
import firstContributorsList from '@site/src/modules/firstContributorsList'

interface Contributor {
    name: string
    img: string
}

export default function Community(): React.ReactElement {
    return (
        <Layout
            title="Early Stargazers & Community Heroes"
            description="Meet the early supporters who believed in Textwire from the beginning"
        >
            <main className="container community">
                <section className="community-hero">
                    <h1>Early Stargazers & Community Heroes ❤️</h1>

                    <p>
                        We owe a huge thanks to the early supporters who believed in Textwire from the beginning. 
                        Your stars, feedback, and enthusiasm have been invaluable in helping us grow this project. 
                        Thank you for being part of our journey!
                    </p>
                </section>

                <section className="first-issue-contributor">
                    <h2>First Feature Suggestion</h2>
                    <p>
                        A special thanks to <a href="https://github.com/joeyjurjens" target="_blank" rel="noopener noreferrer">@joeyjurjens</a> for opening the first issue and suggesting the custom functions feature in <a href="https://github.com/textwire/textwire/issues/18" target="_blank" rel="noopener noreferrer">this</a> GitHub issue! Your contribution helped to shape Textwire.
                    </p>
                </section>

                <section className="early-stargazers">
                    <h2>First People to Star Textwire</h2>

                <div className="contributors">
                    {firstContributorsList.map(({ img, name }: Contributor) => (
                        <a
                            href={`https://github.com/${name}`}
                            key={name}
                            className="contributor"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${name}'s GitHub profile`}
                        >
                            <img src={img} alt={`${name}'s GitHub avatar`} />
                            <p>{name}</p>
                        </a>
                    ))}
                </div>

                </section>

                <section className="call-to-action">
                    <p>
                        Want to support Textwire? Star ⭐️ us on{' '}
                        <a href="https://github.com/textwire/textwire" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>{' '}
                        to help us keep growing.
                    </p>
                </section>
            </main>
        </Layout>
    )
}
