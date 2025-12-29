import Image from "next/image";

import Link from "next/link";
import { FileCodeCorner, GitPullRequestArrow } from "lucide-react";

import { projects } from "@/utils";
import { Badge } from "./ui/badge";
import SectionTitle from "./SectionTitle";
import { Card, CardTitle, CardContent, CardHeader } from "./ui/card";

export default function Projects() {
  return (
    <>
      <SectionTitle title="Learning by doing..." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
          >
            <CardHeader>
              <CardTitle>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center justify-between gap-2"
                >
                  <span>{project.name}</span>
                  <FileCodeCorner className="text-neutral-400" />
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <Link href={project.webLink} target="_blank">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="cursor-pointer transition-all duration-500 hover:scale-105 mb-4"
                />
              </Link>

              <p className="mt-4 text-sm space-x-2 space-y-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-zinc-600 dark:text-zinc-400 "
                  >
                    {tech}
                  </Badge>
                ))}
              </p>

              {/* <CardDescription className="my-3">
                {project.description}
              </CardDescription> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
