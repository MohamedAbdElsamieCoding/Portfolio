export interface ProjectCardProps {
  image: string;
  tech: string;
  title: string;
  description: string;
  liveOnClick: React.MouseEventHandler<HTMLButtonElement>;
  gitHubOnClick: React.MouseEventHandler<HTMLButtonElement>;
}
