/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import {
  ButtonGroupBase,
  ArrowButtonBase,
  PrevButtonRadius,
  NextButtonRadius,
  CarouselItemBase,
  CarouselItemImage,
} from 'components/utils/theme-3';
import 'react-multi-carousel/lib/styles.css';

type CustomButtonProp = {
  onClick?: (e: any) => void;
  children: React.ReactNode;
};

type ButtonGroupProps = {
  next?: Function;
  previous?: Function;
};

interface CarouselItemProps {
  image: string;
  link?: string;
  title?: string;
}

type CarouselProps = {
  data: CarouselItemProps[];
  autoPlay?: boolean;
  infinite?: boolean;
  itemClass?: string;
  className?: string;
};

const PrevButton: React.FC<CustomButtonProp> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      aria-label="prev-button"
      className={ArrowButtonBase + ' ' + PrevButtonRadius}
    >
      {children}
    </button>
  );
};
const NextButton: React.FC<CustomButtonProp> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      aria-label="next-button"
      className={ArrowButtonBase + ' ' + NextButtonRadius}
    >
      {children}
    </button>
  );
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className={ButtonGroupBase}>
      <PrevButton onClick={() => previous()}>
        <ChevronLeft height="12px" />
      </PrevButton>
      <NextButton onClick={() => next()}>
        <ChevronRight height="12px" />
      </NextButton>
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
  },
  smallScreen: {
    breakpoint: { max: 1279, min: 851 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 850, min: 601 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const Carousel: React.FC<CarouselProps> = ({
  data,
  autoPlay,
  infinite,
  itemClass,
  className,
  ...props
}) => {
  return (
    <MultiCarousel
      arrows={false}
      responsive={responsive}
      ssr={true}
      showDots={false}
      slidesToSlide={1}
      infinite={infinite}
      containerClass="carousel-container"
      itemClass={itemClass}
      autoPlay={autoPlay}
      autoPlaySpeed={3000}
      renderButtonGroupOutside={true}
      additionalTransfrom={0}
      customButtonGroup={<ButtonGroup />}
      className={className}
      {...props}
      // use dir ltr when rtl true
    >
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {item && item.link ? (
            <a href={item.link} className={CarouselItemBase}>
              <span className="sr-only">{item.title}</span>
              <img
                src={item.image}
                className={CarouselItemImage}
                alt={item.title}
              />
            </a>
          ) : (
            <div className={CarouselItemBase}>
              <img
                src={item.image}
                className={CarouselItemImage}
                alt={item.title}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </MultiCarousel>
  );
};

const defaultProps = {
  autoPlay: false,
  infinite: true,
  className: '',
};

Carousel.defaultProps = defaultProps;

export default Carousel;
