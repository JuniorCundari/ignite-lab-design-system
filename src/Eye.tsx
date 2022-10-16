import { SVGAttributes } from "react"

interface EyeProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Eye(props: EyeProps) {
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
        d="M12 5.25C4.5 5.25 1.5 12 1.5 12s3 6.75 10.5 6.75S22.5 12 22.5 12s-3-6.75-10.5-6.75z"
        stroke="#9BE1FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        stroke="#9BE1FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
