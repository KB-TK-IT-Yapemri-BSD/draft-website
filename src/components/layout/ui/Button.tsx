import * as React from "react"
import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva("", {
    variants: {
        variant: {
            default:
                "bg-primary hover:bg-secondary hover:text-white mt-4 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm sm:w-auto py-2.5 px-10 lg:px-0 lg:w-1/4 mx-auto",
            navbar: "flex hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:lg:w-auto hover:rounded-md px-2 py-2",
            builtDefault:
                "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
            destructive:
                "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
            outline:
                "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
            subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
            ghost: "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
            link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-2 rounded-md",
            lg: "h-11 px-8 rounded-md",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, href, variant, size, ...props }, ref) => {
        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, className }))}
                >
                    {children}
                </Link>
            )
        }
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
