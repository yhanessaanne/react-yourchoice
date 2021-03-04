import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Icon, Image, Grid, List, Segment, Header } from 'semantic-ui-react';

class RedBanner extends React.Component {
  render() {
    return (
        <Segment className="redBanner">
          Orders placed by 12 p.m. will be processed the next weekday (Monday-Friday). $8 flat rate shipping on all
          orders.
        </Segment>
    )
  }
}

const logo = "https://ra4556ybfb-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/DEJA-VU-SURF-HAWAII-LOGO-COLOR-1024x389.jpg"

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Image className="logo" src={logo} alt="logo"/>
          <Menu.Item fitted position="right"><Icon className="icons" name="big shopping cart"/></Menu.Item>
          <Menu.Item fitted><Icon className="icons" name="big facebook icon"/></Menu.Item>
          <Menu.Item fitted><Icon className="icons" name="big twitter icon"/></Menu.Item>
          <Menu.Item fitted><Icon className="icons" name="big instagram icon"/></Menu.Item>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Menu.Item>HOME</Menu.Item>
          <Menu.Item>LOCATIONS</Menu.Item>
          <Menu.Item>WHAT WE CARRY</Menu.Item>
          <Menu.Item>SHOP</Menu.Item>
          <Menu.Item>SCHOLARSHIPS & COMMUNITY</Menu.Item>
          <Menu.Item>CONTACT US</Menu.Item>
        </Menu>
    )
  }
}

class Middle extends React.Component {
  render() {
    return (
        <div className="grad-background">
          <Grid container>
            <Grid.Row columns="one">
              <Grid.Column>
                <Header as="h2" className="h2">Drop in and shop</Header>
                <Header as="h1" className="h1">DEJA VU DEALS</Header>
                <hr style={{
                  color: '#00b5b0',
                  backgroundColor: '#00b5b0',
                  height: 12,
                  borderColor: '#00b5b0',
                  width: '27%',
                  marginLeft: '0px'
                }}/>
                <p className="caption">We'll be back!</p>
                <p className="secondLine">Stay tuned for special promotions</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid centered container columns={4}>
            <Grid.Column>
              <Header as="h5" className="Location">DEJA VU SURF - LIHUE</Header>
              <p>
                <List
                    items={['Address:', 'Kukui Grove Center', '3-2600 Kaumualii Highway', 'Unit 1638', 'Lihue, Kauai, Hawaii 96766']}/>
              </p>
              <p><List
                  items={['Phone: (808) 320-7169', 'Email: info@dejavusurf.com']}/></p>
              <p><List
                  items={['Store hours:', 'Daily 10 a.m.-6 p.m.']}/></p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h5" className="Location">DEJA VU SURF - KAPAA</Header>
              <p>
                <List
                    items={['Address:', '4-1419 Kuhio Highway', 'Kapaa, Kauai, Hawaii 96746']}/>
              </p>
              <p><List
                  items={['Phone: (808) 320-7108', 'Email: info@dejavusurf.com']}/></p>
              <p><List
                  items={['Store hours:', 'Daily 10 a.m. – 6 p.m.']}/></p>
            </Grid.Column>
              <Grid.Column>
                <Header as="h5" className="Location">DEJA VU SURF - POIPU</Header>
                <p>
                  <List
                      items={['Address:', 'The Shops at Kukuiula', '2829 Ala Kalanikaumaka', 'Unit 33', 'Koloa Kauai, Hawaii 96756']}/>
                </p>
                <p><List
                    items={['Phone: (808) 320-7178', 'Email: info@dejavusurf.com']}/></p>
                <p><List
                    items={['Store hours:', 'Daily 11 a.m.-6 p.m.']}/></p>
              </Grid.Column>
            <Grid.Column>
              <Header as="h5" className="Location">CONNECT WITH US</Header>
              <p>
                <List.Item>Proud Member of:</List.Item>
                <Image small className="ui small image"
                     src="https://ra4556ybfb-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/hvb_link-300x129.jpg"
                     alt="sponserImage"/>
              </p>
              <p><List
                  items={['Returns & Exchange Policy', 'Privacy Policy | Terms of Use']}/></p>
              <p><List
                  items={['Website by: Emagine', 'Copyright © All rights reserved DejaVu Surf Kauai']}/></p>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <RedBanner/>
          <TopMenu/>
          <MiddleMenu/>
          <Middle/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));