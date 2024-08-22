import React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Textarea({ id, placeholder, type, className, size, defaultValue,rows, notheme }) {
    const compClass = classNames({
        "w-full rounded-md bg-white dark:bg-slate-950 focus:shadow-none focus:outline-none mb-0": true,
        "text-slate-600 dark:text-slate-200 border-slate-200 dark:border-slate-800 focus:border-slate-200": !notheme,
        "text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-0 disabled:bg-slate-100 disabled:text-slate-400 focus:border-0 focus:ring-0 resize-none": notheme,
        ["py-2 text-sm"]: !size,
    });
    return (
        <div className="relative flex">
            <textarea
                className={twMerge(compClass, className)}
                type={type ? type : "text"}
                placeholder={placeholder && placeholder}
                id={id && id}
                defaultValue={defaultValue && defaultValue}
                rows={rows && rows}
            ></textarea>
        </div>
    );
}

export default Textarea;
