import { Container, Row, Image, Col, ListGroup } from "react-bootstrap";
import LikesComments from './view_components/LikesComments'

const View = ({ recipe }) => {
    
    const addLike = () => {
        console.log('added like')
        // fetch to recipe, create like join with current user and this recipe
    }

    return (
        <Container>
            <Row className={'justify-content-center recipe-header'}>
                <h1>{recipe.title}</h1>
            </Row>
            <Row className={'justify-content-center'}>
                <h3>by: {recipe.username}</h3>
            </Row>
            <Row className={'justify-content-center'}>
                <Image src={recipe.img} className='view-image'/>
            </Row>
            <Row className={'recipe-contents-headers'}>
                <Col>
                    <h3>Ingredients</h3>
                    <ListGroup >
                        {recipe.ingredients.map(i => <ListGroup.Item variant='lt-green'><p className={'ingr-item'}>{i.quantity} {i.quantity_type} {i.name}</p> </ListGroup.Item>)}
                    </ListGroup>
                </Col>
                <Col>
                    <h3>Instructions</h3>
                    <p className={'ingr-item'}>{recipe.instructions}</p>
                </Col>
            </Row>
            <Row className={'justify-content-center'}>
                <LikesComments likes={recipe.likes.length} comments={recipe.comments} addLike={addLike}/>
            </Row>

        </Container>
    )
}

export default View