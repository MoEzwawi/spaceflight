import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { Result } from '../interfaces/interfaces';

const LandingPage = () => {

    const [articles, setArticles] = useState<Result[]>([])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10')
                if (res.ok) {
                    const data = await res.json()
                    const fetchetdArticles = data.results
                    setArticles(fetchetdArticles)
                } else {
                    throw new Error('erroe fetching data')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchArticles()
    }, [])

    return (
        <Container>
            <Row className='g-3'>
                <h1>Welcome to Spaceflight</h1>
                {articles.map((article) => {
                    return (
                        <Col key={article.id}>
                            <ArticleCard article={article} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default LandingPage