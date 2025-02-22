import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import {SiAdobe, SiAdobeaftereffects, SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro, SiAutodesk, SiCinema4D, SiBlender, SiUnrealengine, SiPython, SiR} from 'react-icons/si'
import {BsMailbox2} from 'react-icons/bs'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an aspiring 3D artist currently at the University of Arizona!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jason Lee
          </Heading>
          <p>BFA Film & Television ( Artist / Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/sierpientes_deserrtlogo.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        Hi there! My name's Jason, and I am a student at the University of Arizona 
          currently studying Film & Television. For the past year, I have been learning
           3D modeling, texturing, rigging, and rendering in my spare time, and have really
            loved it so far. I would love to continue in my 3D journey in an internship,
             especially for the Arizona Diamondbacks. Growing up in Tucson, AZ, I remember
              watching D-backs baseball (cheering on Goldy and Miggy!) on Fox Sports Arizona 
              almost every day after school. I'm a big D-backs fan and have some the Motion Graphics
              experience listed on the job posting. If the opportunity is still available, I would love
              to help out any way I can! 
              {/* to help out any way I can!{' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers. */}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        My Skills 
        </Heading>
          <div>
            <Box
              borderRadius="sm"
              mb={1}
              p={1}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.01', 'whiteAlpha.01')}
              css={{ backdropFilter: 'blur(10px)' }}
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                size = 'lg'
                leftIcon={< SiAutodesk />}
              >
                Maya
              </Button>
            •
              <Button
                variant="ghost"
                colorScheme="teal"
                size = 'lg'
                leftIcon={< SiCinema4D />}
              >
                Cinema 4d
              </Button>
            • 

            <Button
                variant="ghost"
                colorScheme="teal"
                size = 'lg'
                leftIcon={< SiBlender />}
              >
                Blender
              </Button>
              
              <Button
                variant="ghost"
                colorScheme="teal"
                size = 'lg'
                leftIcon={< SiAdobepremierepro />}
              >
                Premiere Pro
              </Button>
          {/* <Link href="https://adobe.com" target="_blank"> */}
          •
              <Button
                variant="ghost"
                colorScheme="teal"
                size = 'lg'
                leftIcon={< SiAdobeaftereffects />}
              >
                After Effects
              </Button>
            {/* </Link> */}
            • 
          <Button
              variant="ghost"
              colorScheme="teal"
              size = 'lg'
              leftIcon={< SiAdobelightroom />}
            >
              Lightroom
            </Button> 
          <Button
              variant="ghost"
              colorScheme="teal"
              size = 'lg'
              leftIcon={< SiAdobephotoshop />}
            >
              Photoshop
            </Button>

            • 
          <Button
              variant="ghost"
              colorScheme="teal"
              size = 'lg'
              leftIcon={< SiUnrealengine />}
            >
              Unreal Engine 5
            </Button>
            • 
          <Button
              variant="ghost"
              colorScheme="teal"
              size = 'lg'
              leftIcon={< SiPython />}
            >
              Python
            </Button> 
          <Button
              variant="ghost"
              colorScheme="teal"
              size = 'lg'
              leftIcon={< SiR />}
            >
              R
            </Button>
            • 
          <Button
              variant="ghost"
              colorScheme="teal"
              size = 'lg'
            >
              RundownCreator
            </Button>
            • 
            <Button
              variant="ghost"
              colorScheme="teal"
              size = 'lg'
            >
              Ross Synergy 3 Switchboard
            </Button>
            • 
            <Button
              variant="ghost"
              colorScheme="teal"
              size = 'lg'
            >
              Yamaha O2R96
            </Button>
            </Box>
            
            
        </div>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          {/* <ListItem>
            <Link href="https://github.com/jasn-lee" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jasn-lee
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://linkedin.com/in/jason-lee-0354377718z" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:jasonflee@arizona.edu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={< BsMailbox2 />}
              >
                jasonflee@arizona.edu
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem> */}
        </List>
{/* 
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/posts"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Popular posts
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
