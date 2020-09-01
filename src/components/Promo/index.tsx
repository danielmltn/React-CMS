import React from 'react'
import './Promo.css'


export interface BasePromoProps {
    component: JSX.Element;
}
const BasePromo = ({component}: BasePromoProps) => {
    return (
        <div className="promo">
           {component}
        </div>
    )
}

const basePromo = (arg: JSX.Element) => <BasePromo component={arg}/>;

export interface PromoProps {
    title: string;
    description: string;
    image: {alt: string, src: string};
}
export const Promo: React.FC<PromoProps> = (props) => {
    const promoContent = <PromoContent {...props} />;
    return basePromo(promoContent);
}

// can be passed into a wrapper HOF to decorate it
export const PromoContent: React.FC<PromoProps> = ({title, description, image}) => {
    return(
        <>
            <img className="promo--image" alt={image.alt} src={image.src} />
            <div className="promo--text">
                <div className="promo--title">{title}</div>
                <div className="promo--description">{description}</div>
            </div>
        </>
    )
}

interface ClickablePromoProps {
    href: string;
}
export const ClickablePromo = ({href}: ClickablePromoProps, component: JSX.Element) => {
    return basePromo(<a href={href}>{component}</a>)
}