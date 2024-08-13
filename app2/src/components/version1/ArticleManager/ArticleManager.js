import React from 'react';
import "./ArticleManager.css";

const ArticleManager = ({ setMessage }) => {

    const handleSetMessage = () => {
       setMessage('Article Manager V1 selected')
    };

    const articles = [
        { id: 1, title: "Understanding React", author: "John Doe" },
        { id: 2, title: "Advanced JavaScript", author: "Jane Smith" }
    ];

    return (
        <div className="article-manager">
            <h2>Article Manager V1</h2>
            <button onClick={handleSetMessage} className="set-message-button">Set Message</button>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <strong>{article.title}</strong> by {article.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleManager;
