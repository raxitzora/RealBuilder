"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PROJECT_TEMPLATES = [
  {
    id: "netflix-clone",
    title: "Build a Netflix clone",
    description:
      "Create a modern Netflix clone with dark theme, hero banner, movie rows, responsive layout and clean UI.",
    icon: "🎬"
  },
  {
    id: "admin-dashboard",
    title: "Build an admin dashboard",
    description:
      "Create a modern admin dashboard with sidebar, charts, statistics cards and responsive layout.",
    icon: "📦"
  },
  {
    id: "kanban-board",
    title: "Build a kanban board",
    description:
      "Create a Trello-style kanban board with drag and drop, columns and task cards.",
    icon: "📋"
  },
  {
    id: "file-manager",
    title: "Build a file manager",
    description:
      "Create a modern file manager UI with folders, grid layout and preview panel.",
    icon: "📁"
  },
  {
    id: "youtube-clone",
    title: "Build a YouTube clone",
    description:
      "Create a YouTube-style layout with sidebar, video grid and responsive design.",
    icon: "📺"
  },
  {
    id: "store-page",
    title: "Build a store page",
    description:
      "Create a modern ecommerce store page with product grid, filters and cart UI.",
    icon: "🛍️"
  },
  {
    id: "airbnb-clone",
    title: "Build an Airbnb clone",
    description:
      "Create a modern Airbnb-style listing page with cards and filters.",
    icon: "🏠"
  },
  {
    id: "spotify-clone",
    title: "Build a Spotify clone",
    description:
      "Create a Spotify-style music player UI with sidebar, playlist and dark theme.",
    icon: "🎵"
  }
]

const formSchema = z.object({
  content: z
    .string()
    .min(1, "Project description is required")
    .max(1000, "Description is too long!")
})

const ProjectForm = () => {
  const [isFocused,setIsFocused] = useState()
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: ""
    }
  })

  const handleTemplate = (description) => {
    form.setValue("content", description)
  }

  const onSubmit = async (values) => {
    console.log(values)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Template Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {PROJECT_TEMPLATES.map((template) => (
          <button
            type="button"
            key={template.id}
            onClick={() => handleTemplate(template.description)}
            className="
              group
              rounded-2xl
              border border-white/10
              bg-neutral-900/70
              backdrop-blur-xl
              p-6
              text-left
              transition-all duration-300
              hover:border-white/20
              hover:bg-neutral-800
              hover:scale-[1.03]
            "
          >
            <div className="text-3xl mb-4">
              {template.icon}
            </div>

            <h3 className="text-sm font-semibold text-white group-hover:text-white">
              {template.title}
            </h3>
          </button>
        ))}
      </div>
      <form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
        className={cn("relative border p-4 pt-1 rounded-xl bg-sidebar dark:bg-sidebar transition-all",isFocused&&"shadow-lg ring-2 ring-primary/20")}></form>

      </form>

    </div>
  )
}

export default ProjectForm
