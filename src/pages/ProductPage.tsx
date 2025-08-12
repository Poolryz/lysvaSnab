function ProductPage() {
    return (
        <div className="container mx-auto px-4 py-6 max-w-6xl">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-500 mb-4">
                <span className="hover:text-gray-700 cursor-pointer">Главная</span> /
                <span className="hover:text-gray-700 cursor-pointer"> Расходные материалы</span> /
                <span className="hover:text-gray-700 cursor-pointer"> Для станков</span> /
                <span className="hover:text-gray-700 cursor-pointer"> Смазочно-охлаждающие средства для металлообработки</span> /
                <span className="hover:text-gray-700 cursor-pointer"> Смазочно-охлаждающие жидкости (СОЖ)</span> /
                <span className="hover:text-gray-700 cursor-pointer"> Bohre</span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold mb-4">Смазочно-охлаждающая жидкость концентрат 5 л Bohre КБ010188</h1>

            {/* Product Info Row */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column - Product Image */}
                <div className="md:w-1/3 bg-gray-100 h-64 flex items-center justify-center rounded-lg">
                    <span className="text-gray-400">Изображение товара</span>
                </div>

                {/* Middle Column - Product Details */}
                <div className="md:w-1/3">
                    <div className="mb-4">
                        <span className="text-gray-500">Код товара: 15728742</span>
                        <div className="flex items-center mt-1">
                            <span className="text-gray-500">153 отзывы</span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="text-gray-500">3 вопроса</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <button className="text-blue-500 hover:text-blue-700 text-sm">
                            Пойметь сюртуку
                        </button>
                        <div className="flex gap-2 mt-2">
                            <span className="text-gray-500 text-sm">4 видео</span>
                        </div>
                    </div>

                    {/* Volume Options */}
                    <div className="mb-6">
                        <div className="flex gap-2 mb-2">
                            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">1 л</button>
                            <button className="px-3 py-1 border border-blue-500 bg-blue-50 rounded text-blue-600">5 л</button>
                            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">10 л</button>
                            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">30 л</button>
                        </div>
                    </div>

                    {/* Product Characteristics */}
                    <div className="mb-6">
                        <div className="mb-2">
                            <span className="text-gray-500">Вид:</span> <span className="ml-2">концентрат</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-500">Объем:</span> <span className="ml-2">5 л</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-500">Вес нетто:</span> <span className="ml-2">5 кг</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-500">Назначение:</span> <span className="ml-2">металлообработка</span>
                        </div>
                        <button className="text-blue-500 hover:text-blue-700 text-sm mt-2">
                            Все характеристики
                        </button>
                    </div>

                    <div className="mb-4">
                        <span className="text-sm text-gray-500">Система выбора</span>
                    </div>
                </div>

                {/* Right Column - Price and Order */}
                <div className="md:w-1/3 border border-gray-200 rounded-lg p-4 h-fit">
                    <div className="mb-4">
                        <div className="text-2xl font-bold">3 175 ₽</div>
                        <div className="text-gray-500">635 ₽/л</div>
                    </div>

                    <div className="mb-4">
                        <span className="text-sm text-gray-500">Выстраиваемся</span>
                    </div>

                    <div className="mb-6">
                        <span className="text-sm text-gray-500">Входящий заказ</span>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg mb-4">
                        В корзину
                    </button>

                    <div className="mb-4">
                        <span className="text-sm text-gray-500">Сопутствующие товары</span>
                        <div className="text-sm text-gray-500">Подбор недвижимого товара</div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <div className="text-green-600 mb-2">Есть на складе 233 шт.</div>
                        <div className="mb-2">
                            <div className="font-medium">Самовывоз:</div>
                            <div className="text-sm">16 августа, из 14 магазинов</div>
                        </div>
                        <div>
                            <div className="font-medium">Курьером:</div>
                            <div className="text-sm">18 августа, от 390 ₽</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage