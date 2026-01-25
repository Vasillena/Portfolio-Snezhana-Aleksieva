import { JSX } from "react";
import { notFound } from "next/navigation";

export default function CatchAllPage(): JSX.Element {
  notFound();
}
