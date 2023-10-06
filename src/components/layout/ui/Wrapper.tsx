const Wrapper = ({ children, className }: any) => {
    const classNames = `${
        className || ""
    } justify-center py-10 flex lg:flex-row lg:mx-40 lg:py-20`
    return <div className={classNames}>{children}</div>
}

export default Wrapper
