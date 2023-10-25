export type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export function Container(props: ContainerProps) {
    const { children } = props;

    return <div className="container">{children}</div>;
}
