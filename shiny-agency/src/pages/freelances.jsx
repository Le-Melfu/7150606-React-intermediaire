import React from 'react';
import Card from '../components/Cards/card';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
];

function Freelances() {
    return (
        <div className="freelances">
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            <div className="card-section">
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
                <Card key="kevin42" label="Intégrateur" title="kevin" />
            </div>
        </div>
    );
}

export default Freelances;
