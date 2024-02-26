import useFetch from "../use-fetch";
import {useRef} from "react";

const ScrollToTopAndBottom = () => {
    const { data, error, loading } = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
    );
    const bottomRef = useRef(null);
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleScrollToBottom = () => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <h1>Scroll To Top And Bottom Feature</h1>
            <h3>This is the top of the section</h3>
            <button onClick={handleScrollToBottom}>Scroll to bottom</button>
            {loading ? <h3>Loading...</h3> : null}
            {error ? <h3>{error}</h3> : null}
            {data && data.products && data.products.length
                ? data.products.map((productItem, index) => (
                    <p key={index}>
                        {productItem.title}
                    </p>
                ))
                : null}
            <button onClick={handleScrollToTop}>Scroll to top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom the section</h3>
        </div>
    );
};

export default ScrollToTopAndBottom;
