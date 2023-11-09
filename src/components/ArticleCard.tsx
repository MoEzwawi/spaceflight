import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Result } from '../interfaces/interfaces';
import { useNavigate } from 'react-router-dom'

const ArticleCard = ({ article }: { article: Result }) => {

    const navigate = useNavigate()

    return (
        <Card style={{ width: '230px' }} >
            <Card.Img variant="top" src={article.image_url} style={{ height: '170px', width: '230px' }} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {article.title}
                </Card.Text>
                <Button variant="primary" onClick={() => {
                    navigate(`/${article.id}`)
                }}>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;