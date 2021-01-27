import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import '../styles/profile.scss';

const MultiBackground = ({ className }) => {
  const { profile, seamlessBackground } = useStaticQuery(
    graphql`
      query {
        profile: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seamlessBackground: file(
          relativePath: { eq: "backgroundhome.jpg" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    seamlessBackground.childImageSharp.fluid,
    `linear-gradient(rgba(1, 20, 90, 0.90), rgba(2, 37, 168, 0.90))`
  ].reverse()

  return (
    <BackgroundImage
      Tag={`section`}
      id={`homebg`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <div className='profile-container'>
        <div>
          <Img
            fluid={profile.childImageSharp.fluid}
            alt="profileImage"
            className="image-profile"
          />
        </div>
        <div className="container-name">
          <div className="name">Hello!</div>
          <div className="name">My name is Claudio</div>
          <div className="subname name">Software Developer</div>
          <div className="social-media-container">
            <a className="icon" href="https://www.linkedin.com/in/cmoreno92/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="icon" href="https://github.com/claudiocoder" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a className="icon" href="https://twitter.com/claudio_coder" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

const Profile = styled(MultiBackground)`
  width: 100%;
  min-height: 100vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center;
  color: #fff;
`

export default Profile;
