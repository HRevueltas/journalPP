import {  useEffect, useState } from 'react';

export const useFileDrop = () => {
    const [isDrag, setIsDrag] = useState(false);
    const [droppedFiles, setDroppedFiles] = useState([]);


    useEffect(() => {
        const handleDropFiles = () => {
            if (droppedFiles.length > 0) {
                console.log('Archivos soltados:', droppedFiles);
                // Aquí puedes realizar cualquier lógica de procesamiento que necesites con los archivos soltados
            }
        };

        handleDropFiles();

        // No es necesario incluir droppedFiles en las dependencias del useEffect
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [droppedFiles]);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDrag(true);
    };

    const handleDragLeave = () => {
        setIsDrag(false);
    };
  

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDrag(false);

        const files = Array.from(e.dataTransfer.files);
        setDroppedFiles(files);
        console.log(files);
    };

    return {
        isDrag,
        droppedFiles,
        handleDragOver,
        handleDragLeave,
        handleDrop
    };
};


