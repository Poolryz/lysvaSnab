import { Link } from "react-router";
function CatalogMenu() {
    return (
        <div className="bg-gray-100 py-4 shadow-md">
            <div className="container mx-auto px-4">
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                to=":soj"
                                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                            >
                                СОЖ
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                            >
                                Режущий инструмент
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                            >
                                Расходка и оснастка
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CatalogMenu;