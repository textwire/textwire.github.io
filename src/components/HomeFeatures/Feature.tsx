import type { FeatureItem } from '@site/src/types'
import styles from '@site/src/components/HomeFeatures/styles.module.css'
import clsx from 'clsx'
import Heading from '@theme/Heading'

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Feature
