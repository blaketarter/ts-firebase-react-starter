import { PageProps } from "../../types/page";

export function PageUnprotected({ render, ...props }: PageProps) {
  return render(props);
}
