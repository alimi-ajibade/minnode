import { ReactNode, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";

interface Props {
    isOpen: boolean;
    hasCloseBtn: boolean;
    onClose?: () => void;
    children: ReactNode;
}

const Modal = ({ children, isOpen, hasCloseBtn, onClose }: Props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) modalElement.showModal();
            else modalElement.close();
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    return (
        <dialog
            ref={modalRef}
            onKeyDown={handleKeyDown}
            className="min-w-96 p-8 rounded-md fixed shadow-md backdrop:backdrop-blur-md">
            {hasCloseBtn && (
                <div
                    className="cursor-pointer absolute top-0 right-0 py-1 px-1 text-2xl text-zinc-800 active:bg-red-700 transition duration-500 ease-in-out"
                    onClick={handleCloseModal}>
                    <MdClose />
                </div>
            )}
            {children}
        </dialog>
    );
};

export default Modal;
