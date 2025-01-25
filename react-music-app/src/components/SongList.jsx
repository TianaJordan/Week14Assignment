import { ListGroup } from "react-bootstrap";

import Song from "./Song";


// loop through data array and render single song

export default function SongList({ songs }) {
    console.log(songs);

    return (
        <ListGroup>
            {songs.map((song) => (
            <ListGroup.Item key={song.id}>
            <Song song={song} />
            </ListGroup.Item>
        ))}
        </ListGroup>
    );
} 