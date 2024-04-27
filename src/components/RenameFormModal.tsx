import useDashboardStore from "../store";
import Modal from "./Modal";
import RenameForm from "./RenameForm";

const RenameFormModal = () => {
    const isRenameFormModalOpen = useDashboardStore(
        (s) => s.isRenameFormModalOpen
    );

    const resetRenameFormModal = useDashboardStore((s) => s.setRenameFormModal);

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
