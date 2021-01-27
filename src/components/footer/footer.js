import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import './footer.css';

const Footer = () => {
    return (
        <div className="foot">
            <Container fluid>
            <Row className="leftone">
                <Col className="m-2 col-xl-3">
                    <img src="https://raw.githubusercontent.com/satty26/ideathon/main/images/cellt.png" style={{ height: '102px', width: '200px',marginBottom:'2px' }}></img>
                    <br/>
                    <a href="#" target="_blank" className="icon mt-0"><FacebookIcon style={{fontSize: '35px'}}/></a>
                    <a href="#" target="_blank" className="icon mt-0 pl-2 pb-2"><InstagramIcon style={{fontSize: '35px'}} /></a>
                    <a href="#" target="_blank" className="icon pl-2 pb-2"><LinkedInIcon style={{fontSize: '35px'}} /></a>
                    <p style={{ color: '#FDCA40', fontSize:'18px',fontWeight:'bolder'}}>E-cell IIIT PUNE &copy; 2021 </p>
                </Col>
                <Col className="col-xl-4 m-3">
                    <div>
                        <RoomIcon className="mr-2" style={{fontSize: '4vh',display:'inline-block',verticalAlign:'top' }} />
                        <p style={{display: 'inline-block',fontSize:'15px',color:'white' }}>
                            E-cell IIIT Pune <br/> Near Bopdev Ghat,Yewalewadi,Pune-411048
                        </p>
                    </div>
                    <div>
                        <CallIcon className="mr-2" style={{fontSize: '4vh',display:'inline-block',verticalAlign:'top' }} />
                        <p style={{display: 'inline-block',fontSize:'15px',color:'white'}}>
                        +91-8872172119 <br/> +91-7666250975
                        </p>
                    </div>
                    <div>
                        <MailIcon className="mr-2" style={{fontSize: '4vh',display:'inline-block',verticalAlign:'top' }} />
                        <p style={{display: 'inline-block',fontSize:'15px' }}>
                        <a href="mailto:ecell@iiitp.ac.in" style={{textDecoration:'none',color:'white'}}>ecell@iiitp.ac.in</a>
                        </p>
                    </div>    
                </Col>
                <Col className="col-xl-4 m-2 pr-5">
                    <p style={{color:'white',fontSize:'23px',fontWeight: 'bolder'}}>About E-cell</p>
                    <p style={{fontSize:'18px',fontWeight:'lighter',justifyContent:'space-between'}}>E-Cell IIIT Pune is committed to provide assistance to the budding and promising entrepreneurs to become the future leaders of the country.</p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Footer
