import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventInfo from '../Eventdata/EventInfo';

export default function Eventscard({ eventname, eventdescription, backgroundImage }) {
    const navigate = useNavigate();

    const eventDetails = EventInfo[eventname];

    return (
        <div className="card">
            <div
                className="front"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                }}
            >
                <span>{eventname}</span>
                <hr />
            </div>
            <div className="back">
                <p>{eventDetails?.description || 'Description not available'}</p>
                <div className="card-button-div">
                    <button
                        className="register-button"
                        onClick={() => navigate('/Rules', { state: eventname })}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
