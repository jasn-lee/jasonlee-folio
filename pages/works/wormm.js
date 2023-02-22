import {
    Box,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Worm's World">
      <Container>
        <Title>
          WW <Badge>2015</Badge>
        </Title>
        <P>
          A video work generated with deep learning, imitating famous four
          painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and Katsushika
          Hokusai.
        </P>
        
  
        <Box>
          <iframe
            src="https://player.vimeo.com/video/146373709"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
  
        <WorkImage
          src="/images/contents/wormz_poster_awards.jpg"
          alt="walknote"
        />
        <WorkImage src="/images/contents/wormz_poster_awards.jpg" alt="walknote" />
        <WorkImage src="/images/contents/wormz_poster_awards.jpg" alt="walknote" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  