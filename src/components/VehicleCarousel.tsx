import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import maxibus from "@/assets/img/maxibus.webp";
import minibus from "@/assets/img/vivaro.webp";
import middlebus from "@/assets/img/middle.webp";
import truck3T from "@/assets/img/truck2T.webp";
import truck5T from "@/assets/img/truck5T.webp";
import truck10T from "@/assets/img/truck10T.webp";

const vehicles = [
    {
        title: "Мінібус",
        capacity: "800кг/8м³",
        price: "750 грн/2 часа",
        extra: "150грн/30хв",
        kmPrice: "15грн/км",
        length: "2.00 м",
        width: "1.50 м",
        height: "1.40 м",
        img: minibus,
    },
    {
        title: "Середній бус",
        capacity: "1200кг/9м³",
        price: "900 грн/2 часа",
        extra: "170грн/30хв",
        kmPrice: "15грн/км",
        length: "3.20 м",
        width: "1.70 м",
        height: "1.80 м",
        img: middlebus,
    },
    {
        title: "Максібус",
        capacity: "1500кг/13м³",
        price: "1050 грн/2 часа",
        extra: "200грн/30хв",
        kmPrice: "18грн/км",
        length: "4.20 м",
        width: "1.70 м",
        height: "1.80 м",
        img: maxibus,
    },
    {
        title: "Вантажівка 2т",
        capacity: "2000кг/16м³",
        price: "1400 грн/2 часа",
        extra: "200грн/30хв",
        kmPrice: "18грн/км",
        length: "4.20 м",
        width: "2.00 м",
        height: "2.10 м",
        img: truck3T,
    },
    {
        title: "Вантажівка 3т",
        capacity: "3000кг/25м³",
        price: "1600 грн/2 часа",
        extra: "230грн/30хв",
        kmPrice: "20грн/км",
        length: "4.80 м",
        width: "2.20 м",
        height: "2.30 м",
        img: truck3T,
    },
    {
        title: "Вантажівка 5т",
        capacity: "5000кг/38м³",
        price: "3000 грн/2 часа",
        extra: "400грн/30хв",
        kmPrice: "28грн/км",
        length: "6.10 м",
        width: "2.40 м",
        height: "2.40 м",
        img: truck5T,
    },
    {
        title: "Вантажівка 10т",
        capacity: "10000кг/55м³",
        price: "4000 грн/2 часа",
        extra: "450грн/30хв",
        kmPrice: "30грн/км",
        length: "8.20 м",
        width: "2.50 м",
        height: "2.70 м",
        img: truck10T,
    },
];
interface VehicleCarouselProps {
    onOrderClick: () => void;
}
export const VehicleCarousel: React.FC<VehicleCarouselProps> = ({ onOrderClick }) => {
    return (
        <section className="py-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Наш автопарк</h2>
            <Carousel opts={{ align: "start" }} className="w-full max-w-6xl mx-auto">
                <CarouselContent>
                    {vehicles.map((v, index) => (
                        <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4">
                            <Card
                                className="rounded-xl border border-gray-200 shadow-md overflow-hidden bg-white animate-subtle-3d transition-transform duration-500"
                                style={{ perspective: 1000 }}
                            >
                                <CardContent className="p-4 flex flex-col items-center text-center">
                                    <img
                                        src={v.img}
                                        alt={v.title}
                                        width={220}
                                        height={150}
                                        className="object-contain mb-4"
                                    />
                                    <h3 className="text-lg font-bold text-black">{v.title}</h3>
                                    <p className="text-sm text-gray-600 font-semibold mb-2">{v.capacity}</p>
                                    <div className="text-sm text-left w-full mb-3 space-y-1">
                                        <p><span className="font-semibold text-black">Стоимость:</span> {v.price}</p>
                                        <p><span className="font-semibold text-black">Более 2-х часов:</span> {v.extra}</p>
                                        <p><span className="font-semibold text-black">Километраж за городом:</span> {v.kmPrice}</p>
                                    </div>
                                    <div className="text-sm text-left w-full border-t border-gray-200 pt-2 space-y-1">
                                        <p><span className="font-semibold text-black">Длина:</span> {v.length}</p>
                                        <p><span className="font-semibold text-black">Ширина:</span> {v.width}</p>
                                        <p><span className="font-semibold text-black">Высота:</span> {v.height}</p>
                                    </div>
                                    <button
                                        onClick={onOrderClick}
                                        className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-colors duration-200"
                                    >
                                        Заказать
                                    </button>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className="hidden max-[1256px]:hidden sm:flex bg-black text-white hover:bg-orange-500 hover:text-white transition-colors left-2 sm:left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10"
                />
                <CarouselNext
                    className="hidden max-[1256px]:hidden sm:flex bg-black text-white hover:bg-orange-500 hover:text-white transition-colors right-2 sm:right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10"
                />
            </Carousel>
        </section>
    );
};

