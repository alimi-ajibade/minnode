import useUIStore from "../store";
import Modal from "./Modal";
import RenameForm from "./RenameForm";

const RenameFormModal = () => {
    const isRenameFormModalOpen = useUIStore((s) => s.isRenameFormModalOpen);

    const resetRenameFormModal = useUIStore((s) => s.setRenameFormModal);

    return (
        <Modal
            isOpen={isRenameFormModalOpen}
            hasCloseBtn={true}
            onClose={resetRenameFormModal}>
            <RenameForm />
        </Modal>
    );
};

export default RenameFormModal;
