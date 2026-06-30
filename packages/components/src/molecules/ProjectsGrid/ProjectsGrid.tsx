import { cn } from "@premier-js/core"
import { GlareHover } from "../../effects/cards/GlareHover/GlareHover"

export interface ProjectItem {
  title: string
  description: string
  tags?: string[]
  href?: string
  image?: string
}

export interface ProjectsGridProps {
  id?: string
  title?: string
  subtitle?: string
  projects: ProjectItem[]
  bgColor?: string
  titleColor?: string
  subtitleColor?: string
}

export function ProjectsGrid({
  id,
  title,
  subtitle,
  projects = [],
  bgColor = "var(--color-background)",
  titleColor = "var(--color-text)",
  subtitleColor = "var(--color-text-muted)",
}: ProjectsGridProps) {
  return (
    <section id={id} className="py-20 px-6 @container" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: titleColor }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: subtitleColor }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a href={project.href ?? "#"} key={i} className="block group">
              <GlareHover
                width="100%"
                height="100%"
                className="flex flex-col h-full text-left"
                borderRadius="12px"
                glareColor="#ffffff"
                glareOpacity={0.1}
              >
                <div className="flex flex-col h-full w-full">
                  {project.image && (
                    <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 text-[var(--gs-text)] group-hover:text-[var(--gs-primary)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--gs-text-muted)] leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-xs px-2.5 py-1 rounded-full bg-[var(--gs-border-subtle)] text-[var(--gs-text-muted)] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </GlareHover>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
