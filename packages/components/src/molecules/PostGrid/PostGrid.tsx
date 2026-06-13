import { cn } from "@premier-js/core"
import { PostCard } from "../PostCard"
import type { PostCardProps } from "../PostCard"

export interface PostGridProps {
  posts: PostCardProps[]
  columns?: 2 | 3 | 4
  title?: string
  subtitle?: string
  bgColor?: string
  titleColor?: string
}

export function PostGrid({
  posts,
  columns = 3,
  title,
  subtitle,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
}: PostGridProps) {
  const colStyles = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className={cn("py-20 px-6", bgColor)}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={cn("text-3xl md:text-4xl font-bold", titleColor)}>{title}</h2>}
            {subtitle && <p className="mt-4 text-lg text-gray-500">{subtitle}</p>}
          </div>
        )}
        <div className={cn("grid gap-6", colStyles[columns])}>
          {posts.map((post, i) => (
            <div key={i}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
