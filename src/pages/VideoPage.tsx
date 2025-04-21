
import { useParams } from 'react-router-dom';
import VideoPlayer from '@/components/videos/VideoPlayer';
import VideoCard from '@/components/videos/VideoCard';
import CommentSection from '@/components/comments/CommentSection';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, Share, Bookmark, Clock, Flag } from 'lucide-react';
import { getVideoById, getRelatedVideos, getVideoComments, getChannelById } from '@/data/mockData';

const VideoPage = () => {
  const { id = 'video-1' } = useParams<{ id: string }>();
  const video = getVideoById(id) || getVideoById('video-1')!;
  const channel = getChannelById(video.channelId);
  const relatedVideos = getRelatedVideos(id);
  const comments = getVideoComments(id);

  return (
    <div className="py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1">
          {/* Video player */}
          <VideoPlayer videoId={id} poster={video.thumbnail} />

          {/* Video info */}
          <div className="mt-4">
            <h1 className="text-xl font-medium">{video.title}</h1>
            <div className="flex flex-wrap items-center justify-between mt-2 gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span>{video.views}</span>
                  <span>•</span>
                  <span>{video.uploadedAt}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsUp className="h-5 w-5" />
                    <span>{video.likes && video.likes.toLocaleString()}</span>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ThumbsDown className="h-5 w-5" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share className="h-5 w-5" />
                  <span>Share</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Bookmark className="h-5 w-5" />
                  <span>Save</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Flag className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Channel info & video description */}
          <div className="mt-4 p-4 border-t border-b border-tube-light">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={channel?.avatar} 
                  alt={channel?.name} 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium flex items-center gap-1">
                    {channel?.name}
                    {channel?.verified && (
                      <span className="text-tube-red">✓</span>
                    )}
                  </h3>
                  <p className="text-sm text-tube-darkText">{channel?.subscribers} subscribers</p>
                </div>
              </div>
              <Button className="bg-tube-red hover:bg-red-700 text-white">Subscribe</Button>
            </div>
            <div className="mt-4">
              <p className="text-sm whitespace-pre-line">{video.description}</p>
            </div>
          </div>

          {/* Comments */}
          <CommentSection videoId={id} comments={comments} />
        </div>

        {/* Sidebar - Related videos */}
        <div className="w-full lg:w-80 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="sm" className="gap-1 text-tube-darkText">
              <Clock className="h-4 w-4" />
              <span>Watch later</span>
            </Button>
          </div>
          {relatedVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              channelName="Channel Name" // In a real app, you'd fetch this
              views={video.views}
              uploadedAt={video.uploadedAt}
              duration={video.duration}
              className="flex flex-col sm:flex-row lg:flex-col"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
