import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

import { fetchTernding } from '../http/http';
import Heading from './UI/Heading';
import FilmCard from './UI/FilmCard';
import Error from './UI/Error';
import { Loading } from './UI/Loading';

const Carousel = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.38rem;
`;

export default function Trending() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['trending'],
    queryFn: fetchTernding,
  });

  let trendingContent;

  if (isPending) {
    trendingContent = <Loading />;
  }
  if (isError) {
    trendingContent = (
      <Error error={error} backdrop='failed to fetch trending data' />
    );
  }

  if (data) {
    trendingContent = (
      <Carousel>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={40}
          grabCursor={true}
          freeMode={true}
          modules={[FreeMode]}
        >
          {data.map(
            ({
              id,
              name,
              backdrop_path,
              media_type,
              first_air_date,
              release_date,
              original_title,
              vote_average,
            }) => (
              <SwiperSlide key={id} style={{ width: 'auto' }}>
                <FilmCard
                  key={id}
                  id={id}
                  score={vote_average}
                  cardMode='trending'
                  name={name || original_title}
                  backdrop={backdrop_path}
                  mediaType={media_type}
                  releaseDate={first_air_date || release_date}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Carousel>
    );
  }

  return (
    <>
      <Heading>Trending</Heading>
      {trendingContent}
    </>
  );
}
