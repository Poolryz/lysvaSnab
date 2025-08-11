import FlippingProductCard from "../../components/cards/FlipCard/FlipCard"

function CatalogLayouts({ name }) {

    return (
        <div className="catalog-layouts max-w-screen-xl m-auto">
            <h1>{name}</h1>
            <FlippingProductCard />
        </div>
    )
}
export default CatalogLayouts