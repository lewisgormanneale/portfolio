import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
export function Project({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
}: {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex gap-2 flex-wrap">
          {techStack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline">{tech}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="flex gap-4 h-full justify-end w-full">
          <a
            href={githubUrl}
            className={buttonVariants({ variant: "outline" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={liveUrl}
            className={buttonVariants({ variant: "default" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
