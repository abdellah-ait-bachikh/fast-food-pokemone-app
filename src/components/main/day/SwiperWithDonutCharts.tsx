import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import DonatShart from '@/components/main/day/DonatShart';

const SwiperWithDonutCharts = ({ data }:{data: {
    products: {
        labels: string[];
        series: number[];
    };
    offers: {
        labels: string[];
        series: number[];
    };
}}) => {
  return (
    <div className='bg-white rounded-xl dark:bg-slate-900 p-3 max-h-[400px] overflow-hidden'>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        className='h-full'
      >
        <SwiperSlide>
          <div className='flex flex-col items-center gap-2'>
            <h3 className='text-xl font-semibold'>Produit</h3>
            <DonatShart data={data.products} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col items-center gap-2'>
            <h3 className='text-xl font-semibold'>Packe</h3>
            <DonatShart data={data.offers} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperWithDonutCharts;
