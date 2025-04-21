
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface VideoCardProps {
  id: string;
  thumbnail: string;
  title: string;
  channelName: string;
  channelAvatar?: string;
  views: string;
  uploadedAt: string;
  duration: string;
  className?: string;
}

const VideoCard = ({
  id,
  thumbnail,
  title,
  channelName,
  channelAvatar,
  views,
  uploadedAt,
  duration,
  className,
}: VideoCardProps) => {
  return (
    <Link to={`/watch/${id}`}>
      <div className={cn("tube-video-card", className)}>
        {/* Thumbnail with duration */}
        <div className="relative aspect-video mb-2">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
            {duration}
          </div>
        </div>
        
        {/* Video info */}
        <div className="flex gap-3">
          {channelAvatar && (
            <div className="flex-shrink-0">
              <img 
                src={channelAvatar} 
                alt={channelName}
                className="w-9 h-9 rounded-full"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm text-tube-lightText line-clamp-2 mb-1">
              {title}
            </h3>
            <p className="text-xs text-tube-darkText">{channelName}</p>
            <p className="text-xs text-tube-darkText">
              {views} • {uploadedAt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
