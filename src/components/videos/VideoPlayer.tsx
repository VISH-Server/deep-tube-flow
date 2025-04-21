
import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoId: string;
  poster?: string;
  className?: string;
}

const VideoPlayer = ({ videoId, poster, className }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(70);
  
  // In a real implementation, these would control the video element
  const togglePlay = () => setIsPlaying(prev => !prev);
  const toggleMute = () => setIsMuted(prev => !prev);
  
  return (
    <div className={cn("relative bg-black rounded-md overflow-hidden", className)}>
      {/* Video element - in a real app this would be a real video player */}
      <div className="aspect-video flex items-center justify-center">
        {poster ? (
          <img src={poster} alt="Video thumbnail" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-tube-dark flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 mx-auto text-tube-red opacity-80" />
              <p className="text-tube-lightText mt-4">Video ID: {videoId}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Video controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={togglePlay} 
              className="text-white hover:text-tube-red transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleMute} 
                className="text-white hover:text-tube-red transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume} 
                onChange={(e) => setVolume(parseInt(e.target.value))} 
                className="w-24 accent-tube-red"
              />
            </div>
          </div>
          
          <button 
            className="text-white hover:text-tube-red transition-colors"
            aria-label="Full screen"
          >
            <Maximize className="h-5 w-5" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-tube-red w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
