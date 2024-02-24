import useFetch from "../use-fetch";

const ScrollToTopAndBottom = () => {
    const { data, error, loading } = useFetch(
        "https://dummyjson.com/products",
        {}
    );

    return (
        <div>
            <h1>Scroll To Top And Bottom Feature</h1>
            <h3>This is the top of the section</h3>
            <button>Scroll to bottom</button>
            {loading ? <h3>Loading...</h3> : null}
            {error ? <h3>{error}</h3> : null}
            {data && data.products && data.products.length
                ? data.products.map((productItem, index) => (
                    <p key={index}>
                        {productItem.title}
                    </p>
                ))
                : null}
            <button>Scroll to top</button>
            <h3>This is the bottom the section</h3>
        </div>
    );
};

export default ScrollToTopAndBottom;
