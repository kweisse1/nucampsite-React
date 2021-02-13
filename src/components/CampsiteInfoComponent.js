import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCommentModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }

    handleSubmit(event) {
        alert(`Rating: ${this.rating.value} comment: ${this.newcomment.value}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Button color="info" onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg"/>Submit Comment
                </Button>

                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>whyyyy</ModalHeader>
                    <ModalBody>
                        <div>definitely gonna cry</div>
                        {/* <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                    innerRed={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="password">Pasword</Label>
                                <Input type="password" id="password" name="password" 
                                    innerRef={input => this.password= input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form> */}
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment =>
                    <div key={comment.id}>
                        <p>{comment.text}<br />
                        -- {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </div>)}
                <CommentForm />
            </div>
        )
    }
    return <div />
}

function CampsiteInfo(props) {
    console.log(props);
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    }

    return (<div />);
}

export default CampsiteInfo;
