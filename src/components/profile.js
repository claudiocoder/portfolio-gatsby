import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import '../styles/profile.scss';

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 250, quality:100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className='profile-container'>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="your-pic-alt-img"
        className="image-profile"
      />
      <div className="name">Hello!</div>
      <div className="name">My name is Claudio</div>
    </div>
  )
}

export default Profile;
