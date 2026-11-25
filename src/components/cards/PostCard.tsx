import React from 'react';
import { Post } from '../../types';
import { DoodleQuestionCard } from './DoodleQuestionCard';
import { PhotoSpotlightCard } from './PhotoSpotlightCard';
import { MemeHumorCard } from './MemeHumorCard';
import { OpportunityCard } from './OpportunityCard';

interface PostCardProps {
  post: Post;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onOpenDetail: (post: Post) => void;
  onShare: (post: Post) => void;
}

export const PostCard: React.FC<PostCardProps> = (props) => {
  switch (props.post.cardTheme) {
    case 'doodle-question':
      return <DoodleQuestionCard {...props} />;
    case 'photo-spotlight':
      return <PhotoSpotlightCard {...props} />;
    case 'meme-humor':
      return <MemeHumorCard {...props} />;
    case 'opportunity-notice':
      return <OpportunityCard {...props} />;
    default:
      return <DoodleQuestionCard {...props} />;
  }
};
