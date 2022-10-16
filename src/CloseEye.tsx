import { SVGAttributes } from "react"

interface CloseEyeProps extends SVGAttributes<HTMLOrSVGElement> {}

export function CloseEye(props: CloseEyeProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.5 3.75l15 16.5M14.522 14.775a3.75 3.75 0 01-5.044-5.55"
        stroke="#9BE1FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.938 6.431C3.112 8.363 1.5 12 1.5 12s3 6.75 10.5 6.75c1.757.014 3.493-.39 5.063-1.181M19.556 15.853C21.6 14.025 22.5 12 22.5 12s-3-6.75-10.5-6.75c-.65-.001-1.3.052-1.94.16M12.703 8.316a3.74 3.74 0 013.028 3.328"
        stroke="#9BE1FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
