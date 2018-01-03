import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function ListingList({ listings }) {
    const renderListings = listings.map(listing =>
        <ListGroupItem key={ listing.id }>
            <Link key={ listing.id } to={`/listings/${listing.id}`}>{ listing.title }</Link>
        </ListGroupItem>
    );

    return (
        <ListGroup>
            { renderListings }
        </ListGroup>
    );
};
