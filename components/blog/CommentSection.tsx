'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Heart, Reply, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatDateShort } from '@/lib/utils/blog';

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  replies: Comment[];
}

// Mock comments data
const mockComments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'John Doe',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    content: 'Great article! I learned a lot about React hooks. The examples are very clear and well-explained.',
    createdAt: '2024-01-15T10:30:00Z',
    likes: 12,
    replies: [
      {
        id: '2',
        author: {
          name: 'Jane Smith',
          avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
        content: 'I agree! The useEffect examples were particularly helpful.',
        createdAt: '2024-01-15T11:00:00Z',
        likes: 5,
        replies: [],
      },
    ],
  },
  {
    id: '3',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    content: 'Would love to see more advanced patterns with custom hooks. Any plans for a follow-up article?',
    createdAt: '2024-01-15T14:20:00Z',
    likes: 8,
    replies: [],
  },
];

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !name.trim() || !email.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: name.trim(),
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      },
      content: newComment.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    if (replyTo) {
      // Add as reply (simplified logic)
      setComments(prev => prev.map(c => 
        c.id === replyTo 
          ? { ...c, replies: [...c.replies, comment] }
          : c
      ));
      setReplyTo(null);
    } else {
      // Add as new comment
      setComments(prev => [comment, ...prev]);
    }

    setNewComment('');
    setName('');
    setEmail('');
  };

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <Card className={`${isReply ? 'ml-8 mt-4' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={comment.author.avatar}
              alt={comment.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <h4 className="font-medium">{comment.author.name}</h4>
              <p className="text-sm text-muted-foreground">
                {formatDateShort(comment.createdAt)}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{comment.content}</p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <Heart className="h-4 w-4 mr-1" />
            {comment.likes}
          </Button>
          {!isReply && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2"
              onClick={() => setReplyTo(comment.id)}
            >
              <Reply className="h-4 w-4 mr-1" />
              Reply
            </Button>
          )}
        </div>
      </CardContent>
      {comment.replies.map(reply => (
        <CommentItem key={reply.id} comment={reply} isReply />
      ))}
    </Card>
  );

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Comments ({comments.length})</h3>
      </div>

      {/* Comment Form */}
      <Card className="mb-8">
        <CardHeader>
          <h4 className="font-medium">
            {replyTo ? 'Reply to comment' : 'Leave a comment'}
          </h4>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="comment">Comment *</Label>
              <Textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                required
                rows={4}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button type="submit">
                {replyTo ? 'Reply' : 'Post Comment'}
              </Button>
              {replyTo && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setReplyTo(null)}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}