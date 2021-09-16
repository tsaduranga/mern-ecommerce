import React from 'react'
import { Row, Alert, Button } from 'react-bootstrap'
import Header from '../components/Header.js'


const DashboardScreen = () => {
    return (
        <>
            <Row>
                <Header />
            </Row>
            <Row>


                <Alert  variant="success" style={{ marginTop:"30px" }}>
                    <Alert.Heading>Welcome to Stephen Innovation ?!</Alert.Heading>
                    <p style={{ marginTop:"10px" }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                        fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-success">
                            Login
                        </Button>
                    </div>
                </Alert>


            </Row>
        </>
    )
}

export default DashboardScreen
