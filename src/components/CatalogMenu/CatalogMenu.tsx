import { Link } from "react-router-dom";
function CatalogMenu() {
    return (
        <div className="bg-gray-100 py-4 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4">
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                to="soj"
                                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                            >
                                СОЖ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="tool"
                                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                            >
                                Режущий инструмент
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="snap-in"
                                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                            >
                                Расходка и оснастка
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CatalogMenu;