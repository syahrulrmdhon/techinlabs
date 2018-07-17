import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Content from '../content/Content'
import {
  Button,
  Container,
  Header,
  Grid,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container >
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
    <Grid.Column>
        <Image 
        src='https://raw.githubusercontent.com/syahrulrmdhon/techinlabs/master/src/assets/flat-devices.png'
        style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
        }} />
      </Grid.Column>
      <Grid.Column>
        <Image 
            src='https://raw.githubusercontent.com/syahrulrmdhon/techinlabs/master/src/assets/sss-2.png' 
            style={{
                fontSize: mobile ? '1em' : '3em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '0.5em' : '2em',
            }}
            fluid
        />
        <Header
        as='h2'
        content='For Your Startup Needs !'
        inverted
        style={{
            fontSize: mobile ? '1em' : '1.2em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
        }}
        />
        <Button primary size='huge'>
        Connecting Now
        <Icon name='right arrow' />
        </Button>
      </Grid.Column>
    </Grid.Row>
    </Grid>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
    componentDidMount(){
        document.title = "TechInLabs"
      }
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 550, padding: '1em 0em' }}
            className='hero-img'
            vertical
          >
           <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              style={{border:0, fontSize:'12px'}}
              borderless
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Contact Us
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
            <Image className='separator' src='https://raw.githubusercontent.com/syahrulrmdhon/techinlabs/master/src/assets/Separator-Header.png' fluid />
            </Segment>
         </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}
  componentDidMount(){
    document.title = "TechInLabs"
  }

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Contact Us</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Contact Us
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Content/>
  </ResponsiveContainer>
)
export default HomepageLayout