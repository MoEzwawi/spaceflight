import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { Result } from '../interfaces/interfaces';
import { useParams } from 'react-router-dom'

const DetailPage = () => {

    const params = useParams()
    const myId = params.id
    console.log(myId)

    const [article, setArticle] = useState<Result | null>(null)

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${myId}`)
                if (res.ok) {
                    const fetchetdArticle = await res.json()
                    console.log(fetchetdArticle)
                    setArticle(fetchetdArticle)
                } else {
                    throw new Error('erroe fetching data')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchArticle()
    }, [myId])

    console.log(article)

    return (
        <Container>
            {article && (
                <Row>
                    <Col>{article.title}</Col>
                    <Col>{article.news_site}</Col>
                    <Col>
                        <img src={article.image_url} alt="space" width="450px" />
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default DetailPage