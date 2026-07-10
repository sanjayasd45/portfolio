import Image from 'next/image';
import Link from 'next/link';

export function getCategoryStyles(category) {
  const cat = (category || 'others').toUpperCase();
  switch (cat) {
    case 'GYM MANAGEMENT':
    case 'SAAS':
    case 'BUSINESS SYSTEMS':
      return 'border-blue-500/20 bg-blue-500/10 text-blue-400';
    case 'MARKETING':
      return 'border-purple-500/20 bg-purple-500/10 text-purple-400';
    case 'RETENTION':
      return 'border-pink-500/20 bg-pink-500/10 text-pink-400';
    case 'TECH STACK':
      return 'border-cyan-500/20 bg-cyan-500/10 text-cyan-400';
    default:
      return 'border-slate-500/20 bg-slate-500/10 text-slate-400';
  }
}

export default function BlogCard({ post }) {
  const title = post.title;
  const summary = post.summary || 'No overview available for this article.';
  const category = post.category || 'General';
  const slug = post.slug;
  const image = post.featuredImage || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop';
  
  const readTime = `${Math.ceil((post.content || '').split(' ').length / 200) || 3} MIN READ`;
  const date = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : 'Recent';

  return (
    <article className="group relative flex flex-col bg-slate-900/50 border border-white/5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 rounded-2xl md:rounded-[1.75rem] overflow-hidden h-full">
      <Link href={`/blog/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Read {title}</span>
      </Link>

      {/* Image Container */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-950/40">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 border rounded-lg text-[9px] font-black uppercase tracking-widest ${getCategoryStyles(category)}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            {readTime} &bull; {date}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight tracking-tight mb-2.5 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 font-medium mb-4">
          {summary}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-[10px] font-black text-white uppercase">
              {(post.author?.name || post.author?.gymName || 'DC').substring(0, 2)}
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight truncate max-w-[120px]">
              {post.author?.name || post.author?.gymName || 'Developer Chowk'}
            </span>
          </div>
          <div className="text-blue-500 font-black text-lg transition-transform group-hover:translate-x-1">→</div>
        </div>
      </div>
    </article>
  );
}
