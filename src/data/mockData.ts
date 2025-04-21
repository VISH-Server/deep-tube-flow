
// Mock data for videos, channels, comments, etc.

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelId: string;
  views: string;
  uploadedAt: string;
  duration: string;
  description?: string;
  likes?: number;
  dislikes?: number;
}

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscribers: string;
  verified: boolean;
  banner?: string;
  description?: string;
}

export interface Comment {
  id: string;
  userId: string;
  text: string;
  likes: number;
  dislikes: number;
  timestamp: string;
  replies?: Comment[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

// Channels
export const channels: Channel[] = [
  {
    id: "channel-1",
    name: "Tech Insights",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    subscribers: "1.2M",
    verified: true,
    banner: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=300",
    description: "The latest in technology, gadgets, and programming. We cover everything from new smartphones to coding tutorials."
  },
  {
    id: "channel-2",
    name: "Travel Experiences",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    subscribers: "890K",
    verified: true,
    banner: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1200&h=300",
    description: "Explore the world with us! We share travel guides, tips, and adventures from around the globe."
  },
  {
    id: "channel-3",
    name: "Cooking Master",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    subscribers: "2.5M",
    verified: true,
    description: "Simple recipes anyone can make. From quick meals to gourmet dishes."
  },
  {
    id: "channel-4",
    name: "Gaming Universe",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    subscribers: "3.1M",
    verified: true,
    description: "Gaming walkthroughs, reviews, and industry news for all gamers."
  },
  {
    id: "channel-5",
    name: "Fitness Journey",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    subscribers: "750K",
    verified: false,
    description: "Workouts, nutrition advice, and motivation to help you reach your fitness goals."
  }
];

// Videos
export const videos: Video[] = [
  {
    id: "video-1",
    title: "Building a Modern Web Application with React and TypeScript",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=337",
    channelId: "channel-1",
    views: "1.2M views",
    uploadedAt: "2 weeks ago",
    duration: "15:22",
    description: "In this tutorial, we'll build a complete web application using React, TypeScript, and modern web development practices. Learn how to structure your project, manage state, implement routing, and deploy your application.",
    likes: 45000,
    dislikes: 320
  },
  {
    id: "video-2",
    title: "Top 10 Hidden Gems in Southeast Asia",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=337",
    channelId: "channel-2",
    views: "890K views",
    uploadedAt: "3 days ago",
    duration: "22:45",
    description: "Discover the most beautiful and less-known destinations in Southeast Asia. From secluded beaches to mountain retreats, these places will take your breath away.",
    likes: 32000,
    dislikes: 240
  },
  {
    id: "video-3",
    title: "15-Minute Pasta Recipe Anyone Can Make",
    thumbnail: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&h=337",
    channelId: "channel-3",
    views: "2.5M views",
    uploadedAt: "1 month ago",
    duration: "8:42",
    likes: 120000,
    dislikes: 1800
  },
  {
    id: "video-4",
    title: "Elden Ring: Ultimate Boss Guide",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=337",
    channelId: "channel-4",
    views: "3.7M views",
    uploadedAt: "5 months ago",
    duration: "32:18",
    likes: 215000,
    dislikes: 5200
  },
  {
    id: "video-5",
    title: "Full Body HIIT Workout - No Equipment Needed",
    thumbnail: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=600&h=337",
    channelId: "channel-5",
    views: "1.1M views",
    uploadedAt: "2 weeks ago",
    duration: "25:40",
    likes: 55000,
    dislikes: 420
  },
  {
    id: "video-6",
    title: "The Future of AI: What to Expect in 2025",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=337",
    channelId: "channel-1",
    views: "750K views",
    uploadedAt: "1 week ago",
    duration: "18:14",
    likes: 28000,
    dislikes: 320
  },
  {
    id: "video-7",
    title: "Exploring Japan: Tokyo to Kyoto",
    thumbnail: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&h=337",
    channelId: "channel-2",
    views: "1.5M views",
    uploadedAt: "3 months ago",
    duration: "41:23",
    likes: 95000,
    dislikes: 840
  },
  {
    id: "video-8",
    title: "10-Minute Healthy Breakfast Ideas",
    thumbnail: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=600&h=337",
    channelId: "channel-3",
    views: "980K views",
    uploadedAt: "2 months ago",
    duration: "12:05",
    likes: 47000,
    dislikes: 220
  }
];

// Users
export const users: User[] = [
  {
    id: "user-1",
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "user-2",
    name: "Sara Wilson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "user-3",
    name: "Miguel Rodriguez",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: "user-4",
    name: "Emma Thompson",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: "user-5",
    name: "James Lee",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

// Comments
export const getVideoComments = (videoId: string): Comment[] => {
  // This would be an API call in a real app
  return [
    {
      id: "comment-1",
      userId: "user-3",
      text: "This video was incredibly helpful! I've been struggling with this concept for weeks.",
      likes: 242,
      dislikes: 0,
      timestamp: "3 days ago",
      replies: [
        {
          id: "reply-1",
          userId: "user-5",
          text: "Same here! The explanation at 5:23 finally made it click for me.",
          likes: 37,
          dislikes: 0,
          timestamp: "2 days ago"
        },
        {
          id: "reply-2",
          userId: "user-2",
          text: "I'd recommend checking out their other videos too, they're all great!",
          likes: 12,
          dislikes: 0,
          timestamp: "1 day ago"
        }
      ]
    },
    {
      id: "comment-2",
      userId: "user-4",
      text: "Could you please make a follow-up video covering the advanced topics you mentioned at 12:45?",
      likes: 145,
      dislikes: 0,
      timestamp: "1 week ago"
    },
    {
      id: "comment-3",
      userId: "user-1",
      text: "I've been subscribed for years and the quality just keeps getting better. Great job!",
      likes: 398,
      dislikes: 2,
      timestamp: "2 weeks ago",
      replies: [
        {
          id: "reply-3",
          userId: "user-3",
          text: "Totally agree! Been here since they had only 1000 subscribers.",
          likes: 48,
          dislikes: 0,
          timestamp: "1 week ago"
        }
      ]
    },
    {
      id: "comment-4",
      userId: "user-2",
      text: "I tried this technique and it worked perfectly. Thank you so much for sharing!",
      likes: 87,
      dislikes: 0,
      timestamp: "6 days ago"
    },
    {
      id: "comment-5",
      userId: "user-5",
      text: "The editing in this video is on another level. What software do you use?",
      likes: 65,
      dislikes: 0,
      timestamp: "4 days ago"
    }
  ];
};

// Helper functions to get data
export const getChannelById = (channelId: string): Channel | undefined => {
  return channels.find((channel) => channel.id === channelId);
};

export const getVideosByChannel = (channelId: string): Video[] => {
  return videos.filter((video) => video.channelId === channelId);
};

export const getRelatedVideos = (videoId: string, limit: number = 8): Video[] => {
  // In a real app, this would use a recommendation algorithm
  // For now, just return random videos excluding the current one
  return videos
    .filter((video) => video.id !== videoId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const getUserById = (userId: string): User | undefined => {
  return users.find((user) => user.id === userId);
};

export const getVideoById = (videoId: string): Video | undefined => {
  return videos.find((video) => video.id === videoId);
};

// Categories
export const categories = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Live",
  "Computer Science",
  "Comedy",
  "Cooking",
  "Recently uploaded",
  "Watched",
  "New to you"
];

export default {
  videos,
  channels,
  users,
  getVideoComments,
  getChannelById,
  getVideosByChannel,
  getRelatedVideos,
  getUserById,
  getVideoById,
  categories
};
