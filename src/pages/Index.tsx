
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import VideoCard from '@/components/videos/VideoCard';
import { videos, categories } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="py-6">
      {/* Categories slider */}
      <div className="overflow-x-auto pb-4 mb-6 -mx-4 px-4">
        <div className="flex space-x-2 min-w-max">
          {categories.map((category) => (
            <Button
              key={category}
              variant="secondary"
              size="sm"
              className={cn(
                "rounded-full whitespace-nowrap bg-tube-light hover:bg-tube-hover",
                selectedCategory === category && "bg-tube-hover text-tube-lightText"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Videos grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            channelName="Channel Name" // In a real app, you'd fetch this from the channel data
            channelAvatar="https://randomuser.me/api/portraits/men/32.jpg" // In a real app, this would be dynamic
            views={video.views}
            uploadedAt={video.uploadedAt}
            duration={video.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
