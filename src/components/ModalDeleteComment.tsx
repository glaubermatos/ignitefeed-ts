import Modal from 'react-modal'

import styles from './ModalDeleteComment.module.css'

interface ModalDeleteCommentProps {
    isOpen: boolean;
    onCloseModal: () => void;
    onDeleteComment: (comment: string) => void;
    commentForDeletion: string;
}

export function ModalDeleteComment({ isOpen, onCloseModal, onDeleteComment, commentForDeletion }: ModalDeleteCommentProps) {
    function handleDeleteCommente() {
        onDeleteComment(commentForDeletion)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            overlayClassName={styles.reactModalOverlay}
            className={styles.reactModalContent}
            closeTimeoutMS={200}
        >
            <div className={styles.modalBody}>
                <h2>Excluir comentário</h2>
                <div>
                    <p>Você tem certeza que gostaria de excluir este comentário?</p>
                </div>
                <footer>
                    <button
                        onClick={onCloseModal}
                        // autoFocus
                    >
                        Cancelar
                    </button>
                    <button
                        className={styles.danger}
                        onClick={handleDeleteCommente}
                    >
                        Sim, excluir
                    </button>
                </footer>
            </div>
        </Modal>
    )
}