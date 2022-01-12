import React from 'react';
import {Image} from "@chakra-ui/react";

const ImageComponent = ({image,alt}) => (
    <Image w={600} height={300} borderRadius={"xl"} src={image} alt={alt} />
);

export default ImageComponent;