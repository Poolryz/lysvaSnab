import { Route, Routes, Outlet } from "react-router-dom"
import CatalogMenu from "../components/CatalogMenu/CatalogMenu"

function Catalog() {
    return (
        <>
            <CatalogMenu />
            <Outlet />
            {/* <Routes>
                <Route path='/catalog/:soj' element={<h1>soj</h1>} />
                <Route path='/catalog/tool' element={<h1>tool</h1>} />
                <Route path='/catalog/snap-in' element={<h1>snap-in</h1>} />
            </Routes> */}
        </>
    )
}
export default Catalog