import type { FeatureItem } from '@site/src/types'
import Heading from '@theme/Heading'

function Feature({ title, description }: FeatureItem) {
    return (
        <div className="col col--4 features__item">
            <div className="text--center">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Feature
