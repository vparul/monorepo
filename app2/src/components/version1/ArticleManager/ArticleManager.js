import React from 'react';
import './ArticleManager.css';

const ArticleManager = ({ setMessage }) => {
    React.useEffect(() => {
        setMessage();
    }, [setMessage]);

    const articles = [
        { id: 1, title: "Understanding React", author: "John Doe" },
        { id: 2, title: "Advanced JavaScript", author: "Jane Smith" }
    ];

    return (
        <div className="article-manager">
            <h2>Article Manager V1</h2>
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
