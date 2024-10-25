import React from 'react'
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    XIcon,
    LinkedinIcon,
    VKShareButton,
    VKIcon,
} from 'react-share'

export default function SharePostButtons(): JSX.Element {
    const shareUrl = window.location.href

    return (
        <div className="social-share-buttons">
            <TwitterShareButton url={shareUrl}>
                <XIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <VKShareButton url={shareUrl}>
                <VKIcon size={32} round />
            </VKShareButton>
        </div>
    )
}
