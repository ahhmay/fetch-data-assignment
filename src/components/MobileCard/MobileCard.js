import { memo } from "react"; 
import "./MobileCard.css";

const MobileCard = ({itemkey}) => {
    return (
        <div className="mobile-card">
            <h3 className="title">{itemkey.title}</h3>
            <p className="price">Price: &#8377;{itemkey.price}</p>
            <p>Popularity: #{itemkey.popularity}</p>
            <span>Category: <b className="background">{itemkey.subcategory}</b></span>
        </div>
    )
}

export default memo(MobileCard);