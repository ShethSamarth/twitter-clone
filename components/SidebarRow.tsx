import React, { SVGProps } from "react"

interface Props {
  Icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  >
  title: string
  onClick?: () => {}
}

function SidebarRow({ Icon, title, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.()}
      className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100"
    >
      <Icon className="h-6 w-6" />
      <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
