import React from 'react';
import './ArticleManager.css';

const ArticleManager = ({ setMessage }) => {
    React.useEffect(() => {
        setMessage();
    }, [setMessage]);

    const articles = [
        { id: 1, title: "Getting Started with TypeScript", author: "Alice Johnson" },
        { id: 2, title: "Mastering CSS Flexbox", author: "Bob Williams" }
    ];

    return (
        <div className="article-manager">
            <h2>Article Manager V2</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.title}</td>
                            <td>{article.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArticleManager;
