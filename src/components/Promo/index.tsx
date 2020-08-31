import React from 'react'
import './Promo.css'

export interface PromoProps {
    description: string;
}

export const Promo: React.FC<PromoProps> = ({description}) => {
    return (
        <div className="hello">{description}</div>
    )
}