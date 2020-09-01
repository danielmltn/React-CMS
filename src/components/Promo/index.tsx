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

export interface PromoProps {
    title: string;
    description: string;
    image: {alt: string, src: string};
}
export const Promo: React.FC<PromoProps> = (props) => {
    const basePromo = (arg: JSX.Element) => <BasePromo component={arg}/>;
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

export const ClickablePromo: React.FC<JSX.Element> = (component) => {
    return (
        <div className="promo promo--clickable">
            {component}
        </div>
    )
}