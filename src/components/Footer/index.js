import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Container, FooterLinks, FooterLink } from './styles'
import Social from '../Social'

const Footer = ({ footer }) => (
  <Container>
    <div>
      © {new Date().getFullYear()} - {footer.copyright}
    </div>
    <Social />
    <FooterLinks>
      {footer.links.map(link => (
        <FooterLink key={link.url} to={link.url}>
          {link.title}
        </FooterLink>
      ))}
    </FooterLinks>
  </Container>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        footer: contentfulJson(title: { eq: "Footer" }) {
          data {
            copyright
            links {
              url
              title
            }
          }
        }
      }
    `}
    render={data => <Footer footer={data.footer.data} {...props} />}
  />
)

Footer.propTypes = {
  footer: PropTypes.shape({
    copyright: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
  }).isRequired,
}
