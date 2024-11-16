"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Globe, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      let a = await fetch("https://api.github.com/users/Skb3611/repos");
      let res = await a.json();
      let repos = res.map((repo) => {
        return {
          title: repo.name,
          description: repo.description,
          tags: repo.topics,
          githubUrl: repo.html_url,
          liveUrl: repo.has_pages ? `https://skb3611.github.io/${repo.name}/`: repo.homepage,
          imageUrl: `https://raw.githubusercontent.com/Skb3611/${repo.name}/main/preview.png`,
        };
      });
      setProjects(repos);
      setIsLoading(false);
    console.log(res)
    })();
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">
        {isLoading
          ? Array(3)
              .fill(0)
              .map(() => {
                return (
                  
                    <div key={Math.random()} className="flex flex-col overflow-hidden transition-all duration-300 space-y-4">
                      {/* Image Skeleton */}
                      <div className="relative w-full pt-[56.25%] overflow-hidden">
                        <Skeleton className="absolute top-0 left-0 w-full h-full object-cover rounded-md" />
                      </div>

                      {/* Title Skeleton */}
                      <div className="pb-2">
                        <Skeleton className="h-6 w-3/4 rounded-md" />
                      </div>

                      {/* Description Skeleton */}
                      <div className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-full rounded-md" />
                        <Skeleton className="h-4 w-5/6 rounded-md" />
                      </div>

                      {/* Tags Skeleton */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Skeleton className="h-6 w-16 rounded-md" />
                        <Skeleton className="h-6 w-20 rounded-md" />
                        <Skeleton className="h-6 w-12 rounded-md" />
                      </div>

                      {/* Footer Skeleton */}
                      <div className="flex justify-between gap-4">
                        <Skeleton className="h-10 w-1/2 rounded-md" />
                        <Skeleton className="h-10 w-1/2 rounded-md" />
                      </div>
                    </div>
                
                );
              })
          : projects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative w-full pt-[56.25%] overflow-hidden">
                  <Image
                    src={project.imageUrl ?? ""}
                    alt={`Preview of ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl md:text-2xlfont-bold text-primary">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 text-sm md:text-base text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center md:justify-between gap-4">
                  <Button asChild variant="outline" className="flex-1">
                    <Link
                      href={project.githubUrl ?? ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link
                      href={project.liveUrl ?? ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
}
