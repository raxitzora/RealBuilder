"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

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

export default function ProjectForm() {
  const [isFocused, setIsFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: ""
    }
  })

  const handleTemplate = (description) => {
    form.setValue("content", description, {
      shouldValidate: true,
      shouldDirty: true
    })
  }

  const onSubmit = async (values) => {
    try {
      setIsLoading(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Submitted:", values)

      // Example redirect

    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
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

            <h3 className="text-sm font-semibold text-white">
              {template.title}
            </h3>
          </button>
        ))}
      </div>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "relative border p-6 rounded-xl bg-sidebar dark:bg-sidebar transition-all space-y-4",
            isFocused && "shadow-lg ring-2 ring-primary/20"
          )}
        >
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Describe your project idea..."
                    rows={6}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Project"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
