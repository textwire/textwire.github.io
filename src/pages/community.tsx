import type { Contributor } from '@site/src/types'
import React from 'react'
import Layout from '@theme/Layout'
import { contributors } from '@site/src/modules/contributors'

export default function Community(): React.ReactElement {
    return (
        <Layout
            title="Early Stargazers & Community Heroes"
            description="Meet the early supporters who believed in Textwire from the beginning"
        >
            <main className="container community">
                <section>
                    <h1>Meet the Creator</h1>
                    <p>
                        I'm{' '}
                        <a
                            href="https://serhiicho.com/about-me"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SerhiiCho
                        </a>
                        , and I fell in love with Go in 2019. That's when I started
                        investing my time in the language and noticed something was
                        missing. Other templating systems didn't give me the joy of
                        writing frontend code that I was looking for. Textwire is my
                        answer - one of those small lego bricks that completes the Go
                        ecosystem's templating landscape.
                    </p>
                </section>

                <section>
                    <h2>Early Stargazers & Community Heroes ❤️</h2>

                    <p>
                        We owe a huge thanks to the early supporters who believed in
                        Textwire from the beginning. Your stars, feedback, and
                        enthusiasm have been invaluable in helping us grow this
                        project. Thank you for being part of our journey!
                    </p>
                </section>

                <section>
                    <h2>First People to Star Textwire</h2>

                    <div className="contributors">
                        {contributors.map(({ img, name }: Contributor) => (
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

                <section>
                    <p>
                        Want to support Textwire? Star ⭐️ us on{' '}
                        <a
                            href="https://github.com/textwire/textwire"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>{' '}
                        to help us keep growing.
                    </p>
                </section>
            </main>
        </Layout>
    )
}
