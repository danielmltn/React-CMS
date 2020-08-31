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

export const ClickablePromo: React.FC<JSX.Element> = (component) => {
    return (
        <div className="promo promo--clickable">
            {component}
        </div>
    )
}

export interface PromoProps {
    title: string;
    description: string;
    image: {alt: string, src: string};
}
export const Promo: React.FC<PromoProps> = ({title, description, image}) => {
    const basePromo = (arg: JSX.Element) => <BasePromo component={arg}/>
    const promo = (): JSX.Element =>
    <>
        <img className="promo--image" alt={image.alt} src={image.src} />
        <div className="promo--text">
            <div className="promo--title">{title}</div>
            <div className="promo--description">{description}</div>
        </div>
    </>
    const renderedPromo = promo()

    return basePromo(renderedPromo)
}