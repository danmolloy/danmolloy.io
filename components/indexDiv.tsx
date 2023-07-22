import React from "react";
import { Element } from "react-scroll";


type IndexSectionProps = {
  children: React.ReactNode
  title: string
  name?: string
}

export default function IndexDiv(props: IndexSectionProps) {
  const { children, title, name } = props;

  return (
    <div className=" text-sm flex flex-col items-center w-screen p-12">
      <div className="flex flex-row w-full">
      <h1 className="font-display my-4">{title}</h1>
      </div>
      {children}
    </div>
  )
}