import React from 'react'
import { About, LittleVideo, Project, ProjectTitle, TextAbout } from './style'
import asteroids from "../../assets/asteroids.mp4"
const AboutProject = () => {
    return (
        <About id="sobre">
            <ProjectTitle>Project</ProjectTitle>
            <Project>
                
                <LittleVideo autoPlay muted loop>
                    <source src={asteroids} type="video/mp4" />
                </LittleVideo>
                <TextAbout>
                    "Infinity Story" is more than just a platform.
                    It's a magical portal that takes children and teenagers on a unique
                    journey through NASA's incredible success stories. With a touch of
                    creativity and a sprinkle of imagination, this special application
                    allows young minds to explore the vast universe of open science
                    in an engaging and accessible way. By customizing the experience,
                    taking into account the quirks and interests of each user, "Infinity Story"
                    forges a deep emotional connection, inspiring young hearts to dream big and believe
                    that anything is possible. This is a journey that transcends borders and languages,
                    an opportunity for children from all over the world to fall in love with science and space exploration.
                    "Infinity Story" is not just an application, it's an invitation to dream, learn, and grow in an limitless universe.
                </TextAbout>
            </Project>
        </About>
    )
}

export default AboutProject