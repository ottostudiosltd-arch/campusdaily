import React, { useState, useMemo } from 'react';
import { Post, College, CategoryId, SubFilter } from './types';
import { COLLEGES, INITIAL_POSTS } from './data/mockData';
import { LeftSidebar } from './components/common/LeftSidebar';
import { RightSidebar } from './components/common/RightSidebar';
import { Navbar } from './components/common/Navbar';
import { MobileHeader } from './components/common/MobileHeader';
import { MobileBottomNav } from './components/common/MobileBottomNav';
import { HeroBanner } from './components/common/HeroBanner';
import { CategoryBar } from './components/common/CategoryBar';
import { SubFilterBar } from './components/common/SubFilterBar';
import { PostCard } from './components/cards/PostCard';
import { SponsoredAdCard } from './components/cards/SponsoredAdCard';
import { CreatePostModal } from './components/modals/CreatePostModal';
import { PostDetailModal } from './components/modals/PostDetailModal';
import { CollegeSelectModal } from './components/modals/CollegeSelectModal';
import { PublishAdModal } from './components/modals/PublishAdModal';
import { NewsView } from './components/views/NewsView';
import { CollegesView } from './components/views/CollegesView';
import { ProfileView } from './components/views/ProfileView';
import { Frown } from 'lucide-react';

