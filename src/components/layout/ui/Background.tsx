const Background = ({ color, className, children }: any) => {
    const classNames = `${color} ${className || ""}`

    return <div className={classNames}>{children}</div>
}

export default Background
