import {PhotoProvider, PhotoView} from "react-photo-view";
import Separator from "../separator/Separator";

export default function Galery({images = [], catNb = 1}) {
  return (
    <div className="flex flex-col w-full px-[10%] items-center">
      <div className="flex flex-col w-full gap-4 items-center">
        <Separator number={catNb} />
        <h2 className="text-[40px] leading-[40px] text-secondary font-(family-name:--title-font-family)">
          Galerie
        </h2>
        <PhotoProvider>
          <div className="w-full flex flex-wrap gap-4 items-center justify-center mb-4">
            {images.map((img, i) => (
              <PhotoView src={img.src} key={i}>
                <div className="w-[300px] h-[425px] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="cursor-pointer !min-h-[425px] !min-w-[300px] !object-cover object-center"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
}
