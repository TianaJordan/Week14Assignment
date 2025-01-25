import "./Song.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


// Song component takes in an object and renders data to create a list group

export default function Song({ song }) {
    return (
        <Container className="container p-0">
        <Row>
          <Col xs={10}>
            <p id="title">{song.title}</p>
            <p id="artist">{song.artist}</p>
          </Col>
          <Col>
            <DropdownButton variant="outline-secondary" title="Actions">
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Remove from Playlist</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    );
}