export const App: React.FC = () => {
  // State management
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [selectedCollege, setSelectedCollege] = useState<College>(COLLEGES[0]); // COEP Pune
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [activeSubFilter, setActiveSubFilter] = useState<SubFilter>('for-you');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Modals state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedPostForDetail, setSelectedPostForDetail] = useState<Post | null>(null);
  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
  const [isPublishAdModalOpen, setIsPublishAdModalOpen] = useState(false);
  const [showOnlySaved, setShowOnlySaved] = useState(false);

  // Filtered posts for Home Feed
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // 1. Saved filter
      if (showOnlySaved && !post.isSaved) return false;

      // 2. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          post.title.toLowerCase().includes(q) ||
          post.content.toLowerCase().includes(q) ||
          post.college.toLowerCase().includes(q) ||
          post.author.name.toLowerCase().includes(q) ||
          post.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      // 3. Category filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'trending' && !post.isTrending && post.category !== 'trending') {
          return false;
        } else if (activeCategory !== 'trending' && post.category !== activeCategory) {
          return false;
        }
      }

      // 4. Sub-filter: 'my-college'
      if (activeSubFilter === 'my-college') {
        if (post.collegeSlug !== selectedCollege.slug && post.college !== selectedCollege.shortName) {
          return false;
        }
      }

      return true;
    });
  }, [posts, selectedCollege, activeCategory, activeSubFilter, searchQuery, showOnlySaved]);

  // Actions
  const handleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const isLiked = !p.isLiked;
          return {
            ...p,
            isLiked,
            likes: isLiked ? p.likes + 1 : p.likes - 1,
          };
        }
        return p;
      })
    );

    if (selectedPostForDetail && selectedPostForDetail.id === id) {
      setSelectedPostForDetail((prev) =>
        prev
          ? {
              ...prev,
              isLiked: !prev.isLiked,
              likes: !prev.isLiked ? prev.likes + 1 : prev.likes - 1,
            }
          : null
      );
    }
  };

  const handleBookmark = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return { ...p, isSaved: !p.isSaved };
        }
        return p;
      })
    );

    if (selectedPostForDetail && selectedPostForDetail.id === id) {
      setSelectedPostForDetail((prev) =>
        prev ? { ...prev, isSaved: !prev.isSaved } : null
      );
    }
  };

  const handleAddComment = (postId: string, text: string) => {
    const newComment = {
      id: `c-${Date.now()}`,
      author: 'Tausif Shaikh (You)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      text,
      timestamp: 'Just now',
      likes: 0,
    };

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const updatedComments = [...(p.comments || []), newComment];
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: updatedComments,
          };
        }
        return p;
      })
    );

    if (selectedPostForDetail && selectedPostForDetail.id === postId) {
      setSelectedPostForDetail((prev) =>
        prev
          ? {
              ...prev,
              commentsCount: prev.commentsCount + 1,
              comments: [...(prev.comments || []), newComment],
            }
          : null
      );
    }
  };

  const handleCreatePost = (newPostData: Partial<Post>) => {
    const fullPost: Post = {
      ...(newPostData as Post),
    };
    setPosts([fullPost, ...posts]);
    setActiveCategory('all');
    setActiveSubFilter('for-you');
    setShowOnlySaved(false);
  };

  const handleShareWhatsApp = (post: Post) => {
    const text = `🔥 *${post.title}*\n\n${post.content.slice(0, 140)}...\n\nRead more on *College Daily* (${post.college}):\nhttps://campusdailypune.in/post/${post.id}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const savedCount = posts.filter((p) => p.isSaved).length;

  return (
    <div className="min-h-screen bg-campus-bg text-campus-text relative overflow-x-hidden selection:bg-campus-yellow selection:text-black">
      {/* Background Organic Blobs */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-[#84C69B] rounded-full filter blur-3xl opacity-35 pointer-events-none -z-10 animate-blob" />
      <div className="fixed top-1/3 -right-28 w-96 h-96 bg-[#B8A4FC] rounded-full filter blur-3xl opacity-30 pointer-events-none -z-10 animate-blob" />
      <div className="fixed -bottom-24 left-1/3 w-80 h-80 bg-campus-yellow rounded-full filter blur-3xl opacity-20 pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-[1520px] mx-auto px-3 sm:px-6 lg:px-8 py-3 lg:py-5">
        <div className="flex gap-5 lg:gap-6 items-start justify-center">
          {/* 1. Left Sidebar (Fixed & Non-scrollable viewport) */}
          <LeftSidebar
            activeTab={activeTab}
            onSelectTab={(tab) => {
              setActiveTab(tab);
              setShowOnlySaved(false);
            }}
          />

          {/* 2. Center Column: Main Content Area */}
          <main className="flex-1 max-w-4xl min-w-0 pb-28 lg:pb-8">
            {/* Desktop Navbar */}
            <Navbar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCollege={selectedCollege}
              onOpenCollegeSelect={() => setIsCollegeModalOpen(true)}
            />

            {/* Mobile Header */}
            <MobileHeader
              selectedCollege={selectedCollege}
              onOpenCollegeSelect={() => setIsCollegeModalOpen(true)}
              onToggleSearch={() => setShowMobileSearch(!showMobileSearch)}
              showSearch={showMobileSearch}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* VIEW ROUTING BASED ON ACTIVE TAB */}
            {activeTab === 'home' && (
              <>
                {/* Hero Banner (Real mob-cat-banner on mobile) */}
                <HeroBanner
                  collegeName={selectedCollege.shortName}
                  onOpenCreatePost={() => setIsCreateModalOpen(true)}
                />

                {/* Category Pills Bar */}
                <CategoryBar
                  activeCategory={activeCategory}
                  onSelectCategory={(cat) => {
                    setActiveCategory(cat);
                    setShowOnlySaved(false);
                  }}
                />

                {/* Sub Filter Bar ('For You', 'My College', 'Nearby') */}
                <div className="flex items-center justify-between gap-2">
                  <SubFilterBar
                    activeFilter={activeSubFilter}
                    onSelectFilter={(filter) => {
                      setActiveSubFilter(filter);
                      setShowOnlySaved(false);
                    }}
                    selectedCollegeName={selectedCollege.shortName}
                  />

                  {showOnlySaved && (
                    <button
                      onClick={() => setShowOnlySaved(false)}
                      className="text-xs font-bold bg-campus-yellow px-3 py-1 rounded-full border border-black mb-6 hover:bg-campus-yellowHover"
                    >
                      Clear Saved Filter ✕
                    </button>
                  )}
                </div>

                {/* Posts Feed Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {filteredPosts.map((post, index) => (
                      <React.Fragment key={post.id}>
                        <PostCard
                          post={post}
                          onLike={handleLike}
                          onBookmark={handleBookmark}
                          onOpenDetail={(p) => setSelectedPostForDetail(p)}
                          onShare={handleShareWhatsApp}
                        />

                        {/* Sponsored Ad Banner after 2nd post */}
                        {index === 1 && (
                          <div className="md:col-span-2">
                            <SponsoredAdCard
                              onOpenPublishAd={() => setIsPublishAdModalOpen(true)}
                            />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white border-2 border-campus-borderDark rounded-[28px] p-8 text-center shadow-brutal my-4">
                    <Frown className="w-10 h-10 text-stone-400 mx-auto mb-2" />
                    <h3 className="font-display font-black text-lg text-campus-text mb-1">
                      No campus stories found
                    </h3>
                    <p className="text-xs text-stone-600 max-w-sm mx-auto mb-4 font-medium">
                      {searchQuery
                        ? `No matches for "${searchQuery}". Try another keyword or filter.`
                        : 'Be the first student to break news from this campus!'}
                    </p>
                    <button
                      onClick={() => setIsCreateModalOpen(true)}
                      className="px-5 py-2 bg-campus-yellow text-black font-display font-bold text-xs rounded-full border-2 border-campus-borderDark shadow-brutal hover:bg-campus-yellowHover transition-all"
                    >
                      Create First Post ✏️
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Dedicated NEWS Tab with Mini Category Filters (Point 5) */}
            {activeTab === 'news' && (
              <NewsView
                posts={posts}
                onLike={handleLike}
                onBookmark={handleBookmark}
                onOpenDetail={(p) => setSelectedPostForDetail(p)}
                onShare={handleShareWhatsApp}
              />
            )}

            {/* Dedicated COLLEGES Campus Hub Tab with Mini College Name Filters (Point 8) */}
            {activeTab === 'colleges' && (
              <CollegesView
                colleges={COLLEGES}
                selectedCollege={selectedCollege}
                onSelectCollege={(c) => setSelectedCollege(c)}
                posts={posts}
                onLike={handleLike}
                onBookmark={handleBookmark}
                onOpenDetail={(p) => setSelectedPostForDetail(p)}
                onShare={handleShareWhatsApp}
                onOpenCreatePost={() => setIsCreateModalOpen(true)}
              />
            )}

            {/* Dedicated PROFILE Tab (Point 9) */}
            {activeTab === 'profile' && (
              <ProfileView
                posts={posts}
                selectedCollege={selectedCollege}
                onLike={handleLike}
                onBookmark={handleBookmark}
                onOpenDetail={(p) => setSelectedPostForDetail(p)}
                onShare={handleShareWhatsApp}
                onOpenCreatePost={() => setIsCreateModalOpen(true)}
              />
            )}
          </main>

          {/* 3. Right Sidebar (Fixed & Non-clipping) */}
          <RightSidebar
            onSelectTopic={(topic) => {
              setActiveTab('home');
              setSearchQuery(topic);
            }}
            onOpenCollegesModal={() => setActiveTab('colleges')}
            onOpenSavedPosts={() => {
              setActiveTab('profile');
            }}
            savedCount={savedCount}
          />
        </div>
      </div>

      {/* Floating Bottom Navigation (Mobile View) */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setShowOnlySaved(false);
        }}
        onOpenCreatePost={() => setIsCreateModalOpen(true)}
        onOpenCollegesModal={() => setActiveTab('colleges')}
      />

      {/* Modals */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmitPost={handleCreatePost}
        colleges={COLLEGES}
        defaultCollege={selectedCollege}
      />

      <PostDetailModal
        post={selectedPostForDetail}
        onClose={() => setSelectedPostForDetail(null)}
        onLike={handleLike}
        onBookmark={handleBookmark}
        onAddComment={handleAddComment}
        onShareWhatsApp={handleShareWhatsApp}
      />

      <CollegeSelectModal
        isOpen={isCollegeModalOpen}
        onClose={() => setIsCollegeModalOpen(false)}
        colleges={COLLEGES}
        selectedCollege={selectedCollege}
        onSelectCollege={(c) => {
          setSelectedCollege(c);
          setActiveSubFilter('my-college');
        }}
      />

      <PublishAdModal
        isOpen={isPublishAdModalOpen}
        onClose={() => setIsPublishAdModalOpen(false)}
      />
    </div>
  );
};

export default App;
