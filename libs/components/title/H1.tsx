import { JSX } from "react";

type Props = {
    children: React.ReactNode
};

export default function H1({children}: Props): JSX.Element
{
    return <h1 className="ext-2xl font-medium leading-normal text-gray-900">{children}</h1>;
}