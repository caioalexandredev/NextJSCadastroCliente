import { JSX } from "react";

type Props = {
    children: React.ReactNode
};

export default function H4({children}: Props): JSX.Element
{
    return <h4 className="text-base font-medium leading-normal text-gray-900">{children}</h4>;
}