import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row className='justify-content-md-center mt-5'>
                <Col xs={12} md={6} className='card p-5'>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

FormContainer.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children prop is provided and can be any renderable content
};

export default FormContainer;