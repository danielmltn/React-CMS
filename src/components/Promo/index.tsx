import React from 'react'
import './Promo.css'

export interface PromoProps {
    title: string;
    description: string;
    image: {alt: string, src: string};
}

export const Promo: React.FC<PromoProps> = ({title, description, image}) => {
    return (
        <div className="promo">
            <img className="promo--image" alt={image.alt} src={image.src} />
            <div className="promo--text">
                <div className="promo--title">{title}</div>
                <div className="promo--description">{description}</div>
            </div>
        </div>
    )
}