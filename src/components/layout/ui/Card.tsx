const Card = ({ width, height, className, children }: any) => {
    const classNames = `card ${width || ""} ${height || ""} ${className || ""}`

    return <div className={classNames}>{children}</div>
}

export default Card
