import useFetch from "../../hooks/useFetch";
import MobileCard from "../MobileCard/MobileCard";
import "./MobileContainer.css";
const URL="https://s3.amazonaws.com/open-to-cors/assignment.json";

const MobileContainer = () => {
    const { loading, error, data } = useFetch(URL);

    console.log("Data: ", loading, error, data);

    if(loading) {
        return <div className="loading">Loading...</div>;
    }

    let obj = Object.keys(data?.products).map(item => data?.products[item]).sort((a, b)=> parseInt(b.popularity) - parseInt(a.popularity));

    return (
        <div className="mobile-container">
            {
                obj.map((item) => {
                    return (
                        <MobileCard key={`${item.title}${item.popularity}`} itemkey={item}/>
                    )
                })
            }
        </div>
    )
}

export default MobileContainer;