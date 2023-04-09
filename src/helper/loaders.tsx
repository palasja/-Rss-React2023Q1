import React from "react";
import ContentLoader from "react-content-loader";

export const cardLoader  = <ContentLoader
speed={1}
width={300}
height={160}
viewBox="0 0 250   160"
backgroundColor="#431dcd"
foregroundColor="#0cd3ed"
data-testid="cards_loader"
>
<rect x="48" y="8" rx="3" ry="3" width="300" height="30" />
<rect x="48" y="56" rx="3" ry="3" width="300" height="30" />
</ContentLoader>;

export const fullCardLoader = <ContentLoader
speed={1}
width={700}
height={260}
viewBox="0 0 700 260"
backgroundColor="#431dcd"
foregroundColor="#0cd3ed"
data-testid="loader"
>
<rect x="150" y="8" rx="3" ry="3" width="400" height="30" />
<rect x="0" y="58" rx="3" ry="3" width="300" height="30" />
<rect x="348" y="58" rx="3" ry="3" width="300" height="30" />
<rect x="0" y="108" rx="3" ry="3" width="300" height="30" />
<rect x="348" y="108" rx="3" ry="3" width="300" height="30" />
<rect x="0" y="158" rx="3" ry="3" width="300" height="30" />
<rect x="348" y="158" rx="3" ry="3" width="300" height="30" />
<rect x="0" y="208" rx="3" ry="3" width="300" height="30" />
<rect x="348" y="208" rx="3" ry="3" width="300" height="30" />
</ContentLoader>