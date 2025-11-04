import { JSX } from "react";

type Props = {
    children: React.ReactNode,
    className?: string
};

export default function H2({ children, className = "" }: Props): JSX.Element {
    return <h2 className={`text-xl font-medium leading-normal text-gray-900 ${className}`}>{children}</h2>;
}