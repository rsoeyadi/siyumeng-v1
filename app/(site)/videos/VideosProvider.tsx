"use client";

import { PortableText } from "@portabletext/react";
import useHamburgerStore from "../store";

interface videosProviderProps {
  data: any;
}

export default function VideosProvider({ data: videos }: videosProviderProps) {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  return (
    <div>
      <div>
        {videos?.map((video: any, index: number) => (
          <div
            tabIndex={isOpen ? -1 : 0}
            key={index}
            className={`${
              isOpen ? "blur-sm lg:blur-0" : ""
            } max-w-3xl mt-10 mx-auto bg-white border border-gray-200 rounded-lg shadow`}
          >
            <iframe
              className="w-full aspect-video rounded-t-lg"
              src={video.link}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              tabIndex={isOpen ? -1 : 0}
            />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-700">
                {video.title}
              </h5>
              <div className="block text-base font-light leading-relaxed text-inherit antialiased">
                <PortableText value={video.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
