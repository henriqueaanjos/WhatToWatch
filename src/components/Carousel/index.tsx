import { Navigation, Pagination, Autoplay, Keyboard} from 'swiper';
import { SwiperSlide } from 'swiper/react';

import {
    Item,
    Title,
    CustomSwiper
} from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { TmdbAPI } from '../../services/apiTmdb';
import Link from 'next/link';



const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [data, setData] = useState([]);

    function handleChangeFocus(index: number){
        setActiveIndex(index);
    }
    async function getData(){
        const movies = await TmdbAPI.get('/discover/movie', {
            params:{
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
                page: 1,
            }
        });
        setData(movies.data.results.slice(0, 5));
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <CustomSwiper
            modules={[Navigation, Pagination, Autoplay, Keyboard]}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={e => handleChangeFocus(e.realIndex)}
            loop
            navigation
            pagination={{
                clickable: true
            }}
            initialSlide={1}
            keyboard
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            onActiveIndexChange={ e => handleChangeFocus(e.realIndex+1)}
        >
           {
               data.map((mov, i) => {
                   return(
                    <SwiperSlide key={mov.id}>
                        <Link href={`/movie/${mov.id}`}>
                            <Item img={`https://image.tmdb.org/t/p/original/${mov.backdrop_path}`} active={activeIndex === i+1}>
                                <Title>
                                    {mov.title}
                                </Title>
                            </Item>
                        </Link>
                    </SwiperSlide>
                    
                   )
               })
           }
        </CustomSwiper>
    );
}
export default Carousel;