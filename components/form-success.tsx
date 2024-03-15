import React from 'react';
import {AlertCircle} from "lucide-react";
import {HiCheckCircle} from "react-icons/hi2";



interface FormErrorProps {
    message?: string
}
const FormSuccess = ({message} : FormErrorProps) => {


    if (!message) return null

    return (
        <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
            <HiCheckCircle className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    );
};

export default FormSuccess;