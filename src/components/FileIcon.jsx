import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiJson, SiSolidity } from 'react-icons/si';
import { VscJson, VscMarkdown, VscFilePdf, VscCode } from 'react-icons/vsc';

const FileIcon = ({ name, size = 16 }) => {
    const extension = name.split('.').pop();

    switch (extension) {
        case 'html':
            return <SiHtml5 size={size} color="#E34F26" />;
        case 'css':
            return <SiCss3 size={size} color="#1572B6" />;
        case 'js':
            return <SiJavascript size={size} color="#F7DF1E" />;
        case 'jsx':
        case 'react':
            return <SiReact size={size} color="#61DAFB" />;
        case 'json':
            return <VscJson size={size} color="#F7DF1E" />;
        case 'sol':
            return <SiSolidity size={size} color="#363636" />;
        case 'md':
            return <VscMarkdown size={size} color="#408BCC" />; // VS Code markdown blue
        case 'pdf':
            return <VscFilePdf size={size} color="#FF0000" />;
        case 'txt':
            return <VscCode size={size} color="#cccccc" />;
        default:
            return (
                <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2h13l6 6v20c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z" fill="#EBEBEB" />
                </svg>
            );
    }
};

export default FileIcon;
