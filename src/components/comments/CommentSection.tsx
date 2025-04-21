
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface Comment {
  id: string;
  userId: string;
  text: string;
  likes: number;
  dislikes: number;
  timestamp: string;
  replies?: Comment[];
}

interface CommentSectionProps {
  videoId: string;
  comments: Comment[];
}

const CommentItem = ({ comment }: { comment: Comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  
  // In a real app, we'd fetch user data from an API
  // For now, we'll use a placeholder
  const userAvatar = `https://randomuser.me/api/portraits/${comment.userId.includes('5') ? 'men' : 'women'}/${comment.userId.slice(-2)}.jpg`;
  const userName = `User ${comment.userId.slice(-1)}`;
  
  return (
    <div className="py-4">
      <div className="flex gap-3">
        <img 
          src={userAvatar} 
          alt={userName} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-sm">{userName}</h4>
            <span className="text-xs text-tube-darkText">{comment.timestamp}</span>
          </div>
          <p className="text-sm mt-1">{comment.text}</p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <span className="text-xs text-tube-darkText">{comment.likes}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ThumbsDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-xs h-8">
              Reply
            </Button>
          </div>
          
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-tube-red text-xs h-8"
                onClick={() => setShowReplies(!showReplies)}
              >
                {showReplies 
                  ? `Hide ${comment.replies.length} replies` 
                  : `View ${comment.replies.length} replies`}
              </Button>
              
              {showReplies && (
                <div className="mt-2 pl-4 border-l-2 border-tube-light">
                  {comment.replies.map((reply) => (
                    <CommentItem key={reply.id} comment={reply} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommentSection = ({ videoId, comments }: CommentSectionProps) => {
  const [commentText, setCommentText] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would post the comment to an API
    console.log('Comment submitted:', commentText);
    setCommentText('');
  };
  
  return (
    <div className="mt-6">
      <div className="flex items-center mb-4">
        <h3 className="text-lg font-medium">{comments.length} Comments</h3>
      </div>
      
      {/* Comment form */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="Your avatar" 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <Textarea 
            placeholder="Add a comment..." 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="bg-transparent border-b border-tube-light rounded-none focus-visible:ring-0 px-0 min-h-0 h-10 resize-none"
          />
          
          {commentText && (
            <div className="flex justify-end gap-2 mt-2">
              <Button 
                variant="ghost" 
                type="button" 
                onClick={() => setCommentText('')}
                className="h-8 text-sm"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-tube-red hover:bg-red-700 text-white h-8 text-sm"
              >
                Comment
              </Button>
            </div>
          )}
        </div>
      </form>
      
      {/* Comments list */}
      <div className="space-y-1 divide-y divide-tube-light">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
