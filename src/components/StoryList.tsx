// src/components/StoryList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchNews } from '../redux/slices/newsSlice';

const StoryList: React.FC = () => {
    const dispatch = useDispatch();
    const { news, loading, error } = useSelector((state: RootState) => state.news);
    const { token } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (token) {
            dispatch(fetchNews(token));
        }
    }, [dispatch, token]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading news: {error}</p>;

    return (
        <div>
            <h2>Top News Headlines</h2>
            <ul>
                {news.map((article) => (
                    <li key={article.url}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StoryList;
