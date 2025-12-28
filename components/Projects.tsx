import Image from "next/image";

import SectionTitle from "./SectionTitle";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { projects } from "@/utils";
import { Button } from "./ui/button";
import { GitFork, ScanLine, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <SectionTitle title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={project.image} alt={project.name} />
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="gap-3">
              <Link href={project.githubLink} target="_blank">
                <Button variant={"outline"}>
                  <GitFork />
                  Fork
                </Button>
              </Link>

              <Link href={project.webLink} target="_blank">
                <Button variant="default">
                  <SquareArrowOutUpRight />
                  Web
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
