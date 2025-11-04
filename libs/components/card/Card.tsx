import { JSX } from "react";

type Props = {
    children: React.ReactNode
};

export default function Card({children}: Props): JSX.Element
{
    return <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-gray-200/50 p-6">
        {children}
    </div>;
}