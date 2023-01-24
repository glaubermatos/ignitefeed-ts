import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(commentToDelete: string) {
        onDeleteComment(commentToDelete)
    }

    function handleLikeComment() {
        //DICA: sempre que for atualizar uma informação, e essa informação depende do valor que ela tinha 
        //anteriormente (ela mesma), sempre usar esse padrão de funções
        setLikeCount((currentState) => {
            return currentState + 1
        })
    }

    const hasLikes = likeCount > 0

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/glaubermatos.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane</strong>
                            <time title='8 de maio as 08:13h' dateTime="2022-05-08 08:13:50">Cerca de 2h atrás</time>
                        </div>

                        <button
                            title="Deletar comentário"
                            onClick={() => handleDeleteComment(content)}
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button className={hasLikes ? styles.active : ''} onClick={handleLikeComment}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}