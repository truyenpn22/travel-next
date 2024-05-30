import { cn } from '@/lib/utils'

export const Button = ({ className, children, color, ...props }: any) => {
    let classes = "px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-blue-500 bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]";

    switch (color) {
        case "primary":
            classes = "px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]";
            break;
        case "secondary":
            classes = "px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-gray-500 bg-gray-500  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-gray-500 ";
            break;
        case "danger":
            classes = "px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-red-500 bg-red-500  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-red-500 ";
            break;
        default:
            classes = "px-4 py-2 text-sm rounded-full font-bold text-white transition-all ease-in-out duration-300 ";
    }
    return (
        <button className={cn(classes, className)} {...props} >
            {children}
        </button>
    );
};

export const ButtonRounded = ({ className, color, children, className: customClassName = "", ...props }: any) => {
    let classes = "px-4 py-2 flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out";

    switch (color) {
        case "light":
            classes = "px-4 py-2 flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out";
            break;
        case "primary":
            classes = "px-4 py-2 flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-150 ease-in-out";
            break;
        case "secondary":
            classes = "px-4 py-2 flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white bg-gray-500 hover:bg-gray-400 transition duration-150 ease-in-out";
            break;
        case "danger":
            classes = "px-4 py-2 flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white bg-red-500 hover:bg-red-400 transition duration-150 ease-in-out";
            break;
        default:
            classes = "px-4 py-2 flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-indigo-600 transition duration-150 ease-in-out";
    }

    return (
        <button className={cn(classes, className)} {...props} >
            {children}
        </button>
    );
};

