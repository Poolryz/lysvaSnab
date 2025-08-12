import { useState } from "react";
import { Link } from "react-router-dom";

interface FlipCardProps {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

function FlipCard({
    frontContent,
    backContent,
    className = "",
    onClick,
}: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        onClick?.();
    };

    return (
        <div
            className={`relative w-[300px] h-[400px] cursor-pointer [perspective:1000px] ${className}`}
            onClick={handleFlip}
        >
            <div
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
            >
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                    {frontContent}
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    {backContent}
                </div>
            </div>
        </div>
    );
}

// Demo/Example Usage
export default function FlippingProductCard() {
    return (
        <div className="p-8">
            <FlipCard
                frontContent={
                    <div className="w-full h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
                        <img
                            src="https://cdn.vseinstrumenti.ru/images/goods/rashodnye-materialy-i-osnastka/prisposobleniya-i-osnastka-dlya-stankov/797529/1200x800/71165623.jpg"
                            alt="Product"
                            className="w-48 h-48 object-contain mb-4"
                        />
                        <h2 className="text-xl font-bold">СОЖ-01</h2>
                        <p className="text-gray-600">5л</p>
                        <p className="text-gray-600">3500₽</p>
                    </div>
                }
                backContent={
                    <div className="w-full h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-semibold mb-2">Технические характеристики</h3>
                        <ul className="p-8">
                            <li>Вид: жидкость</li>
                            <li>Объем: 5 л</li>
                            <li>Назначение: металлообработка</li>
                        </ul>
                        <div className="flex flex-col">
                            <Link to="../productpage" className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Страница товара
                            </Link>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                В корзину
                            </button>
                        </div>


                    </div>
                }
            />
        </div>
    );
}
