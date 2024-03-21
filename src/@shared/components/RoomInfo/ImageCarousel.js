import * as RS from '@shared/components/styles/RoomInfo.styles.js';
import { Carousel } from '@material-tailwind/react';

export function ImageCarousel({ children }) {
  return (
    <RS.ImgContainer>
      <Carousel
        className="rounded-xl text-center"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}>
        {children}
      </Carousel>
    </RS.ImgContainer>
  );
}