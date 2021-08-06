import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
function ImageCard(props) {
    const image = getImage(props.image)

    return (

        <GatsbyImageStyle image={image} alt={props.title}
            className={props.className}
        />
    )
}

const GatsbyImageStyle = styled(GatsbyImage)`
border-radius: 20px ;
`

export default ImageCard
