import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";


interface BackButtonProps {
    href: string;
    label: string;
}

const BackButton = ({href, label} : BackButtonProps) => {
    return (
            <Link className={buttonVariants({variant:"link" })} href={href}>{label}</Link>
    );
};

export default BackButton;