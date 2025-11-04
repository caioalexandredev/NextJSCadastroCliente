import { JSX } from "react";

type Props = {
    children: React.ReactNode
};

export default function H3({children}: Props): JSX.Element
{
    return <h3 className="text-lg font-medium leading-normal text-gray-900">{children}</h3>;
}