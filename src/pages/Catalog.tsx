import { Route, Routes, Outlet } from "react-router-dom"
import CatalogMenu from "../layouts/CatalogMenu/CatalogMenu"

function Catalog() {
    return (
        <div className="catalog bg-slate-100">
            <CatalogMenu />
            <Outlet />
        </div>
    )
}
export default Catalog